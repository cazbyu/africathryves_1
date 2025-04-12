import React, { useState } from 'react';
import { ShoppingCart, Info, Plus, Minus, ChevronLeft, ChevronRight } from 'lucide-react';
import useCartStore from '../../store/cartStore';

interface Size {
  name: string;
  price: number;
  quantity: number;
}

interface ProductImage {
  url: string;
  alt: string;
}

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  images?: ProductImage[];
  image: string;
  category: string;
  isTaxable: boolean;
  sizes: Array<{
    name: string;
    price: number;
  }>;
  details?: string[];
  video?: string;
}

const Apparel = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [showDetails, setShowDetails] = useState<Record<string, boolean>>({});
  const [showSizes, setShowSizes] = useState<Record<string, boolean>>({});
  const [quantities, setQuantities] = useState<Record<string, Record<string, number>>>({});
  const [currentImageIndex, setCurrentImageIndex] = useState<Record<string, number>>({});
  const { addItem, removeItem, items } = useCartStore();

  const products: Product[] = [
    {
      id: 'elements-thryver-hoodie',
      name: 'Africa Navy Camo Hoodie Tee',
      description: 'Limited edition navy camo hooded long-sleeve tee featuring the Thryver message.',
      price: 49.99,
      images: [
        {
          url: 'https://szcngfdwlktwaefirtux.supabase.co/storage/v1/object/public/public-assets//LS%20Shirt_Navy%20Camo%20Designs-04.png',
          alt: 'Africa Navy Camo Hoodie Tee - Front View'
        },
        {
          url: 'https://szcngfdwlktwaefirtux.supabase.co/storage/v1/object/public/public-assets//Paragon_241_Marlin_Back_High.jpg',
          alt: 'Africa Navy Camo Hoodie Tee - Back View'
        }
      ],
      image: 'https://szcngfdwlktwaefirtux.supabase.co/storage/v1/object/public/public-assets//LS%20Shirt_Navy%20Camo%20Designs-04.png',
      category: 'clothing',
      isTaxable: true,
      sizes: [
        { name: 'XS', price: 49.99 },
        { name: 'S', price: 49.99 },
        { name: 'M', price: 49.99 },
        { name: 'L', price: 49.99 },
        { name: 'XL', price: 49.99 },
        { name: '2XL', price: 51.99 },
        { name: '3XL', price: 53.99 },
        { name: '4XL', price: 55.99 }
      ],
      details: [
        '4.1 oz./yd², 100% microfiber performance polyester',
        'Mossy Oak® and Elements Aqua® sleeve and hood print',
        'Paragon Plus odor/moisture management',
        'Wrinkle-resistant finish',
        'Neck tape',
        'Hemmed sleeves and bottom',
        'UPF 50+ label on left cuff',
        'Tear away label'
      ]
    },
    {
      id: 'elements-thryver-hoodie-seafoam',
      name: 'Seafoam Camo Hoodie Tee',
      description: 'Limited edition seafoam camo hooded long-sleeve tee featuring the Thryver message.',
      price: 49.99,
      images: [
        {
          url: 'https://szcngfdwlktwaefirtux.supabase.co/storage/v1/object/public/public-assets//Camo%20LS%20Hooded%20Tee-01.png',
          alt: 'Seafoam Camo Hoodie Tee - Front View'
        },
        {
          url: 'https://szcngfdwlktwaefirtux.supabase.co/storage/v1/object/public/public-assets//Paragon_241_Seafoam_Back_High.png',
          alt: 'Seafoam Camo Hoodie Tee - Back View'
        }
      ],
      image: 'https://szcngfdwlktwaefirtux.supabase.co/storage/v1/object/public/public-assets//Camo%20LS%20Hooded%20Tee-01.png',
      category: 'clothing',
      isTaxable: true,
      sizes: [
        { name: 'XS', price: 49.99 },
        { name: 'S', price: 49.99 },
        { name: 'M', price: 49.99 },
        { name: 'L', price: 49.99 },
        { name: 'XL', price: 49.99 },
        { name: '2XL', price: 51.99 },
        { name: '3XL', price: 53.99 },
        { name: '4XL', price: 55.99 }
      ],
      details: [
        '4.1 oz./yd², 100% microfiber performance polyester',
        'Mossy Oak® and Elements Aqua® sleeve and hood print',
        'Paragon Plus odor/moisture management',
        'Wrinkle-resistant finish',
        'Neck tape',
        'Hemmed sleeves and bottom',
        'UPF 50+ label on left cuff',
        'Tear away label'
      ]
    },
    {
      id: 'thryver-tee',
      name: 'The Thryver',
      description: 'Classic fit t-shirt featuring the iconic Thryver design.',
      price: 21.99,
      images: [
        {
          url: 'https://szcngfdwlktwaefirtux.supabase.co/storage/v1/object/public/public-assets//Thryver_woman.png',
          alt: 'The Thryver T-Shirt - Female Model'
        },
        {
          url: 'https://szcngfdwlktwaefirtux.supabase.co/storage/v1/object/public/public-assets//Thryver_Male.png',
          alt: 'The Thryver T-Shirt - Male Model'
        }
      ],
      video: 'https://szcngfdwlktwaefirtux.supabase.co/storage/v1/object/public/public-assets//video-of-a-3d-round-neck-tee-with-animated-graphics-and-text-for-a-pod-sale-5602v.mp4',
      image: 'https://szcngfdwlktwaefirtux.supabase.co/storage/v1/object/public/public-assets//Thryver_woman.png',
      category: 'clothing',
      isTaxable: true,
      sizes: [
        { name: 'XS', price: 21.99 },
        { name: 'S', price: 21.99 },
        { name: 'M', price: 21.99 },
        { name: 'L', price: 21.99 },
        { name: 'XL', price: 21.99 },
        { name: '2XL', price: 23.99 },
        { name: '3XL', price: 25.99 },
        { name: '4XL', price: 27.99 }
      ]
    },
    {
      id: 'sticker-1',
      name: 'Impact Sticker Pack',
      description: 'Set of 3 vinyl stickers featuring our logo and inspirational messages',
      price: 9.99,
      image: 'https://images.unsplash.com/photo-1612160808975-ecb94e6e517b',
      category: 'accessories',
      isTaxable: true,
      sizes: []
    }
  ];

  const handleImageNavigation = (productId: string, direction: 'prev' | 'next') => {
    const product = products.find(p => p.id === productId);
    if (!product?.images) return;

    setCurrentImageIndex(prev => {
      const currentIndex = prev[productId] || 0;
      const totalImages = product.video ? product.images.length + 1 : product.images.length;
      
      if (direction === 'prev') {
        return {
          ...prev,
          [productId]: (currentIndex - 1 + totalImages) % totalImages
        };
      } else {
        return {
          ...prev,
          [productId]: (currentIndex + 1) % totalImages
        };
      }
    });
  };

  const handleQuantityChange = (productId: string, size: string, delta: number) => {
    setQuantities(prev => {
      const productQuantities = prev[productId] || {};
      const currentQuantity = productQuantities[size] || 0;
      const newQuantity = Math.max(0, currentQuantity + delta);
      
      return {
        ...prev,
        [productId]: {
          ...productQuantities,
          [size]: newQuantity
        }
      };
    });
  };

  const handleAddToCart = (product: Product) => {
    const productQuantities = quantities[product.id] || {};
    
    Object.entries(productQuantities).forEach(([size, quantity]) => {
      if (quantity > 0) {
        const sizePrice = product.sizes.find(s => s.name === size)?.price || product.price;
        addItem({
          id: `${product.id}-${size}`,
          name: `${product.name} - Size ${size}`,
          price: sizePrice,
          quantity: quantity,
          type: 'product',
          isTaxable: product.isTaxable
        });
      }
    });

    setQuantities(prev => ({
      ...prev,
      [product.id]: {}
    }));
    
    setShowSizes(prev => ({
      ...prev,
      [product.id]: false
    }));
  };

  const toggleDetails = (productId: string) => {
    setShowDetails(prev => ({
      ...prev,
      [productId]: !prev[productId]
    }));
  };

  const toggleSizes = (productId: string) => {
    setShowSizes(prev => ({
      ...prev,
      [productId]: !prev[productId]
    }));
  };

  const getTotalQuantity = (productId: string): number => {
    const productQuantities = quantities[productId] || {};
    return Object.values(productQuantities).reduce((sum, qty) => sum + qty, 0);
  };

  const getSelectedSizesSummary = (productId: string): string => {
    const productQuantities = quantities[productId] || {};
    const selectedSizes = Object.entries(productQuantities)
      .filter(([_, qty]) => qty > 0)
      .map(([size, qty]) => `${size} (${qty})`);
    
    if (selectedSizes.length === 0) return '';
    return selectedSizes.join(', ');
  };

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen pt-16">
      <div className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://szcngfdwlktwaefirtux.supabase.co/storage/v1/object/public/public-assets//hoodie-mockup-of-a-woman-playing-with-her-dog-in-the-woods-2781-el1.png"
            alt="Woman wearing Africa Thryves hoodie playing with dog"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-red-700/90 via-red-700/80 to-red-700/90" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Wear Your Impact
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Every purchase supports African entrepreneurs and their communities.
            </p>
            <button 
              onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
              className="bg-primary text-black px-8 py-3 rounded-full hover:bg-primary-dark transition-colors inline-flex items-center"
            >
              Shop Collection
            </button>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-12">
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="flex items-start space-x-2">
                <Info className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <p className="text-sm text-blue-900">
                  💡 Your purchase helps us build "Perpetual Principle" — a reinvestment fund used to launch and sustain African-owned businesses that create lasting impact.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center mb-12">
            <div className="inline-flex rounded-lg overflow-hidden">
              <button
                className={`px-6 py-2 ${
                  selectedCategory === 'all'
                    ? 'bg-red-700 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setSelectedCategory('all')}
              >
                All
              </button>
              <button
                className={`px-6 py-2 ${
                  selectedCategory === 'clothing'
                    ? 'bg-red-700 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setSelectedCategory('clothing')}
              >
                Clothing
              </button>
              <button
                className={`px-6 py-2 ${
                  selectedCategory === 'accessories'
                    ? 'bg-red-700 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setSelectedCategory('accessories')}
              >
                Accessories
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="relative aspect-square">
                  {product.video ? (
                    <>
                      {currentImageIndex[product.id] === 2 ? (
                        <video
                          src={product.video}
                          className="w-full h-full object-contain"
                          autoPlay
                          loop
                          muted
                          playsInline
                        />
                      ) : (
                        <img
                          src={product.images![currentImageIndex[product.id] || 0].url}
                          alt={product.images![currentImageIndex[product.id] || 0].alt}
                          className="w-full h-full object-contain"
                        />
                      )}
                      <button
                        onClick={() => handleImageNavigation(product.id, 'prev')}
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                      >
                        <ChevronLeft className="w-6 h-6" />
                      </button>
                      <button
                        onClick={() => handleImageNavigation(product.id, 'next')}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                      >
                        <ChevronRight className="w-6 h-6" />
                      </button>
                    </>
                  ) : product.images ? (
                    <>
                      <img
                        src={product.images[currentImageIndex[product.id] || 0].url}
                        alt={product.images[currentImageIndex[product.id] || 0].alt}
                        className="w-full h-full object-contain"
                      />
                      {product.images.length > 1 && (
                        <>
                          <button
                            onClick={() => handleImageNavigation(product.id, 'prev')}
                            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                          >
                            <ChevronLeft className="w-6 h-6" />
                          </button>
                          <button
                            onClick={() => handleImageNavigation(product.id, 'next')}
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                          >
                            <ChevronRight className="w-6 h-6" />
                          </button>
                        </>
                      )}
                    </>
                  ) : (
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain"
                    />
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>

                  <div className="mb-4 p-3 bg-blue-50 rounded-lg">
                    <p className="text-sm text-blue-900">
                      💡 Supports the Perpetual Principle fund
                    </p>
                  </div>
                  
                  {product.sizes.length > 0 && (
                    <div className="mb-6">
                      <button
                        onClick={() => toggleSizes(product.id)}
                        className="w-full px-4 py-2 bg-gray-50 hover:bg-gray-100 rounded-lg text-left flex justify-between items-center"
                      >
                        <span className="text-gray-700">
                          {showSizes[product.id] ? 'Close Size Selection' : 'Select Size & Quantity'}
                        </span>
                        {!showSizes[product.id] && getSelectedSizesSummary(product.id) && (
                          <span className="text-sm text-gray-500">
                            Selected: {getSelectedSizesSummary(product.id)}
                          </span>
                        )}
                        {showSizes[product.id] ? (
                          <Minus className="w-4 h-4 text-gray-500" />
                        ) : (
                          <Plus className="w-4 h-4 text-gray-500" />
                        )}
                      </button>

                      {showSizes[product.id] && (
                        <div className="mt-4 space-y-2 bg-gray-50 p-4 rounded-lg">
                          {product.sizes.map((size) => (
                            <div key={size.name} className="flex items-center justify-between p-2 bg-white rounded-lg">
                              <div className="flex items-center space-x-4">
                                <span className="w-12 font-medium">{size.name}</span>
                                {size.price !== product.price && (
                                  <span className="text-sm text-gray-500">
                                    (+${(size.price - product.price).toFixed(2)})
                                  </span>
                                )}
                              </div>
                              <div className="flex items-center space-x-3">
                                <button
                                  onClick={() => handleQuantityChange(product.id, size.name, -1)}
                                  className="p-1 hover:bg-gray-100 rounded"
                                  disabled={!quantities[product.id]?.[size.name]}
                                >
                                  <Minus className="w-4 h-4" />
                                </button>
                                <span className="w-8 text-center">
                                  {quantities[product.id]?.[size.name] || 0}
                                </span>
                                <button
                                  onClick={() => handleQuantityChange(product.id, size.name, 1)}
                                  className="p-1 hover:bg-gray-100 rounded"
                                >
                                  <Plus className="w-4 h-4" />
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  {product.details && (
                    <div className="mb-4">
                      <button
                        onClick={() => toggleDetails(product.id)}
                        className="flex items-center text-gray-600 hover:text-red-700"
                      >
                        <Info className="w-4 h-4 mr-1" />
                        <span className="text-sm">Product Details</span>
                      </button>
                      
                      {showDetails[product.id] && (
                        <div className="mt-2 p-3 bg-gray-50 rounded-lg">
                          <ul className="text-sm text-gray-600 space-y-1">
                            {product.details.map((detail, index) => (
                              <li key={index} className="flex items-start">
                                <span className="mr-2">•</span>
                                <span>{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}

                  <div className="flex items-center justify-between mt-4">
                    <span className="text-2xl font-bold text-red-700">${product.price.toFixed(2)}</span>
                    <button
                      onClick={() => handleAddToCart(product)}
                      disabled={getTotalQuantity(product.id) === 0}
                      className={`px-4 py-2 rounded-full flex items-center space-x-2 ${
                        getTotalQuantity(product.id) === 0
                          ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                          : 'bg-red-700 text-white hover:bg-red-800'
                      }`}
                    >
                      <ShoppingCart className="w-5 h-5" />
                      <span>Add to Cart</span>
                    </button>
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

export default Apparel;