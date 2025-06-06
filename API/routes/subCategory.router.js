import express from 'express';
const router = express.Router();

import * as SubCategoryController from '../controller/subCategoryController.js'; 

router.post("/save",SubCategoryController.save);

router.get("/fetch",SubCategoryController.fetch);

//router.patch("/update",CategoryController.update);

//router.delete("/delete",CategoryController.deleteUser);

export default router;