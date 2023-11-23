import { Payment } from '../interfaces/payment.interface';

export class CreditCardStrategy implements Payment {
  execute(amount: number): string {
    return `Paying ${amount} using credit card`;
  }
}
