const express = require("express");
const mongoose = require("mongoose"); //require mongoose
const app = express();
const cors = require("cors");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

const port =  5000;

//middleware setup
app.use(express.json({ limit: "25mb" }));
//app.use(express.urlencoded({ limit: "25mb" }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "https://glamora-frontend-nu.vercel.app",
    credentials: true,
  })
);

// image upload
const uploadImage = require("./src/utils/uploadImage");

// all routes
//signup and login logout
const authRoutes = require("./src/users/user.route");
const productRoutes = require("./src/products/products.route");
const reviewRoutes = require("./src/reviews/reviews.route");
const orderRoutes = require("./src/orders/orders.route");
const statsRoutes = require("./src/stats/stats.route");

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/stats", statsRoutes);

//mongodb connection
main()
  .then(() => console.log("mongodb sucessfully connected!"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.DB_URL);

  app.get("/", (req, res) => {
    res.send("Glamora E-Commerce Server is running..");
  });
}

//upload image route
app.post("/uploadImage", (req, res) => {
  console.log("Request received:", req.body);

  uploadImage(req.body.image)
    .then((url) => {
      //console.log("Image uploaded successfully:", url);
      res.send(url);
    })
    .catch((err) => {
      console.error("Error in /uploadImage route:", err);
      res.status(500).send(err);
    });
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
