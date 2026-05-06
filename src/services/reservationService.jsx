// src/services/reservationService.js

import axiosInstance from '../../utils/axiosConfig';
import { API } from '../api/apiEndpoints';

export const createReservation = async (data) => {
  const response = await axiosInstance.post(API.RESERVATION.CREATE, data);
  return response.data;
};

export const getReservations = async () => {
  const response = await axiosInstance.get(API.RESERVATION.LIST);
  return response.data;
};

export const getReservationDetail = async (id) => {
  const response = await axiosInstance.get(API.RESERVATION.DETAIL(id));
  return response.data;
};

export const updateReservation = async (id, data) => {
  const response = await axiosInstance.put(API.RESERVATION.UPDATE(id), data);
  return response.data;
};

export const deleteReservation = async (id) => {
  const response = await axiosInstance.delete(API.RESERVATION.DELETE(id));
  return response.data;
};
