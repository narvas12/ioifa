// Shared helpers for the Paystack serverless functions.
// The underscore-prefixed folder is not deployed as a route by Vercel.
//
// Required Vercel environment variable:
//   PAYSTACK_SECRET_KEY — sk_test_... (Preview) / sk_live_... (Production)

const PAYSTACK_BASE_URL = 'https://api.paystack.co';

export class PaystackError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.name = 'PaystackError';
    this.statusCode = statusCode;
  }
}

export function getSecretKey() {
  const key = process.env.PAYSTACK_SECRET_KEY;
  if (!key) {
    throw new PaystackError('Paystack secret key is not configured.', 500);
  }
  return key;
}

// Calls the Paystack API and returns the parsed JSON body.
// Throws PaystackError when the HTTP status or Paystack's own
// `status` flag indicates failure.
export async function paystackFetch(path, options = {}) {
  const response = await fetch(`${PAYSTACK_BASE_URL}${path}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${getSecretKey()}`,
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });

  let json;
  try {
    json = await response.json();
  } catch {
    throw new PaystackError('Invalid response from Paystack.', response.status);
  }

  if (!response.ok || json.status === false) {
    throw new PaystackError(json.message || 'Paystack request failed.', response.status);
  }

  return json;
}

export function isValidEmail(email) {
  return typeof email === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim());
}
