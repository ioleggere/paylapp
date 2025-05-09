import { Router } from "express";
import { createPaymentHandler, getPaymentHandler } from "../controllers/payment.controller";

const router = Router();

router.post('/payment', createPaymentHandler);

router.get('/', getPaymentHandler);

export default router;