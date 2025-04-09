import React, { useState } from 'react';
import PageHero from '../../components/PageHero';
import { ShoppingCart, Star } from 'lucide-react';
import useCartStore from '../../store/cartStore';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  isTaxable: boolean;
}

const Apparel = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const { addItem, removeItem, items } = useCartStore();

  const products: Product[] = [
    {
      id: 'hooded-tee-aqua',
      name: 'Together Hooded Tee - Aqua',
      description: 'Long-sleeve hooded t-shirt with aqua water pattern sleeves and "We\'re In This Together" message',
      price: 39.99,
      image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7',
      category: 'clothing',
      isTaxable: true
    },
    {
      id: 'hooded-tee-camo',
      name: 'Together Hooded Tee - Camo',
      description: 'Long-sleeve hooded t-shirt with grey camo pattern sleeves and "We\'re In This Together" message',
      price: 39.99,
      image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7',
      category: 'clothing',
      isTaxable: true
    },
    {
      id: 'tshirt-1',
      name: 'Africa Thryves T-Shirt',
      description: 'Organic cotton t-shirt featuring our iconic logo',
      price: 29.99,
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab',
      category: 'clothing',
      isTaxable: true
    },
    {
      id: 'hoodie-1',
      name: 'Entrepreneur Hoodie',
      description: 'Comfortable hoodie with inspirational message',
      price: 49.99,
      image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7',
      category: 'clothing',
      isTaxable: true
    },
    {
      id: 'sticker-1',
      name: 'Impact Sticker Pack',
      description: 'Set of 3 vinyl stickers featuring our logo and inspirational messages',
      price: 9.99,
      image: 'https://images.unsplash.com/photo-1612160808975-ecb94e6e517b',
      category: 'accessories',
      isTaxable: true
    }
  ];

  const handleAddToCart = (product: Product) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      type: 'product',
      isTaxable: product.isTaxable
    });
  };

  const handleRemoveFromCart = (productId: string) => {
    removeItem(productId);
  };

  const isInCart = (productId: string) => {
    return items.some(item => item.id === productId);
  };

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen pt-16">
      <PageHero
        title="Apparel & Merchandise"
        description="Show your support with our branded merchandise while helping fund entrepreneurial initiatives."
        image="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c"
        theme="red"
      />
      
      <div className="container mx-auto px-4 py-16">
        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-lg overflow-hidden">
            <button
              className={`px-6 py-2 ${
                selectedCategory === 'all'
                  ? 'bg-red-700 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setSelectedCategory('all')}
            >
              All
            </button>
            <button
              className={`px-6 py-2 ${
                selectedCategory === 'clothing'
                  ? 'bg-red-700 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setSelectedCategory('clothing')}
            >
              Clothing
            </button>
            <button
              className={`px-6 py-2 ${
                selectedCategory === 'accessories'
                  ? 'bg-red-700 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setSelectedCategory('accessories')}
            >
              Accessories
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative aspect-square">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-red-700">${product.price}</span>
                  <button
                    onClick={() => isInCart(product.id) 
                      ? handleRemoveFromCart(product.id) 
                      : handleAddToCart(product)
                    }
                    className={`px-4 py-2 rounded-full flex items-center space-x-2 ${
                      isInCart(product.id)
                        ? 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        : 'bg-red-700 text-white hover:bg-red-800'
                    }`}
                  >
                    <ShoppingCart className="w-5 h-5" />
                    <span>{isInCart(product.id) ? 'Remove' : 'Add to Cart'}</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Apparel;