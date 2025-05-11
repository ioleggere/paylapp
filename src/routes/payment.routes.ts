import { Router } from "express";
import { createPaymentHandler, getPaymentHandler, getPaymentsHandler } from "../controllers/payment.controller";
import { validatePayment } from "../middleware/payment.middleware";
import { paymentSchema } from "../schemas/payment.schema";

const router = Router();

router.post('/payment', validatePayment(paymentSchema), createPaymentHandler);

router.get('/', getPaymentsHandler);

router.get('/:id', getPaymentHandler);

export default router;