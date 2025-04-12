import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../../components/PageHero';
import { ArrowRight } from 'lucide-react';

const HowYouCanHelp = () => {
  const sections = [
    {
      title: 'Games',
      description: 'Play engaging games that support African entrepreneurs.',
      image: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8',
      path: '/how-you-can-help/games'
    },
    {
      title: 'Entertainment App',
      description: 'Support entrepreneurs through our innovative entertainment platform.',
      image: 'https://images.unsplash.com/photo-1516997121675-4c2d1684aa3e',
      path: '/how-you-can-help/entertainment'
    },
    {
      title: 'Apparel',
      description: 'Show your support with our branded merchandise.',
      image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c',
      path: '/how-you-can-help/apparel'
    },
    {
      title: 'Sweepstakes',
      description: 'Participate in exciting giveaways that help fund entrepreneurs.',
      image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176',
      path: '/how-you-can-help/sweepstakes'
    },
    {
      title: 'Subscriptions',
      description: 'Get exclusive perks while providing sustained support.',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85',
      path: '/how-you-can-help/subscriptions'
    },
    {
      title: 'Chip In',
      description: 'Make a direct impact through our funding initiatives.',
      image: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6',
      path: '/how-you-can-help/donate'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      <PageHero
        title="How You Can Help"
        description="Join us in supporting African entrepreneurs through various engaging and impactful initiatives."
        image="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6"
        theme="red"
      />
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((section) => (
            <Link
              key={section.title}
              to={section.path}
              className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48">
                <img
                  src={section.image}
                  alt={section.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{section.title}</h3>
                <p className="text-gray-600 mb-4">{section.description}</p>
                <div className="flex items-center text-red-600 font-semibold group-hover:text-red-700">
                  Learn More <ArrowRight className="w-5 h-5 ml-2" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowYouCanHelp;