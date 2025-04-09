import React, { useState } from 'react';
import { Store, DollarSign, Clock, MapPin, Phone, Mail } from 'lucide-react';
import PageHero from '../../components/PageHero';

interface FormData {
  businessName: string;
  ownerName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  businessType: string;
  discountType: 'percentage' | 'bogo';
  discountValue: string;
  description: string;
  website: string;
  acceptTerms: boolean;
}

const VendorSignup = () => {
  const [formData, setFormData] = useState<FormData>({
    businessName: '',
    ownerName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    businessType: 'restaurant',
    discountType: 'percentage',
    discountValue: '',
    description: '',
    website: '',
    acceptTerms: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: checked
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="min-h-screen pt-16">
      <PageHero
        title="Join as Vendor"
        description="Partner with us to attract new customers and support African entrepreneurs."
        image="https://images.unsplash.com/photo-1516997121675-4c2d1684aa3e"
        theme="red"
      />

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Business Information</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Business Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Business Name *
                    </label>
                    <input
                      type="text"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Owner Name *
                    </label>
                    <input
                      type="text"
                      name="ownerName"
                      value={formData.ownerName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    />
                  </div>
                </div>

                {/* Contact Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    />
                  </div>
                </div>

                {/* Address */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Street Address *
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  />
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      City *
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      State *
                    </label>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      ZIP Code *
                    </label>
                    <input
                      type="text"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    />
                  </div>
                </div>

                {/* Business Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Business Type *
                  </label>
                  <select
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  >
                    <option value="restaurant">Restaurant</option>
                    <option value="attraction">Attraction</option>
                    <option value="retail">Retail</option>
                    <option value="service">Service</option>
                  </select>
                </div>

                {/* Discount Information */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Discount Offer *</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Discount Type
                      </label>
                      <select
                        name="discountType"
                        value={formData.discountType}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                      >
                        <option value="percentage">Percentage Off</option>
                        <option value="bogo">Buy One Get One Free</option>
                      </select>
                    </div>
                    {formData.discountType === 'percentage' && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Discount Percentage
                        </label>
                        <input
                          type="number"
                          name="discountValue"
                          value={formData.discountValue}
                          onChange={handleChange}
                          min="1"
                          max="100"
                          required
                          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                        />
                      </div>
                    )}
                  </div>
                </div>

                {/* Additional Information */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Business Description
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    placeholder="Tell us about your business..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Website (Optional)
                  </label>
                  <input
                    type="url"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  />
                </div>

                {/* Terms and Conditions */}
                <div className="flex items-start space-x-2">
                  <input
                    type="checkbox"
                    name="acceptTerms"
                    checked={formData.acceptTerms}
                    onChange={handleCheckboxChange}
                    required
                    className="mt-1"
                  />
                  <label className="text-sm text-gray-700">
                    I agree to the <a href="/terms" className="text-red-700 hover:text-red-800">Terms and Conditions</a> and 
                    understand that this is a one-time discount offer.
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-red-700 text-white py-3 rounded-full hover:bg-red-800 transition-colors"
                >
                  Submit Application
                </button>
              </form>
            </div>
          </div>

          {/* Benefits Sidebar */}
          <div className="space-y-8">
            <div className="bg-red-700 text-white p-8 rounded-xl">
              <h2 className="text-2xl font-bold mb-6">Why Join Us?</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Store className="w-6 h-6 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">New Customers</h3>
                    <p className="text-red-100">
                      Attract new customers and increase your business visibility
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <DollarSign className="w-6 h-6 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">No Upfront Costs</h3>
                    <p className="text-red-100">
                      Zero fees to join - only provide a discount when customers visit
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Quick Setup</h3>
                    <p className="text-red-100">
                      Go live in the app within 7 days of approval
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Local Results with Global Impact</h3>
                    <p className="text-red-100">
                      Support African entrepreneurs while growing your business
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Need Help?</h2>
              <p className="text-gray-600 mb-6">
                Have questions about joining? Our team is here to help you get started.
              </p>
              <div className="space-y-4">
                <a 
                  href="tel:8014412322"
                  className="flex items-center text-red-700 hover:text-red-800"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  801.441.2322
                </a>
                <a 
                  href="mailto:vendors@africathryves.com"
                  className="flex items-center text-red-700 hover:text-red-800"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  vendors@africathryves.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorSignup;