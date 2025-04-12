import React from 'react';
import PageHero from '../../components/PageHero';

const AfricasPotential = () => {
  return (
    <div className="min-h-screen pt-16">
      <PageHero
        title="Africa's Potential"
        description="Understand the immense potential of African entrepreneurship and its role in shaping the continent's future."
        image="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e"
        theme="yellow"
      />
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Main Content */}
          <div className="space-y-8">
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">The African Opportunity</h2>
              <p className="text-lg text-gray-700">
                As the final frontier of emerging markets, Africa stands as the last great untapped 
                opportunity for global economic growth. While other emerging markets have matured, 
                Africa's vast potential remains largely unrealized, offering unprecedented 
                opportunities for first-movers and visionary investors.
              </p>
              <p className="text-lg text-gray-700 mt-4">
                The continent represents one of the world's greatest opportunities for growth and innovation. 
                With a young population, abundant resources, and increasing digital connectivity, 
                the continent is poised for an entrepreneurial revolution that will reshape the global 
                economic landscape.
              </p>
            </section>
            
            {/* Video Section */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Discover Africa's Untapped Business Potential
              </h2>
              <div className="relative w-full overflow-hidden pt-[56.25%] rounded-xl shadow-lg">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/DvoFzMXh-cI"
                  title="Discover Africa's Untapped Business Potential"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </section>
            
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Advantages</h2>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-xl shadow-lg border border-yellow-100">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Young Population</h3>
                  <p className="text-gray-600">
                    Africa has the world's youngest population, with over 60% under the age of 25, 
                    representing a massive workforce and consumer market.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-lg border border-yellow-100">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Digital Revolution</h3>
                  <p className="text-gray-600">
                    Rapid adoption of mobile technology and digital solutions is creating new 
                    opportunities for innovative business models.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-lg border border-yellow-100">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Resource Wealth</h3>
                  <p className="text-gray-600">
                    Abundant natural resources and agricultural potential provide opportunities 
                    for sustainable development.
                  </p>
                </div>
              </div>
            </section>
          </div>
          
          {/* Market Insights */}
          <div className="space-y-8">
            <div className="bg-yellow-600 text-white p-8 rounded-xl">
              <h2 className="text-3xl font-bold mb-6">Market Potential</h2>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">1.2B+</div>
                  <div className="text-sm text-yellow-200">Population</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">$2.5T</div>
                  <div className="text-sm text-yellow-200">GDP</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">500M+</div>
                  <div className="text-sm text-yellow-200">Mobile Users</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">54</div>
                  <div className="text-sm text-yellow-200">Countries</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg border border-yellow-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Growth Sectors</h2>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <img
                    src="https://images.unsplash.com/photo-1526628953301-3e589a6a8b74"
                    alt="Agriculture"
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">Agriculture</h3>
                    <p className="text-gray-600">
                      Modernizing farming practices and improving food security
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <img
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa"
                    alt="Technology"
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">Technology</h3>
                    <p className="text-gray-600">
                      Digital solutions addressing local challenges
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <img
                    src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9"
                    alt="Clean Energy"
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">Clean Energy</h3>
                    <p className="text-gray-600">
                      Sustainable power solutions for growing economies
                    </p>
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

export default AfricasPotential;