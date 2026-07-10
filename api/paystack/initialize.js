// POST /api/paystack/initialize
// Starts a membership payment. The client sends only the tier id and
// applicant details — the amount is derived server-side from the tier
// config so it can never be tampered with.

import crypto from 'node:crypto';
import { PAYABLE_TIERS, isPayableTier } from '../../shared/membershipTiers.js';
import { paystackFetch, isValidEmail, PaystackError } from '../_lib/paystack.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { tierId, firstName, lastName, email, phone } = req.body || {};

  if (!isPayableTier(tierId)) {
    return res.status(400).json({ error: 'Please select a valid membership tier.' });
  }
  if (!firstName || typeof firstName !== 'string' || !firstName.trim()) {
    return res.status(400).json({ error: 'First name is required.' });
  }
  if (!lastName || typeof lastName !== 'string' || !lastName.trim()) {
    return res.status(400).json({ error: 'Last name is required.' });
  }
  if (!isValidEmail(email)) {
    return res.status(400).json({ error: 'Please provide a valid email address.' });
  }
  if (!phone || typeof phone !== 'string' || phone.trim().length < 7) {
    return res.status(400).json({ error: 'Please provide a valid phone number.' });
  }

  const tier = PAYABLE_TIERS[tierId];
  const reference = `IOIFA-MEM-${tierId.toUpperCase()}-${Date.now()}-${crypto
    .randomUUID()
    .slice(0, 8)}`;

  try {
    const { data } = await paystackFetch('/transaction/initialize', {
      method: 'POST',
      body: JSON.stringify({
        email: email.trim(),
        amount: tier.amountKobo,
        currency: 'NGN',
        reference,
        metadata: {
          tier_id: tier.id,
          custom_fields: [
            {
              display_name: 'Full Name',
              variable_name: 'full_name',
              value: `${firstName.trim()} ${lastName.trim()}`,
            },
            {
              display_name: 'Phone',
              variable_name: 'phone',
              value: phone.trim(),
            },
            {
              display_name: 'Membership Tier',
              variable_name: 'membership_tier',
              value: tier.name,
            },
          ],
        },
      }),
    });

    return res.status(200).json({
      accessCode: data.access_code,
      reference: data.reference,
      authorizationUrl: data.authorization_url,
    });
  } catch (err) {
    console.error('[paystack] initialize failed:', err.message);
    const status = err instanceof PaystackError && err.statusCode === 500 ? 500 : 502;
    return res.status(status).json({ error: 'Could not start payment. Please try again.' });
  }
}
