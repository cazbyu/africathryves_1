import React, { useState } from 'react';
import PageHero from '../../../components/PageHero';
import { Gamepad2, Map, Compass, ShoppingCart, Users, Tent } from 'lucide-react';

const SaharanTrail = () => {
  const [showTutorial, setShowTutorial] = useState(false);

  return (
    <div className="min-h-screen pt-16">
      <PageHero
        title="Saharan Trail"
        description="Navigate the challenges of entrepreneurship in this exciting adventure across the Sahara."
        image="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e"
        theme="red"
      />
      
      <div className="container mx-auto px-4 py-16">
        {/* Game Introduction */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About the Game</h2>
            <p className="text-lg text-gray-700 mb-8">
              Saharan Trail is an educational adventure game that puts you in the shoes of an 
              entrepreneur traveling across the Sahara Desert. Make strategic decisions, manage 
              resources, and learn about business while experiencing the rich culture and 
              challenges of African entrepreneurship.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-red-50 p-6 rounded-xl">
                <Map className="w-8 h-8 text-red-700 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Epic Journey</h3>
                <p className="text-gray-600">
                  Travel across multiple African regions
                </p>
              </div>
              <div className="bg-red-50 p-6 rounded-xl">
                <ShoppingCart className="w-8 h-8 text-red-700 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Trade</h3>
                <p className="text-gray-600">
                  Buy and sell goods across markets
                </p>
              </div>
              <div className="bg-red-50 p-6 rounded-xl">
                <Users className="w-8 h-8 text-red-700 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Network</h3>
                <p className="text-gray-600">
                  Build relationships with locals
                </p>
              </div>
              <div className="bg-red-50 p-6 rounded-xl">
                <Compass className="w-8 h-8 text-red-700 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Explore</h3>
                <p className="text-gray-600">
                  Discover hidden opportunities
                </p>
              </div>
            </div>
            <div className="flex space-x-4">
              <button 
                onClick={() => setShowTutorial(true)}
                className="bg-red-700 text-white px-8 py-3 rounded-full hover:bg-red-800 transition-colors"
              >
                Start Game
              </button>
              <button 
                className="bg-white text-red-700 px-8 py-3 rounded-full border-2 border-red-700 hover:bg-red-50 transition-colors"
              >
                Watch Tutorial
              </button>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="bg-red-700 text-white p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6">Game Features</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <Tent className="w-6 h-6 mr-3" />
                  <span>Multiple routes and destinations</span>
                </li>
                <li className="flex items-center">
                  <Tent className="w-6 h-6 mr-3" />
                  <span>Resource management challenges</span>
                </li>
                <li className="flex items-center">
                  <Tent className="w-6 h-6 mr-3" />
                  <span>Dynamic weather system</span>
                </li>
                <li className="flex items-center">
                  <Tent className="w-6 h-6 mr-3" />
                  <span>Cultural learning opportunities</span>
                </li>
                <li className="flex items-center">
                  <Tent className="w-6 h-6 mr-3" />
                  <span>Business decision making</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Learning Outcomes</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <span>Understanding of African markets</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span>Resource management skills</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                  <span>Strategic decision making</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  <span>Cultural awareness</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                  <span>Business networking</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Game Tutorial Modal */}
        {showTutorial && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl p-8 max-w-2xl mx-4">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Welcome to Saharan Trail</h3>
              <p className="text-gray-700 mb-6">
                Before you begin your journey, let's go through the basics of the game...
              </p>
              <button 
                onClick={() => setShowTutorial(false)}
                className="bg-red-700 text-white px-6 py-2 rounded-full hover:bg-red-800 transition-colors"
              >
                Start Playing
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SaharanTrail;