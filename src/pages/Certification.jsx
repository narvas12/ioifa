import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiBook, FiUserCheck, FiDownload, FiFileText, FiCheckCircle } from 'react-icons/fi';

const Certification = () => {
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

  const benefits = [
    {
      icon: <FiAward className="w-6 h-6" />,
      title: "Global Recognition",
      description: "Valued by employers, courts, and regulators in over 60 countries"
    },
    {
      icon: <FiBook className="w-6 h-6" />,
      title: "Comprehensive Curriculum",
      description: "Covers forensic accounting, fraud examination, and legal aspects"
    },
    {
      icon: <FiUserCheck className="w-6 h-6" />,
      title: "Practical Focus",
      description: "Real-world case studies and simulation exercises"
    }
  ];

  const tracks = [
    {
      level: "Associate",
      requirements: [
        "Bachelor's degree in related field",
        "1 year relevant experience",
        "Complete foundational courses"
      ],
      description: "Entry-level certification for professionals starting in forensic auditing"
    },
    {
      level: "Professional",
      requirements: [
        "3+ years forensic audit experience",
        "Complete advanced coursework",
        "Pass rigorous examination"
      ],
      description: "For practitioners conducting complex financial investigations"
    },
    {
      level: "Executive",
      requirements: [
        "10+ years senior-level experience",
        "Demonstrated leadership",
        "Peer review submission"
      ],
      description: "For experts leading forensic audit practices and setting standards"
    }
  ];

  return (
    <motion.div 
      className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 px-4 sm:px-6 lg:px-8 py-40"
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
            <span className="text-blue-400">Certified Forensic Auditor</span> (CFA) Program
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Earn a globally recognized designation that sets you apart in the forensic audit field
          </motion.p>
        </div>

        {/* Benefits Section */}
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
            Why Choose the CFA Certification?
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
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

        {/* Certification Tracks */}
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
              Certification Tracks
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-8">
              {tracks.map((track, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-800/50 p-6 rounded-xl border border-gray-700/50 hover:border-blue-400 transition-colors"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1.0 + index * 0.2 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-600 p-2 rounded-full mr-4">
                      <FiAward className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold text-white">CFA - {track.level}</h3>
                  </div>
                  <p className="text-gray-300 mb-6">{track.description}</p>
                  <h4 className="text-lg font-semibold text-blue-300 mb-3">Requirements:</h4>
                  <ul className="space-y-2">
                    {track.requirements.map((req, i) => (
                      <li key={i} className="flex items-start">
                        <FiCheckCircle className="text-green-400 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-gray-300">{req}</span>
                      </li>
                    ))}
                  </ul>
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
                  <h3 className="text-xl font-semibold text-white mb-1">Review Requirements</h3>
                  <p className="text-gray-400">Ensure you meet the eligibility criteria for your desired certification level</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white p-2 rounded-full mr-4 mt-1">
                  <span className="font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">Complete Training</h3>
                  <p className="text-gray-400">Finish required IOIFA training modules for your track</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white p-2 rounded-full mr-4 mt-1">
                  <span className="font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">Submit Application</h3>
                  <p className="text-gray-400">Provide documentation of qualifications and experience</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white p-2 rounded-full mr-4 mt-1">
                  <span className="font-bold">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">Pass Examination</h3>
                  <p className="text-gray-400">Complete the certification exam with a passing score</p>
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
                <h3 className="text-2xl font-bold text-white mb-4">Ready to Begin Your Certification Journey?</h3>
                <p className="text-gray-300">Download our comprehensive program brochure or start your application today.</p>
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
                    <FiFileText className="mr-2" />
                    Start Application
                  </motion.button>
                  <motion.button
                    whileHover={{ 
                      scale: 1.05,
                      backgroundColor: "rgba(255, 255, 255, 0.1)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-transparent text-white font-medium py-3 px-6 rounded-lg border border-gray-600 hover:border-blue-400 flex items-center justify-center"
                  >
                    <FiDownload className="mr-2" />
                    Download Brochure
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          className="mb-24"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0 }}
        >
          <h2 className="text-3xl font-bold text-center text-white mb-12">Frequently Asked Questions</h2>
          <div className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700 max-w-4xl mx-auto">
            {[
              {
                question: "How long does the certification process take?",
                answer: "The timeline varies by track. Associate level typically takes 3-6 months, Professional 6-12 months, and Executive 12-18 months depending on prior experience."
              },
              {
                question: "Is the CFA certification recognized internationally?",
                answer: "Yes, the IOIFA CFA is recognized in over 60 countries and accepted by regulatory bodies worldwide."
              },
              {
                question: "What is the exam format?",
                answer: "Exams consist of multiple-choice questions, case studies, and practical simulations, administered both online and at testing centers."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="border-b border-gray-700 last:border-0 py-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + index * 0.2 }}
              >
                <h3 className="text-xl font-semibold text-white mb-2">{faq.question}</h3>
                <p className="text-gray-400">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          <h2 className="text-3xl font-bold text-white mb-6">Have More Questions?</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Our certification advisors are ready to help guide you through the process.
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
            Contact Certification Support
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Certification;