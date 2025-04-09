import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../../components/PageHero';
import { Gamepad2 } from 'lucide-react';

const Games = () => {
  return (
    <div className="min-h-screen pt-16">
      <PageHero
        title="Games for Change"
        description="Our games educate and build our Ecosystem of opportunities for African entrepreneurs."
        image="https://images.unsplash.com/photo-1493711662062-fa541adb3fc8"
        theme="red"
      />
      
      <div className="container mx-auto px-4 py-16">
        {/* Featured Games */}
        <div className="space-y-16">
          {/* Thryve Harvest */}
          <div>
            <div className="block bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-96 lg:h-full">
                  <img
                    src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449"
                    alt="Thryve Harvest"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-red-700 text-white px-4 py-1 rounded-full">
                    New Release
                  </div>
                </div>
                <div className="p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Thryve Harvest</h2>
                  <p className="text-gray-700 mb-6">
                    Step into the world of sustainable farming in Africa. Manage your farm, make strategic 
                    decisions, and learn about agricultural entrepreneurship while building a thriving 
                    agricultural business that impacts local communities.
                  </p>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-green-500 rounded-full mr-2"></div>
                      <span>Farm Management</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-blue-500 rounded-full mr-2"></div>
                      <span>Sustainable Practices</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-yellow-500 rounded-full mr-2"></div>
                      <span>Market Economics</span>
                    </div>
                  </div>
                  <a 
                    href="https://bright-churros-30f36e.netlify.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-red-700 text-white px-8 py-3 rounded-full hover:bg-red-800 transition-colors"
                  >
                    Play Now
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Saharan Trail */}
          <div>
            <Link 
              to="/how-you-can-help/games/saharan-trail"
              className="block bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-96 lg:h-full">
                  <img
                    src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e"
                    alt="Saharan Trail"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-red-700 text-white px-4 py-1 rounded-full">
                    Featured Game
                  </div>
                </div>
                <div className="p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Saharan Trail</h2>
                  <p className="text-gray-700 mb-6">
                    Embark on an epic journey across the Sahara Desert while learning about 
                    entrepreneurship and making strategic business decisions. Inspired by the 
                    classic Oregon Trail, this game combines education with entertainment.
                  </p>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-green-500 rounded-full mr-2"></div>
                      <span>Resource Management</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-blue-500 rounded-full mr-2"></div>
                      <span>Business Decision Making</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-yellow-500 rounded-full mr-2"></div>
                      <span>Cultural Learning</span>
                    </div>
                  </div>
                  <button className="bg-gray-500 text-white px-8 py-3 rounded-full cursor-not-allowed">
                    Coming Soon
                  </button>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* More Games Coming Soon */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">More Games Coming Soon</h2>
          <p className="text-lg text-gray-700 mb-8">
            We're developing more exciting games that combine entertainment with social impact. 
            Stay tuned for updates!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-8 rounded-xl">
              <Gamepad2 className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Market Master</h3>
              <p className="text-gray-600">
                A business simulation game where you manage an African marketplace
              </p>
            </div>
            <div className="bg-gray-100 p-8 rounded-xl">
              <Gamepad2 className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Tech Tycoon</h3>
              <p className="text-gray-600">
                Build and grow your own tech startup in Africa
              </p>
            </div>
            <div className="bg-gray-100 p-8 rounded-xl">
              <Gamepad2 className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Farm Future</h3>
              <p className="text-gray-600">
                Sustainable farming and agricultural business management
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Games;