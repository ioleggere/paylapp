import {
  createPaymentHandler,
  getPaymentsHandler,
  getPaymentHandler,
  editPaymentHandler
} from '../src/controllers/payment.controller';

import * as service from '../src/services/payment.service';
import { Request, Response } from 'express';

const mockResponse = () => {
  const res = {} as Response;
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
};

describe('Payment Handlers', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should create a new payment', () => {
    const req = {
      body: {
        id: 1,
        value: 100,
        paymentDue: new Date('2025-01-01'),
        status: 'pending',
        paymentValue: 0,
        paymentDate: new Date('2025-01-01')
      }
    } as Request;

    const res = mockResponse();

    jest.spyOn(service, 'createPayment').mockReturnValue(req.body);

    createPaymentHandler(req, res);

    expect(service.createPayment).toHaveBeenCalledWith(req.body);
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(req.body);
  });

  it('should return all payments', () => {
    const payments = [{ id: 1, value: 100, paymentDue: new Date(), status: 'paid', paymentValue: 100, paymentDate: new Date() }];
    const req = {} as Request;
    const res = mockResponse();

    jest.spyOn(service, 'getPayments').mockReturnValue(payments);

    getPaymentsHandler(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(payments);
  });

  it('should return a payment by ID', () => {
    const payment = { id: 1, value: 100, paymentDue: new Date(), status: 'paid', paymentValue: 100, paymentDate: new Date() };
    const req = { params: { id: '1' } } as unknown as Request;
    const res = mockResponse();

    jest.spyOn(service, 'getPayment').mockReturnValue(payment);

    getPaymentHandler(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(payment);
  });

  it('should return 404 if payment not found', () => {
    const req = { params: { id: '999' } } as unknown as Request;
    const res = mockResponse();

    jest.spyOn(service, 'getPayment').mockReturnValue(undefined);

    getPaymentHandler(req, res);

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({ error: 'Payment not found' });
  });

  it('should edit an existing payment', () => {
    const payment = { id: 1, value: 100, paymentDue: new Date(), status: 'paid', paymentValue: 100, paymentDate: new Date() };
    const req = {
      params: { id: '1' },
      body: { status: 'paid' }
    } as unknown as Request;

    const res = mockResponse();

    jest.spyOn(service, 'editPayment').mockReturnValue(payment);

    editPaymentHandler(req, res);

    expect(service.editPayment).toHaveBeenCalledWith(1, { status: 'paid' });
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(payment);
  });

  it('should return 404 when trying to edit non-existing payment', () => {
    const req = {
      params: { id: '999' },
      body: { status: 'paid' }
    } as unknown as Request;

    const res = mockResponse();

    jest.spyOn(service, 'editPayment').mockReturnValue(undefined);

    editPaymentHandler(req, res);

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({ error: 'Payment not found' });
  });
});