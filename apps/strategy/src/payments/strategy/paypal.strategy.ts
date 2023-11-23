import { Payment } from "../interfaces/payment.interface";

export class PayPalStrategy implements Payment {
  execute(amount: number): string {
    return `Paying ${amount} using PayPal`;
  }
}
