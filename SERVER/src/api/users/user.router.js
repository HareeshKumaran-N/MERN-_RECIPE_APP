import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import {Router} from 'express';
import {userRegisterLogic,userLoginLogic} from './user.controller.js';
const userRoute = Router();

userRoute.post('/register',userRegisterLogic);
userRoute.post('/login',userLoginLogic);




export default userRoute;