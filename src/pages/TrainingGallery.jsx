import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiX, FiChevronLeft, FiChevronRight, FiExternalLink,
  FiCamera, FiCalendar, FiMapPin, FiLoader,
} from 'react-icons/fi';

const GOOGLE_PHOTOS_ALBUM = 'https://photos.app.goo.gl/6NoPw4xq9MLMps5P8';

const TrainingGallery = () => {
  const [photos, setPhotos]           = useState([]);
  const [loading, setLoading]         = useState(true);
  const [error, setError]             = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  useEffect(() => {
    fetch('/api/gallery')
      .then((r) => {
        if (!r.ok) throw new Error('Failed to load gallery');
        return r.json();
      })
      .then(({ images }) => {
        setPhotos(images.map((src, i) => ({ id: i + 1, src })));
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const prev = useCallback(() =>
    setLightboxIndex((i) => (i - 1 + photos.length) % photos.length), [photos.length]);

  const next = useCallback(() =>
    setLightboxIndex((i) => (i + 1) % photos.length), [photos.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKey = (e) => {
      if (e.key === 'ArrowLeft')  prev();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'Escape')     closeLightbox();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightboxIndex, prev, next]);

  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [lightboxIndex]);

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-32 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background glows */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-900 rounded-full filter blur-[100px] opacity-20" />
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-purple-900 rounded-full filter blur-[100px] opacity-20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Hero */}
        <div className="text-center mb-16">
          <motion.div
            className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 text-blue-400 text-sm font-medium px-4 py-2 rounded-full mb-6"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <FiCamera className="w-4 h-4" />
            Photo Gallery
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            March Edition of{' '}
            <span className="text-blue-400">Training &amp; Induction</span>
          </motion.h1>

          <motion.div
            className="flex flex-wrap items-center justify-center gap-6 text-gray-400 text-sm mt-4 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <span className="flex items-center gap-1.5">
              <FiCalendar className="w-4 h-4 text-blue-400" />
              March 2025
            </span>
            <span className="flex items-center gap-1.5">
              <FiMapPin className="w-4 h-4 text-blue-400" />
              IOIFA
            </span>
            {!loading && !error && (
              <span className="flex items-center gap-1.5">
                <FiCamera className="w-4 h-4 text-blue-400" />
                {photos.length} Photos
              </span>
            )}
          </motion.div>

          <motion.a
            href={GOOGLE_PHOTOS_ALBUM}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiExternalLink className="w-4 h-4" />
            View Full Album on Google Photos
          </motion.a>
        </div>

        {/* Loading */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-32 text-gray-400">
            <FiLoader className="w-8 h-8 animate-spin mb-4 text-blue-400" />
            <p>Loading gallery…</p>
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="text-center py-32">
            <p className="text-red-400 mb-4">{error}</p>
            <a
              href={GOOGLE_PHOTOS_ALBUM}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 underline"
            >
              <FiExternalLink className="w-4 h-4" />
              View the album directly on Google Photos
            </a>
          </div>
        )}

        {/* Masonry grid */}
        {!loading && !error && photos.length > 0 && (
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-3 space-y-3">
            {photos.map((photo, index) => (
              <motion.div
                key={photo.id}
                className="break-inside-avoid cursor-pointer group relative overflow-hidden rounded-xl"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: Math.min(0.03 * index, 1.5), duration: 0.4 }}
                onClick={() => openLightbox(index)}
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src={photo.src}
                  alt={`March Training & Induction — photo ${photo.id}`}
                  className="w-full h-auto block rounded-xl transition-all duration-300 group-hover:brightness-75"
                  loading="lazy"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-black/50 rounded-full p-3 backdrop-blur-sm">
                    <FiCamera className="w-5 h-5 text-white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Bottom CTA */}
        {!loading && (
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <p className="text-gray-400 mb-4">Want full resolution photos?</p>
            <a
              href={GOOGLE_PHOTOS_ALBUM}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-blue-500/40 hover:border-blue-400 text-blue-400 hover:text-white hover:bg-blue-600/20 font-medium px-6 py-3 rounded-lg transition-all"
            >
              <FiExternalLink className="w-4 h-4" />
              Open Full Google Photos Album
            </a>
          </motion.div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            {/* Close */}
            <button
              className="absolute top-4 right-4 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2.5 transition-colors z-10"
              onClick={closeLightbox}
            >
              <FiX className="w-5 h-5" />
            </button>

            {/* Counter */}
            <div className="absolute top-5 left-1/2 -translate-x-1/2 text-white/60 text-sm bg-black/40 px-3 py-1 rounded-full">
              {lightboxIndex + 1} / {photos.length}
            </div>

            {/* Prev */}
            <button
              className="absolute left-3 sm:left-5 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors z-10"
              onClick={(e) => { e.stopPropagation(); prev(); }}
            >
              <FiChevronLeft className="w-6 h-6" />
            </button>

            {/* Image */}
            <AnimatePresence mode="wait">
              <motion.img
                key={lightboxIndex}
                src={photos[lightboxIndex].src}
                alt={`March Training & Induction — photo ${lightboxIndex + 1}`}
                className="max-h-[88vh] max-w-[85vw] object-contain rounded-lg shadow-2xl"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.2 }}
                onClick={(e) => e.stopPropagation()}
              />
            </AnimatePresence>

            {/* Next */}
            <button
              className="absolute right-3 sm:right-5 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors z-10"
              onClick={(e) => { e.stopPropagation(); next(); }}
            >
              <FiChevronRight className="w-6 h-6" />
            </button>

            {/* Thumbnail strip */}
            <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 overflow-x-auto px-4 pb-1">
              {photos.map((photo, i) => (
                <button
                  key={photo.id}
                  onClick={(e) => { e.stopPropagation(); setLightboxIndex(i); }}
                  className={`flex-shrink-0 w-10 h-10 rounded-md overflow-hidden border-2 transition-all ${
                    i === lightboxIndex
                      ? 'border-blue-400 opacity-100'
                      : 'border-transparent opacity-40 hover:opacity-70'
                  }`}
                >
                  <img src={photo.src} alt="" className="w-full h-full object-cover" loading="lazy" />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default TrainingGallery;
