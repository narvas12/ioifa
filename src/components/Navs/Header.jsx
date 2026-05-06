import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX, FiArrowRight } from 'react-icons/fi';
import { FaPhoneAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about/ioifa' },
    { name: 'Certification', href: '/certification' },
    { name: 'Training', href: '/training' },
    { name: 'Research', href: '/research' },
    { name: 'Membership', href: '/membership' },

  ];

  const handleMobileLinkClick = (href) => {
    setMobileMenuOpen(false);
    navigate(href);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/95 backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center cursor-pointer"
            onClick={() => navigate('/')}
          >
            <div className="flex items-center">
              <img 
                src="https://res.cloudinary.com/deioo5lrm/image/upload/v1753652313/logo-sevees_tewwte.png" 
                alt="IOIFA Logo"
                className="h-12 w-auto rounded-full"
              />
              <span className="text-white font-semibold text-xl hidden sm:block ml-3">
                IOIFA
              </span>
              <span className="text-white font-semibold text-xl sm:hidden ml-3">
                IOIFA
              </span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item, index) => (
              <motion.button
                key={index}
                onClick={() => navigate(item.href)}
                className={`relative text-white/90 hover:text-white transition-colors text-base flex items-center bg-transparent border-none`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ 
                  color: '#ffffff',
                  transition: { duration: 0.2 }
                }}
              >
                {item.name}
                <motion.span 
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400"
                  whileHover={{ 
                    width: '100%',
                    transition: { duration: 0.3 }
                  }}
                />
              </motion.button>
            ))}
            <motion.button
              onClick={() => navigate('/contact')}
              className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors ml-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaPhoneAlt className="mr-2" />
              Contact Us
            </motion.button>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button 
            className="md:hidden text-white focus:outline-none p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div 
            className="md:hidden mt-4 pb-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item, index) => (
                <motion.button
                  key={index}
                  onClick={() => handleMobileLinkClick(item.href)}
                  className="text-white/90 hover:text-white px-4 py-3 hover:bg-white/10 rounded-lg transition-colors flex items-center bg-transparent border-none text-left"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <FiArrowRight className="mr-2 text-blue-400" />
                  {item.name}
                </motion.button>
              ))}
              <motion.button
                onClick={() => navigate('/contact')}
                className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors mt-4"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaPhoneAlt className="mr-2" />
                Call Us Now
              </motion.button>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;