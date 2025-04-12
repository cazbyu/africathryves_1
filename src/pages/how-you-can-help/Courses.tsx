import React from 'react';
import PageHero from '../../components/PageHero';
import { BookOpen, Star, Users, Clock, ArrowRight } from 'lucide-react';

const Courses = () => {
  return (
    <div className="min-h-screen pt-16">
      <PageHero
        title="Educational Courses"
        description="Learn valuable skills while supporting African entrepreneurs through our comprehensive course offerings."
        image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
        theme="red"
      />
      
      <div className="container mx-auto px-4 py-16">
        {/* Featured Courses */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="relative h-48">
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
                alt="The 6 P's of Business"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-yellow-500 text-white px-4 py-1 rounded-full">
                Featured
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">The 6 P's of Business</h3>
              <p className="text-gray-600 mb-4">
                Master the six fundamental principles of successful business management: Purpose, Product, 
                Process, People, Profit, and Perpetuation
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-gray-500">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>12 weeks</span>
                </div>
                <div className="flex items-center text-gray-500">
                  <Users className="w-4 h-4 mr-2" />
                  <span>Comprehensive Program</span>
                </div>
                <div className="flex items-center text-yellow-500">
                  <Star className="w-4 h-4 mr-2" />
                  <span>Core Curriculum</span>
                </div>
              </div>
              <button className="w-full bg-gray-500 text-white py-2 rounded-full cursor-not-allowed">
                Coming Soon
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="relative h-48">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
                alt="Financial Management"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Financial Management</h3>
              <p className="text-gray-600 mb-4">
                Learn to manage business finances and make informed financial decisions
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-gray-500">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>6 weeks</span>
                </div>
                <div className="flex items-center text-gray-500">
                  <Users className="w-4 h-4 mr-2" />
                  <span>Advanced Course</span>
                </div>
                <div className="flex items-center text-yellow-500">
                  <Star className="w-4 h-4 mr-2" />
                  <span>Specialized Training</span>
                </div>
              </div>
              <button className="w-full bg-gray-500 text-white py-2 rounded-full cursor-not-allowed">
                Coming Soon
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="relative h-48">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978"
                alt="Leadership Skills"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Leadership Skills</h3>
              <p className="text-gray-600 mb-4">
                Develop essential leadership skills for business success
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-gray-500">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>4 weeks</span>
                </div>
                <div className="flex items-center text-gray-500">
                  <Users className="w-4 h-4 mr-2" />
                  <span>Executive Training</span>
                </div>
                <div className="flex items-center text-yellow-500">
                  <Star className="w-4 h-4 mr-2" />
                  <span>Leadership Focus</span>
                </div>
              </div>
              <button className="w-full bg-gray-500 text-white py-2 rounded-full cursor-not-allowed">
                Coming Soon
              </button>
            </div>
          </div>
        </div>

        {/* Course Benefits */}
        <div className="bg-red-700 text-white p-8 rounded-xl mb-16">
          <h2 className="text-3xl font-bold mb-8">Why Take Our Courses?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <BookOpen className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Expert-Led</h3>
              <p className="text-red-100">Learn from experienced entrepreneurs and industry experts</p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Community</h3>
              <p className="text-red-100">Connect with fellow learners and entrepreneurs</p>
            </div>
            <div className="text-center">
              <Star className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Quality</h3>
              <p className="text-red-100">High-quality content and practical assignments</p>
            </div>
            <div className="text-center">
              <Clock className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Flexible</h3>
              <p className="text-red-100">Learn at your own pace with lifetime access</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Start Learning?</h2>
          <p className="text-lg text-gray-700 mb-8">
            Join thousands of learners who are building their skills while supporting 
            African entrepreneurs.
          </p>
          <button className="bg-gray-500 text-white px-8 py-3 rounded-full cursor-not-allowed inline-flex items-center">
            Coming Soon
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Courses;