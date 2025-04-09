import { loadStripe } from '@stripe/stripe-js';
import type { CartItem } from '../store/cartStore';

const stripePublicKey = import.meta.env.VITE_STRIPE_PUBLIC_KEY;

if (!stripePublicKey) {
  throw new Error('Missing Stripe public key');
}

export const stripePromise = loadStripe(stripePublicKey);

export const createPaymentSession = async (items: CartItem[]) => {
  try {
    // Log the full API URL
    const apiUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/create-payment`;
    console.log('🔵 Payment API URL:', apiUrl);

    // Validate required environment variables
    const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
    if (!anonKey) {
      throw new Error('Missing Supabase anonymous key');
    }

    // Prepare and log the request payload
    const requestPayload = {
      items: items.map(item => ({
        name: item.name,
        price: item.price,
        quantity: item.quantity
      })),
      returnPath: '/thank-you' // Always redirect to thank you page
    };
    console.log('📦 Request Payload:', JSON.stringify(requestPayload, null, 2));

    // Set up headers with authorization
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${anonKey}`,
    };
    console.log('🔑 Request Headers:', {
      ...headers,
      'Authorization': headers.Authorization.substring(0, 20) + '...[truncated]'
    });

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers,
      body: JSON.stringify(requestPayload),
    });

    // Log the response status and headers
    console.log('📡 Response Status:', response.status);
    console.log('📡 Response Headers:', Object.fromEntries(response.headers.entries()));

    if (!response.ok) {
      const errorData = await response.json();
      console.error('❌ Payment Service Error:', {
        status: response.status,
        statusText: response.statusText,
        error: errorData
      });
      throw new Error(errorData.error || 'Could not connect to payment service');
    }

    const data = await response.json();
    console.log('✅ Payment Session Created:', {
      sessionId: data.sessionId,
      url: data.url
    });
    
    return data;
  } catch (error) {
    // Enhanced error logging
    console.error('❌ Payment Session Creation Failed:', {
      error: error instanceof Error ? {
        name: error.name,
        message: error.message,
        stack: error.stack
      } : error
    });
    
    throw error instanceof Error 
      ? error 
      : new Error('Could not connect to payment service');
  }
};