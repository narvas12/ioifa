import React from 'react';
import { motion } from 'framer-motion';
import {
  FiArrowRight,
  FiMapPin,
  FiPhone,
  FiMail,
  FiClock,
  FiFacebook,
  FiTwitter,
  FiLinkedin,
  FiInstagram,
  FiYoutube
} from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  const footerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Certification', path: '/certification' },
    { name: 'Training', path: '/training' },
    { name: 'Gallery', path: '/gallery/march-training-induction' },
    { name: 'About', path: '/about/ioifa' },
    { name: 'Contact', path: '/contact' },
  ];

  const certPrograms = [
    'Certified Forensic Auditor (CFA)',
    'Digital Forensics Specialist',
    'Anti-Money Laundering',
    'Fraud Examination',
    'Financial Investigation',
  ];

  return (
    <footer className="relative bg-gray-900 text-white overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full filter blur-[100px]" />
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-purple-500 rounded-full filter blur-[100px]" />
      </div>

      <div className="relative z-10 pt-24 pb-16">
        <div className="container mx-auto px-6">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={footerVariants}
          >
            {/* Company Info */}
            <motion.div variants={itemVariants}>
              <div className="flex items-center mb-6">
                <img
                  src="https://res.cloudinary.com/deioo5lrm/image/upload/v1753652313/logo-sevees_tewwte.png"
                  alt="IOIFA Logo"
                  className="h-16 w-auto rounded-full mr-4"
                />
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-200">
                  IOIFA
                </h3>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed text-sm">
                Setting global standards for forensic auditing excellence through certification, training, and ethical leadership.
              </p>
              <div className="flex space-x-3">
                {[
                  { icon: <FiFacebook className="w-4 h-4" />, color: 'bg-blue-600' },
                  { icon: <FiLinkedin className="w-4 h-4" />, color: 'bg-blue-700' },
                  { icon: <FiTwitter className="w-4 h-4" />, color: 'bg-sky-500' },
                  { icon: <FiYoutube className="w-4 h-4" />, color: 'bg-red-600' },
                  { icon: <FiInstagram className="w-4 h-4" />, color: 'bg-gradient-to-tr from-purple-600 to-pink-500' },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    className={`${social.color} p-2 rounded-full text-white hover:opacity-80 transition-opacity`}
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants}>
              <h4 className="text-base font-semibold mb-6 text-white flex items-center">
                <span className="w-4 h-0.5 bg-blue-400 mr-3" />
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((item, index) => (
                  <motion.li key={index} variants={itemVariants}>
                    <motion.a
                      href={item.path}
                      onClick={(e) => { e.preventDefault(); navigate(item.path); }}
                      className="text-gray-400 hover:text-white transition-colors flex items-center group text-sm cursor-pointer"
                      whileHover={{ x: 4 }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-3 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                      {item.name}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Certification Programs */}
            <motion.div variants={itemVariants}>
              <h4 className="text-base font-semibold mb-6 text-white flex items-center">
                <span className="w-4 h-0.5 bg-purple-400 mr-3" />
                Certification Programs
              </h4>
              <ul className="space-y-3">
                {certPrograms.map((service, index) => (
                  <motion.li key={index} variants={itemVariants}>
                    <motion.a
                      href="/certification"
                      onClick={(e) => { e.preventDefault(); navigate('/certification'); }}
                      className="text-gray-400 hover:text-white transition-colors flex items-center group text-sm cursor-pointer"
                      whileHover={{ x: 4 }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mr-3 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                      {service}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants}>
              <h4 className="text-base font-semibold mb-6 text-white flex items-center">
                <span className="w-4 h-0.5 bg-cyan-400 mr-3" />
                Contact Us
              </h4>
              <ul className="space-y-4">
                {[
                  { icon: <FiMapPin className="w-4 h-4" />, text: 'Suite 8 Destiny Plaza, Km 45, Lekki-Epe Expressway, Alfa Bus Stop, Sangotedo, Lagos, Nigeria.' },
                  { icon: <FiPhone className="w-4 h-4" />, text: '+234 80 8593 9337' },
                  { icon: <FiMail className="w-4 h-4" />, text: 'info@ioifa.org' },
                  { icon: <FiClock className="w-4 h-4" />, text: 'Mon–Fri: 8AM – 6PM GMT' },
                ].map((contact, index) => (
                  <motion.li key={index} className="flex items-start" variants={itemVariants}>
                    <div className="p-1.5 bg-gray-800 rounded-lg mr-3 mt-0.5 flex-shrink-0">
                      {contact.icon}
                    </div>
                    <span className="text-gray-400 text-sm leading-relaxed">{contact.text}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          <motion.div
            className="border-t border-white/10 mb-10"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          />

          <motion.div
            className="flex flex-col md:flex-row justify-between items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-500 mb-4 md:mb-0 text-center md:text-left text-sm">
              &copy; {new Date().getFullYear()} Institute of International Forensic Auditors. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {['Privacy Policy', 'Terms of Service', 'Code of Ethics', 'Accreditation'].map((item, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="text-gray-500 hover:text-gray-300 transition-colors text-sm"
                  whileHover={{ y: -2 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 opacity-30" />
    </footer>
  );
};

export default Footer;
