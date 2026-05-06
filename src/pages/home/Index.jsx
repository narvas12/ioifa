import { motion } from "framer-motion";
import { useRef } from "react";
import Hero from "../../components/homeComponents/HeroSection";

const Index = () => {
  const constraintsRef = useRef(null);

  // Animation variants
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const cardVariants = {
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-12 px-4 sm:px-6 lg:px-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="my-12">
      <Hero />
      </div>
      <div className="max-w-7xl mx-auto">
        {/* Logo & Header */}
        <motion.div
          className="text-center mb-16"
          variants={itemVariants}
        >
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-white mb-4 mt-14"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Institute of International <span className="text-blue-400">Forensic Auditors</span>
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Global Standards. Forensic Excellence. Ethical Leadership.
          </motion.p>
        </motion.div>

        {/* Hero Section */}
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
              Elevating Forensic Audit Standards Worldwide
            </motion.h2>
            <motion.p
              className="text-lg text-gray-300 mb-8 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              The IOIFA is the global authority in forensic audit training and certification. 
              We equip professionals with cutting-edge tools, internationally recognized standards, 
              and ethical frameworks to conduct thorough financial investigations that stand up 
              to scrutiny in any jurisdiction.
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 hover:bg-blue-500 text-white font-medium py-3 px-6 rounded-lg shadow-lg transition-colors"
              >
                📚 Get Certified
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gray-800 hover:bg-gray-700 text-gray-100 font-medium py-3 px-6 rounded-lg border border-gray-600 shadow-sm transition-colors"
              >
                🔍 Learn More
              </motion.button>
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
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Forensic Audit" 
                className="rounded-lg w-full h-auto brightness-90 contrast-110"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Highlights */}
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
            Why Choose IOIFA Certification?
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "🌍",
                title: "Global Recognition",
                text: "Our certifications are respected by governments, corporations, and courts worldwide."
              },
              {
                icon: "🎓",
                title: "CFA Program",
                text: "The gold-standard Certified Forensic Auditor program with practical case studies."
              },
              {
                icon: "🤝",
                title: "Professional Network",
                text: "Connect with 10,000+ forensic professionals across 60 countries."
              },
              {
                icon: "📘",
                title: "Cutting-Edge Research",
                text: "Access to our latest forensic methodologies and standards library."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700 hover:border-blue-400 transition-colors"
                variants={cardVariants}
                whileHover="hover"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                <div className="text-4xl mb-4 text-blue-400">{item.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Training Section */}
        <motion.div
          className="bg-gradient-to-r from-blue-800 to-blue-600 rounded-2xl p-8 md:p-12 text-white mb-16 shadow-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <div className="max-w-4xl mx-auto">
            <motion.h2
              className="text-3xl font-bold mb-6"
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.9 }}
            >
              Upcoming Training Programs
            </motion.h2>
            <motion.p
              className="text-lg mb-8 opacity-90"
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ delay: 1.0 }}
            >
              Join our world-class training sessions led by industry experts. Virtual and in-person options available.
            </motion.p>
            <motion.div
              className="grid md:grid-cols-3 gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
            >
              {[
                "Advanced Financial Investigations (July 15-18)",
                "Digital Forensics Certification (August 5-9)",
                "Anti-Money Laundering Specialist (September 12-14)"
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white bg-opacity-10 p-4 rounded-lg border border-white border-opacity-20 hover:bg-opacity-20 transition-colors"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center">
                    <div className="mr-3 text-xl">📅</div>
                    <div>{item}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            <motion.div
              className="mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 font-medium py-3 px-6 rounded-lg shadow-md hover:bg-gray-100 transition-colors"
              >
                View All Training Dates
              </motion.button>
            </motion.div>
          </div>
        </motion.div>

        {/* Draggable Testimonials */}
        <motion.div
          className="mb-24"
          ref={constraintsRef}
          variants={itemVariants}
        >
          <motion.h2
            className="text-3xl font-bold text-center text-white mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
          >
            Trusted by Professionals Worldwide
          </motion.h2>
          <div className="relative overflow-hidden h-64">
            <motion.div
              className="absolute flex gap-8"
              drag="x"
              dragConstraints={constraintsRef}
              dragElastic={0.1}
              style={{ x: 0 }}
            >
              {[
                {
                  quote: "The CFA certification opened doors to international cases I never thought possible.",
                  author: "Maria Gonzalez, CFA",
                  position: "Senior Forensic Auditor, Madrid"
                },
                {
                  quote: "IOIFA's training transformed how we approach complex financial investigations.",
                  author: "David Chen",
                  position: "Head of Compliance, Singapore"
                },
                {
                  quote: "The ethical framework provided by IOIFA gives our reports unmatched credibility.",
                  author: "Amina Diallo, CFA",
                  position: "Forensic Consultant, Dakar"
                },
                {
                  quote: "Best investment in my professional development. The network alone is invaluable.",
                  author: "James Wilson",
                  position: "Financial Crimes Investigator, London"
                }
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-800 p-8 rounded-xl shadow-lg w-80 flex-shrink-0 border border-gray-700 hover:border-blue-400 transition-colors"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="text-3xl text-blue-400 mb-4">"</div>
                  <p className="text-gray-300 mb-6 italic">{testimonial.quote}</p>
                  <div>
                    <p className="font-semibold text-white">{testimonial.author}</p>
                    <p className="text-gray-400 text-sm">{testimonial.position}</p>
                  </div>
                </motion.div>
              ))}
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
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Advance Your Forensic Audit Career?</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Join thousands of professionals who trust IOIFA for their certification and continuing education.
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
            Enroll Now
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Index;