import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FiUsers, FiAward, FiBook, FiGlobe, FiMail, FiBriefcase } from 'react-icons/fi';
import FormModal from '../modals/FormModal';
import MembershipPaymentForm from '../components/forms/MembershipPaymentForm';
import { PAYABLE_TIERS, formatNaira } from '../../shared/membershipTiers';

const Membership = () => {
  const navigate = useNavigate();
  const [paymentModal, setPaymentModal] = useState({ open: false, tierId: 'student' });

  const openPayment = (tierId = 'student') => setPaymentModal({ open: true, tierId });
  const closePayment = () => setPaymentModal((prev) => ({ ...prev, open: false }));

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

  const membershipLevels = [
    {
      level: "Student Member",
      tierId: "student",
      requirements: "Currently enrolled in relevant academic program",
      benefits: ["Access to student resources", "Discounted training rates", "Mentorship opportunities"]
    },
    {
      level: "Affiliate Member",
      tierId: "affiliate",
      requirements: "Entry-level professionals in forensic auditing",
      benefits: ["Basic member resources", "Networking access", "Professional development tools"]
    },
    {
      level: "Certified Member",
      requirements: "Holds IOIFA certification + 3 years experience",
      benefits: ["Full resource access", "Leadership opportunities", "Research participation"]
    },
    {
      level: "Fellow",
      requirements: "10+ years experience + significant contributions",
      benefits: ["Exclusive recognition", "Board nomination rights", "Thought leadership platform"]
    }
  ];

  const benefits = [
    {
      icon: <FiGlobe className="w-6 h-6" />,
      title: "Global Recognition",
      description: "Join a respected international network of professionals"
    },
    {
      icon: <FiBook className="w-6 h-6" />,
      title: "Exclusive Resources",
      description: "Access member-only publications and research"
    },
    {
      icon: <FiUsers className="w-6 h-6" />,
      title: "Networking",
      description: "Connect with peers at global events and forums"
    },
    {
      icon: <FiAward className="w-6 h-6" />,
      title: "Career Advancement",
      description: "Enhance your professional credibility and opportunities"
    }
  ];

  const partners = [
    "Financial regulatory agencies",
    "Law enforcement organizations",
    "Global financial institutions",
    "Leading academic institutions",
    "Professional standards bodies",
    "Technology partners in forensics"
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
            Join Our <span className="text-blue-400">Global Network</span>
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Access exclusive resources, recognition, and professional opportunities through IOIFA membership
          </motion.p>
        </div>

        {/* Membership Benefits */}
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
            Membership Benefits
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 hover:border-blue-400 transition-colors"
                variants={itemVariants}
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)"
                }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                <div className="text-blue-400 mb-4 flex justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 text-center">{benefit.title}</h3>
                <p className="text-gray-400 text-center">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Membership Levels */}
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
              Membership Levels
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {membershipLevels.map((level, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-800/50 p-6 rounded-xl border border-gray-700/50 hover:border-blue-400 transition-colors flex flex-col"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1.0 + index * 0.2 }}
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-bold text-white mb-2">{level.level}</h3>
                  {level.tierId && (
                    <p className="text-2xl font-bold text-blue-300 mb-3">
                      {formatNaira(PAYABLE_TIERS[level.tierId].amountNaira)}
                    </p>
                  )}
                  <p className="text-gray-300 text-sm mb-4">{level.requirements}</p>
                  <h4 className="text-md font-semibold text-blue-300 mb-2">Benefits:</h4>
                  <ul className="space-y-2 mb-6">
                    {level.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start">
                        <div className="text-green-400 mr-2 mt-1">•</div>
                        <span className="text-gray-300 text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  {level.tierId ? (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => openPayment(level.tierId)}
                      className="mt-auto w-full bg-blue-600 hover:bg-blue-500 text-white font-medium py-2.5 px-4 rounded-lg shadow-md"
                    >
                      Pay & Join
                    </motion.button>
                  ) : (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => navigate('/contact')}
                      className="mt-auto w-full bg-transparent border border-gray-500 hover:border-blue-400 text-white font-medium py-2.5 px-4 rounded-lg"
                    >
                      Contact Us to Apply
                    </motion.button>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Application Process */}
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
              How to Apply
            </motion.h2>
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <div className="flex items-start">
                <div className="bg-blue-600 text-white p-2 rounded-full mr-4 mt-1">
                  <span className="font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">Select Membership Level</h3>
                  <p className="text-gray-400">Choose the appropriate category based on your qualifications</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white p-2 rounded-full mr-4 mt-1">
                  <span className="font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">Prepare Documentation</h3>
                  <p className="text-gray-400">Gather required certificates and references</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white p-2 rounded-full mr-4 mt-1">
                  <span className="font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">Complete Application</h3>
                  <p className="text-gray-400">Submit through our online portal</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white p-2 rounded-full mr-4 mt-1">
                  <span className="font-bold">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">Review Process</h3>
                  <p className="text-gray-400">Typically completed within 10 business days</p>
                </div>
              </div>
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
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white mb-4">Ready to Join?</h3>
                <p className="text-gray-300 mb-6">Begin your application to become an IOIFA member today.</p>
                <div className="space-y-4">
                  <motion.button
                    whileHover={{ 
                      scale: 1.05,
                      backgroundColor: "#3b82f6",
                      boxShadow: "0 5px 15px rgba(59, 130, 246, 0.4)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => openPayment()}
                    className="w-full bg-blue-600 text-white font-medium py-3 px-6 rounded-lg shadow-md flex items-center justify-center"
                  >
                    Apply for Membership
                  </motion.button>
                  <motion.button
                    whileHover={{ 
                      scale: 1.05,
                      backgroundColor: "rgba(255, 255, 255, 0.1)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-transparent text-white font-medium py-3 px-6 rounded-lg border border-gray-600 hover:border-blue-400 flex items-center justify-center"
                  >
                    Download Membership Guide
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Global Partnerships Section */}
        <motion.div
          className="mb-24"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0 }}
        >
          <h2 className="text-3xl font-bold text-center text-white mb-12">Global Partnerships</h2>
          <div className="bg-gray-800 rounded-2xl p-12 shadow-xl border border-gray-700">
            <motion.div
              className="grid md:grid-cols-2 gap-12 items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
            >
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Working Together for Greater Impact</h3>
                <p className="text-gray-300 mb-8">
                  IOIFA collaborates with leading organizations worldwide to strengthen forensic audit standards and combat financial crimes across borders.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {partners.map((partner, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start bg-gray-700/50 p-4 rounded-lg"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.2 + index * 0.1 }}
                    >
                      <div className="bg-blue-600 p-1 rounded-full mr-3 mt-0.5">
                        <FiBriefcase className="w-4 h-4" />
                      </div>
                      <span className="text-gray-300">{partner}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              <motion.div
                className="relative"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.3 }}
              >
                <div className="absolute -inset-4 bg-blue-900 rounded-2xl rotate-2 opacity-30"></div>
                <div className="relative bg-gray-700 p-8 rounded-2xl shadow-xl border border-gray-600">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-white mb-4">Become a Partner</h3>
                    <p className="text-gray-300 mb-6">
                      Join our network of global partners working to advance forensic auditing standards worldwide.
                    </p>
                    <motion.button
                      whileHover={{ 
                        scale: 1.05,
                        backgroundColor: "#3b82f6",
                        boxShadow: "0 5px 15px rgba(59, 130, 246, 0.4)"
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full bg-blue-600 text-white font-medium py-3 px-6 rounded-lg shadow-md flex items-center justify-center"
                    >
                      <FiMail className="mr-2" />
                      Contact Partnership Desk
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          <h2 className="text-3xl font-bold text-white mb-6">Join Our Professional Community</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Connect with forensic auditing professionals worldwide and advance your career.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "#3b82f6",
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => openPayment()}
              className="bg-blue-600 text-white font-medium py-3 px-8 rounded-lg shadow-lg text-lg transition-all"
            >
              Apply for Membership
            </motion.button>
            <motion.button
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(255, 255, 255, 0.1)"
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent text-white font-medium py-3 px-8 rounded-lg border border-gray-600 hover:border-blue-400 text-lg transition-all"
            >
              Explore Partnership Opportunities
            </motion.button>
          </div>
        </motion.div>
      </div>

      <FormModal show={paymentModal.open} onClose={closePayment}>
        <MembershipPaymentForm
          key={`${paymentModal.tierId}-${paymentModal.open}`}
          initialTierId={paymentModal.tierId}
          onClose={closePayment}
        />
      </FormModal>
    </motion.div>
  );
};

export default Membership;