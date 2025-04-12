import React, { useState } from 'react';
import PageHero from '../../components/PageHero';
import { Timer, Gift, Trophy, Users, Heart, Shield, Info } from 'lucide-react';
import useCartStore from '../../store/cartStore';

const Donate = () => {
  const [amount, setAmount] = useState<number | ''>('');
  const { addItem } = useCartStore();

  const handleDonationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (amount && amount > 0) {
      addItem({
        id: `donation-${Date.now()}`,
        name: 'Donation',
        price: amount,
        type: 'donation',
        isTaxable: false
      });
      // Redirect to cart after adding donation
      window.location.href = '/cart';
    }
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value === '' ? '' : Number(e.target.value);
    setAmount(value);
  };

  const predefinedAmounts = [25, 50, 100, 250];

  return (
    <div className="min-h-screen pt-16">
      <PageHero
        title="Chip In"
        description="Your contribution directly supports African entrepreneurs and helps create lasting positive change."
        image="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6"
        theme="red"
      />
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Main Content */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Support Our Mission</h2>
              
              {/* Tax Information Notice */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
                <div className="flex items-start">
                  <Info className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-sm text-blue-900">
                    Your contribution is not tax-deductible.
                    Africa Thryves is a for-profit social impact company. We've recently begun the process of applying for 501(c)(3) nonprofit status to accommodate donors who seek tax benefits.

                    All contributions will go directly toward training, education, and human capital development for African entrepreneurs.
                  </p>
                </div>
              </div>

              <form onSubmit={handleDonationSubmit} className="space-y-8">
                {/* Amount Selection */}
                <div className="space-y-4">
                  <label className="block text-gray-700 font-semibold mb-2">
                    Select Amount
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    {predefinedAmounts.map((value) => (
                      <button
                        key={value}
                        type="button"
                        className={`p-4 rounded-lg border-2 transition-colors ${
                          amount === value
                            ? 'border-red-700 bg-red-50'
                            : 'border-gray-200 hover:border-red-700'
                        }`}
                        onClick={() => setAmount(value)}
                      >
                        <span className="text-2xl font-bold text-gray-900">${value}</span>
                      </button>
                    ))}
                  </div>
                  
                  <div className="relative mt-4">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                    <input
                      type="number"
                      placeholder="Custom Amount"
                      value={amount}
                      onChange={handleAmountChange}
                      min="1"
                      step="0.01"
                      className="w-full pl-8 pr-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-red-700 focus:border-red-700"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={!amount || amount <= 0}
                  className={`w-full py-4 rounded-full font-semibold transition-colors ${
                    amount && amount > 0
                      ? 'bg-red-700 text-white hover:bg-red-800'
                      : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  Contribute ${amount || '0'}
                </button>
              </form>
            </div>
          </div>

          {/* Impact Information */}
          <div className="space-y-8">
            <div className="bg-red-700 text-white p-8 rounded-xl">
              <h2 className="text-3xl font-bold mb-6">Your Impact</h2>
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <Gift className="w-8 h-8 mx-auto mb-4" />
                  <div className="text-4xl font-bold mb-2">$2.5M+</div>
                  <div className="text-sm text-red-200">Contributions Received</div>
                </div>
                <div className="text-center">
                  <Users className="w-8 h-8 mx-auto mb-4" />
                  <div className="text-4xl font-bold mb-2">500+</div>
                  <div className="text-sm text-red-200">Entrepreneurs Supported</div>
                </div>
                <div className="text-center">
                  <Trophy className="w-8 h-8 mx-auto mb-4" />
                  <div className="text-4xl font-bold mb-2">85%</div>
                  <div className="text-sm text-red-200">Success Rate</div>
                </div>
                <div className="text-center">
                  <Timer className="w-8 h-8 mx-auto mb-4" />
                  <div className="text-4xl font-bold mb-2">15</div>
                  <div className="text-sm text-red-200">Countries Reached</div>
                </div>
              </div>
            </div>
            
            {/* How Your Contribution Helps */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">How Your Contribution Helps</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 p-3 rounded-full">
                    <Gift className="w-6 h-6 text-red-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Training Programs</h3>
                    <p className="text-gray-600">
                      Provides comprehensive business training and education for entrepreneurs
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 p-3 rounded-full">
                    <Users className="w-6 h-6 text-red-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Mentorship</h3>
                    <p className="text-gray-600">
                      Connects entrepreneurs with experienced mentors and advisors
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 p-3 rounded-full">
                    <Trophy className="w-6 h-6 text-red-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Educational Resources</h3>
                    <p className="text-gray-600">
                      Provides access to learning materials and business development resources
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Success Story */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Success Story</h2>
              <div className="flex items-start space-x-6">
                <img
                  src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6"
                  alt="Entrepreneur"
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div>
                  <blockquote className="text-gray-700 italic mb-4">
                    "The support we received has been transformative. We've been able to expand our 
                    operations and create jobs for our community. This wouldn't have been possible 
                    without the generous contributions from supporters like you."
                  </blockquote>
                  <div>
                    <h3 className="font-semibold text-gray-900">David Okonjo</h3>
                    <p className="text-gray-600">AgriTech Solutions, Kenya</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;