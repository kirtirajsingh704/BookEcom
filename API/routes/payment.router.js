import express from 'express'

import e from 'cors'


const router = express.Router();


import * as paymentController from '../controller/paymentController.js'


 router.post("/order",paymentController.order);
 router.post("/verify", paymentController.verifyPayment);

export default router;