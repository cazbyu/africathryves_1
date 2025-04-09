import React from 'react';
import PageHero from '../../components/PageHero';
import { ArrowRight } from 'lucide-react';

const HumanCapital = () => {
  return (
    <div className="min-h-screen pt-16">
      <PageHero
        title="Human Capital"
        description="Africa Thryves empowers entrepreneurs through targeted educational opportunities in business, personal growth, and skill development, recognizing that their greatest asset is themselves."
        image="https://images.unsplash.com/photo-1552664730-d307ca884978"
        theme="green"
      />
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Main Content */}
          <div className="space-y-8">
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Empowering Through Education</h2>
              <p className="text-lg text-gray-700">
                Each entrepreneur's <strong>journey is unique</strong>, so we take a <strong>tailored approach</strong>, helping them strategically invest in their <strong>knowledge, skills, and leadership potential</strong>. Unlocking Africa's vast <strong>human capital</strong> is key to driving <strong>sustainable economic growth</strong>. By combining <strong>targeted human capital investments</strong> with <strong>financial resources</strong>, we cultivate <strong>innovation</strong>, <strong>increase profitability</strong>, and create <strong>lasting, scalable success</strong> across diverse industries.
              </p>
            </section>
            
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Tools</h2>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-xl shadow-lg border border-green-100">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Technology & AI</h3>
                  <p className="text-gray-600">
                    Africa Thryves leverages technology and AI to help entrepreneurs innovate, scale, and compete globally. 
                    But we take the A out of AI—focusing on human-driven intelligence, using technology to amplify creativity, 
                    problem-solving, and sustainable growth.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg border border-green-100">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Business Education</h3>
                  <p className="text-gray-600">
                    We use the 6P framework espoused by Interweave Solutions to guide African business 
                    owners to structure, scale and sustain their ventures.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-lg border border-green-100">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Leadership Development</h3>
                  <p className="text-gray-600">
                    Our business is designed to equip entrepreneurs with decision-making skills, 
                    strategic thinking and ethical leadership that not only grows profitable businesses, 
                    but also reinvest in their communities for lasting impact.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-lg border border-green-100">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Technical Training</h3>
                  <p className="text-gray-600">
                    Since entrepreneurship is a journey, the best investment for some entrepreneurs is targeted 
                    skill improvement. Africa Thryves tracks and seeks opportunities that will best support 
                    long-term business growth and community impact.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg border border-green-100">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Mentorship Program</h3>
                  <p className="text-gray-600">
                    Entrepreneurs benefit from personalized mentorship with guidance, accountability, and 
                    industry insights to help navigate challenges and accelerate growth.
                  </p>
                </div>
              </div>
            </section>
          </div>
          
          {/* Skills and Development */}
          <div className="space-y-8">
            <div className="relative h-96 rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846"
                alt="Tech Training in Africa"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent">
                <div className="absolute bottom-0 p-8">
                  <h2 className="text-2xl font-bold text-white mb-2">Building Tomorrow's Leaders</h2>
                  <p className="text-white/90">
                    Empowering entrepreneurs with the technical skills and knowledge needed to succeed in the digital age
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg border border-green-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Success Stories</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
                    alt="Program Graduate"
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">Peter</h3>
                    <p className="text-gray-600 mb-2">Business Owner, Uganda</p>
                    <p className="text-gray-700">
                      "Africa Thryves helped me get a strong business training so I could do my best with my business."
                    </p>
                  </div>
                </div>
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
                Ready to Grow Your Potential?
              </h2>
              <p className="text-lg text-green-100 mb-8">
                Join our programs and unlock your entrepreneurial potential through expert-led 
                training and mentorship.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
                <a 
                  href="/dashboard" 
                  className="bg-white text-green-900 px-8 py-3 rounded-full hover:bg-green-50 transition-colors flex items-center"
                >
                  Apply Now <ArrowRight className="ml-2 w-5 h-5" />
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

export default HumanCapital;