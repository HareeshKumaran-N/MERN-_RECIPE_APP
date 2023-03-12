import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import {Router} from 'express';
import {userRegisterLogic} from './user.controller.js';
const userRoute = Router();

userRoute.post('/register',userRegisterLogic);
userRoute.post('/login',(req,res)=>{

});




export default userRoute;