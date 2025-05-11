import { Request, Response } from 'express';
import { createPayment, getPayments, getPayment, editPayment } from '../services/payment.service';
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

export const getPaymentsHandler = (req: Request, res: Response) => {
    try {
        res.status(200).json(getPayments());
    } catch (error) {
        const typedError = error as Error;
        res.status(500).json({
            message: typedError.message,
        })
    }
};

export const getPaymentHandler = (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id);
        if (isNaN(id)) {
            res.status(400).json({ error: 'Invalid ID' });
        }

        const paymentByID = getPayment(id);
        paymentByID ? res.status(200).json(paymentByID) : res.status(404).json({ error: 'Payment not found' });

    } catch (error) {
        const typedError = error as Error;
        res.status(500).json({
            message: typedError.message,
        })
    }
};

export const editPaymentHandler = (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id);
        if (isNaN(id)) {
            res.status(400).json({ error: 'Invalid ID' });
        }

        const paymentEdited = editPayment(id, req.body);
        !paymentEdited && res.status(404).json({ error: 'Payment not found' });

        res.status(200).json(paymentEdited)

    } catch (error) {
        const typedError = error as Error;
        res.status(500).json({
            message: typedError.message,
        })
    }
};