import axios from 'axios';

// These endpoints are this project's own Vercel serverless functions
// (api/paystack/*), served from the same origin — NOT the remote
// olif.ng backend behind utils/axiosConfig, so plain axios is used.

const extractError = (error, fallback) =>
  new Error(error.response?.data?.error || fallback);

export const initializeMembershipPayment = async ({ tierId, firstName, lastName, email, phone }) => {
  try {
    const { data } = await axios.post('/api/paystack/initialize', {
      tierId,
      firstName,
      lastName,
      email,
      phone,
    });
    return data; // { accessCode, reference, authorizationUrl }
  } catch (error) {
    throw extractError(error, 'Network error — please check your connection and try again.');
  }
};

export const verifyMembershipPayment = async (reference) => {
  try {
    const { data } = await axios.get('/api/paystack/verify', {
      params: { reference },
    });
    return data; // { status: 'success' | 'pending' | 'failed', ... }
  } catch (error) {
    throw extractError(error, 'Could not confirm your payment. Please try again.');
  }
};
