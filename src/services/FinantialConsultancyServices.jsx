import axiosConfig from "../../utils/axiosConfig";
import { API } from "../api/apiEndpoints";

// CREATE
export const createFinantialConsultancy = async (data) => {
  try {
    const response = await axiosConfig.post(API.FINANTIAL_CONSULTANCY.CREATE, data);
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};

// LIST
export const getAllFinantialConsultancies = async () => {
  try {
    const response = await axiosConfig.get(API.FINANTIAL_CONSULTANCY.LIST);
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};

// DETAIL
export const getFinantialConsultancyById = async (consultancyId) => {
  try {
    const response = await axiosConfig.get(API.FINANTIAL_CONSULTANCY.DETAIL(consultancyId));
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};

// UPDATE
export const updateFinantialConsultancy = async (consultancyId, data) => {
  try {
    const response = await axiosConfig.put(API.FINANTIAL_CONSULTANCY.UPDATE(consultancyId), data);
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};

// DELETE
export const deleteFinantialConsultancy = async (consultancyId) => {
  try {
    const response = await axiosConfig.delete(API.FINANTIAL_CONSULTANCY.DELETE(consultancyId));
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};
