import { Payment } from '../models/payment.model'

const payments: Payment[] = [];

export const createPayment = (payment: Payment): Payment => {
    payments.push(payment);
    return payment;
}

export const getPayments = (): Payment[] => {
    return payments;
}

export const getPayment = (id: number): Payment | undefined => {
    return payments.find(payment => payment.id === id);
}