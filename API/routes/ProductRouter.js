import express from "express";
import * as categoryController from '../controller/categoryController.js'

const router = express.Router();


router.get("/Product_save",categoryController.Product_save)




export default router