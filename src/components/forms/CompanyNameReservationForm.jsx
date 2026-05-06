import React, { useState } from 'react';
import { createReservation } from '../../services/reservationService';
import AlertModal from '../../modals/AlertModal';

const CompanyNameReservationForm = () => {
  const [alert, setAlert] = useState({
    show: false,
    type: 'success',
    title: '',
    message: '',
  });
  
  const [formData, setFormData] = useState({
    classification: '',
    specific_type: '',
    option1: '',
    option2: '',
    reason_for_search: '',
    business_category: '',
    specific_business_nature: '',
    additional_remarks: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Classification options
  const classifications = [
    'BUSINESS NAME',
    'COMPANY',
    'INCORPORATED TRUSTEE',
    'LIMITED PARTNERSHIP',
    'LIMITED LIABILITY PARTNERSHIP'
  ];

  // Specific types based on classification
  const specificTypes = {
    'BUSINESS NAME': [
      'SOLE PROPRIETOR',
      'PARTNERSHIP'
    ],
    'COMPANY': [
      'PRIVATE COMPANY LIMITED BY SHARES',
      'PRIVATE UNLIMITED COMPANY',
      'PUBLIC COMPANY LIMITED BY SHARES',
      'PUBLIC UNLIMITED COMPANY',
      'PRIVATE COMPANY LIMITED BY GUARANTEE',
      'PUBLIC COMPANY LIMITED BY GUARANTEE'
    ],
    'INCORPORATED TRUSTEE': [
      'INCORPORATED TRUSTEE'
    ],
    'LIMITED PARTNERSHIP': [
      'LIMITED PARTNERSHIP'
    ],
    'LIMITED LIABILITY PARTNERSHIP': [
      'LIMITED LIABILITY PARTNERSHIP'
    ]
  };

  // Reason for availability search options
  const searchReasons = [
    'CHANGE OF NAME',
    'GROUP HOLDINGS / CONSORTIUM',
    'NAME SUBSTITUTION',
    'NEW INCORPORATION / REGISTRATION'
  ];

  // Business categories
  const businessCategories = [
    'ACCOMMODATION AND FOOD SERVICES ACTIVITIES',
    'AGRICULTURE, FORESTRY & FISHING',
    'CONSTRUCTION',
    'EDUCATION',
    'FINANCIAL AND INSURANCE ACTIVITIES',
    'HEALTH AND SOCIAL WORK',
    'INFORMATION AND COMMUNICATION',
    'MANUFACTURING',
    'TRANSPORTATION',
    'REAL ESTATE',
    'RETAIL & TRADE',
    'COMMUNITY / CULTURAL / SOCIAL ASSOCIATIONS'
  ];

  // Specific business natures based on category
  const specificBusinessNatures = {
    'ACCOMMODATION AND FOOD SERVICES ACTIVITIES': [
      'OPERATE RESTAURANT AND CATERING SERVICES',
      'HOTEL AND HOSPITALITY',
      'BAKERY SERVICES',
      'BREWERY SERVICES',
      'OPERATE FAST FOOD OUTLET',
      'FOOD AND BEVERAGES SERVICES ACTIVITIES',
      'DEAL IN WINES, DRINKS AND BEVERAGES'
    ],
    'AGRICULTURE, FORESTRY & FISHING': [
      'CROP PRODUCTION',
      'LIVESTOCK PRODUCTION',
      'FORESTRY AND LOGGING',
      'FISHING AND AQUACULTURE'
    ],
    'CONSTRUCTION': [
      'BUILDING CONSTRUCTION',
      'CIVIL ENGINEERING',
      'SPECIALIZED CONSTRUCTION ACTIVITIES'
    ]
  };

  const handleChange = e => {
    const { name, value } = e.target;
    
    if (name === 'classification') {
      setFormData({
        ...formData,
        [name]: value,
        specific_type: ''
      });
    } else if (name === 'business_category') {
      setFormData({
        ...formData,
        [name]: value,
        specific_business_nature: ''
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const res = await createReservation(formData);
      console.log(res);

      if (res && res.message && res.message.includes('success')) {
        setAlert({
          show: true,
          type: 'success',
          title: 'Success!',
          message: 'Your company name reservation has been submitted successfully.',
        });

        // Reset form
        setFormData({
          classification: '',
          specific_type: '',
          option1: '',
          option2: '',
          reason_for_search: '',
          business_category: '',
          specific_business_nature: '',
          additional_remarks: ''
        });
      } else {
        throw new Error(res?.message || 'Failed to submit reservation');
      }
    } catch (error) {
      setAlert({
        show: true,
        type: 'error',
        title: 'Error!',
        message: error.message || 'Failed to submit your reservation. Please try again.',
      });
      console.error('Submission failed:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeAlert = () => {
    setAlert(prev => ({ ...prev, show: false }));
  };

  return (
    <div className="container mx-auto py-10">
      <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-6 bg-gray-800 rounded-lg shadow-xl space-y-6 border border-gray-700">
        <h2 className="text-2xl font-semibold text-white mb-6 pb-2 border-b border-gray-700">Company Name Reservation</h2>

        {/* Classification */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Classification *</label>
          <select
            name="classification"
            value={formData.classification}
            onChange={handleChange}
            className="w-full bg-gray-700 border border-gray-600 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          >
            <option value="">- Select Classification -</option>
            {classifications.map((classification, index) => (
              <option key={index} value={classification}>
                {classification}
              </option>
            ))}
          </select>
        </div>

        {/* Specific Type */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Specific Type *</label>
          <select
            name="specific_type"
            value={formData.specific_type}
            onChange={handleChange}
            className="w-full bg-gray-700 border border-gray-600 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
            disabled={!formData.classification}
          >
            <option value="">- Select Specific Type -</option>
            {formData.classification && specificTypes[formData.classification]?.map((type, index) => (
              <option key={index} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        {/* Proposed Names */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Option 1 *</label>
            <input
              type="text"
              name="option1"
              value={formData.option1}
              onChange={handleChange}
              className="w-full bg-gray-700 border border-gray-600 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
              placeholder="First name choice"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Option 2</label>
            <input
              type="text"
              name="option2"
              value={formData.option2}
              onChange={handleChange}
              className="w-full bg-gray-700 border border-gray-600 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Alternative name choice"
            />
          </div>
        </div>

        {/* Reason for Availability Search */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Reason For Availability Search *</label>
          <select
            name="reason_for_search"
            value={formData.reason_for_search}
            onChange={handleChange}
            className="w-full bg-gray-700 border border-gray-600 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          >
            <option value="">- Select Reason -</option>
            {searchReasons.map((reason, index) => (
              <option key={index} value={reason}>
                {reason}
              </option>
            ))}
          </select>
        </div>

        {/* Nature of Business */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Nature of Business Category *</label>
            <select
              name="business_category"
              value={formData.business_category}
              onChange={handleChange}
              className="w-full bg-gray-700 border border-gray-600 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            >
              <option value="">- Select Business Category -</option>
              {businessCategories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Specific Nature of Business *</label>
            <select
              name="specific_business_nature"
              value={formData.specific_business_nature}
              onChange={handleChange}
              className="w-full bg-gray-700 border border-gray-600 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
              disabled={!formData.business_category}
            >
              <option value="">- Select Specific Nature -</option>
              {formData.business_category && specificBusinessNatures[formData.business_category]?.map((nature, index) => (
                <option key={index} value={nature}>
                  {nature}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Additional Remarks */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Additional Remarks</label>
          <textarea
            name="additional_remarks"
            value={formData.additional_remarks}
            onChange={handleChange}
            rows="4"
            className="w-full bg-gray-700 border border-gray-600 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Any additional information about your request..."
          />
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 px-6 rounded-lg font-semibold text-white transition-colors ${
              isSubmitting 
                ? 'bg-blue-700 cursor-not-allowed' 
                : 'bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-blue-400'
            }`}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </span>
            ) : (
              'Submit Reservation'
            )}
          </button>
        </div>
      </form>

      {/* Alert Modal */}
      <AlertModal
        show={alert.show}
        type={alert.type}
        title={alert.title}
        message={alert.message}
        onClose={closeAlert}
      />
    </div>
  );
};

export default CompanyNameReservationForm;