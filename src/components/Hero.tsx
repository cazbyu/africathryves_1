import React, { useState, lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowRight, TrendingUp } from 'lucide-react';

// Lazy load the mailing list form component
const MailingListForm = lazy(() => import('./MailingListForm'));

const Hero = () => {
  const [showMailingList, setShowMailingList] = useState(false);

  return (
    <>
      {/* First Section - Main Hero */}
      <div className="relative min-h-screen overflow-hidden">
        <div className="relative h-screen flex">
          <div 
            className="w-full h-full flex-shrink-0"
            style={{ 
              backgroundImage: `url(https://szcngfdwlktwaefirtux.supabase.co/storage/v1/object/public/public-assets//Ecosystem_Kilimanjaro_Elephants_164380843.jpeg)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/20 to-black/20" />
            
            <div className="relative h-full flex items-center justify-center px-4">
              <div className="text-center mt-16 bg-black/10 p-4 sm:p-8 rounded-2xl backdrop-blur-sm max-w-4xl mx-auto">
                <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-8 text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                  Step into Africa's Future:
                </h1>
                <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-2 sm:mb-4 text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                  Join Us in Building an Ecosystem of Opportunity
                </h1>
                <div className="max-w-3xl mx-auto">
                  <p className="text-xl text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] mb-8">
                    Building an Ecosystem that supports African entrepreneurs who give back to their communities
                  </p>
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

      {/* Second Section - Unlock Africa's Potential */}
      <div 
        className="relative min-h-[600px] bg-cover bg-center bg-fixed"
        style={{ 
          backgroundImage: `url(https://szcngfdwlktwaefirtux.supabase.co/storage/v1/object/public/public-assets//Glowing%20Globe_208622364.jpeg)`
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        
        <div className="relative container mx-auto px-4 py-24 flex flex-col items-center justify-center text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Unlock Africa's Potential
          </h2>
          
          <h3 className="text-2xl md:text-3xl text-white/90 italic mb-16">
            Learn to Invest for Lasting Change
          </h3>
          
          <div className="max-w-2xl mx-auto bg-black/40 backdrop-blur-sm p-8 rounded-xl">
            <blockquote className="text-xl md:text-2xl text-white mb-4">
              "If you know how to operate in Africa, there are unbelievable opportunities."
            </blockquote>
            <cite className="text-white/80 italic">-Nicky Oppenheimer</cite>
          </div>
        </div>
      </div>

      {/* Third Section - Impact Cards */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Stats Card */}
            <div className="bg-gradient-to-br from-red-700 to-green-700 rounded-xl p-8 text-white">
              <div className="prose prose-xl text-white">
                <p className="font-bold">
                  We've helped start more than 50 entrepreneurs start businesses. They have generated $500k+ and are making their communities stronger. Now is the time to do more!
                </p>
              </div>
            </div>

            {/* Nourou Card */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Nourou</h3>
                <p className="text-gray-600 mb-2">Niamakoro, Mali</p>
                <p className="text-gray-700 mb-4">
                  Nourou built a laundry business & wants to help build a school in rural Mali.
                </p>
                <div className="mb-4">
                  <img
                    src="https://szcngfdwlktwaefirtux.supabase.co/storage/v1/object/public/public-assets//Thryver_Male.png"
                    alt="Nourou in Thryver Tee"
                    className="w-full h-48 object-contain"
                  />
                  <p className="text-center text-sm text-gray-500 mt-2">Nourou in Thryver Tee</p>
                </div>
                <p className="text-gray-700 mb-4">You can support with the Thryver Tee</p>
                <Link 
                  to="/how-you-can-help/apparel" 
                  className="inline-flex items-center bg-primary text-black px-6 py-2 rounded-full hover:bg-primary-dark transition-colors"
                >
                  Buy The Thryver
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Rose Card */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Rose</h3>
                <p className="text-gray-600 mb-2">Bamako, Mali</p>
                <p className="text-gray-700 mb-4">
                  Rose built a clothing store & is passionate about empowering women and girls.
                </p>
                <div className="mb-4">
                  <img
                    src="https://szcngfdwlktwaefirtux.supabase.co/storage/v1/object/public/public-assets//Thryver_woman.png"
                    alt="Baby in Thryver Tee"
                    className="w-full h-48 object-contain"
                  />
                  <p className="text-center text-sm text-gray-500 mt-2">Baby in Thryver Tee</p>
                </div>
                <p className="text-gray-700 mb-4">Create businesses like this with the Thryver Tee</p>
                <Link 
                  to="/how-you-can-help/apparel" 
                  className="inline-flex items-center bg-primary text-black px-6 py-2 rounded-full hover:bg-primary-dark transition-colors"
                >
                  Buy The Thryver
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
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