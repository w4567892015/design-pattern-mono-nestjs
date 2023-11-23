export enum PaymentSource {
  Card = 'card',
  PayPal = 'paypal',
}

export interface CreatePaymentDto {
  type: PaymentSource;
  amount: number;
}
