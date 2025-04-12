declare module '@bol-com/payment-sdk' {
  export class BolPayment {
    constructor(config: {
      merchantId: string;
      environment: 'test' | 'production';
    });

    createPayment(options: {
      amount: number;
      currency: string;
      description: string;
      redirectUrl: string;
      webhookUrl: string;
      locale: string;
      method: string;
    }): Promise<{
      redirectUrl: string;
      paymentId: string;
    }>;
  }
}