import { Module, Scope } from '@nestjs/common';

import { PaymentSourceToken } from './payment.constants';
import { PaymentService } from './payment.service';
import { CreditCardStrategy, PayPalStrategy } from './strategy';

@Module({
  providers: [
    {
      provide: PaymentSourceToken,
      scope: Scope.REQUEST,
      useFactory: (paymentService: PaymentService) => {
        return paymentService.switchPayment();
      },
      inject: [PaymentService],
    },
    PaymentService,
    CreditCardStrategy,
    PayPalStrategy,
  ],
  exports: [PaymentSourceToken],
})
export class PaymentModule {}
