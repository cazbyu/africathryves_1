import React from 'react';
import PageHero from '../../components/PageHero';
import { Store, Users, Gift, ArrowRight, Star, DollarSign, Percent, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const EntertainmentApp = () => {
  return (
    <div className="min-h-screen">
      <PageHero
        title="Entertainment App"
        description="Connect vendors, fundraisers, and customers while supporting African entrepreneurs."
        image="https://images.unsplash.com/photo-1516997121675-4c2d1684aa3e"
        theme="red"
      />
      
      <div className="container mx-auto px-4 py-16">
        {/* Value Proposition */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            A Partnership That Creates Business Growth Locally & Globally
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            For over 60 years, Entertainment has helped 37,000+ businesses attract new customers 
            while providing millions of consumers with exclusive discounts.
          </p>
        </div>

        {/* User Type Selection */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Vendors Section */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-8">
              <Store className="w-12 h-12 text-red-700 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">For Vendors</h3>
              <p className="text-gray-600 mb-6">
                Join for FREE and attract new customers. Only provide a one-time discount 
                when customers visit.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-700">
                  <Star className="w-5 h-5 text-yellow-500 mr-2 flex-shrink-0" />
                  <span>Attract new customers</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <DollarSign className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>No upfront costs</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <TrendingUp className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0" />
                  <span>Trackable ROI</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <Percent className="w-5 h-5 text-purple-500 mr-2 flex-shrink-0" />
                  <span>Flexible discount options</span>
                </li>
              </ul>
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSf9SChJetgwyTQQtwu5aWRZCgNGZjA1d7_sKzIlVjIlCd_Wsg/viewform?usp=header"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full bg-red-700 text-white px-6 py-3 rounded-full hover:bg-red-800 transition-colors"
              >
                Join as Vendor
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </div>
          </div>

          {/* Fundraisers Section */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-8">
              <Gift className="w-12 h-12 text-red-700 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">For Fundraisers</h3>
              <p className="text-gray-600 mb-6">
                Sell Entertainment memberships to raise money for your organization while 
                providing real value to supporters.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-700">
                  <Star className="w-5 h-5 text-yellow-500 mr-2 flex-shrink-0" />
                  <span>Powerful fundraising tool</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <DollarSign className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>High profit margins</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <Users className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0" />
                  <span>Easy team management</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <TrendingUp className="w-5 h-5 text-purple-500 mr-2 flex-shrink-0" />
                  <span>Digital sharing tools</span>
                </li>
              </ul>
              <Link 
                to="/fundraiser-signup"
                className="inline-flex items-center justify-center w-full bg-red-700 text-white px-6 py-3 rounded-full hover:bg-red-800 transition-colors"
              >
                Start Fundraising
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>

          {/* Customers Section */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-8">
              <Users className="w-12 h-12 text-red-700 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">For Customers</h3>
              <p className="text-gray-600 mb-6">
                Save money at local businesses while supporting African entrepreneurs through 
                your purchases.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-700">
                  <Star className="w-5 h-5 text-yellow-500 mr-2 flex-shrink-0" />
                  <span>Exclusive discounts</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <DollarSign className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Save hundreds yearly</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <Store className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0" />
                  <span>Discover local businesses</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <Gift className="w-5 h-5 text-purple-500 mr-2 flex-shrink-0" />
                  <span>Create global impact</span>
                </li>
              </ul>
              <Link 
                to="/customer-signup"
                className="inline-flex items-center justify-center w-full bg-red-700 text-white px-6 py-3 rounded-full hover:bg-red-800 transition-colors"
              >
                Start Saving
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>

        {/* Impact Section */}
        <div className="bg-red-700 text-white rounded-xl p-6 md:p-8 mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Creating Global Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-xl font-bold mb-4">How It Works</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-white/10 p-2 rounded-full mr-4 flex-shrink-0">
                    <Store className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Local Business Growth</h4>
                    <p className="text-white/80">
                      Restaurants and attractions join the platform to attract new customers
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-white/10 p-2 rounded-full mr-4 flex-shrink-0">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">African Entrepreneurship</h4>
                    <p className="text-white/80">
                      Each new merchant enables support for an African entrepreneur
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-white/10 p-2 rounded-full mr-4 flex-shrink-0">
                    <Gift className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Sustainable Growth</h4>
                    <p className="text-white/80">
                      Creates a cycle of local and global business development
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6">Impact Numbers</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">37K+</div>
                  <div className="text-sm text-white/80">Businesses Served</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">1M+</div>
                  <div className="text-sm text-white/80">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">500+</div>
                  <div className="text-sm text-white/80">African Entrepreneurs</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">60+</div>
                  <div className="text-sm text-white/80">Years of Trust</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-gray-700 mb-8">
            Join our community and be part of a movement that creates positive change 
            locally and globally.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSf9SChJetgwyTQQtwu5aWRZCgNGZjA1d7_sKzIlVjIlCd_Wsg/viewform?usp=header"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto bg-red-700 text-white px-8 py-3 rounded-full hover:bg-red-800 transition-colors"
            >
              Join as Vendor
            </a>
            <Link 
              to="/fundraiser-signup"
              className="w-full md:w-auto bg-red-700 text-white px-8 py-3 rounded-full hover:bg-red-800 transition-colors"
            >
              Start Fundraising
            </Link>
            <Link 
              to="/customer-signup"
              className="w-full md:w-auto bg-white text-red-700 px-8 py-3 rounded-full border-2 border-red-700 hover:bg-red-50 transition-colors"
            >
              Become a Member
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EntertainmentApp;