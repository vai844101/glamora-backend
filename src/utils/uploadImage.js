// Require the Cloudinary library
const cloudinary = require("cloudinary").v2;

require("dotenv").config(); 

// const cloud_name = process.env.CLOUDINARY_CLOUD_NAME;
// const api_key = process.env.CLOUDINARY_API_KEY;
// const api_secret = process.env.CLOUDINARY_API_SECRET;

cloudinary.config({
  cloud_name: 'dyhe4edxe',
  api_key: '745322456261743',
  api_secret: 'HKEyz-PqtHvEm4iHaTHr-DYlVho',
});

const opts = {
  overwrite: true,
  invalidate: true,
  resource_type: "auto",
};

module.exports = (image) => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(image, opts, (error, result) => {
        //console.log("Image Data:", image);
      if (result && result.secure_url) {
        //console.log(result.secure_url)
        return resolve(result.secure_url);
      }
      //console.log(error.message);
      return reject({ message: error.message });
    });
  });
};
