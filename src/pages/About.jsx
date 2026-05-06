import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiGlobe, FiAward, FiUsers, FiBook, FiShield } from 'react-icons/fi';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren",
      },
    },
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

  const coreValues = [
    { icon: <FiShield className="w-6 h-6" />, title: "Integrity", description: "Upholding the highest ethical standards in all our activities" },
    { icon: <FiAward className="w-6 h-6" />, title: "Excellence", description: "Striving for the highest quality in forensic audit practices" },
    { icon: <FiUsers className="w-6 h-6" />, title: "Accountability", description: "Taking responsibility for our professional standards" },
    { icon: <FiGlobe className="w-6 h-6" />, title: "Global Impact", description: "Promoting consistent standards worldwide" },
    { icon: <FiBook className="w-6 h-6" />, title: "Objectivity", description: "Maintaining impartiality in all investigations" }
  ];

  const objectives = [
    "Establishing high professional standards",
    "Promoting global best practices",
    "Delivering training and certifications",
    "Fostering international collaboration",
    "Enhancing public trust in financial systems",
    "Supporting innovation through research",
    "Advocating for professionalism and ethics"
  ];

  return (
    <motion.div 
      className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 px-4 sm:px-6 lg:px-8 py-24"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Animated background elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-900 rounded-full filter blur-[100px] opacity-20"></div>
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-purple-900 rounded-full filter blur-[100px] opacity-20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            About <span className="text-blue-400">IOIFA</span>
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            The global authority in forensic audit training, certification, and professional development
          </motion.p>
        </div>

        {/* Who We Are */}
        <motion.div 
          className="grid md:grid-cols-2 gap-12 items-center mb-24"
          variants={itemVariants}
        >
          <div>
            <motion.h2 
              className="text-3xl font-bold text-white mb-6"
              initial={{ x: -50 }}
              animate={{ x: 0 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              Who We Are
            </motion.h2>
            <motion.p
              className="text-lg text-gray-300 mb-8 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              The <span className="font-semibold text-blue-400">Institute of International Forensic Auditors (IOIFA)</span> is a global professional body committed to promoting excellence, integrity, and professionalism in the field of forensic auditing. Our mission is to build a trusted network of forensic auditors through world-class education, certification, and ethical leadership.
            </motion.p>
          </div>
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="absolute -inset-4 bg-blue-900 rounded-2xl rotate-2 opacity-30"></div>
            <div className="relative bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-700">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Forensic Audit" 
                className="rounded-lg w-full h-auto brightness-90 contrast-110"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Vision & Mission */}
        <motion.div 
          className="grid md:grid-cols-2 gap-8 mb-24"
          variants={itemVariants}
        >
          <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-blue-400 transition-colors">
            <motion.h3 
              className="text-2xl font-bold text-blue-400 mb-6 flex items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <FiGlobe className="mr-3" /> Our Vision
            </motion.h3>
            <motion.blockquote
              className="text-xl text-gray-300 italic pl-6 border-l-4 border-blue-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              "To be the leading global institute in promoting excellence, integrity, and professionalism in forensic auditing and investigations."
            </motion.blockquote>
          </div>
          
          <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-purple-400 transition-colors">
            <motion.h3 
              className="text-2xl font-bold text-purple-400 mb-6 flex items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <FiAward className="mr-3" /> Our Mission
            </motion.h3>
            <motion.blockquote
              className="text-xl text-gray-300 italic pl-6 border-l-4 border-purple-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              "To empower individuals and organizations through world-class training, certification, and advocacy in forensic auditing; fostering transparency, accountability, and ethical practices in financial and corporate environments worldwide."
            </motion.blockquote>
          </div>
        </motion.div>

        {/* Core Values */}
        <motion.div 
          className="mb-24"
          variants={itemVariants}
        >
          <motion.h2
            className="text-3xl font-bold text-center text-white mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Our Core Values
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700 hover:border-blue-400 transition-colors text-center"
                variants={itemVariants}
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)"
                }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                <div className="text-blue-400 mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Objectives */}
        <motion.div
          className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl p-12 text-white shadow-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <div className="max-w-4xl mx-auto">
            <motion.h2
              className="text-3xl font-bold mb-8 text-center"
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.9 }}
            >
              Our Objectives
            </motion.h2>
            <motion.div
              className="grid md:grid-cols-2 gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0 }}
            >
              {objectives.map((objective, index) => (
                <motion.div
                  key={index}
                  className="flex items-start"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1.1 + index * 0.1 }}
                >
                  <div className="bg-blue-400 p-1 rounded-full mr-4 mt-1">
                    <FiArrowRight className="w-4 h-4 text-gray-900" />
                  </div>
                  <span className="text-gray-200">{objective}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-24"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Join Our Global Network?</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Become part of the premier community of forensic auditing professionals worldwide.
          </p>
          <motion.button
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "#3b82f6",
              boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white font-medium py-3 px-8 rounded-lg shadow-lg text-lg transition-all"
          >
            Learn About Membership
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;