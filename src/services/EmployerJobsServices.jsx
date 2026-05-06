import axiosInstance from '../../utils/axiosConfig';
import { API } from '../api/apiEndpoints';

const EmployerJobsServices = {
  createJob: async (data) => {
    try {
      const response = await axiosInstance.post(API.EMPLOYER_JOBS.CREATE, data);
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },

  listJobs: async () => {
    try {
      const response = await axiosInstance.get(API.EMPLOYER_JOBS.LIST);
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },

  getJobDetail: async (jobId) => {
    try {
      const response = await axiosInstance.get(API.EMPLOYER_JOBS.DETAIL(jobId));
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },

  updateJob: async (jobId, updatedData) => {
    try {
      const response = await axiosInstance.put(API.EMPLOYER_JOBS.UPDATE(jobId), updatedData);
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },

  deleteJob: async (jobId) => {
    try {
      const response = await axiosInstance.delete(API.EMPLOYER_JOBS.DELETE(jobId));
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },
};

export default EmployerJobsServices;
