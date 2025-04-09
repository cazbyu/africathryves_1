import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../../components/PageHero';
import { ArrowRight } from 'lucide-react';

const HowWeCreateChange = () => {
  const sections = [
    {
      title: 'Financial Capital',
      description: 'Patient capital and innovative funding opportunities for sustainable growth.',
      image: 'https://images.unsplash.com/photo-1579532537598-459ecdaf39cc',
      path: '/how-we-create-change/financial-capital'
    },
    {
      title: 'Human Capital',
      description: 'Comprehensive training and mentorship programs for skilled workforces.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978',
      path: '/how-we-create-change/human-capital'
    },
    {
      title: 'Social Capital',
      description: 'Building strong business communities and networks across Africa.',
      image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd',
      path: '/how-we-create-change/social-capital'
    },
    {
      title: 'Focus on the Journey',
      description: 'Supporting entrepreneurs throughout their business journey.',
      image: 'https://images.unsplash.com/photo-1508849789987-4e5333c12b78',
      path: '/how-we-create-change/journey'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      <PageHero
        title="How We Create Change"
        description="We invest in entrepreneurs and help them build sustainable businesses that transform communities across Africa."
        image="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4"
        theme="green"
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
                <div className="flex items-center text-green-700 font-semibold group-hover:text-green-800">
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

export default HowWeCreateChange;