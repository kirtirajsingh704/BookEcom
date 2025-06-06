import mongoose from "mongoose";

const url="mongodb://127.0.0.1:27017/Bookshop";

mongoose.connect(url);

console.log("DataBase Connected succesfully");