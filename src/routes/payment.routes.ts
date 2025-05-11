import { Router } from "express";
import { createPaymentHandler, editPaymentHandler, getPaymentHandler, getPaymentsHandler } from "../controllers/payment.controller";
import { validatePayment } from "../middleware/payment.middleware";
import { editPaymentSchema, paymentSchema } from "../schemas/payment.schema";

const router = Router();

router.post('/payment', validatePayment(paymentSchema), createPaymentHandler);

router.get('/', getPaymentsHandler);

router.get('/:id', getPaymentHandler);

router.put('/:id', validatePayment(editPaymentSchema), editPaymentHandler);

export default router;