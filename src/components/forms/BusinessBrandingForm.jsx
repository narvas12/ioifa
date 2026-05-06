import React, { useState } from 'react';

const BusinessBrandingForm = () => {
  const [formData, setFormData] = useState({
    businessName: '',
    email: '',
    brandingNeeds: '',
    targetAudience: '',
    colorPreferences: '',
    competitors: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Replace with branding submission logic
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gradient-to-br from-purple-900 to-indigo-800 rounded-xl shadow-2xl">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-2">Business Branding Form</h2>
          <p className="text-purple-200">Let's create a memorable brand identity for your business</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Business Name */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-purple-100 mb-1">
              Business Name <span className="text-red-400">*</span>
            </label>
            <input
              name="businessName"
              placeholder="Your company name"
              required
              onChange={handleChange}
              className="w-full px-4 py-3 bg-purple-800 bg-opacity-50 border border-purple-600 rounded-lg text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-purple-100 mb-1">
              Contact Email <span className="text-red-400">*</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="your@email.com"
              required
              onChange={handleChange}
              className="w-full px-4 py-3 bg-purple-800 bg-opacity-50 border border-purple-600 rounded-lg text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
            />
          </div>

          {/* Target Audience */}
          <div>
            <label className="block text-sm font-medium text-purple-100 mb-1">
              Target Audience <span className="text-red-400">*</span>
            </label>
            <input
              name="targetAudience"
              placeholder="e.g., Young professionals 25-35"
              required
              onChange={handleChange}
              className="w-full px-4 py-3 bg-purple-800 bg-opacity-50 border border-purple-600 rounded-lg text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
            />
          </div>

          {/* Color Preferences */}
          <div>
            <label className="block text-sm font-medium text-purple-100 mb-1">
              Color Preferences
            </label>
            <input
              name="colorPreferences"
              placeholder="e.g., Blue and gold"
              onChange={handleChange}
              className="w-full px-4 py-3 bg-purple-800 bg-opacity-50 border border-purple-600 rounded-lg text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
            />
          </div>

          {/* Branding Needs */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-purple-100 mb-1">
              Branding Needs <span className="text-red-400">*</span>
            </label>
            <textarea
              name="brandingNeeds"
              rows="4"
              placeholder="Describe what you need (logo, website, full rebrand, etc.)"
              required
              onChange={handleChange}
              className="w-full px-4 py-3 bg-purple-800 bg-opacity-50 border border-purple-600 rounded-lg text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
            />
          </div>

          {/* Competitors */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-purple-100 mb-1">
              Competitors
            </label>
            <textarea
              name="competitors"
              rows="3"
              placeholder="List brands you admire or compete with"
              onChange={handleChange}
              className="w-full px-4 py-3 bg-purple-800 bg-opacity-50 border border-purple-600 rounded-lg text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            className="w-full py-3 px-6 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-purple-900"
          >
            Submit Branding Request
          </button>
        </div>

        <div className="text-center text-sm text-purple-300">
          <p>We'll contact you within 24 hours to discuss your branding project</p>
        </div>
      </form>
    </div>
  );
};

export default BusinessBrandingForm;