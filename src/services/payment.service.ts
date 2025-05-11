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

export const editPayment = (id: number, editData: Partial <Payment>): Payment | undefined => {
   const obj = payments.find(payment => payment.id === id);
   
   if(!obj) return undefined;

   Object.assign(obj, editData)

   return obj;
}