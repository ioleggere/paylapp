export interface Payment {
    id: number;
    value: number;
    paymentDue: Date;
    status: string;
    paymentValue: number;
    paymentDate: Date;
}