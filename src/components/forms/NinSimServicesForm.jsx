import React, { useState } from 'react';

const NinSimServicesForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    nin: '',
    phoneNumber: '',
    dateOfBirth: '',
    networkProvider: '',
    serviceType: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Replace with actual submission logic
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-xl border border-gray-200">
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">NIN-SIM Registration Services</h2>
          <p className="text-gray-600 mt-2">Complete your NIN-SIM registration in minutes</p>
        </div>

        {/* Full Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            name="fullName"
            placeholder="Enter your full name"
            required
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* NIN Number */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            NIN Number <span className="text-red-500">*</span>
          </label>
          <input
            name="nin"
            placeholder="11-digit NIN"
            maxLength="11"
            required
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <p className="text-xs text-gray-500 mt-1">Enter your 11-digit National Identification Number</p>
        </div>

        {/* Phone Number */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            name="phoneNumber"
            placeholder="080XXXXXXXX"
            required
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Date of Birth */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Date of Birth <span className="text-red-500">*</span>
          </label>
          <input
            name="dateOfBirth"
            type="date"
            required
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Network Provider */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Network Provider <span className="text-red-500">*</span>
          </label>
          <select
            name="networkProvider"
            required
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Select your network provider</option>
            <option value="MTN">MTN</option>
            <option value="Glo">Glo</option>
            <option value="Airtel">Airtel</option>
            <option value="9mobile">9mobile</option>
          </select>
        </div>

        {/* Service Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Service Type <span className="text-red-500">*</span>
          </label>
          <select
            name="serviceType"
            required
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Select service type</option>
            <option value="link">Link NIN to SIM</option>
            <option value="verify">Verify NIN</option>
            <option value="retrieve">Retrieve NIN</option>
          </select>
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition duration-200 ease-in-out transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Submit Registration
          </button>
        </div>

        <div className="text-center text-sm text-gray-500 pt-2">
          <p>Your information will be processed securely</p>
        </div>
      </form>
    </div>
  );
};

export default NinSimServicesForm;