// Single source of truth for membership pricing.
// Imported by BOTH the frontend (display) and the api/ serverless functions
// (amount authority) — the client never sends an amount, only a tierId.
// Amounts are in kobo (NGN x 100, integer) as required by the Paystack API.

export const PAYABLE_TIERS = {
  student: {
    id: 'student',
    name: 'Student Membership',
    amountNaira: 5000,
    amountKobo: 500000,
  },
  affiliate: {
    id: 'affiliate',
    name: 'Affiliate Membership',
    amountNaira: 20000,
    amountKobo: 2000000,
  },
};

export const isPayableTier = (id) =>
  Object.prototype.hasOwnProperty.call(PAYABLE_TIERS, id);

export const formatNaira = (n) => `₦${n.toLocaleString('en-NG')}`;
