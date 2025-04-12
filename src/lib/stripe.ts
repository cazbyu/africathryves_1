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
    const apiUrl = 'https://szcngfdwlktwaefirtux.supabase.co/functions/v1/create-payment';
    console.log('🔵 Payment API URL:', apiUrl);

    // Prepare and log the request payload
    const requestPayload = {
      items: items.map(item => ({
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        description: item.type === 'donation' 
          ? 'Supporting African entrepreneurs' 
          : `Size: ${item.name.split(' - Size ')[1] || 'N/A'}`
      }))
    };
    console.log('📦 Request Payload:', JSON.stringify(requestPayload, null, 2));

    // Set up headers with authorization
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN6Y25nZmR3bGt0d2FlZmlydHV4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM1MjUyNjAsImV4cCI6MjA1OTEwMTI2MH0.SM6NTr_OzT0cyaqDOzDtNiLBrc4tEwzkgmN_1eZFSWc'
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