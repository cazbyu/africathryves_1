import React from 'react';
import PageHero from '../../components/PageHero';
import { ArrowRight } from 'lucide-react';

const Journey = () => {
  return (
    <div className="min-h-screen pt-16">
      <PageHero
        title="Focus on the Journey"
        description="Success isn't just about the destination—it's about the journey. At Africa Thryves, we embrace every challenge, every failure, and every lesson along the way, knowing that growth comes from resilience. We don't fear setbacks; we learn, adapt, and keep moving forward."
        image="https://images.unsplash.com/photo-1508849789987-4e5333c12b78"
        theme="green"
      />
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Main Content */}
          <div className="space-y-8">
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">The Entrepreneurial Journey</h2>
              <div className="bg-green-50 border-l-4 border-green-700 p-6 rounded-r-lg mb-6">
                <p className="text-lg text-gray-700 mb-4">
                  A young boy walks along the shore, picking up stranded starfish and tossing them back into the sea. An observer watches for a moment and then says, "<strong>There are thousands of them—you'll never make a difference.</strong>" The boy picks up another starfish, throws it into the waves, and smiles. "<strong>I made a difference for that one.</strong>"
                </p>
                <p className="text-lg text-gray-700">
                  At <strong>Africa Thryves</strong>, we take the same approach. We know we can't solve every challenge at once, but we <strong>focus on the journey</strong>, lifting up one entrepreneur, one business, one community at a time. There will be failures, but each step forward creates lasting impact. <strong>We don't just chase big results—we invest in real people, real progress, and real change.</strong>
                </p>
              </div>
              <p className="text-lg text-gray-700">
                Success is not just about the destination; it's about the journey. We provide 
                comprehensive support at every stage of the entrepreneurial journey, ensuring 
                sustainable growth and lasting impact.
              </p>
            </section>
          </div>
          
          {/* Journey Progress */}
          <div className="space-y-8">
            <div className="bg-green-900 text-white p-8 rounded-xl">
              <h2 className="text-3xl font-bold mb-6">Journey Progress</h2>
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-white/20"></div>
                <div className="space-y-8 relative">
                  <div className="flex items-start">
                    <div className="absolute left-0 w-8 h-8 bg-white rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 bg-green-900 rounded-full"></div>
                    </div>
                    <div className="ml-16">
                      <h3 className="text-xl font-bold mb-2">Start</h3>
                      <p className="text-green-100">Initial business idea and planning phase</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="absolute left-0 w-8 h-8 bg-white rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 bg-green-900 rounded-full"></div>
                    </div>
                    <div className="ml-16">
                      <h3 className="text-xl font-bold mb-2">Development</h3>
                      <p className="text-green-100">Building and refining the business model</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="absolute left-0 w-8 h-8 bg-white rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 bg-green-900 rounded-full"></div>
                    </div>
                    <div className="ml-16">
                      <h3 className="text-xl font-bold mb-2">Growth</h3>
                      <p className="text-green-100">Scaling operations and market presence</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="absolute left-0 w-8 h-8 bg-white rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 bg-green-900 rounded-full"></div>
                    </div>
                    <div className="ml-16">
                      <h3 className="text-xl font-bold mb-2">Maturity</h3>
                      <p className="text-green-100">Sustainable business operations</p>
                    </div>
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
                Start Your Journey With Us
              </h2>
              <p className="text-lg text-green-100 mb-8">
                Join a community of entrepreneurs who understand that success is built one step at a time. 
                Let's grow together.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
                <a 
                  href="/dashboard" 
                  className="bg-white text-green-900 px-8 py-3 rounded-full hover:bg-green-50 transition-colors flex items-center"
                >
                  Begin Your Journey <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a 
                  href="/how-you-can-help" 
                  className="bg-transparent text-white border-2 border-white px-8 py-3 rounded-full hover:bg-white/10 transition-colors"
                >
                  Help an Entrepreneur
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journey;