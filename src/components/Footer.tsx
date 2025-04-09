import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube,
  Mail,
  Phone,
  MapPin,
  Heart,
  Shield
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Africa Thryves</h3>
            <p className="text-gray-400 mb-6">
              Empowering African entrepreneurs to create sustainable businesses and transform communities.
            </p>
            <div className="flex flex-wrap gap-3">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-sky-500 p-2 rounded-full hover:bg-sky-600 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-pink-600 p-2 rounded-full hover:bg-pink-700 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-700 p-2 rounded-full hover:bg-blue-800 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-red-600 p-2 rounded-full hover:bg-red-700 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/how-we-create-change" className="text-gray-400 hover:text-white transition-colors">
                  How We Create Change
                </Link>
              </li>
              <li>
                <Link to="/why-it-matters" className="text-gray-400 hover:text-white transition-colors">
                  Why It Matters
                </Link>
              </li>
              <li>
                <Link to="/how-you-can-help" className="text-gray-400 hover:text-white transition-colors">
                  How You Can Help
                </Link>
              </li>
              <li>
                <Link to="/trading-cards/marketplace" className="text-gray-400 hover:text-white transition-colors">
                  Trading Cards
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-gray-400 hover:text-white transition-colors">
                  Entrepreneur Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-400">
                <Mail className="w-5 h-5 mr-2 flex-shrink-0" />
                <a href="mailto:admin@africathryves.com" className="hover:text-white transition-colors">
                  admin@africathryves.com
                </a>
              </li>
              <li className="flex items-center text-gray-400">
                <Phone className="w-5 h-5 mr-2 flex-shrink-0" />
                <a href="tel:8014412322" className="hover:text-white transition-colors">
                  801.441.2322
                </a>
              </li>
              <li className="flex items-start text-gray-400">
                <MapPin className="w-5 h-5 mr-2 mt-1 flex-shrink-0" />
                <span>
                  123 Innovation Hub,<br />
                  Nairobi, Kenya
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for updates and insights.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-primary"
              />
              <button
                type="submit"
                className="w-full bg-primary text-black font-semibold px-6 py-2 rounded-lg hover:bg-primary-dark transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Legal Links - Simplified for mobile */}
        <div className="border-t border-gray-800 pt-8 pb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="mb-6 sm:mb-0">
              <h4 className="text-lg font-semibold mb-4 flex items-center">
                <Shield className="w-5 h-5 mr-2" />
                Legal & Privacy
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms-of-service" className="text-gray-400 hover:text-white text-sm transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link to="/cookie-policy" className="text-gray-400 hover:text-white text-sm transition-colors">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
            
            <div className="mb-6 sm:mb-0">
              <h4 className="text-lg font-semibold mb-4">Policies</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/refund-policy" className="text-gray-400 hover:text-white text-sm transition-colors">
                    Refund Policy
                  </Link>
                </li>
                <li>
                  <Link to="/shipping-policy" className="text-gray-400 hover:text-white text-sm transition-colors">
                    Shipping Policy
                  </Link>
                </li>
                <li>
                  <Link to="/acceptable-use" className="text-gray-400 hover:text-white text-sm transition-colors">
                    Acceptable Use
                  </Link>
                </li>
              </ul>
            </div>

            <div className="mb-6 sm:mb-0">
              <h4 className="text-lg font-semibold mb-4">Trading Cards</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/trading-policy" className="text-gray-400 hover:text-white text-sm transition-colors">
                    Trading Policy
                  </Link>
                </li>
                <li>
                  <Link to="/nft-terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                    NFT Terms
                  </Link>
                </li>
                <li>
                  <Link to="/marketplace-guidelines" className="text-gray-400 hover:text-white text-sm transition-colors">
                    Marketplace Guidelines
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Compliance</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/gdpr" className="text-gray-400 hover:text-white text-sm transition-colors">
                    GDPR Compliance
                  </Link>
                </li>
                <li>
                  <Link to="/accessibility" className="text-gray-400 hover:text-white text-sm transition-colors">
                    Accessibility Statement
                  </Link>
                </li>
                <li>
                  <Link to="/legal-notices" className="text-gray-400 hover:text-white text-sm transition-colors">
                    Legal Notices
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 mb-4 md:mb-0">
            <p className="text-gray-400 text-sm">
              © 2025 Africa Thryves. All rights reserved.
            </p>
            <div className="text-gray-400 text-sm">
              <Link to="/do-not-sell" className="hover:text-white transition-colors">
                Do Not Sell My Information
              </Link>
            </div>
          </div>
          <div className="flex items-center text-gray-400 text-sm">
            <span className="flex items-center">
              Made with <Heart className="w-4 h-4 text-red-500 mx-1" /> in Africa
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;