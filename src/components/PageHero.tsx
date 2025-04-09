import React from 'react';

interface PageHeroProps {
  title: string;
  description: string;
  image: string;
  theme?: 'green' | 'yellow' | 'red';
}

const PageHero: React.FC<PageHeroProps> = ({ 
  title, 
  description, 
  image,
  theme = 'green'
}) => {
  const getThemeColors = () => {
    switch (theme) {
      case 'yellow':
        return 'from-yellow-600 to-yellow-800';
      case 'red':
        return 'from-red-700 to-red-900';
      default:
        return 'from-green-900 to-green-950';
    }
  };

  return (
    <div className="relative h-[40vh] sm:h-[50vh] md:h-[60vh] min-h-[300px] flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      {/* Gradient Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-r ${getThemeColors()} opacity-90`} />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 sm:mb-6">{title}</h1>
          <p className="text-lg sm:text-xl text-white/90">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default PageHero;