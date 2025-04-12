import React from 'react';
import PageHero from '../../components/PageHero';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const FinancialCapital = () => {
  return (
    <div className="min-h-screen pt-16">
      <PageHero
        title="Financial Capital"
        description="We provide patient capital and innovative funding opportunities that enable sustainable growth and long-term success for African entrepreneurs."
        image="https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf"
        theme="green"
      />
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Main Content */}
          <div className="space-y-8">
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Trust, Growth, and Investment-Ready Entrepreneurs</h2>
              <div className="prose prose-lg text-gray-700 space-y-6">
                <p>
                  Investing in Africa requires <strong>trust</strong>, <strong>long-term impact</strong>, and <strong>investment-ready businesses</strong>. Africa Thryves 
                  bridges the gap by identifying <strong>trustworthy entrepreneurs</strong> who align with <strong>sustainable development 
                  goals</strong> and equipping them for success.
                </p>
                <p>
                  We take a <strong>patient capital approach</strong>, ensuring investor confidence through <strong>structured agreements</strong>, <strong>clear 
                  impact metrics</strong>, and <strong>leadership development</strong>. Instead of relying on donations, our <strong>self-sustaining 
                  funding model</strong> generates capital through <strong>NFTs</strong>, <strong>gamification</strong>, and <strong>innovative revenue streams</strong>.
                </p>
                <p>
                  To build <strong>investment-grade entrepreneurs</strong>, we introduce a <strong>dividend-based structure</strong>—allocating 10% of 
                  profits to social impact and 10% to Africa Thryves. This fosters <strong>financial discipline</strong> and <strong>credibility</strong>, 
                  preparing entrepreneurs for larger investment opportunities.
                </p>
                <p>
                  By <strong>amplifying their stories</strong> and <strong>fostering trust</strong>, we create a <strong>cycle of investment, impact, and 
                  reinvestment</strong>—where <strong>entrepreneurs</strong> gain visibility, <strong>investors</strong> achieve financial and social returns, and 
                  <strong>African businesses thrive</strong>.
                </p>
                <p className="text-xl font-semibold text-green-700">
                  🚀 Join us in building a <strong>trusted, thriving future</strong> for African entrepreneurship!
                </p>
              </div>
            </section>
          </div>
          
          {/* Stats and Impact */}
          <div className="space-y-8">
            <div className="bg-green-900 text-white p-8 rounded-xl">
              <h2 className="text-3xl font-bold mb-6">Our Impact</h2>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">$53K+</div>
                  <div className="text-sm text-green-200">Capital Deployed</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">$500K+</div>
                  <div className="text-sm text-green-200">Revenues Generated</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">5</div>
                  <div className="text-sm text-green-200">Countries</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">54</div>
                  <div className="text-sm text-green-200">Entrepreneurs Assisted</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg border border-green-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Success Stories</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <img
                    src="https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f"
                    alt="Entrepreneur"
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">Nigel</h3>
                    <p className="text-gray-600 mb-2">Chemical Company, South Africa</p>
                    <p className="text-gray-700">
                      "The growth capital we received helped us expand our chemical manufacturing 
                      solutions to five new regions, impacting over 10,000 customers."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-green-900 via-green-800 to-green-900 rounded-2xl overflow-hidden">
          <div className="px-8 py-16 relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
            </div>
            
            <div className="relative text-center max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Make an Impact?
              </h2>
              <p className="text-lg text-green-100 mb-8">
                Join us in transforming African entrepreneurship. Whether you're an investor, 
                entrepreneur, or supporter, there's a place for you in our mission.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
                <Link 
                  to="/how-you-can-help/donate" 
                  className="bg-white text-green-900 px-8 py-3 rounded-full hover:bg-green-50 transition-colors flex items-center"
                >
                  Support Now <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link 
                  to="/dashboard" 
                  className="bg-transparent text-white border-2 border-white px-8 py-3 rounded-full hover:bg-white/10 transition-colors"
                >
                  Apply for Funding
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialCapital;