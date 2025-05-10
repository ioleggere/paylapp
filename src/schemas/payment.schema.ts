import { z } from "zod";

const PaymentTypeSchema = z.union([
  z.literal('paid'),
  z.literal('pending'),
]);

export const paymentSchema = z.object({
    id: z.number(),
    value: z.number().positive(),
    paymentDue: z.preprocess((arg) => new Date(arg as string), z.date()),
    status: PaymentTypeSchema,
    paymentValue: z.number(),
    paymentDate: z.preprocess((arg) => new Date(arg as string), z.date()),
}
);