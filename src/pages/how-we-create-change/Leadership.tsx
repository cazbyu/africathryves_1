import React from 'react';
import PageHero from '../../components/PageHero';

const Leadership = () => {
  return (
    <div className="min-h-screen pt-16">
      <PageHero
        title="Leadership Development"
        description="Through intensive training and support, we equip entrepreneurs with the leadership skills needed to build and sustain successful businesses."
        image="https://images.unsplash.com/photo-1475483768296-6163e08872a1"
        theme="green"
      />
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Main Content */}
          <div className="space-y-8">
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Developing Strong Leaders</h2>
              <p className="text-lg text-gray-700">
                Strong leadership is crucial for business success. Our comprehensive leadership 
                development program equips entrepreneurs with the skills, mindset, and confidence 
                to lead their organizations effectively.
              </p>
            </section>
            
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Leadership Programs</h2>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-xl shadow-lg border border-green-100">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Executive Training</h3>
                  <p className="text-gray-600">
                    Intensive training programs focusing on strategic thinking, decision-making, 
                    and organizational management.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-lg border border-green-100">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Mentorship</h3>
                  <p className="text-gray-600">
                    One-on-one guidance from experienced business leaders who share their expertise 
                    and insights.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-lg border border-green-100">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Leadership Workshops</h3>
                  <p className="text-gray-600">
                    Regular workshops addressing specific leadership challenges and skills development 
                    needs.
                  </p>
                </div>
              </div>
            </section>
          </div>
          
          {/* Skills and Development */}
          <div className="space-y-8">
            <div className="bg-green-900 text-white p-8 rounded-xl">
              <h2 className="text-3xl font-bold mb-6">Core Leadership Skills</h2>
              <div className="space-y-4">
                <div className="bg-white/10 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Strategic Vision</h3>
                  <div className="w-full bg-white/20 h-2 rounded-full">
                    <div className="bg-white h-full rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
                
                <div className="bg-white/10 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Team Management</h3>
                  <div className="w-full bg-white/20 h-2 rounded-full">
                    <div className="bg-white h-full rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                
                <div className="bg-white/10 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Communication</h3>
                  <div className="w-full bg-white/20 h-2 rounded-full">
                    <div className="bg-white h-full rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>
                
                <div className="bg-white/10 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Decision Making</h3>
                  <div className="w-full bg-white/20 h-2 rounded-full">
                    <div className="bg-white h-full rounded-full" style={{ width: '88%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg border border-green-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Success Stories</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a"
                    alt="Leader"
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">James Mwangi</h3>
                    <p className="text-gray-600 mb-2">CEO, TechVision Africa</p>
                    <p className="text-gray-700">
                      "The leadership program transformed how I approach business challenges. 
                      I've learned to think strategically and lead with confidence."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leadership;