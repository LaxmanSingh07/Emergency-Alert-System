import { send } from "process";
import { User } from "../models/userModel.js";
const sendToken = require("../utils/jwt-token");
// import sendEmail = require("../utils/sendEmail.js");

import crypto from "crypto";

exports.registerUser = async (req, res, next) => {
  const { name, email, password } = req.body;
  const user = await User.create({
    name,
    email,
    password,
    avatar: {
      public_id: "this is a sample id",
      url: "profilepic.jpg",
    },
  });
  sendToken(user, 200, res);
};

exports.loginUser = async (req, res, next) => {
  const { email, password } = req.body;

  //check if Email or password is empty

  if (!email || !password) {
    return next(new Error("Please enter email and password"));
  }

  //find user in database

  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    return next(new Error("Invalid Email or Password"));
  }

  //check if password is correct

  const isPasswordMatched = await user.comparePassword(password);

  if (!isPasswordMatched) {
    return next(new Error("Invalid Email or Password"));
  }

  sendToken(user, 200, res);
};

exports.logoutUser = async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });
  res.status(200).json({
    success: true,
    message: "Logged out",
  });
};

exports.profile = async (req, res, next) => {
  const user = await User.findById(req.user.id);
  res.status(200).json({
    success: true,
    user,
  });
};
