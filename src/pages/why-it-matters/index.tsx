import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../../components/PageHero';
import { ArrowRight, Plus, Minus } from 'lucide-react';
import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const WhyItMatters = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const sections = [
    {
      title: 'About Us',
      description: 'Learn about our mission to transform Africa through entrepreneurship.',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4',
      path: '/why-it-matters/about-us'
    },
    {
      title: 'Our Mission',
      description: 'Explore our core principles and commitment to sustainable development.',
      image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b',
      path: '/why-it-matters/mission'
    },
    {
      title: "Africa's Potential",
      description: 'Understand the immense potential of African entrepreneurship.',
      image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e',
      path: '/why-it-matters/africas-potential'
    },
    {
      title: 'Blog & Success Stories',
      description: 'Read inspiring stories and insights about African entrepreneurship.',
      image: 'https://images.unsplash.com/photo-1593697821252-0d9a24b58da2',
      path: '/why-it-matters/blog'
    }
  ];

  const faqs: FAQItem[] = [
    {
      question: "What makes Africa Thryves different from other organizations?",
      answer: "Africa Thryves stands out through our self-sustaining funding model that combines innovative revenue streams with direct entrepreneurial support. Unlike traditional donor-dependent organizations, we create a sustainable ecosystem that empowers entrepreneurs while supporting both African and US communities."
    },
    {
      question: "How does Africa Thryves support entrepreneurs?",
      answer: "We provide a comprehensive support system including financial capital, business training through our Master of Business on the Street program, mentorship, and access to a global network. Our unique approach combines funding with structured business development to ensure long-term success."
    },
    {
      question: "What is the social impact model?",
      answer: "Our model requires successful businesses to commit 10% of their profits to social impact initiatives, creating a cycle of reinvestment in African communities. This approach ensures that as businesses grow, they continue to contribute to sustainable development and community transformation."
    },
    {
      question: "How can I get involved?",
      answer: "There are multiple ways to support our mission: through our Entertainment App, participating in our Trading Card marketplace, making direct contributions, or joining as an entrepreneur. Each engagement method is designed to create value for all participants while supporting African entrepreneurship."
    },
    {
      question: "Where does Africa Thryves operate?",
      answer: "While we have a particular focus on East Africa, our initiatives span multiple African countries. We work wherever we find committed entrepreneurs who align with our vision of sustainable business development and community impact."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen pt-16">
      <PageHero
        title="Why It Matters"
        description="Discover how African entrepreneurship is driving sustainable development and creating lasting positive change."
        image="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b"
        theme="yellow"
      />
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
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
                <div className="flex items-center text-yellow-600 font-semibold group-hover:text-yellow-700">
                  Learn More <ArrowRight className="w-5 h-5 ml-2" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100"
              >
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  {openFAQ === index ? (
                    <Minus className="w-5 h-5 text-yellow-600 flex-shrink-0" />
                  ) : (
                    <Plus className="w-5 h-5 text-yellow-600 flex-shrink-0" />
                  )}
                </button>
                {openFAQ === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyItMatters;