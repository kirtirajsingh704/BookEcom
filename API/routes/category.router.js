import express from 'express';

const router =express.Router();

import * as categoryController from '../controller/categoryController.js'

router.post("/save",categoryController.save)
router.get("/fetch",categoryController.fetch)
// router.delete("/delete_cat",categoryController.delete_cat)




export default router