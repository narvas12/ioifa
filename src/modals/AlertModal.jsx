// src/components/AlertModal.jsx
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import { FaCheckCircle, FaTimesCircle, FaTimes } from 'react-icons/fa';

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const modal = {
  hidden: { y: -50, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { type: "spring", stiffness: 300, damping: 25 }
  },
  exit: { y: 50, opacity: 0 },
};

const AlertModal = ({ 
  show, 
  onClose, 
  type = 'success', 
  title, 
  message,
  duration = 3000,
  showCloseButton = true
}) => {
  // Auto-close after duration if showCloseButton is false
  useEffect(() => {
    if (show && !showCloseButton) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [show, duration, onClose, showCloseButton]);

  const config = {
    success: {
      icon: <FaCheckCircle className="w-8 h-8 text-green-500" />,
      bgColor: 'bg-green-100',
      borderColor: 'border-green-400',
      textColor: 'text-green-700'
    },
    error: {
      icon: <FaTimesCircle className="w-8 h-8 text-red-500" />,
      bgColor: 'bg-red-100',
      borderColor: 'border-red-400',
      textColor: 'text-red-700'
    },
    warning: {
      icon: <FaTimesCircle className="w-8 h-8 text-yellow-500" />,
      bgColor: 'bg-yellow-100',
      borderColor: 'border-yellow-400',
      textColor: 'text-yellow-700'
    },
    info: {
      icon: <FaCheckCircle className="w-8 h-8 text-blue-500" />,
      bgColor: 'bg-blue-100',
      borderColor: 'border-blue-400',
      textColor: 'text-blue-700'
    }
  };

  const currentConfig = config[type] || config.success;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={showCloseButton ? onClose : undefined}
        >
          <motion.div
            className={`relative max-w-md w-full mx-4 p-6 rounded-xl shadow-lg border ${currentConfig.bgColor} ${currentConfig.borderColor}`}
            variants={modal}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            {showCloseButton && (
              <button
                onClick={onClose}
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-lg font-bold"
              >
                <FaTimes />
              </button>
            )}
            
            <div className="flex flex-col items-center text-center">
              <div className="mb-4">
                {currentConfig.icon}
              </div>
              
              <h3 className={`text-xl font-bold mb-2 ${currentConfig.textColor}`}>
                {title}
              </h3>
              
              <p className={`text-sm ${currentConfig.textColor}`}>
                {message}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AlertModal;