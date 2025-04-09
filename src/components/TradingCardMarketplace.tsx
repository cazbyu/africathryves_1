import React, { useState } from 'react';
import { Search, Filter, ArrowUpDown, ShoppingCart, Globe, Users, Trophy, ArrowRight } from 'lucide-react';
import useCartStore from '../store/cartStore';

interface TradingCard {
  id: string;
  name: string;
  title: string;
  image: string;
  price: number;
  rarity: 'Common' | 'Uncommon' | 'Rare' | 'Legendary';
  sector: string;
  stats: {
    innovation: number;
    leadership: number;
    impact: number;
  };
  nftId: string;
  bio: string;
  achievements: string[];
  location: string;
  businessType: string;
  employeeCount: number;
  yearFounded: number;
}

const cards: TradingCard[] = [
  {
    id: '1',
    name: 'Sarah Mwangi',
    title: 'Tech Innovator',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72',
    price: 199.99,
    rarity: 'Rare',
    sector: 'Technology',
    stats: {
      innovation: 95,
      leadership: 92,
      impact: 98
    },
    nftId: '#0001',
    bio: 'Pioneer in African tech solutions, focusing on mobile-first applications that bridge the digital divide.',
    achievements: [
      'Forbes 30 Under 30 Africa',
      'Innovation Award 2024',
      'Tech Impact Leader'
    ],
    location: 'Nairobi, Kenya',
    businessType: 'Software Development',
    employeeCount: 50,
    yearFounded: 2020
  },
  {
    id: '2',
    name: 'John Okafor',
    title: 'Sustainable Agriculture Pioneer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
    price: 149.99,
    rarity: 'Uncommon',
    sector: 'Agriculture',
    stats: {
      innovation: 88,
      leadership: 94,
      impact: 96
    },
    nftId: '#0002',
    bio: 'Revolutionizing African agriculture through sustainable farming practices and technology integration.',
    achievements: [
      'Agricultural Innovation Prize',
      'Sustainability Excellence Award',
      'Community Impact Recognition'
    ],
    location: 'Lagos, Nigeria',
    businessType: 'AgriTech',
    employeeCount: 75,
    yearFounded: 2019
  },
  {
    id: '3',
    name: 'Amara Diallo',
    title: 'Clean Energy Visionary',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e',
    price: 299.99,
    rarity: 'Legendary',
    sector: 'Energy',
    stats: {
      innovation: 98,
      leadership: 96,
      impact: 99
    },
    nftId: '#0003',
    bio: 'Leading the renewable energy revolution in West Africa through innovative solar solutions.',
    achievements: [
      'Clean Energy Leadership Award',
      'Environmental Impact Prize',
      'Business Excellence Award'
    ],
    location: 'Dakar, Senegal',
    businessType: 'Renewable Energy',
    employeeCount: 120,
    yearFounded: 2018
  }
];

