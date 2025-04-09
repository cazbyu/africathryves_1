import React, { useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { CheckCircle, XCircle, ArrowRight, ShoppingCart, Heart } from 'lucide-react';

const ThankYou = () => {
  const [searchParams] = useSearchParams();
  const paymentStatus = searchParams.get('payment_status');

  useEffect(() => {
    // Track payment completion/cancellation
    const trackPayment = () => {
      if (paymentStatus === 'success') {
        console.log('🎉 Payment completed successfully', {
          timestamp: new Date().toISOString(),
          referrer: document.referrer,
          path: window.location.pathname,
        });
      } else if (paymentStatus === 'cancelled') {
        console.log('❌ Payment cancelled', {
          timestamp: new Date().toISOString(),
          referrer: document.referrer,
          path: window.location.pathname,
        });
      }
    };

    trackPayment();

    // Clear URL parameters after tracking
    window.history.replaceState({}, '', '/thank-you');
  }, [paymentStatus]);

  return (
    <div className="min-h-screen pt-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          {paymentStatus === 'success' ? (
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-green-500 h-2" />
              <div className="p-8">
                <div className="text-center mb-8">
                  <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-green-500" />
                  </div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-4">
                    Thank You for Your Support!
                  </h1>
                  <p className="text-gray-600 mb-6">
                    Your payment has been processed successfully. Your contribution will help 
                    empower African entrepreneurs to create sustainable businesses and transform 
                    communities.
                  </p>
                  <div className="flex items-center justify-center text-green-600 mb-6">
                    <Heart className="w-5 h-5 mr-2" />
                    <span>Making a difference together</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
                  <Link
                    to="/"
                    className="bg-primary text-black px-8 py-3 rounded-full hover:bg-primary-dark transition-colors flex items-center"
                  >
                    Return Home
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                  <Link
                    to="/how-you-can-help"
                    className="text-gray-700 hover:text-gray-900 transition-colors flex items-center"
                  >
                    More Ways to Help
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ) : paymentStatus === 'cancelled' ? (
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-red-500 h-2" />
              <div className="p-8">
                <div className="text-center mb-8">
                  <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <XCircle className="w-10 h-10 text-red-500" />
                  </div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-4">
                    Payment Cancelled
                  </h1>
                  <p className="text-gray-600 mb-6">
                    Your payment was not completed. If you experienced any issues or have 
                    questions, please don't hesitate to contact our support team.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
                  <Link
                    to="/cart"
                    className="bg-red-600 text-white px-8 py-3 rounded-full hover:bg-red-700 transition-colors flex items-center"
                  >
                    Try Again
                    <ShoppingCart className="ml-2 w-5 h-5" />
                  </Link>
                  <Link
                    to="/"
                    className="text-gray-700 hover:text-gray-900 transition-colors flex items-center"
                  >
                    Return Home
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-primary h-2" />
              <div className="p-8">
                <div className="text-center mb-8">
                  <h1 className="text-3xl font-bold text-gray-900 mb-4">
                    Welcome to Africa Thryves
                  </h1>
                  <p className="text-gray-600">
                    Explore our platform to learn more about how you can support African 
                    entrepreneurs and make a lasting impact.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
                  <Link
                    to="/how-you-can-help"
                    className="bg-primary text-black px-8 py-3 rounded-full hover:bg-primary-dark transition-colors flex items-center"
                  >
                    Get Started
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                  <Link
                    to="/why-it-matters"
                    className="text-gray-700 hover:text-gray-900 transition-colors flex items-center"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ThankYou;