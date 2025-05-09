export type PaymentStatus = 'paid' | 'pending'

export interface Payment {
    id: number;
    value: number;
    paymentDue: Date;
    status: PaymentStatus;
    paymentValue: number;
    paymentDate: Date;
}