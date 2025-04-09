declare global {
  interface Window {
    Chargekeep: {
      new (config: { clientId: string }): {
        checkout: {
          create: (options: {
            lineItems: Array<{
              name: string;
              amount: number;
              quantity: number;
              taxable: boolean;
            }>;
            successUrl: string;
            cancelUrl: string;
          }) => Promise<{ url: string }>;
        };
      };
    };
  }
}

export {};