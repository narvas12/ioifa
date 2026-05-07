// Vercel serverless function — fetches the training gallery images from Cloudinary.
//
// Required Vercel environment variables:
//   CLOUDINARY_API_KEY     — your Cloudinary API key
//   CLOUDINARY_API_SECRET  — your Cloudinary API secret
//   CLOUDINARY_FOLDER      — folder prefix used when uploading, e.g. ioifa/training/march-2025

const CLOUD_NAME = 'deioo5lrm';

export default async function handler(req, res) {
  const { CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET, CLOUDINARY_FOLDER } = process.env;

  if (!CLOUDINARY_API_KEY || !CLOUDINARY_API_SECRET) {
    return res.status(500).json({ error: 'Cloudinary credentials are not configured.' });
  }

  const folder = CLOUDINARY_FOLDER || 'ioifa/training/march-2025';
  const auth   = Buffer.from(`${CLOUDINARY_API_KEY}:${CLOUDINARY_API_SECRET}`).toString('base64');

  try {
    const apiUrl = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/resources/image` +
      `?prefix=${encodeURIComponent(folder)}&max_results=500&type=upload`;

    const response = await fetch(apiUrl, {
      headers: { Authorization: `Basic ${auth}` },
    });

    if (!response.ok) {
      const err = await response.json();
      return res.status(response.status).json({ error: err.error?.message || 'Cloudinary error' });
    }

    const data   = await response.json();
    const images = data.resources
      .sort((a, b) => a.public_id.localeCompare(b.public_id))
      .map((r) => r.secure_url);

    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate');
    res.json({ images });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
