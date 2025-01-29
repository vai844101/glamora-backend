const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET_KEY;

const verifyToken = (req, res, next) => {
    try {
        const token = req.cookies.token;
        // console.log("verify token:" ,token);

        if(!token){
            return res.status(401).json({message: "Invalid Token" });
        }
        const decoded = jwt.verify(token, JWT_SECRET);
        if(!decoded){
            return res.status(401).json({message: "Invalid Token" });
        }
        req.userId = decoded.userId;
        req.role = decoded.role;
        next();
    } catch (error) {
        console.log('Error while verifying token', error);
        res.status(401).json({message: "Error while verifying token" })
    }
}

module.exports = verifyToken;