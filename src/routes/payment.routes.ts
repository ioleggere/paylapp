import { Router } from "express";
import { createPaymentHandler, getPaymentHandler } from "../controllers/payment.controller";
import { validatePayment } from "../middleware/payment.middleware";
import { paymentSchema } from "../schemas/payment.schema";

const router = Router();

router.post('/payment', validatePayment(paymentSchema), createPaymentHandler);

router.get('/', getPaymentHandler);

export default router;