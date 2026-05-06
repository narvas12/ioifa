import React, { useState } from 'react';
import AlertModal from '../../modals/AlertModal';
import { createFinantialConsultancy } from '../../services/FinantialConsultancyServices';

const FinancialConsultancyForm = ({ serviceName, onSuccess }) => {
  const [formData, setFormData] = useState({
    business_name: '',
    description: '',
    financial_challenges: '',
    services_required: '',
    scheduleConsultation: false,
    consultationDate: '',
    consultationTime: '',
    phone_number: '',
    email: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [alert, setAlert] = useState({
    show: false,
    type: '',
    title: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Basic validation
    if (!formData.business_name || !formData.phone_number || !formData.email) {
      setAlert({
        show: true,
        type: 'error',
        title: 'Missing Information',
        message: 'Please fill in all required fields'
      });
      setIsSubmitting(false);
      return;
    }

    if (formData.scheduleConsultation && (!formData.consultationDate || !formData.consultationTime)) {
      setAlert({
        show: true,
        type: 'error',
        title: 'Missing Information',
        message: 'Please select consultation date and time'
      });
      setIsSubmitting(false);
      return;
    }

    try {
      // Prepare data for API with correct field names
      const requestData = {
        business_name: formData.business_name,
        description: formData.description,
        financial_challenges: formData.financial_challenges,
        services_required: formData.services_required,
        phone_number: formData.phone_number,
        email: formData.email,
        consultation_request: formData.scheduleConsultation ? {
          date: formData.consultationDate,
          time: formData.consultationTime
        } : null,
        service_type: serviceName
      };

      // Call the API service
      const response = await createFinantialConsultancy(requestData);

      if (response.message && response.message.includes('successfully')) {
        setAlert({
          show: true,
          type: 'success',
          title: 'Request Submitted!',
          message: 'Thank you for your submission. We will contact you shortly.'
        });

        // Reset form after successful submission
        setFormData({
          business_name: '',
          description: '',
          financial_challenges: '',
          services_required: '',
          scheduleConsultation: false,
          consultationDate: '',
          consultationTime: '',
          phone_number: '',
          email: ''
        });

        // Close the modal after a delay
        setTimeout(() => {
          onSuccess();
        }, 2000);
      } else {
        throw new Error(response.message || 'Failed to submit request');
      }
    } catch (error) {
      setAlert({
        show: true,
        type: 'error',
        title: 'Submission Failed',
        message: error.message || 'There was an error submitting your request. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h3 className="text-lg font-medium text-gray-300">
          Welcome to Olif Professional Services Limited's {serviceName} service.
          Kindly furnish us with the following information:
        </h3>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Business Name */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">
            1. Business Name *
          </label>
          <input
            type="text"
            name="business_name"
            value={formData.business_name}
            onChange={handleChange}
            className="w-full bg-gray-700 border border-gray-600 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            placeholder="Your business name"
          />
        </div>

        {/* Business Description */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">
            2. Description *
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="3"
            className="w-full bg-gray-700 border border-gray-600 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            placeholder="Briefly describe your business activities"
          />
        </div>

        {/* Financial Challenges */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">
            3. Financial Challenges *
          </label>
          <textarea
            name="financial_challenges"
            value={formData.financial_challenges}
            onChange={handleChange}
            rows="3"
            className="w-full bg-gray-700 border border-gray-600 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            placeholder="What are your top financial challenges currently?"
          />
        </div>

        {/* Services Required */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">
            4. Services Required *
          </label>
          <textarea
            name="services_required"
            value={formData.services_required}
            onChange={handleChange}
            rows="3"
            className="w-full bg-gray-700 border border-gray-600 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            placeholder="What specific financial services are you seeking?"
          />
        </div>

        {/* Consultation Scheduling */}
        <div>
          <div className="flex items-center mb-2">
            <input
              type="checkbox"
              name="scheduleConsultation"
              checked={formData.scheduleConsultation}
              onChange={handleChange}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-600 rounded"
              id="scheduleConsultation"
            />
            <label htmlFor="scheduleConsultation" className="ml-2 block text-sm text-gray-300">
              5. Would you like to schedule a consultation with us?
            </label>
          </div>

          {formData.scheduleConsultation && (
            <div className="grid md:grid-cols-2 gap-4 mt-2">
              <div>
                <label className="block text-sm text-gray-300 mb-1">Preferred Date *</label>
                <input
                  type="date"
                  name="consultationDate"
                  value={formData.consultationDate}
                  onChange={handleChange}
                  className="w-full bg-gray-700 border border-gray-600 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>
              <div>
                <label className="block text-sm text-gray-300 mb-1">Preferred Time *</label>
                <input
                  type="time"
                  name="consultationTime"
                  value={formData.consultationTime}
                  onChange={handleChange}
                  className="w-full bg-gray-700 border border-gray-600 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          )}
        </div>

        {/* Contact Information */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              6. Phone Number *
            </label>
            <input
              type="tel"
              name="phone_number"
              value={formData.phone_number}
              onChange={handleChange}
              className="w-full bg-gray-700 border border-gray-600 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              placeholder="Your phone number"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              6. Email Address *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-gray-700 border border-gray-600 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              placeholder="Your email address"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 px-6 rounded-lg font-semibold text-white transition-colors ${isSubmitting
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
              'Submit Request'
            )}
          </button>
        </div>
      </form>

      <div className="mt-6 text-sm text-gray-400">
        <p>Thank you for considering Olif Professional Services Limited as your financial consultant.</p>
        <p>We look forward to discussing your financial needs and tailoring our services to support your business growth.</p>
      </div>

      <AlertModal
        show={alert.show}
        onClose={() => setAlert({ ...alert, show: false })}
        type={alert.type}
        title={alert.title}
        message={alert.message}
      />
    </div>
  );
};

export default FinancialConsultancyForm;