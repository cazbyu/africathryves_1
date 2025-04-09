import React from 'react';
import PageHero from '../../components/PageHero';
import { ArrowRight } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="min-h-screen pt-16">
      <PageHero
        title="About Us"
        description="Africa Thryves is a social impact-driven economic development initiative designed to empower African entrepreneurs through a structured ecosystem of funding, mentorship, and business infrastructure."
        image="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4"
        theme="yellow"
      />
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Main Content */}
          <div className="space-y-8">
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
              <div className="space-y-4">
                <p className="text-lg text-gray-700">
                  Africa Thryves is a social impact-driven economic development initiative designed to empower 
                  African entrepreneurs by providing a structured ecosystem of funding, mentorship, and business 
                  infrastructure. We go beyond traditional microfinance and donor-dependent NGOs, bridging the 
                  capital gap for businesses that are too small for venture capital yet too promising to be overlooked.
                </p>
                <p className="text-lg text-gray-700">
                  At its core, Africa Thryves is a market disruptor, supporting community initiatives in the U.S. 
                  while creating new pathways for capital flow into Africa through sustainable investments, education, 
                  structured business development programs, and innovative engagement tools such as gamification, 
                  sweepstakes, and NFTs.
                </p>
                <p className="text-lg text-gray-700">
                  But Africa Thryves is more than just an initiative—it's a movement rooted in human connection 
                  and inspired by visionary leadership.
                </p>
                <p className="text-lg text-gray-700">
                  In the fall of 2009, our founder, Paul, had the privilege of meeting Africano Mande, a remarkable 
                  military officer from South Sudan. Over lunch, Africano asked Paul about his post-military plans. 
                  At the time, Paul had no clear direction, but Africano's determination to bring about positive 
                  change in his country and the world awakened something in him.
                </p>
                <p className="text-lg text-gray-700">
                  As their friendship deepened over the next 15 months, Paul saw Africa through Africano's eyes—a 
                  land rich in potential, driven by resilient pioneers who, like those who shaped the American West, 
                  were ready to carve out a better future for their people. Africano's unwavering commitment to his 
                  nation and his people inspired Paul to take action.
                </p>
                <p className="text-lg text-gray-700">
                  From that moment forward, Paul knew his purpose: to empower visionaries like Africano—leaders, 
                  entrepreneurs, and changemakers—who have the will, but lack the means, to transform their communities.
                </p>
                <p className="text-lg text-gray-700">
                  Africa Thryves exists to make that possible.
                </p>
                <p className="text-lg text-gray-700">
                  Through innovative funding models, entrepreneurial support, and strategic global partnerships, 
                  we're not just building businesses—we're creating a self-sustaining ecosystem that empowers 
                  African entrepreneurs to take ownership of their futures and uplift their communities.
                </p>
                <p className="text-lg text-gray-700">
                  Join us in bridging continents, fostering opportunity, and empowering Africa to thryve.
                </p>
              </div>
            </section>
          </div>
          
          {/* Impact Model */}
          <div className="space-y-8">
            <div className="bg-yellow-600 text-white p-8 rounded-xl">
              <h2 className="text-3xl font-bold mb-6">Our Impact Model</h2>
              <div className="space-y-6">
                <div className="bg-white/10 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2">Business Development</h3>
                  <p className="text-yellow-100">
                    Entrepreneurs receive comprehensive training through our Master of Business on 
                    the Street program, using the proven 6P framework.
                  </p>
                </div>
                
                <div className="bg-white/10 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2">Investment Partnership</h3>
                  <p className="text-yellow-100">
                    Selected businesses receive investment capital through an equity-based partnership, 
                    ensuring aligned interests and sustainable growth.
                  </p>
                </div>
                
                <div className="bg-white/10 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2">Community Reinvestment</h3>
                  <p className="text-yellow-100">
                    Successful businesses commit 10% of profits to social impact initiatives, creating 
                    a cycle of reinvestment in African communities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-yellow-600 via-yellow-700 to-yellow-600 rounded-2xl overflow-hidden">
          <div className="px-8 py-16 relative">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
            </div>
            
            <div className="relative text-center max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold text-white mb-6">
                Join Our Mission
              </h2>
              <p className="text-lg text-yellow-100 mb-8">
                Whether you're an entrepreneur looking to grow your business or a supporter wanting to 
                make a difference, there's a place for you in our ecosystem.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
                <a 
                  href="/dashboard" 
                  className="bg-white text-yellow-700 px-8 py-3 rounded-full hover:bg-yellow-50 transition-colors flex items-center"
                >
                  Get Started <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a 
                  href="/how-you-can-help" 
                  className="bg-transparent text-white border-2 border-white px-8 py-3 rounded-full hover:bg-white/10 transition-colors"
                >
                  Support Our Mission
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;