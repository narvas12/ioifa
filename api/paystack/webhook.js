// POST /api/paystack/webhook
// Paystack server-to-server event notifications. Validates the
// x-paystack-signature header (HMAC-SHA512 of the raw body, keyed with
// the secret key) before trusting the payload, per Paystack docs.
//
// Uses the Web-standard handler signature so the raw request bytes are
// available for signature verification (Vercel's Node helpers would
// otherwise pre-parse the JSON body).
//
// Register https://<domain>/api/paystack/webhook in the Paystack
// Dashboard -> Settings -> API Keys & Webhooks (test and live modes
// are configured separately).

import crypto from 'node:crypto';

export async function POST(request) {
  const secretKey = process.env.PAYSTACK_SECRET_KEY;
  if (!secretKey) {
    console.error('[paystack] webhook: secret key not configured');
    return new Response('Server misconfigured', { status: 500 });
  }

  const raw = await request.text();
  const signature = request.headers.get('x-paystack-signature') || '';
  const expected = crypto.createHmac('sha512', secretKey).update(raw).digest('hex');

  const valid =
    signature.length === expected.length &&
    crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expected));

  if (!valid) {
    return new Response('Invalid signature', { status: 401 });
  }

  let event;
  try {
    event = JSON.parse(raw);
  } catch {
    return new Response('Invalid payload', { status: 400 });
  }

  if (event.event === 'charge.success') {
    console.log('[paystack] charge.success', {
      reference: event.data?.reference,
      amount: event.data?.amount,
      email: event.data?.customer?.email,
      tierId: event.data?.metadata?.tier_id,
    });
  }

  // Always acknowledge quickly so Paystack does not retry.
  return new Response('OK', { status: 200 });
}
