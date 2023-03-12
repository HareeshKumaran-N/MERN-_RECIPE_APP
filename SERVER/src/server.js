import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import userRoute from './api/users/user.router.js';

const app=express();
app.use(express.json());
app.use(cors());

app.use('/auth',userRoute);

mongoose.connect('mongodb+srv://hareez531hk:Koko531@recipecluster.bp8v1vx.mongodb.net/recipecluster?retryWrites=true&w=majority');

app.listen(3001,()=>{
    console.log('app is running at port 3001');
});