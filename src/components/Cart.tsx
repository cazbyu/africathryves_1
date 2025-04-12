import React, { useState, useEffect } from 'react';
import { ShoppingCart, X, Plus, Minus, DollarSign, Info } from 'lucide-react';
import useCartStore from '../store/cartStore';

const Cart: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [donationAmount, setDonationAmount] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const {
    items,
    removeItem,
    updateQuantity,
    addDonation,
    getTotalAmount,
    getTaxableAmount,
    getTaxAmount,
    clearCart
  } = useCartStore();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const paymentStatus = urlParams.get('payment_status');
    
    if (paymentStatus === 'success') {
      clearCart();
      window.history.replaceState({}, '', window.location.pathname);
    }
  }, [clearCart]);

  const handleDonationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const amount = parseFloat(donationAmount);
    if (!isNaN(amount) && amount > 0) {
      addDonation(amount);
      setDonationAmount('');
    }
  };

  const handleDonationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Allow empty string or valid numbers with up to 2 decimal places
    if (value === '' || /^\d*\.?\d{0,2}$/.test(value)) {
      setDonationAmount(value);
    }
  };

  const handleCheckout = async () => {
    if (items.length === 0) return;
    
    setError('Checkout functionality is temporarily unavailable');
    setIsLoading(false);
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 bg-primary text-black p-4 rounded-full shadow-lg hover:bg-primary-dark transition-colors"
      >
        <ShoppingCart className="w-6 h-6" />
        {items.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-accent text-white w-6 h-6 rounded-full flex items-center justify-center text-sm">
            {items.length}
          </span>
        )}
      </button>
    );
  }

  const subtotal = getTotalAmount() - getTaxAmount();
  const taxAmount = getTaxAmount();
  const total = getTotalAmount();

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="absolute right-0 top-0 bottom-0 w-full md:w-96 bg-white">
        <div className="flex flex-col h-full">
          <div className="p-4 border-b flex justify-between items-center">
            <h2 className="text-xl font-bold">Shopping Cart</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {/* Impact Statement */}
            <div className="bg-blue-50 p-4 rounded-lg mb-4">
              <div className="flex items-start space-x-2">
                <Info className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <p className="text-sm text-blue-900">
                  💡 Your purchase helps us build "Perpetual Principle" — a reinvestment fund used to launch and sustain African-owned businesses that create lasting impact.
                </p>
              </div>
            </div>

            {items.length === 0 ? (
              <p className="text-center text-gray-500">Your cart is empty</p>
            ) : (
              items.map((item) => (
                <div
                  key={item.id}
                  className="bg-gray-50 p-4 rounded-lg flex items-center justify-between"
                >
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-gray-600">${(item.price * item.quantity).toFixed(2)}</p>
                    {item.type === 'product' && (
                      <div className="flex items-center space-x-2 mt-2">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, Math.max(0, item.quantity - 1))
                          }
                          className="p-1 hover:bg-gray-200 rounded"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="p-1 hover:bg-gray-200 rounded"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    )}
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              ))
            )}

            <form onSubmit={handleDonationSubmit} className="mt-6">
              <h3 className="font-semibold mb-3">Add a Donation</h3>
              <div className="flex space-x-2">
                <div className="relative flex-1">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="text-gray-500">$</span>
                    </div>
                    <input
                      type="text"
                      value={donationAmount}
                      onChange={handleDonationChange}
                      placeholder="Enter amount"
                      className="w-full pl-8 pr-3 py-2 bg-gray-50 border-0 rounded-lg focus:ring-2 focus:ring-primary focus:bg-white transition-colors"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={!donationAmount || parseFloat(donationAmount) <= 0}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    donationAmount && parseFloat(donationAmount) > 0
                      ? 'bg-primary text-black hover:bg-primary-dark'
                      : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  Add
                </button>
              </div>
            </form>
          </div>

          <div className="border-t p-4">
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <h3 className="font-semibold mb-3">Order Summary</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal:</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                {taxAmount > 0 && (
                  <div className="flex justify-between text-gray-600">
                    <span>Sales Tax (7.25%):</span>
                    <span>${taxAmount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between font-semibold text-base pt-2 border-t">
                  <span>Total:</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            </div>

            {error && (
              <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg text-sm">
                {error}
              </div>
            )}

            <button
              onClick={handleCheckout}
              disabled={items.length === 0 || isLoading}
              className={`w-full py-3 rounded-full transition-all duration-200 flex items-center justify-center ${
                items.length === 0 || isLoading
                  ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                  : 'bg-primary text-black hover:bg-primary-dark'
              }`}
            >
              {isLoading ? (
                <div className="flex items-center space-x-2">
                  <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                  <span>Processing...</span>
                </div>
              ) : (
                'Checkout Temporarily Unavailable'
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;