// GET /api/paystack/verify?reference=...
// Confirms a payment with Paystack server-side. The popup's onSuccess
// callback is never trusted on its own — this endpoint checks the
// transaction status AND that the amount/currency match the tier the
// reference was issued for.

import { PAYABLE_TIERS } from '../../shared/membershipTiers.js';
import { paystackFetch, PaystackError } from '../_lib/paystack.js';

const REFERENCE_PATTERN = /^IOIFA-MEM-[A-Z]+-\d+-[a-f0-9-]+$/i;

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { reference } = req.query || {};
  if (!reference || !REFERENCE_PATTERN.test(reference)) {
    return res.status(400).json({ error: 'A valid payment reference is required.' });
  }

  try {
    const { data } = await paystackFetch(
      `/transaction/verify/${encodeURIComponent(reference)}`
    );

    if (data.status === 'success') {
      const tier = PAYABLE_TIERS[data.metadata?.tier_id];
      const amountOk = tier && data.amount === tier.amountKobo;
      const currencyOk = data.currency === 'NGN';

      if (!amountOk || !currencyOk) {
        console.error('[paystack] verify mismatch:', {
          reference,
          tierId: data.metadata?.tier_id,
          amount: data.amount,
          currency: data.currency,
        });
        return res.status(200).json({
          status: 'failed',
          reference,
          reason: 'Payment mismatch — please contact support with your reference.',
        });
      }

      return res.status(200).json({
        status: 'success',
        reference: data.reference,
        tier: tier.name,
        amountNaira: tier.amountNaira,
        email: data.customer?.email,
        paidAt: data.paid_at,
      });
    }

    if (data.status === 'ongoing' || data.status === 'pending' || data.status === 'processing') {
      return res.status(200).json({ status: 'pending', reference });
    }

    return res.status(200).json({
      status: 'failed',
      reference,
      reason: data.gateway_response || 'Payment was not completed.',
    });
  } catch (err) {
    if (err instanceof PaystackError && err.statusCode === 404) {
      return res.status(200).json({
        status: 'failed',
        reference,
        reason: 'Transaction not found.',
      });
    }
    console.error('[paystack] verify failed:', err.message);
    return res
      .status(502)
      .json({ error: 'Could not confirm payment right now. Please try again.' });
  }
}
