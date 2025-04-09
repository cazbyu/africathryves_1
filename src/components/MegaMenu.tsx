import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Section {
  title: string;
  description: string;
  image: string;
  path?: string;
  subsections?: Section[];
}

interface MenuContent {
  title: string;
  description: string;
  bgColor: string;
  textColor: string;
  sections: Section[];
}

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
  menuType: string;
  onLinkClick?: () => void;
}

const MegaMenu: React.FC<MegaMenuProps> = ({ isOpen, onClose, menuType, onLinkClick }) => {
  const [activeSection, setActiveSection] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (menuType) {
      setActiveSection(0);
      setError(null);
    }
  }, [menuType]);

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
      const timer = setTimeout(() => setIsAnimating(false), 200);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const menuContent: Record<string, MenuContent> = {
    'how-we-create-change': {
      title: 'How We Create Change',
      description: 'We invest in entrepreneurs and help them build sustainable businesses that transform communities across Africa.',
      bgColor: 'bg-green-900',
      textColor: 'text-white',
      sections: [
        {
          title: 'Financial Capital',
          description: 'Africa Thryves provides initial financial resources to equip entrepreneurs with the capital they need to launch, test, and refine their businesses—paving the way for long-term success and community impact.',
          image: 'https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf',
          path: '/how-we-create-change/financial-capital'
        },
        {
          title: 'Human Capital',
          description: 'Our comprehensive training and mentorship programs develop skilled workforces and empower the next generation of African business leaders.',
          image: 'https://images.unsplash.com/photo-1552664730-d307ca884978',
          path: '/how-we-create-change/human-capital'
        },
        {
          title: 'Social Capital',
          description: 'We foster strong business communities and networks that create lasting connections and opportunities across the African continent.',
          image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd',
          path: '/how-we-create-change/social-capital'
        },
        {
          title: 'Focus on the Journey',
          description: 'We emphasize long-term impact and continuous learning, supporting entrepreneurs throughout their entire business journey.',
          image: 'https://images.unsplash.com/photo-1508849789987-4e5333c12b78',
          path: '/how-we-create-change/journey'
        }
      ]
    },
    'why-it-matters': {
      title: 'Why It Matters',
      description: 'Discover how African entrepreneurship is driving sustainable development and creating lasting positive change across the continent.',
      bgColor: 'bg-yellow-600',
      textColor: 'text-white',
      sections: [
        {
          title: 'About Us',
          description: 'Learn about our mission to transform Africa through entrepreneurship and our journey of creating lasting impact.',
          image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4',
          path: '/why-it-matters/about-us'
        },
        {
          title: 'Our Mission, Vision & Values',
          description: 'Explore the core principles that guide Africa Thryves and our commitment to sustainable development.',
          image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b',
          path: '/why-it-matters/mission'
        },
        {
          title: "Africa's Potential",
          description: 'Understand the immense potential of African entrepreneurship and its role in shaping the continent\'s future.',
          image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e',
          path: '/why-it-matters/africas-potential'
        },
        {
          title: 'Blog & Success Stories',
          description: 'Read inspiring stories and insights about African entrepreneurship.',
          image: 'https://images.unsplash.com/photo-1593697821252-0d9a24b58da2',
          path: '/why-it-matters/blog'
        }
      ]
    },
    'how-you-can-help': {
      title: 'How You Can Help',
      description: 'Join us in supporting African entrepreneurs through various engaging and impactful initiatives.',
      bgColor: 'bg-red-700',
      textColor: 'text-white',
      sections: [
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
          title: 'Trading Cards',
          description: 'Collect and trade unique cards featuring inspiring African entrepreneurs.',
          image: 'https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3',
          path: '/trading-cards/marketplace'
        },
        {
          title: 'Chip In',
          description: 'Make a direct impact through our funding initiatives.',
          image: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6',
          path: '/how-you-can-help/donate'
        }
      ]
    }
  };

  if (!isOpen) return null;

  const content = menuContent[menuType];
  if (!content) {
    console.error(`Menu content not found for type: ${menuType}`);
    return null;
  }

  const safeActiveSection = Math.min(Math.max(0, activeSection), content.sections.length - 1);
  const currentSection = content.sections[safeActiveSection];

  return (
    <div 
      className={`absolute left-0 right-0 w-full ${content.bgColor} shadow-lg z-40 transform transition-all duration-200 ease-in-out ${
        isAnimating ? 'translate-y-1 opacity-0' : 'translate-y-0 opacity-100'
      }`}
      style={{ top: '100%' }}
      onMouseEnter={() => {}} 
      onMouseLeave={onClose}
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-8 py-12">
          {/* Title and Description - 3 columns */}
          <div className="col-span-3 pr-8">
            <h2 className={`text-3xl font-bold ${content.textColor} mb-4`}>
              {content.title}
            </h2>
            <p className={`${content.textColor} opacity-90`}>
              {content.description}
            </p>
          </div>

          {/* Navigation Links - 5 columns */}
          <div className="col-span-5">
            <nav className="space-y-4">
              {content.sections.map((section, index) => (
                <Link
                  key={section.title}
                  to={section.path || '#'}
                  className={`block group transition-colors ${content.textColor} hover:opacity-90`}
                  onMouseEnter={() => setActiveSection(index)}
                  onClick={onLinkClick}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-medium">{section.title}</span>
                    <ChevronRight className={`w-5 h-5 opacity-0 transform translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200`} />
                  </div>
                </Link>
              ))}
            </nav>
          </div>

          {/* Preview Section - 4 columns */}
          <div className="col-span-4">
            {currentSection && (
              <div className="h-full">
                <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                  <img
                    src={currentSection.image}
                    alt={currentSection.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                </div>
                <h3 className={`text-xl font-semibold ${content.textColor} mb-2`}>
                  {currentSection.title}
                </h3>
                <p className={`${content.textColor} opacity-90 text-sm`}>
                  {currentSection.description}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;