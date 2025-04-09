import React from 'react';
import PageHero from '../../components/PageHero';
import { ArrowRight } from 'lucide-react';

const SocialCapital = () => {
  return (
    <div className="min-h-screen pt-16">
      <PageHero
        title="Social Capital"
        description="We cultivate strong business communities and networks that drive collaboration, unlock opportunities, and empower entrepreneurs to create lasting impact across Africa—aligning with the UN Sustainable Development Goals to foster economic growth, innovation, and social progress."
        image="https://images.unsplash.com/photo-1559136555-9303baea8ebd"
        theme="green"
      />
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Main Content */}
          <div className="space-y-8">
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Creating Sustainable Impact</h2>
              <p className="text-lg text-gray-700">
                Africa Thryves creates sustainable, impact-driven businesses that generate long-term value 
                for entrepreneurs and their communities. Our model ensures that every business we support 
                doesn't just thrive—it gives back.
              </p>
            </section>
            
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-xl shadow-lg border border-green-100">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">1️⃣ Entrepreneurs Join Our Network</h3>
                  <p className="text-gray-600">
                    Aspiring and existing business owners apply to join our ecosystem, where they receive 
                    training, mentorship, and access to funding.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-lg border border-green-100">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">2️⃣ Business Development & Support</h3>
                  <p className="text-gray-600">
                    Entrepreneurs go through our Master of Business on the Street program, structuring their 
                    business using the 6P framework while receiving mentorship and strategic guidance.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-lg border border-green-100">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">3️⃣ Funding & Growth</h3>
                  <p className="text-gray-600">
                    Selected businesses receive investment capital in exchange for an equity-based partnership, 
                    allowing them to scale while staying accountable for sustainable growth.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg border border-green-100">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">4️⃣ Social Impact Dividends</h3>
                  <p className="text-gray-600">
                    Once profitable, businesses commit 10% of their earnings to community initiatives, creating 
                    a cycle of reinvestment that supports future entrepreneurs and local causes. Even before 
                    reaching profitability, entrepreneurs commit to volunteering a portion of their time to 
                    strengthen their local communities.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg border border-green-100">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">5️⃣ Sustainable Ecosystem Expansion</h3>
                  <p className="text-gray-600">
                    As businesses grow, they contribute to the Africa Thryves network—mentoring new entrepreneurs, 
                    reinvesting in the ecosystem, and building a thriving African economy from within.
                  </p>
                </div>
              </div>
            </section>
          </div>
          
          {/* UN SDGs and US Fundraising */}
          <div className="space-y-8">
            <div className="relative rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1599059813005-11265ba4b4ce"
                alt="UN Sustainable Development Goals"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent">
                <div className="absolute bottom-0 p-8">
                  <h2 className="text-2xl font-bold text-white mb-2">Supporting UN SDGs</h2>
                  <p className="text-white/90">
                    Our work aligns with and supports multiple UN Sustainable Development Goals, 
                    creating lasting impact across Africa
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg border border-green-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">How We Support US Fundraising</h2>
              <p className="text-gray-700 mb-6">
                Through our innovative Entertainment App, we create a win-win-win scenario: US organizations 
                raise funds through app sales, local businesses attract new customers with no upfront costs, 
                and African entrepreneurs receive support for their ventures. This unique approach allows 
                American communities to support both local businesses and global entrepreneurship, creating 
                a sustainable cycle of impact.
              </p>
              <div className="flex justify-center">
                <a 
                  href="/how-you-can-help/entertainment" 
                  className="inline-flex items-center bg-green-700 text-white px-6 py-3 rounded-full hover:bg-green-800 transition-colors"
                >
                  Learn More About Entertainment App
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-green-900 via-green-800 to-green-900 rounded-2xl overflow-hidden">
          <div className="px-8 py-16 relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
            </div>
            
            <div className="relative text-center max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold text-white mb-6">
                Join Our Community of Change Makers
              </h2>
              <p className="text-lg text-green-100 mb-8">
                Be part of a movement that's transforming lives through entrepreneurship. Whether you're an 
                entrepreneur, supporter, or partner, there's a place for you in our mission.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
                <a 
                  href="/how-you-can-help/entertainment" 
                  className="bg-white text-green-900 px-8 py-3 rounded-full hover:bg-green-50 transition-colors flex items-center"
                >
                  Support Now <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a 
                  href="/dashboard" 
                  className="bg-transparent text-white border-2 border-white px-8 py-3 rounded-full hover:bg-white/10 transition-colors"
                >
                  Join as Entrepreneur
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialCapital;