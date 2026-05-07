import React from 'react';
import { motion } from 'framer-motion';
import { FiCalendar, FiBookOpen, FiUsers, FiLayers, FiBriefcase, FiClock, FiCheckCircle, FiCamera } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const Training = () => {
  const navigate = useNavigate();

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

  const offerings = [
    {
      icon: <FiCalendar className="w-6 h-6" />,
      title: "Virtual Workshops",
      description: "Live interactive sessions with global experts",
      highlight: "blue"
    },
    {
      icon: <FiBookOpen className="w-6 h-6" />,
      title: "Expert Masterclasses",
      description: "Deep dives into specialized forensic topics",
      highlight: "purple"
    },
    {
      icon: <FiLayers className="w-6 h-6" />,
      title: "Case Simulations",
      description: "Hands-on forensic investigation exercises",
      highlight: "cyan"
    },
    {
      icon: <FiBriefcase className="w-6 h-6" />,
      title: "Corporate Training",
      description: "Custom programs for organizational needs",
      highlight: "green"
    }
  ];

  const courses = [
    {
      title: "Introduction to Forensic Auditing",
      duration: "3 days",
      level: "Beginner",
      nextDate: "May 25-27, 2026"
    },
    {
      title: "Fraud Risk Management",
      duration: "3 days",
      level: "Intermediate",
      nextDate: "July 29-31, 2026"
    },
    {
      title: "Digital Forensics & Investigations",
      duration: "3 days",
      level: "Advanced",
      nextDate: "September 28-30, 2026"
    },
    {
      title: "Ethics & Legal Frameworks",
      duration: "3 days",
      level: "Intermediate",
      nextDate: "November 25-27, 2026"
    },
    {
      title: "Financial Statement Fraud",
      duration: "3 days",
      level: "Advanced",
      nextDate: "May 25-27, 2026"
    },
    {
      title: "Anti-Money Laundering",
      duration: "3 days",
      level: "Intermediate",
      nextDate: "July 29-31, 2026"
    }
  ];

  const trainingFeatures = [
    "CE credits for certification maintenance",
    "Access to session recordings",
    "Practical case study materials",
    "Post-training support",
    "Networking opportunities",
    "Certificate of completion"
  ];

  return (
    <motion.div 
      className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-40 px-4 sm:px-6 lg:px-8"
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
            Forensic Audit <span className="text-blue-400">Training Programs</span>
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Develop specialized skills through our expert-led workshops and masterclasses
          </motion.p>
        </div>

        {/* What We Offer */}
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
            What We Offer
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {offerings.map((item, index) => (
              <motion.div
                key={index}
                className={`bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 hover:border-${item.highlight}-400 transition-colors`}
                variants={itemVariants}
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)"
                }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                <div className={`text-${item.highlight}-400 mb-4 flex justify-center`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 text-center">{item.title}</h3>
                <p className="text-gray-400 text-center">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Sample Courses */}
        <motion.div
          className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl p-12 text-white shadow-xl mb-24"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <div className="max-w-6xl mx-auto">
            <motion.h2
              className="text-3xl font-bold mb-12 text-center"
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.9 }}
            >
              Featured Courses
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-800/50 p-6 rounded-xl border border-gray-700/50 hover:border-blue-400 transition-colors"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1.0 + index * 0.15 }}
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-bold text-white mb-3">{course.title}</h3>
                  <div className="flex items-center text-gray-300 mb-2">
                    <FiClock className="mr-2" />
                    <span>{course.duration}</span>
                    <span className="mx-2">•</span>
                    <span className="capitalize">{course.level}</span>
                  </div>
                  <div className="bg-gray-700/50 px-3 py-2 rounded-lg inline-block mb-4">
                    <span className="text-blue-300">Next session: {course.nextDate}</span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm"
                  >
                    View Details
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Training Features */}
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
              Training Program Features
            </motion.h2>
            <motion.div
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {trainingFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start bg-gray-800 p-4 rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  <div className="bg-blue-600 p-1 rounded-full mr-3 mt-0.5">
                    <FiCheckCircle className="w-4 h-4" />
                  </div>
                  <span className="text-gray-300">{feature}</span>
                </motion.div>
              ))}
            </motion.div>
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
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Training Session" 
                className="rounded-lg w-full h-auto brightness-90 contrast-110 mb-6"
              />
              <h3 className="text-2xl font-bold text-white mb-4">Experience Our Training</h3>
              <p className="text-gray-300 mb-6">Join professionals from top organizations in our interactive forensic audit training programs.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: "#3b82f6",
                    boxShadow: "0 5px 15px rgba(59, 130, 246, 0.4)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-600 text-white font-medium py-3 px-6 rounded-lg shadow-md flex items-center justify-center"
                >
                  <FiCalendar className="mr-2" />
                  View Calendar
                </motion.button>
                <motion.button
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: "rgba(255, 255, 255, 0.1)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent text-white font-medium py-3 px-6 rounded-lg border border-gray-600 hover:border-blue-400 flex items-center justify-center"
                >
                  <FiUsers className="mr-2" />
                  Group Enrollment
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          className="mb-24"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0 }}
        >
          <h2 className="text-3xl font-bold text-center text-white mb-12">What Participants Say</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote: "The digital forensics workshop transformed our investigative capabilities. The practical exercises were invaluable.",
                name: "Sarah Johnson",
                title: "Senior Auditor, Global Bank"
              },
              {
                quote: "IOIFA's training gave me the confidence to lead complex fraud investigations. The instructors are world-class.",
                name: "Michael Chen",
                title: "Forensic Consultant"
              },
              {
                quote: "Our entire compliance team benefited from the customized corporate training. Highly recommend!",
                name: "Amina Diallo",
                title: "Compliance Director"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + index * 0.2 }}
              >
                <div className="text-blue-400 text-3xl mb-4">"</div>
                <p className="text-gray-300 mb-6 italic">{testimonial.quote}</p>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* March Edition Gallery Banner */}
        <motion.div
          className="mb-24 bg-gradient-to-r from-gray-800 to-gray-700 rounded-2xl p-10 border border-gray-600 flex flex-col md:flex-row items-center justify-between gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <div className="flex items-center gap-5">
            <div className="bg-blue-600/20 border border-blue-500/30 rounded-xl p-4">
              <FiCamera className="w-8 h-8 text-blue-400" />
            </div>
            <div>
              <p className="text-blue-400 text-sm font-medium mb-1">Photo Gallery</p>
              <h3 className="text-2xl font-bold text-white">March Edition of Training &amp; Induction</h3>
              <p className="text-gray-400 mt-1">Highlights and memorable moments from our March 2025 cohort</p>
            </div>
          </div>
          <motion.button
            onClick={() => navigate('/gallery/march-training-induction')}
            className="flex-shrink-0 flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiCamera className="w-4 h-4" />
            View Gallery
          </motion.button>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Enhance Your Skills?</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Join our next training session and take your forensic audit expertise to the next level.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "#3b82f6",
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white font-medium py-3 px-8 rounded-lg shadow-lg text-lg transition-all"
            >
              Register Now
            </motion.button>
            <motion.button
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(255, 255, 255, 0.1)"
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent text-white font-medium py-3 px-8 rounded-lg border border-gray-600 hover:border-blue-400 text-lg transition-all"
            >
              Request Information
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Training;