import React from 'react';
import PageHero from '../../components/PageHero';

const Stories = () => {
  return (
    <div className="min-h-screen pt-16">
      <PageHero
        title="Success Stories"
        description="Read inspiring stories of resilience and success from entrepreneurs across Africa."
        image="https://images.unsplash.com/photo-1524069290683-0457abfe42c3"
        theme="yellow"
      />
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Featured Story */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative h-96">
                <img
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72"
                  alt="Featured Entrepreneur"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                  <div className="absolute bottom-0 p-8">
                    <span className="bg-yellow-500 text-white px-4 py-1 rounded-full text-sm">
                      Featured Story
                    </span>
                    <h2 className="text-3xl font-bold text-white mt-4">
                      From Local Shop to Tech Empire
                    </h2>
                    <p className="text-white/90 mt-2">
                      How Sarah Mwangi transformed her small computer repair shop into 
                      East Africa's leading tech solutions provider.
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <p className="text-gray-700 mb-6">
                  "When I started my small computer repair shop in Nairobi, I never imagined 
                  it would grow into what it is today. The support and guidance from Africa 
                  Thryves helped me see the bigger picture and gave me the confidence to expand."
                </p>
                <div className="flex items-center space-x-4">
                  <img
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e"
                    alt="Sarah Mwangi"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">Sarah Mwangi</h3>
                    <p className="text-gray-600">CEO, TechSolutions Africa</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Success Metrics */}
          <div className="space-y-8">
            <div className="bg-yellow-600 text-white p-8 rounded-xl">
              <h2 className="text-3xl font-bold mb-6">Impact Numbers</h2>
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-yellow-200">Businesses Supported</span>
                  <span className="text-2xl font-bold">500+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-yellow-200">Jobs Created</span>
                  <span className="text-2xl font-bold">5000+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-yellow-200">Countries Reached</span>
                  <span className="text-2xl font-bold">15</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-yellow-200">Success Rate</span>
                  <span className="text-2xl font-bold">85%</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Latest Stories</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
                    alt="Entrepreneur"
                    className="w-20 h-20 rounded-lg object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">John Okafor</h3>
                    <p className="text-gray-600 text-sm mb-2">AgriTech Solutions</p>
                    <p className="text-gray-700">
                      Revolutionizing farming practices with drone technology
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <img
                    src="https://images.unsplash.com/photo-1589156191108-c762ff4b96ab"
                    alt="Entrepreneur"
                    className="w-20 h-20 rounded-lg object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">Amina Diallo</h3>
                    <p className="text-gray-600 text-sm mb-2">EcoEnergy</p>
                    <p className="text-gray-700">
                      Bringing solar power to rural communities
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* More Success Stories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1559136555-9303baea8ebd"
              alt="Success Story"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Building Community Through Business
              </h3>
              <p className="text-gray-700 mb-4">
                How a small cooperative grew into a thriving marketplace
              </p>
              <a href="#" className="text-yellow-600 font-semibold hover:text-yellow-700">
                Read More →
              </a>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978"
              alt="Success Story"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Innovation in Healthcare
              </h3>
              <p className="text-gray-700 mb-4">
                Creating accessible medical solutions for remote areas
              </p>
              <a href="#" className="text-yellow-600 font-semibold hover:text-yellow-700">
                Read More →
              </a>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1516997121675-4c2d1684aa3e"
              alt="Success Story"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Empowering Through Education
              </h3>
              <p className="text-gray-700 mb-4">
                Transforming lives through digital learning platforms
              </p>
              <a href="#" className="text-yellow-600 font-semibold hover:text-yellow-700">
                Read More →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stories;