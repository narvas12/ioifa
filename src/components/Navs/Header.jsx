import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiArrowRight } from 'react-icons/fi';
import { FaPhoneAlt } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about/ioifa' },
    { name: 'Certification', href: '/certification' },
    { name: 'Training', href: '/training' },
    { name: 'Gallery', href: '/gallery/march-training-induction' },
    { name: 'Research', href: '/research' },
    { name: 'Membership', href: '/membership' },
  ];

  const isActive = (href) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-lg shadow-black/20' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center cursor-pointer"
            onClick={() => navigate('/')}
          >
            <img
              src="https://res.cloudinary.com/deioo5lrm/image/upload/v1753652313/logo-sevees_tewwte.png"
              alt="IOIFA Logo"
              className="h-12 w-auto rounded-full"
            />
            <span className="text-white font-semibold text-xl ml-3">IOIFA</span>
          </motion.div>

          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => {
              const active = isActive(item.href);
              return (
                <motion.button
                  key={index}
                  onClick={() => navigate(item.href)}
                  className={`relative px-3 py-2 text-sm font-medium rounded-md transition-colors bg-transparent border-none ${
                    active ? 'text-white' : 'text-white/70 hover:text-white'
                  }`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.08 * index }}
                >
                  {active && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute inset-0 bg-white/10 rounded-md -z-10"
                      initial={false}
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  {item.name}
                  <span className={`absolute bottom-0.5 left-3 right-3 h-0.5 bg-blue-400 rounded-full transition-all duration-300 ${
                    active ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
                  }`} />
                </motion.button>
              );
            })}
            <motion.button
              onClick={() => navigate('/contact')}
              className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors ml-3 text-sm font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <FaPhoneAlt className="mr-2 text-xs" />
              Contact Us
            </motion.button>
          </nav>

          <motion.button
            className="lg:hidden text-white focus:outline-none p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </motion.button>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="lg:hidden mt-3 pb-2"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
            >
              <div className="flex flex-col space-y-1 bg-gray-900/98 rounded-xl p-3 border border-gray-700/60 shadow-xl">
                {navItems.map((item, index) => {
                  const active = isActive(item.href);
                  return (
                    <motion.button
                      key={index}
                      onClick={() => navigate(item.href)}
                      className={`text-left px-4 py-3 rounded-lg flex items-center transition-colors bg-transparent border-none text-sm font-medium ${
                        active
                          ? 'bg-blue-600/20 text-white border-l-2 border-blue-400 pl-3'
                          : 'text-white/75 hover:text-white hover:bg-white/8'
                      }`}
                      initial={{ x: -16, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.04 }}
                    >
                      {active
                        ? <span className="mr-3 w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0" />
                        : <FiArrowRight className="mr-3 text-blue-400 w-3.5 h-3.5 flex-shrink-0" />
                      }
                      {item.name}
                    </motion.button>
                  );
                })}
                <motion.button
                  onClick={() => navigate('/contact')}
                  className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors mt-2 text-sm font-medium"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaPhoneAlt className="mr-2 text-xs" />
                  Contact Us
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
