import { Inject, Injectable, Scope } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { FastifyRequest } from 'fastify';

import { PaymentSource } from './dto/payment.dto';
import { CreditCardStrategy, PayPalStrategy } from './strategy';

@Injectable({ scope: Scope.REQUEST })
export class PaymentService {
  constructor(
    @Inject(REQUEST) private readonly request: FastifyRequest,
    private creditCardStrategy: CreditCardStrategy,
    private payPalStrategy: PayPalStrategy,
  ) {}
  switchPayment() {
    const source = this.request.body['type'];
    switch (source) {
      case PaymentSource.Card:
        return this.creditCardStrategy;
      case PaymentSource.PayPal:
        return this.payPalStrategy;
      default:
        throw new Error(`The "${source}" payment is not support.`);
    }
  }
}
