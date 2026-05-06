import React, { useState } from 'react';
import EmployerJobsServices from '../../services/EmployerJobsServices';

const EmployerJobForm = () => {
  const [formData, setFormData] = useState({
    company_name: '',
    contact_person: '',
    email: '',
    phone_number: '',
    industry: '',
    job_title: '',
    job_description: '',
    required_qualifications: '',
    experience_level: '',
    skills_required: '',
    employment_type: '',
    number_of_positions: '',
    salary_range: '',
    desired_start_date: '',
    specific_requirements: '',
    company_culture: '',
  });

  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  // Sanitize fields
  const payload = {
    ...formData,
    number_of_positions: formData.number_of_positions
      ? parseInt(formData.number_of_positions)
      : null,
    desired_start_date: formData.desired_start_date
      ? formData.desired_start_date
      : null,
  };

  try {
    await EmployerJobsServices.createJob(payload);
    alert('Job posting created successfully!');
    setFormData({
      company_name: '',
      contact_person: '',
      email: '',
      phone_number: '',
      industry: '',
      job_title: '',
      job_description: '',
      required_qualifications: '',
      experience_level: '',
      skills_required: '',
      employment_type: '',
      number_of_positions: '',
      salary_range: '',
      desired_start_date: '',
      specific_requirements: '',
      company_culture: '',
    });
    setCurrentStep(1);
  } catch (error) {
    console.error('Submission failed:', error);
    alert(
      error?.error || 'Submission failed. Please check all fields and try again.'
    );
  }
};


  return (
    <div className="min-h-screen bg-gray-900 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-gray-800 rounded-xl shadow-xl overflow-hidden">
        <div className="bg-indigo-900 px-6 py-4">
          <h1 className="text-2xl font-bold text-white">Create Job Posting</h1>
          <p className="mt-1 text-indigo-300">Fill out the form below to list your job opportunity</p>
          
          {/* Step indicator */}
          <div className="mt-4 flex items-center">
            {[...Array(totalSteps)].map((_, index) => (
              <React.Fragment key={index}>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    currentStep > index + 1 
                      ? 'bg-green-600 text-white' 
                      : currentStep === index + 1 
                        ? 'bg-white text-indigo-900 font-bold' 
                        : 'bg-gray-600 text-gray-300'
                  } font-medium`}
                >
                  {index + 1}
                </div>
                {index < totalSteps - 1 && (
                  <div className={`flex-1 h-1 mx-2 ${
                    currentStep > index + 1 ? 'bg-green-600' : 'bg-gray-600'
                  }`}></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Step 1: Company Information */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div className="border-b border-gray-700 pb-4">
                <h2 className="text-xl font-semibold text-white">Company Information</h2>
                <p className="mt-1 text-sm text-gray-400">Tell us about your organization</p>
              </div>
              
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="company_name" className="block text-sm font-medium text-gray-300">Company Name *</label>
                  <input
                    id="company_name"
                    name="company_name"
                    type="text"
                    required
                    onChange={handleChange}
                    value={formData.company_name}
                    className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-3 border"
                  />
                </div>
                
                <div>
                  <label htmlFor="contact_person" className="block text-sm font-medium text-gray-300">Contact Person *</label>
                  <input
                    id="contact_person"
                    name="contact_person"
                    type="text"
                    required
                    onChange={handleChange}
                    value={formData.contact_person}
                    className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-3 border"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email *</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    onChange={handleChange}
                    value={formData.email}
                    className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-3 border"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone_number" className="block text-sm font-medium text-gray-300">Phone Number *</label>
                  <input
                    id="phone_number"
                    name="phone_number"
                    type="tel"
                    required
                    onChange={handleChange}
                    value={formData.phone_number}
                    className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-3 border"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="industry" className="block text-sm font-medium text-gray-300">Industry</label>
                <input
                  id="industry"
                  name="industry"
                  type="text"
                  onChange={handleChange}
                  value={formData.industry}
                  className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-3 border"
                />
              </div>
            </div>
          )}

          {/* Step 2: Position Details */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div className="border-b border-gray-700 pb-4">
                <h2 className="text-xl font-semibold text-white">Position Details</h2>
                <p className="mt-1 text-sm text-gray-400">Describe the job role and requirements</p>
              </div>
              
              <div>
                <label htmlFor="job_title" className="block text-sm font-medium text-gray-300">Job Title *</label>
                <input
                  id="job_title"
                  name="job_title"
                  type="text"
                  required
                  onChange={handleChange}
                  value={formData.job_title}
                  className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-3 border"
                />
              </div>
              
              <div>
                <label htmlFor="job_description" className="block text-sm font-medium text-gray-300">Job Description *</label>
                <textarea
                  id="job_description"
                  name="job_description"
                  rows={5}
                  required
                  onChange={handleChange}
                  value={formData.job_description}
                  className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-3 border"
                />
              </div>
              
              <div>
                <label htmlFor="required_qualifications" className="block text-sm font-medium text-gray-300">Required Qualifications</label>
                <textarea
                  id="required_qualifications"
                  name="required_qualifications"
                  rows={4}
                  onChange={handleChange}
                  value={formData.required_qualifications}
                  className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-3 border"
                />
              </div>
              
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="experience_level" className="block text-sm font-medium text-gray-300">Experience Level</label>
                  <select
                    id="experience_level"
                    name="experience_level"
                    onChange={handleChange}
                    value={formData.experience_level}
                    className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-3 border"
                  >
                    <option value="">Select Level</option>
                    <option value="Entry Level">Entry Level</option>
                    <option value="Mid Level">Mid Level</option>
                    <option value="Senior Level">Senior Level</option>
                    <option value="Executive">Executive</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="skills_required" className="block text-sm font-medium text-gray-300">Skills Required</label>
                  <input
                    id="skills_required"
                    name="skills_required"
                    type="text"
                    onChange={handleChange}
                    value={formData.skills_required}
                    className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-3 border"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Hiring Preferences */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div className="border-b border-gray-700 pb-4">
                <h2 className="text-xl font-semibold text-white">Hiring Preferences</h2>
                <p className="mt-1 text-sm text-gray-400">Specify your employment terms</p>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="employment_type" className="block text-sm font-medium text-gray-300">Employment Type *</label>
                  <select
                    id="employment_type"
                    name="employment_type"
                    required
                    onChange={handleChange}
                    value={formData.employment_type}
                    className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-3 border"
                  >
                    <option value="">Select Type</option>
                    <option value="Full-time">Full-time</option>
                    <option value="Part-time">Part-time</option>
                    <option value="Contract">Contract</option>
                    <option value="Temporary">Temporary</option>
                    <option value="Internship">Internship</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="number_of_positions" className="block text-sm font-medium text-gray-300">Number of Positions</label>
                  <input
                    id="number_of_positions"
                    name="number_of_positions"
                    type="number"
                    min="1"
                    onChange={handleChange}
                    value={formData.number_of_positions}
                    className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-3 border"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="salary_range" className="block text-sm font-medium text-gray-300">Salary Range</label>
                  <input
                    id="salary_range"
                    name="salary_range"
                    type="text"
                    onChange={handleChange}
                    value={formData.salary_range}
                    className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-3 border"
                  />
                </div>
                
                <div>
                  <label htmlFor="desired_start_date" className="block text-sm font-medium text-gray-300">Desired Start Date</label>
                  <input
                    id="desired_start_date"
                    name="desired_start_date"
                    type="date"
                    onChange={handleChange}
                    value={formData.desired_start_date}
                    className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-3 border"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="specific_requirements" className="block text-sm font-medium text-gray-300">Specific Requirements</label>
                <textarea
                  id="specific_requirements"
                  name="specific_requirements"
                  rows={4}
                  onChange={handleChange}
                  value={formData.specific_requirements}
                  className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-3 border"
                />
              </div>
              
              <div>
                <label htmlFor="company_culture" className="block text-sm font-medium text-gray-300">Company Culture</label>
                <textarea
                  id="company_culture"
                  name="company_culture"
                  rows={4}
                  onChange={handleChange}
                  value={formData.company_culture}
                  className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-3 border"
                />
              </div>
            </div>
          )}

          {/* Navigation buttons */}
          <div className="flex justify-between pt-8">
            {currentStep > 1 ? (
              <button
                type="button"
                onClick={handlePrev}
                className="inline-flex items-center px-6 py-3 border border-gray-600 text-sm font-medium rounded-lg text-white bg-gray-700 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
              >
                Previous
              </button>
            ) : (
              <div></div> // Empty div to maintain space
            )}
            
            {currentStep < totalSteps ? (
              <button
                type="button"
                onClick={handleNext}
                className="ml-auto inline-flex items-center px-6 py-3 border border-transparent text-sm font-medium rounded-lg shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
              >
                Continue
              </button>
            ) : (
              <button
                type="submit"
                className="ml-auto inline-flex items-center px-6 py-3 border border-transparent text-sm font-medium rounded-lg shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors"
              >
                Submit Job Posting
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmployerJobForm;