import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";
import dotenv from 'dotenv'
dotenv.config();
export const Validation = async (req, res, next) => {
  try {
    const decode = jwt.verify(
      req.headers.authorization,
      process.env.JWT_SECRET_KEY
    );
    req.user = decode;
    next();
  } catch (error) {
    console.log(error);
  }
};

export const isPrime = async (req, res, next) => {
  try {
    const user = await userModel.findById(req.user._id);
    if (user.status !== "prime") {
      return res.status(200).send({
        success: false,
        message: "UnAuthorised Access",
      });
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
    res.status(401).send({
      success: false,
      message: "Error in primeChecking Middleware",
      error,
    });
  }
};