const TradingCardMarketplace: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSector, setSelectedSector] = useState<string>('');
  const [selectedRarity, setSelectedRarity] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('');
  const [cart, setCart] = useState<string[]>([]);

  const { addItem, removeItem, items } = useCartStore();

  const filteredCards = cards.filter(card => {
    const matchesSearch = card.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         card.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSector = !selectedSector || card.sector === selectedSector;
    const matchesRarity = !selectedRarity || card.rarity === selectedRarity;
    return matchesSearch && matchesSector && matchesRarity;
  });

  const sortedCards = [...filteredCards].sort((a, b) => {
    switch (sortBy) {
      case 'price-asc':
        return a.price - b.price;
      case 'price-desc':
        return b.price - a.price;
      case 'rarity':
        return ['Common', 'Uncommon', 'Rare', 'Legendary'].indexOf(b.rarity) -
               ['Common', 'Uncommon', 'Rare', 'Legendary'].indexOf(a.rarity);
      default:
        return 0;
    }
  });

  const handleAddToCart = (card: TradingCard, event: React.MouseEvent) => {
    event.preventDefault();
    addItem({
      id: card.id,
      name: card.name,
      price: card.price,
      type: 'product',
      isTaxable: true
    });
  };

  const handleRemoveFromCart = (cardId: string, event: React.MouseEvent) => {
    event.preventDefault();
    removeItem(cardId);
  };

  const isInCart = (cardId: string) => {
    return items.some(item => item.id === cardId);
  };

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'Common':
        return 'bg-gray-500';
      case 'Uncommon':
        return 'bg-green-500';
      case 'Rare':
        return 'bg-blue-500';
      case 'Legendary':
        return 'bg-yellow-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 pt-24 pb-24">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary via-secondary to-accent text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Trading Card Marketplace</h1>
          <p className="text-xl opacity-90">
            Collect, trade, and own pieces of African entrepreneurial history
          </p>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search cards..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Sector Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <select
                className="w-full pl-10 pr-4 py-2 border rounded-lg appearance-none"
                value={selectedSector}
                onChange={(e) => setSelectedSector(e.target.value)}
              >
                <option value="">All Sectors</option>
                <option value="Technology">Technology</option>
                <option value="Agriculture">Agriculture</option>
                <option value="Energy">Energy</option>
              </select>
            </div>

            {/* Rarity Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <select
                className="w-full pl-10 pr-4 py-2 border rounded-lg appearance-none"
                value={selectedRarity}
                onChange={(e) => setSelectedRarity(e.target.value)}
              >
                <option value="">All Rarities</option>
                <option value="Common">Common</option>
                <option value="Uncommon">Uncommon</option>
                <option value="Rare">Rare</option>
                <option value="Legendary">Legendary</option>
              </select>
            </div>

            {/* Sort */}
            <div className="relative">
              <ArrowUpDown className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <select
                className="w-full pl-10 pr-4 py-2 border rounded-lg appearance-none"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="">Sort By</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rarity">Rarity</option>
              </select>
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedCards.map((card) => (
            <div key={card.id} className="card-container perspective-1000">
              {/* Front Face */}
              <div className="card-face card-face-front bg-white rounded-xl shadow-lg">
                <div className="relative aspect-[3/4] bg-gradient-to-b from-primary to-secondary p-2">
                  <div className="absolute inset-2 bg-white rounded-lg overflow-hidden">
                    {/* Card Header */}
                    <div className="bg-primary p-2 text-black font-bold text-center">
                      African Entrepreneurs Series
                    </div>
                    {/* Card Image */}
                    <div className="relative h-48">
                      <img 
                        src={card.image}
                        alt={card.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-2">
                        <p className="text-white text-sm font-bold">{card.title}</p>
                      </div>
                    </div>
                    {/* Card Stats */}
                    <div className="p-3 text-sm">
                      <div className="grid grid-cols-2 gap-2 mb-2">
                        <div className="text-gray-600">Innovation</div>
                        <div className="font-bold text-right">{card.stats.innovation}/100</div>
                        <div className="text-gray-600">Leadership</div>
                        <div className="font-bold text-right">{card.stats.leadership}/100</div>
                        <div className="text-gray-600">Impact</div>
                        <div className="font-bold text-right">{card.stats.impact}/100</div>
                      </div>
                      <div className="text-xs text-gray-500 mt-2 text-center">
                        Certified NFT {card.nftId}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Details */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold">{card.name}</h3>
                    <span className={`${getRarityColor(card.rarity)} text-white text-sm px-3 py-1 rounded-full`}>
                      {card.rarity}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">${card.price}</span>
                    <button
                      onClick={(e) => isInCart(card.id) ? handleRemoveFromCart(card.id, e) : handleAddToCart(card, e)}
                      className={`px-6 py-2 rounded-full flex items-center space-x-2 ${
                        isInCart(card.id)
                          ? 'bg-red-500 hover:bg-red-600 text-white'
                          : 'bg-accent hover:bg-accent-dark text-white'
                      }`}
                    >
                      <ShoppingCart className="w-5 h-5" />
                      <span>{isInCart(card.id) ? 'Remove' : 'Add to Cart'}</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Back Face */}
              <div className="card-face card-face-back bg-white rounded-xl shadow-lg">
                <div className="p-6 h-full flex flex-col">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{card.name}</h3>
                  
                  <div className="space-y-6 flex-grow">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Bio</h4>
                      <p className="text-gray-700">{card.bio}</p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Achievements</h4>
                      <ul className="list-disc list-inside text-gray-700">
                        {card.achievements.map((achievement, index) => (
                          <li key={index}>{achievement}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center space-x-2">
                        <Globe className="w-5 h-5 text-gray-500" />
                        <span className="text-gray-700">{card.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="w-5 h-5 text-gray-500" />
                        <span className="text-gray-700">{card.employeeCount} employees</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Trophy className="w-5 h-5 text-gray-500" />
                        <span className="text-gray-700">{card.businessType}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <ArrowRight className="w-5 h-5 text-gray-500" />
                        <span className="text-gray-700">Est. {card.yearFounded}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <button
                      onClick={(e) => isInCart(card.id) ? handleRemoveFromCart(card.id, e) : handleAddToCart(card, e)}
                      className={`w-full py-3 rounded-full flex items-center justify-center space-x-2 ${
                        isInCart(card.id)
                          ? 'bg-red-500 hover:bg-red-600 text-white'
                          : 'bg-accent hover:bg-accent-dark text-white'
                      }`}
                    >
                      <ShoppingCart className="w-5 h-5" />
                      <span>{isInCart(card.id) ? 'Remove from Cart' : 'Add to Cart'}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Shopping Cart Preview */}
      {cart.length > 0 && (
        <div className="fixed bottom-0 right-0 m-6">
          <div className="bg-white rounded-lg shadow-lg p-4">
            <div className="flex items-center space-x-4">
              <ShoppingCart className="w-6 h-6 text-accent" />
              <span className="font-bold">{cart.length} cards in cart</span>
              <button className="bg-accent text-white px-6 py-2 rounded-full hover:bg-accent-dark">
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TradingCardMarketplace;