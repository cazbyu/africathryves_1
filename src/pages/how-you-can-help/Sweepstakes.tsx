import React from 'react';
import PageHero from '../../components/PageHero';
import { Timer, Gift, Trophy, Users } from 'lucide-react';

const Sweepstakes = () => {
  return (
    <div className="min-h-screen pt-16">
      <PageHero
        title="Sweepstakes"
        description="Participate in exciting giveaways that help fund African entrepreneurs and their ventures."
        image="https://images.unsplash.com/photo-1513151233558-d860c5398176"
        theme="red"
      />
      
      <div className="container mx-auto px-4 py-16">
        {/* Active Sweepstakes */}
        <div className="bg-red-700 text-white p-8 rounded-xl mb-12">
          <h2 className="text-3xl font-bold mb-8">Active Sweepstakes</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <Timer className="w-8 h-8 mx-auto mb-4" />
              <div className="text-2xl font-bold mb-2">24</div>
              <div className="text-sm text-red-200">Days Left</div>
            </div>
            <div className="text-center">
              <Gift className="w-8 h-8 mx-auto mb-4" />
              <div className="text-2xl font-bold mb-2">$50,000</div>
              <div className="text-sm text-red-200">Prize Pool</div>
            </div>
            <div className="text-center">
              <Trophy className="w-8 h-8 mx-auto mb-4" />
              <div className="text-2xl font-bold mb-2">10</div>
              <div className="text-sm text-red-200">Winners</div>
            </div>
            <div className="text-center">
              <Users className="w-8 h-8 mx-auto mb-4" />
              <div className="text-2xl font-bold mb-2">5,000+</div>
              <div className="text-sm text-red-200">Participants</div>
            </div>
          </div>
        </div>

        {/* Current Sweepstakes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="relative h-64">
              <img
                src="https://images.unsplash.com/photo-1579532537598-459ecdaf39cc"
                alt="Grand Prize"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-red-700 text-white px-4 py-2 rounded-full">
                Grand Prize
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                African Business Innovation Tour
              </h3>
              <p className="text-gray-600 mb-4">
                Win an all-expenses-paid tour of Africa's most innovative businesses and meet 
                successful entrepreneurs.
              </p>
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-sm text-gray-500">Value</span>
                  <div className="text-2xl font-bold text-red-700">$25,000</div>
                </div>
                <button className="bg-red-700 text-white px-6 py-2 rounded-full hover:bg-red-800">
                  Enter Now
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="relative h-64">
              <img
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa"
                alt="Second Prize"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-red-700 text-white px-4 py-2 rounded-full">
                Second Prize
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Tech Startup Mentorship Package
              </h3>
              <p className="text-gray-600 mb-4">
                Receive one year of mentorship from successful tech entrepreneurs and access to 
                premium resources.
              </p>
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-sm text-gray-500">Value</span>
                  <div className="text-2xl font-bold text-red-700">$15,000</div>
                </div>
                <button className="bg-red-700 text-white px-6 py-2 rounded-full hover:bg-red-800">
                  Enter Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="bg-gray-50 rounded-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-red-700">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Choose Your Prize</h3>
              <p className="text-gray-600">
                Browse through our selection of amazing prizes and opportunities
              </p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-red-700">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Enter to Win</h3>
              <p className="text-gray-600">
                Make a donation to support African entrepreneurs and receive entries
              </p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-red-700">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Create Impact</h3>
              <p className="text-gray-600">
                Your participation helps fund entrepreneurial initiatives across Africa
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Win Big?</h2>
          <p className="text-lg text-gray-700 mb-8">
            Enter our sweepstakes today and support African entrepreneurs while getting a chance 
            to win amazing prizes.
          </p>
          <button className="bg-red-700 text-white px-8 py-3 rounded-full hover:bg-red-800 text-lg">
            Start Participating
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sweepstakes;