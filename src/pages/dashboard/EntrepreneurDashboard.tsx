import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Store, 
  CreditCard, 
  BarChart3, 
  Users, 
  Settings, 
  Star,
  TrendingUp
} from 'lucide-react';

const EntrepreneurDashboard = () => {
  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-primary via-secondary to-accent p-8 rounded-xl text-white mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome Back, Sarah!</h1>
          <p className="text-white/90">
            Manage your entrepreneurial journey and trading card presence
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-600">Card Value</h3>
              <CreditCard className="text-primary w-6 h-6" />
            </div>
            <div className="text-2xl font-bold">$2,450</div>
            <div className="text-sm text-green-600 flex items-center mt-2">
              <TrendingUp className="w-4 h-4 mr-1" />
              +15% this month
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-600">Total Sales</h3>
              <Store className="text-secondary w-6 h-6" />
            </div>
            <div className="text-2xl font-bold">142</div>
            <div className="text-sm text-gray-500 mt-2">
              Last 30 days
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-600">Followers</h3>
              <Users className="text-accent w-6 h-6" />
            </div>
            <div className="text-2xl font-bold">1,234</div>
            <div className="text-sm text-green-600 flex items-center mt-2">
              <TrendingUp className="w-4 h-4 mr-1" />
              +48 new this week
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-600">Rating</h3>
              <Star className="text-yellow-500 w-6 h-6" />
            </div>
            <div className="text-2xl font-bold">4.9/5.0</div>
            <div className="text-sm text-gray-500 mt-2">
              Based on 89 reviews
            </div>
          </div>
        </div>

        {/* Main Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <Link 
            to="/trading-cards/marketplace"
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
          >
            <Store className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Trading Card Marketplace</h3>
            <p className="text-gray-600 mb-4">
              Manage your trading cards, set prices, and track sales
            </p>
            <span className="text-primary font-semibold">View Marketplace →</span>
          </Link>

          <Link 
            to="/dashboard/analytics"
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
          >
            <BarChart3 className="w-8 h-8 text-secondary mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Analytics</h3>
            <p className="text-gray-600 mb-4">
              Track your performance metrics and market trends
            </p>
            <span className="text-secondary font-semibold">View Analytics →</span>
          </Link>

          <Link 
            to="/dashboard/settings"
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
          >
            <Settings className="w-8 h-8 text-accent mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Settings</h3>
            <p className="text-gray-600 mb-4">
              Manage your profile and account preferences
            </p>
            <span className="text-accent font-semibold">Update Settings →</span>
          </Link>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Activity</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-3 border-b">
              <div className="flex items-center space-x-4">
                <div className="bg-green-100 p-2 rounded-full">
                  <Store className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">New Card Sale</p>
                  <p className="text-sm text-gray-500">Trading card #123 sold for $150</p>
                </div>
              </div>
              <span className="text-sm text-gray-500">2 hours ago</span>
            </div>

            <div className="flex items-center justify-between py-3 border-b">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 p-2 rounded-full">
                  <Users className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">New Follower</p>
                  <p className="text-sm text-gray-500">John Doe started following you</p>
                </div>
              </div>
              <span className="text-sm text-gray-500">5 hours ago</span>
            </div>

            <div className="flex items-center justify-between py-3">
              <div className="flex items-center space-x-4">
                <div className="bg-yellow-100 p-2 rounded-full">
                  <Star className="w-5 h-5 text-yellow-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">New Review</p>
                  <p className="text-sm text-gray-500">Received a 5-star rating</p>
                </div>
              </div>
              <span className="text-sm text-gray-500">1 day ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EntrepreneurDashboard;