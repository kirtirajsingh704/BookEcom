import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import fileUpload from 'express-fileupload';
const app =express(); 
import Razorpay from 'razorpay'

//to link a router level middleware
import userRouter from './routes/user.router.js';
import AddCategory from './routes/category.router.js'
import subcategoryRouter from './routes/subCategory.router.js'
import paymentRouter from './routes/payment.router.js'

//to parse a body content in url 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

//cors configurations
app.use(cors());

// to binary resource
app.use(fileUpload());

//Application level middleware
app.use("/user",userRouter);
app.use("/category",AddCategory);
app.use("/subcategory",subcategoryRouter);
app.use("/payment",paymentRouter);



app.listen(5001);
console.log("server listen at link :http://localhost:5001 ");