import express from "express";
import { userModel } from "../../models/Users.js";
import bcrypt from "bcrypt";
import { createToken } from "../../JWT/jwt.js";

export const userRegisterLogic = async (req, res) => {
  const { username, password } = req.body;


  if (!username || !password)
    return res.send({ message: "username or password not provided" });

  const user = await userModel.findOne({ username });

  if (user) {
    console.log("result", "user Found");
    res.send({ message: "Username already taken" });
    return;
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  console.log(hashedPassword);
  const newUser = new userModel({ username, password: hashedPassword });

  await newUser.save();

  res.send({ message: "user registered", isOk: true });
};

export const userLoginLogic = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password)
    //checking is username and password passed from req.body
    return res
      .status(300)
      .send({ message: "both username and password required" });

  const User = await userModel.findOne({ username });

  if (!User) {
    return res.send({ message: "user not found please check your username" });
  }

  const isPasswordValid = await bcrypt.compare(password, User.password);

  if (!isPasswordValid) {
    return res.send({ message: "Please check your password" });
  }

  const token=createToken({ id: User._id })
  //create a JWT token
  res.send({token,userID:User._id});
};
