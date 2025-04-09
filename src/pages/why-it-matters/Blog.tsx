import React from 'react';
import PageHero from '../../components/PageHero';

const Blog = () => {
  return (
    <div className="min-h-screen pt-16">
      <PageHero
        title="Blog"
        description="Gain insights into African entrepreneurship through our thought leadership and industry analysis."
        image="https://images.unsplash.com/photo-1593697821252-0d9a24b58da2"
        theme="yellow"
      />
      
      <div className="container mx-auto px-4 py-16">
        {/* Featured Post */}
        <div className="mb-16">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-96 lg:h-full">
                <img
                  src="https://images.unsplash.com/photo-1593697821252-0d9a24b58da2"
                  alt="Featured Post"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent lg:hidden"></div>
              </div>
              <div className="p-8 lg:p-12">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">
                    Featured
                  </span>
                  <span className="text-gray-600 text-sm">March 15, 2025</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  The Future of African Entrepreneurship: Trends and Opportunities
                </h2>
                <p className="text-gray-700 mb-6">
                  Explore the emerging trends shaping the future of business in Africa, from 
                  technological innovation to sustainable practices and cross-border expansion.
                </p>
                <div className="flex items-center space-x-4 mb-6">
                  <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a"
                    alt="Author"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">David Okonjo</h3>
                    <p className="text-gray-600">Chief Strategy Officer</p>
                  </div>
                </div>
                <a 
                  href="#" 
                  className="inline-block bg-yellow-600 text-white px-6 py-3 rounded-full hover:bg-yellow-700 transition-colors"
                >
                  Read Article
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Latest Posts */}
          <div className="lg:col-span-2 space-y-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest Posts</h2>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative h-64">
                  <img
                    src="https://images.unsplash.com/photo-1526628953301-3e589a6a8b74"
                    alt="Agriculture"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                      Agriculture
                    </span>
                    <span className="text-gray-600 text-sm">March 12, 2025</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Sustainable Farming Practices Transforming African Agriculture
                  </h3>
                  <p className="text-gray-700 mb-4">
                    How innovative farming techniques are improving yields and sustainability...
                  </p>
                  <a href="#" className="text-yellow-600 font-semibold hover:text-yellow-700">
                    Read More →
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative h-64">
                  <img
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa"
                    alt="Technology"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      Technology
                    </span>
                    <span className="text-gray-600 text-sm">March 10, 2025</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Digital Innovation Hubs: Catalyzing Tech Growth
                  </h3>
                  <p className="text-gray-700 mb-4">
                    The rise of innovation hubs and their impact on Africa's tech ecosystem...
                  </p>
                  <a href="#" className="text-yellow-600 font-semibold hover:text-yellow-700">
                    Read More →
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative h-64">
                  <img
                    src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9"
                    alt="Clean Energy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">
                      Energy
                    </span>
                    <span className="text-gray-600 text-sm">March 8, 2025</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Clean Energy Solutions for Rural Communities
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Innovative approaches to bringing sustainable power to remote areas...
                  </p>
                  <a href="#" className="text-yellow-600 font-semibold hover:text-yellow-700">
                    Read More →
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Categories</h2>
              <div className="space-y-4">
                <a href="#" className="flex items-center justify-between group">
                  <span className="text-gray-700 group-hover:text-yellow-600">Technology</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">12</span>
                </a>
                <a href="#" className="flex items-center justify-between group">
                  <span className="text-gray-700 group-hover:text-yellow-600">Agriculture</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">8</span>
                </a>
                <a href="#" className="flex items-center justify-between group">
                  <span className="text-gray-700 group-hover:text-yellow-600">Energy</span>
                  <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-sm">6</span>
                </a>
                <a href="#" className="flex items-center justify-between group">
                  <span className="text-gray-700 group-hover:text-yellow-600">Healthcare</span>
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-sm">4</span>
                </a>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Newsletter</h2>
              <p className="text-gray-700 mb-6">
                Stay updated with the latest insights and news about African entrepreneurship.
              </p>
              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                />
                <button
                  type="submit"
                  className="w-full bg-yellow-600 text-white px-6 py-2 rounded-lg hover:bg-yellow-700 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
            
            <div className="bg-yellow-600 text-white p-8 rounded-xl">
              <h2 className="text-2xl font-bold mb-6">Quick Stats</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-yellow-200">Total Posts</span>
                  <span className="text-2xl font-bold">150+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-yellow-200">Contributors</span>
                  <span className="text-2xl font-bold">25</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-yellow-200">Monthly Readers</span>
                  <span className="text-2xl font-bold">50K+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;