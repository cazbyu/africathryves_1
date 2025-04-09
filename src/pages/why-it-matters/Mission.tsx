import React from 'react';
import PageHero from '../../components/PageHero';
import { Heart, Globe, Target, Shield, Lightbulb, DollarSign, Users, Star, Flag } from 'lucide-react';

const Mission = () => {
  return (
    <div className="min-h-screen pt-16">
      <PageHero
        title="Our Mission, Vision & Values"
        description="Explore the core principles that guide Africa Thryves and our commitment to sustainable development."
        image="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b"
        theme="yellow"
      />
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Main Content */}
          <div className="space-y-8">
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded-r-lg">
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-100 p-3 rounded-full flex-shrink-0">
                    <Flag className="w-6 h-6 text-yellow-600" />
                  </div>
                  <p className="text-lg text-gray-700">
                    To create a self-sustaining ecosystem of African businesses that grow, thrive, and reinvest in 
                    their communities while simultaneously supporting US community initiatives.
                  </p>
                </div>
              </div>
            </section>
            
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded-r-lg">
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-100 p-3 rounded-full flex-shrink-0">
                    <Star className="w-6 h-6 text-yellow-600" />
                  </div>
                  <p className="text-lg text-gray-700">
                    We envision an Africa thriving through creativity, innovation, community empowerment, 
                    and sustainable development while bridging continents with positivity.
                  </p>
                </div>
              </div>
            </section>
            
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Values</h2>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-lg border border-yellow-100">
                  <div className="flex items-start space-x-4">
                    <div className="bg-yellow-100 p-3 rounded-full">
                      <Lightbulb className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">Empowerment through Opportunity</h3>
                      <p className="text-gray-600">
                        We empower African entrepreneurs by providing the essential tools and resources they need 
                        to transform their visions into sustainable businesses. This empowerment not only uplifts 
                        their communities but also addresses global challenges, contributing to the United Nations 
                        Sustainable Development Goals.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg border border-yellow-100">
                  <div className="flex items-start space-x-4">
                    <div className="bg-yellow-100 p-3 rounded-full">
                      <DollarSign className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">Creating Impact with Purpose and Profit</h3>
                      <p className="text-gray-600">
                        We ensure that every entrepreneur we support pursues financial success alongside meaningful 
                        societal contributions. Our model demonstrates that progress and profit can coexist, serving 
                        as a benchmark for sustainable business practices.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg border border-yellow-100">
                  <div className="flex items-start space-x-4">
                    <div className="bg-yellow-100 p-3 rounded-full">
                      <Users className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">Forward Together</h3>
                      <p className="text-gray-600">
                        We believe the world benefits from more helpers. By fostering collaboration and strengthening 
                        cross-continental connections, we enable successful entrepreneurs to generate a positive ripple 
                        effect, promoting broader community development and contributing to global progress.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          
          {/* Commitments and Impact */}
          <div className="space-y-8">
            <div className="bg-yellow-600 text-white p-8 rounded-xl">
              <h2 className="text-3xl font-bold mb-6">Our Commitment</h2>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-yellow-100 p-4 rounded-full">
                    <Heart className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Community Focus</h3>
                    <p className="text-yellow-100">Supporting both African and US community initiatives</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-yellow-100 p-4 rounded-full">
                    <Globe className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Global Impact</h3>
                    <p className="text-yellow-100">Creating sustainable pathways for economic growth</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-yellow-100 p-4 rounded-full">
                    <Target className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Innovation Focus</h3>
                    <p className="text-yellow-100">Leveraging modern tools and approaches for engagement</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-yellow-100 p-4 rounded-full">
                    <Shield className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Sustainable Development</h3>
                    <p className="text-yellow-100">Building long-term, self-sustaining ecosystems</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Differentiators</h2>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-yellow-100 p-4 rounded-full">
                    <Heart className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">Sustainable Model</h3>
                    <p className="text-gray-600">Self-sustaining funding approach vs. donor dependency</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-yellow-100 p-4 rounded-full">
                    <Globe className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">Global Connection</h3>
                    <p className="text-gray-600">Linking US communities with African entrepreneurship</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-yellow-100 p-4 rounded-full">
                    <Target className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">Structured Growth</h3>
                    <p className="text-gray-600">Comprehensive business development framework</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-yellow-100 p-4 rounded-full">
                    <Shield className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">Impact Focus</h3>
                    <p className="text-gray-600">Built-in community reinvestment model</p>
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

export default Mission;