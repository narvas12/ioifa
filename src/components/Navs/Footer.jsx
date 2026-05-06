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
import { BsTelegram } from 'react-icons/bs';
import { AiFillTikTok } from 'react-icons/ai';

const Footer = () => {
  const footerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <footer className="relative bg-gray-900 text-white overflow-hidden">
      {/* Luxury Background */}
      <div className="fixed inset-0 z-0">
        <div 
          className="absolute inset-0 bg-[url('')] bg-cover bg-center opacity-10"
          style={{ 
            transform: 'translateZ(0)',
            filter: 'blur(1px)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full filter blur-[100px]"></div>
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-purple-500 rounded-full filter blur-[100px]"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 pt-24 pb-16">
        <div className="container mx-auto px-6">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={footerVariants}
          >
            {/* Company Info */}
            <motion.div variants={itemVariants}>
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br p-3 rounded-xl mr-4">
                  <img src="https://res.cloudinary.com/deioo5lrm/image/upload/v1753652313/logo-sevees_tewwte.png" alt="IOIFA Logo" className='h-16 w-auto rounded-full'/>
                </div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-200">
                  IOIFA
                </h3>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Setting global standards for forensic auditing excellence through certification, training, and ethical leadership.
              </p>
              <div className="flex space-x-4">
                {[
                  { icon: <FiFacebook className="w-5 h-5" />, color: "bg-blue-600", link: "#" },
                  { icon: <FiLinkedin className="w-5 h-5" />, color: "bg-blue-600", link: "#" },
                  { icon: <FiTwitter className="w-5 h-5" />, color: "bg-blue-400", link: "#" },
                  { icon: <FiYoutube className="w-5 h-5" />, color: "bg-blue-700", link: "#" },
                  { icon: <FiInstagram className="w-5 h-5" />, color: "bg-gradient-to-tr from-purple-600 to-pink-600", link: "#" },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    className={`${social.color} p-2 rounded-full text-white hover:opacity-90 transition-opacity`}
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
              <h4 className="text-lg font-semibold mb-6 text-white flex items-center">
                <span className="w-4 h-0.5 bg-blue-400 mr-3"></span>
                Quick Links
              </h4>
              <ul className="space-y-4">
                {['Home', 'Certification', 'Training', 'About', 'Contact'].map((item, index) => (
                  <motion.li 
                    key={index}
                    custom={index}
                    variants={itemVariants}
                  >
                    <a 
                      href="#" 
                      className="text-gray-300 hover:text-white transition-colors flex items-center group"
                    >
                      <span className="w-2 h-2 rounded-full bg-blue-400 mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      <span className="border-b border-transparent group-hover:border-blue-400 transition-all">
                        {item}
                      </span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Certification Programs */}
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-semibold mb-6 text-white flex items-center">
                <span className="w-4 h-0.5 bg-purple-400 mr-3"></span>
                Certification Programs
              </h4>
              <ul className="space-y-4">
                {[
                  'Certified Forensic Auditor (CFA)',
                  'Digital Forensics Specialist',
                  'Anti-Money Laundering',
                  'Fraud Examination',
                  'Financial Investigation'
                ].map((service, index) => (
                  <motion.li 
                    key={index}
                    custom={index}
                    variants={itemVariants}
                  >
                    <a 
                      href="#" 
                      className="text-gray-300 hover:text-white transition-colors flex items-center group"
                    >
                      <span className="w-2 h-2 rounded-full bg-purple-400 mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      <span className="border-b border-transparent group-hover:border-purple-400 transition-all">
                        {service}
                      </span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-semibold mb-6 text-white flex items-center">
                <span className="w-4 h-0.5 bg-cyan-400 mr-3"></span>
                Contact Us
              </h4>
              <ul className="space-y-5">
                {[
                  { icon: <FiMapPin className="w-5 h-5" />, text: "Suite 8 Destiny Plaza, Km 45, Lekki -Epe Expressway, Alfa Bus Stop, Sangotedo, Lagos State, Nigeria." },
                  { icon: <FiPhone className="w-5 h-5" />, text: "+234 80 8593 9337" },
                  { icon: <FiMail className="w-5 h-5" />, text: "info@ioifa.org" },
                  { icon: <FiClock className="w-5 h-5" />, text: "Mon-Fri: 8AM - 6PM GMT" }
                ].map((contact, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-start"
                    custom={index}
                    variants={itemVariants}
                  >
                    <div className="p-2 bg-gray-800 rounded-lg mr-4 mt-0.5">
                      {contact.icon}
                    </div>
                    <span className="text-gray-300">{contact.text}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Divider */}
          <motion.div 
            className="border-t border-white/10 mb-10"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          ></motion.div>

          {/* Copyright */}
          <motion.div 
            className="flex flex-col md:flex-row justify-between items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-400 mb-4 md:mb-0 text-center md:text-left">
              &copy; {new Date().getFullYear()} Institute of International Forensic Auditors. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {['Privacy Policy', 'Terms of Service', 'Code of Ethics', 'Accreditation'].map((item, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-sm relative"
                  whileHover={{ y: -2 }}
                >
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-blue-400 transition-all duration-300 hover:w-full"></span>
                  {item}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 opacity-20"></div>
    </footer>
  );
};

export default Footer;