import React, { useState } from 'react';
import PageHero from '../../components/PageHero';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQs = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

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
        title="Frequently Asked Questions"
        description="Find answers to common questions about Africa Thryves, our mission, and how we create lasting impact."
        image="https://images.unsplash.com/photo-1557804506-669a67965ba0"
        theme="yellow"
      />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100"
              >
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openFAQ === index}
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  {openFAQ === index ? (
                    <Minus className="w-5 h-5 text-yellow-600 flex-shrink-0" />
                  ) : (
                    <Plus className="w-5 h-5 text-yellow-600 flex-shrink-0" />
                  )}
                </button>
                <div 
                  className={`transition-all duration-200 ease-in-out ${
                    openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  } overflow-hidden`}
                >
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;