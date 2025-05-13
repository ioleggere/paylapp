import {
  createPayment,
  getPayments,
  getPayment,
  editPayment
} from '../src/services/payment.service';

import { Payment } from '../src/models/payment.model';

describe('Payment Service', () => {
  beforeEach(() => {
    (getPayments() as any).length = 0;
  });

  it('should create a payment', () => {
    const payment: Payment = {
      id: 1,
      value: 100,
      paymentDue: new Date('2025-01-01'),
      status: 'pending',
      paymentValue: 0,
      paymentDate: new Date('2025-01-01')
    };

    const result = createPayment(payment);
    expect(result).toEqual(payment);
    expect(getPayments()).toHaveLength(1);
  });

  it('should return a payment by ID', () => {
    const payment = createPayment({
      id: 2,
      value: 200,
      paymentDue: new Date(),
      status: 'paid',
      paymentValue: 200,
      paymentDate: new Date()
    });

    const found = getPayment(2);
    expect(found).toEqual(payment);
  });

  it('should return undefined for non-existing payment', () => {
    expect(getPayment(999)).toBeUndefined();
  });

  it('should edit an existing payment', () => {
    createPayment({
      id: 3,
      value: 300,
      paymentDue: new Date(),
      status: 'pending',
      paymentValue: 0,
      paymentDate: new Date()
    });

    const edited = editPayment(3, { status: 'paid', paymentValue: 300 });
    expect(edited?.status).toBe('paid');
    expect(edited?.paymentValue).toBe(300);
  });

  it('should return undefined when editing non-existing payment', () => {
    const result = editPayment(999, { status: 'canceled' });
    expect(result).toBeUndefined();
  });
});