import React from 'react';
import PageHero from '../../components/PageHero';
import { Check, Star, Shield, Gift } from 'lucide-react';

const Subscriptions = () => {
  return (
    <div className="min-h-screen pt-16">
      <PageHero
        title="Subscriptions"
        description="Get exclusive perks and benefits while providing sustained support to African entrepreneurs."
        image="https://images.unsplash.com/photo-1450101499163-c8848c66ca85"
        theme="red"
      />
      
      <div className="container mx-auto px-4 py-16">
        {/* Impact Stats */}
        <div className="bg-red-700 text-white p-8 rounded-xl mb-12">
          <h2 className="text-3xl font-bold mb-8">Your Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <Star className="w-8 h-8 mx-auto mb-4" />
              <div className="text-2xl font-bold mb-2">10K+</div>
              <div className="text-sm text-red-200">Active Subscribers</div>
            </div>
            <div className="text-center">
              <Shield className="w-8 h-8 mx-auto mb-4" />
              <div className="text-2xl font-bold mb-2">$2M+</div>
              <div className="text-sm text-red-200">Monthly Support</div>
            </div>
            <div className="text-center">
              <Gift className="w-8 h-8 mx-auto mb-4" />
              <div className="text-2xl font-bold mb-2">500+</div>
              <div className="text-sm text-red-200">Entrepreneurs Supported</div>
            </div>
            <div className="text-center">
              <Star className="w-8 h-8 mx-auto mb-4" />
              <div className="text-2xl font-bold mb-2">95%</div>
              <div className="text-sm text-red-200">Satisfaction Rate</div>
            </div>
          </div>
        </div>

        {/* Subscription Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Basic Plan */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Basic</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-red-700">$9.99</span>
                <span className="text-gray-600">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  <span>Monthly Impact Report</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  <span>Newsletter Access</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  <span>Digital Badge</span>
                </li>
              </ul>
              <button className="w-full bg-red-700 text-white py-3 rounded-full hover:bg-red-800">
                Subscribe Now
              </button>
            </div>
          </div>

          {/* Premium Plan */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden relative">
            <div className="absolute top-4 right-4 bg-yellow-500 text-white px-4 py-1 rounded-full text-sm">
              Most Popular
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Premium</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-red-700">$24.99</span>
                <span className="text-gray-600">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  <span>All Basic Features</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  <span>Quarterly Virtual Events</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  <span>Exclusive Content Access</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  <span>Merchandise Discount</span>
                </li>
              </ul>
              <button className="w-full bg-red-700 text-white py-3 rounded-full hover:bg-red-800">
                Subscribe Now
              </button>
            </div>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-red-700">$99.99</span>
                <span className="text-gray-600">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  <span>All Premium Features</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  <span>Direct Mentorship Access</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  <span>Annual African Summit Pass</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  <span>Custom Impact Reports</span>
                </li>
              </ul>
              <button className="w-full bg-red-700 text-white py-3 rounded-full hover:bg-red-800">
                Contact Us
              </button>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-gray-50 rounded-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Subscription Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-red-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Exclusive Access</h3>
              <p className="text-gray-600">
                Get early access to events, content, and opportunities
              </p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-red-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Sustained Impact</h3>
              <p className="text-gray-600">
                Create lasting change through consistent monthly support
              </p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gift className="w-8 h-8 text-red-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Special Perks</h3>
              <p className="text-gray-600">
                Enjoy member-only benefits and rewards
              </p>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Can I cancel my subscription?
              </h3>
              <p className="text-gray-600">
                Yes, you can cancel your subscription at any time. No long-term commitments required.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                How is my money used?
              </h3>
              <p className="text-gray-600">
                80% of subscription revenue goes directly to supporting African entrepreneurs through 
                various programs and initiatives.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Can I upgrade my plan?
              </h3>
              <p className="text-gray-600">
                Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected 
                in your next billing cycle.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscriptions;