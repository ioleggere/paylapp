import { Request, Response } from 'express';
import { createPayment, getPayments } from '../services/payment.service';
import { Payment } from '../models/payment.model';

export const createPaymentHandler = (req: Request, res: Response) => {
    try {
        const data = req.body as Payment;
        const newPayment = createPayment(data);
        res.status(201).json(newPayment);
    } catch (error) {
        const typedError = error as Error;
        res.status(500).json({
            message: typedError.message,
        })
    }
};

export const getPaymentHandler = (req: Request, res: Response) => {
    try {
        res.status(200).json(getPayments());
    } catch (error) {
        const typedError = error as Error;
        res.status(500).json({
            message: typedError.message,
        })
    }
};