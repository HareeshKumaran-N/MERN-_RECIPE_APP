import express from "express";
import { userModel } from "../../models/Users.js";
import bcrypt from 'bcrypt';

export const userRegisterLogic=async (req,res)=>{
       const {username,password}=req.body;
      const user=await userModel.findOne({username,password});
       console.log('result',user);
       if(user)
       {
             return res.send({message:"User already exists"});         
       }

       const hashedPassword = await bcrypt.hash(password,10); 

       const newUser = new userModel({username,password:hashedPassword});

       await newUser.save();

       res.send({message:'user registered'});
       
}