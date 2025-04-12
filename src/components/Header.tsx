import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Menu, X } from 'lucide-react';
import MegaMenu from './MegaMenu';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const hideTimeout = useRef<NodeJS.Timeout>();
  const navRef = useRef<HTMLDivElement>(null);
  const megaMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node) &&
          megaMenuRef.current && !megaMenuRef.current.contains(e.target as Node)) {
        setActiveMegaMenu(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMenuHover = (menuType: string) => {
    if (hideTimeout.current) {
      clearTimeout(hideTimeout.current);
    }
    setActiveMegaMenu(menuType);
  };

  const handleMenuLeave = () => {
    hideTimeout.current = setTimeout(() => {
      setActiveMegaMenu(null);
    }, 300); // Increased delay for better UX
  };

  const handleMobileMenuItemClick = (menuType: string) => {
    if (activeMegaMenu === menuType) {
      setActiveMegaMenu(null);
    } else {
      setActiveMegaMenu(menuType);
    }
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    setActiveMegaMenu(null);
  };

  return (
    <header className="w-full fixed top-0 left-0 right-0 bg-white z-50">
      {/* Secondary Navigation */}
      <div className="bg-gray-100 py-2">
        <div className="container mx-auto px-4 flex justify-end items-center space-x-6 text-sm">
          <Link to="/community" className="text-gray-600 hover:text-yellow-600">Community</Link>
          <Link to="/dashboard" className="text-gray-600 hover:text-yellow-600">Entrepreneur Dashboard</Link>
          <Link to="/how-you-can-help/donate" className="bg-yellow-500 text-white px-4 py-1 rounded hover:bg-yellow-600">
            Chip In
          </Link>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center" onClick={handleLinkClick}>
              <img 
                src="https://szcngfdwlktwaefirtux.supabase.co/storage/v1/object/public/public-assets//AT%20Logo_square_RYG.png"
                alt="Africa Thryves"
                className="h-32 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8" ref={navRef}>
            <div 
              className="group relative"
              onMouseEnter={() => handleMenuHover('how-we-create-change')}
              onMouseLeave={handleMenuLeave}
            >
              <Link 
                to="/how-we-create-change" 
                className="text-gray-700 hover:text-green-600 py-4 font-bold relative"
              >
                How We Create Change
                <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-green-600 transform origin-left transition-transform duration-200 ${
                  activeMegaMenu === 'how-we-create-change' ? 'scale-x-100' : 'scale-x-0'
                }`} />
              </Link>
            </div>

            <div 
              className="group relative"
              onMouseEnter={() => handleMenuHover('why-it-matters')}
              onMouseLeave={handleMenuLeave}
            >
              <Link 
                to="/why-it-matters" 
                className="text-gray-700 hover:text-yellow-600 py-4 font-bold relative"
              >
                Why It Matters
                <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-yellow-600 transform origin-left transition-transform duration-200 ${
                  activeMegaMenu === 'why-it-matters' ? 'scale-x-100' : 'scale-x-0'
                }`} />
              </Link>
            </div>

            <div 
              className="group relative"
              onMouseEnter={() => handleMenuHover('how-you-can-help')}
              onMouseLeave={handleMenuLeave}
            >
              <Link 
                to="/how-you-can-help" 
                className="text-gray-700 hover:text-red-600 py-4 font-bold relative"
              >
                How You Can Help
                <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-red-600 transform origin-left transition-transform duration-200 ${
                  activeMegaMenu === 'how-you-can-help' ? 'scale-x-100' : 'scale-x-0'
                }`} />
              </Link>
            </div>

            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Search className="w-5 h-5" />
            </button>
            <Link to="/how-you-can-help/donate" className="bg-yellow-500 text-white px-6 py-2 rounded-full hover:bg-yellow-600">
              Chip In
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <div>
                <button 
                  onClick={() => handleMobileMenuItemClick('how-we-create-change')}
                  className="flex justify-between items-center w-full text-left text-gray-700 hover:text-green-600 py-2 font-bold"
                >
                  <span>How We Create Change</span>
                  <span className="text-xs">{activeMegaMenu === 'how-we-create-change' ? '▲' : '▼'}</span>
                </button>
                <MegaMenu 
                  isOpen={activeMegaMenu === 'how-we-create-change'} 
                  onClose={() => {}}
                  menuType="how-we-create-change"
                  onLinkClick={handleLinkClick}
                />
              </div>
              
              <div>
                <button 
                  onClick={() => handleMobileMenuItemClick('why-it-matters')}
                  className="flex justify-between items-center w-full text-left text-gray-700 hover:text-yellow-600 py-2 font-bold"
                >
                  <span>Why It Matters</span>
                  <span className="text-xs">{activeMegaMenu === 'why-it-matters' ? '▲' : '▼'}</span>
                </button>
                <MegaMenu 
                  isOpen={activeMegaMenu === 'why-it-matters'} 
                  onClose={() => {}}
                  menuType="why-it-matters"
                  onLinkClick={handleLinkClick}
                />
              </div>
              
              <div>
                <button 
                  onClick={() => handleMobileMenuItemClick('how-you-can-help')}
                  className="flex justify-between items-center w-full text-left text-gray-700 hover:text-red-600 py-2 font-bold"
                >
                  <span>How You Can Help</span>
                  <span className="text-xs">{activeMegaMenu === 'how-you-can-help' ? '▲' : '▼'}</span>
                </button>
                <MegaMenu 
                  isOpen={activeMegaMenu === 'how-you-can-help'} 
                  onClose={() => {}}
                  menuType="how-you-can-help"
                  onLinkClick={handleLinkClick}
                />
              </div>
              
              <div className="pt-4">
                <Link 
                  to="/how-you-can-help/donate" 
                  className="bg-yellow-500 text-white px-6 py-2 rounded-full hover:bg-yellow-600 inline-block"
                  onClick={handleLinkClick}
                >
                  Chip In
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}

      {/* Mega Menu Container */}
      {activeMegaMenu && (
        <div 
          ref={megaMenuRef}
          onMouseEnter={() => handleMenuHover(activeMegaMenu)}
          onMouseLeave={handleMenuLeave}
        >
          <MegaMenu 
            isOpen={true}
            onClose={() => setActiveMegaMenu(null)}
            menuType={activeMegaMenu}
            onLinkClick={handleLinkClick}
          />
        </div>
      )}
    </header>
  );
};

export default Header;