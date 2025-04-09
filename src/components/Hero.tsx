import React, { useState, lazy, Suspense } from 'react';
import { Mail, ArrowRight } from 'lucide-react';

// Lazy load the mailing list form component
const MailingListForm = lazy(() => import('./MailingListForm'));

const Hero = () => {
  const [showMailingList, setShowMailingList] = useState(false);

  return (
    <>
      <div className="relative min-h-screen overflow-hidden">
        <div className="relative h-screen flex">
          <div 
            className="w-full h-full flex-shrink-0"
            style={{ 
              backgroundImage: `url(https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?auto=format&fit=crop&w=1200&q=80)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            {/* Lighter gradient overlay for increased brightness */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/20 to-black/20" />
            
            <div className="relative h-full flex items-center justify-center px-4">
              <div className="text-center mt-16 bg-black/10 p-4 sm:p-8 rounded-2xl backdrop-blur-sm max-w-4xl mx-auto">
                <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-8 text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                  Step into Africa's Future:
                </h1>
                <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-2 sm:mb-4 text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                  Join Us in Building an Ecosystem of Opportunity
                </h1>
                <div className="max-w-3xl">
                  <div className="mb-8">
                    <div className="relative w-64 h-88 mb-6 mx-auto">
                      <div className="absolute inset-0 bg-gradient-to-b from-primary to-secondary rounded-xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
                        <div className="absolute inset-2 bg-white rounded-lg overflow-hidden">
                          <div className="bg-primary p-2 text-black font-bold text-center">
                            African Entrepreneurs Series
                          </div>
                          <div className="relative h-48 overflow-hidden">
                            <img 
                              src="https://images.unsplash.com/photo-1524069290683-0457abfe42c3?auto=format&fit=crop&w=400&q=80"
                              alt="Entrepreneur Portrait"
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-2">
                              <p className="text-white text-sm font-bold">Business Leader</p>
                            </div>
                          </div>
                          <div className="p-3 text-sm">
                            <div className="grid grid-cols-2 gap-2 mb-2">
                              <div className="text-gray-600">Vision</div>
                              <div className="font-bold text-right">98/100</div>
                              <div className="text-gray-600">Leadership</div>
                              <div className="font-bold text-right">96/100</div>
                              <div className="text-gray-600">Impact</div>
                              <div className="font-bold text-right">97/100</div>
                            </div>
                            <div className="text-xs text-gray-500 mt-2 text-center">
                              Certified NFT #0001
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-xl text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] mb-8">
                      Building an Ecosystem that supports African entrepreneurs who give back to their communities
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
                    <a 
                      href="/how-we-create-change" 
                      className="bg-green-600 text-white font-semibold px-8 py-3 rounded-full hover:bg-green-700 inline-block transition-colors shadow-lg text-center"
                    >
                      Learn More
                    </a>
                    <a 
                      href="/dashboard" 
                      className="bg-white text-secondary font-semibold px-8 py-3 rounded-full hover:bg-gray-100 inline-block transition-colors shadow-lg text-center"
                    >
                      Join Our Community
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mailing List Signup Section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <button 
              onClick={() => setShowMailingList(true)}
              className="bg-white p-8 rounded-2xl shadow-lg w-full text-left hover:shadow-xl transition-shadow"
            >
              <div className="inline-block p-3 bg-primary rounded-full mb-6">
                <Mail className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Stay Updated
              </h2>
              <p className="text-gray-600">
                Join our mailing list to receive updates about African entrepreneurship, 
                success stories, and opportunities to make an impact.
              </p>
            </button>
          </div>
        </div>
      </div>

      {/* Lazy loaded mailing list form */}
      {showMailingList && (
        <Suspense fallback={<div>Loading...</div>}>
          <MailingListForm onClose={() => setShowMailingList(false)} />
        </Suspense>
      )}
    </>
  );
};

export default Hero;