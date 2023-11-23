import { Body, Controller, Inject, Post } from '@nestjs/common';

import { PaymentSourceToken } from './payments/payment.constants';
import { Payment } from './payments/interfaces/payment.interface';
import { CreatePaymentDto } from './payments/dto/payment.dto';

@Controller('payment')
export class AppController {
  constructor(
    @Inject(PaymentSourceToken) private readonly paymentService: Payment
  ) {}

  @Post()
  setPayment(
    @Body() body: CreatePaymentDto,
  ): string {
    return this.paymentService.execute(body.amount);
  }
}
