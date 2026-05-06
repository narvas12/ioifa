import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const modal = {
  hidden: { opacity: 0, y: "-50%", scale: 0.8 },
  visible: { 
    opacity: 1, 
    y: "0%", 
    scale: 1, 
    transition: { 
      type: "spring", 
      stiffness: 300, 
      damping: 25 
    } 
  },
  exit: { opacity: 0, y: "50%", scale: 0.8 },
};

const Modal = ({ show, onClose, children }) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={onClose}
        >
          <motion.div
            className="bg-[#270252] p-4 sm:p-6 rounded-xl shadow-lg w-full max-w-full mx-2 sm:max-w-3xl relative"
            variants={modal}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-2 right-2 sm:top-3 sm:right-3 text-gray-300 hover:text-white text-xl sm:text-2xl font-bold transition-colors"
              aria-label="Close modal"
            >
              &times;
            </button>
            <div className="overflow-y-auto max-h-[80vh] sm:max-h-[85vh]">
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;