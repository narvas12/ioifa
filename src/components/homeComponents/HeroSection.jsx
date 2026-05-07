import React from 'react';
import { motion } from 'framer-motion';


const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-900 to-blue-900 opacity-90"></div>
        <motion.div
          className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-800 rounded-full filter blur-3xl opacity-20"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 -right-20 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl opacity-10"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <span className="inline-block mb-4 px-3 py-1 text-sm font-semibold text-blue-400 bg-blue-900 bg-opacity-50 rounded-full">
                EST. 2005 • GLOBAL STANDARDS
              </span>
            </motion.div>
            
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <span className="text-blue-400">Forensic Audit</span> Excellence for the Modern World
            </motion.h1>
            
            <motion.p
              className="text-xl text-gray-300 mb-8 leading-relaxed"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              The Institute of International Forensic Auditors sets the global standard for financial investigation professionals. Our certifications are recognized by courts, governments, and corporations worldwide.
            </motion.p>
            
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 5px 15px rgba(59, 130, 246, 0.4)"
                }}
                whileTap={{ scale: 0.98 }}
                className="bg-blue-600 hover:bg-blue-500 text-white font-medium py-3 px-8 rounded-lg shadow-lg transition-all"
              >
                Start Your Certification
              </motion.button>
              
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(255, 255, 255, 0.1)"
                }}
                whileTap={{ scale: 0.98 }}
                className="bg-transparent text-white font-medium py-3 px-8 rounded-lg border border-gray-600 hover:border-blue-400 transition-all"
              >
                Explore Programs
              </motion.button>
            </motion.div>
            
            <motion.div
              className="mt-10 flex flex-wrap items-center gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              {[
                { value: '10,000+', label: 'Members' },
                { value: '60+', label: 'Countries' },
                { value: '15+', label: 'Years' },
              ].map((stat, i) => (
                <div key={i} className={`flex items-center gap-3 ${i > 0 ? 'pl-6 border-l border-gray-600' : ''}`}>
                  <div>
                    <div className="text-xl font-bold text-white">{stat.value}</div>
                    <div className="text-xs text-gray-400 uppercase tracking-wide">{stat.label}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image/content card */}
          <motion.div
            className="relative"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="absolute -inset-4 bg-blue-900 rounded-2xl rotate-3 opacity-30"></div>
            <div className="absolute -inset-4 bg-blue-800 rounded-2xl -rotate-2 opacity-20"></div>
            
            <motion.div
              className="relative bg-gray-800 p-1 rounded-2xl shadow-2xl border border-gray-700 overflow-hidden"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Forensic Audit" 
                className="w-full h-auto rounded-xl"
              />
              
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-transparent p-6">
                <div className="bg-blue-600 text-white text-sm font-medium px-3 py-1 rounded-full inline-flex items-center mb-2">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                  </svg>
                  Live Case Study
                </div>
                <h3 className="text-white font-semibold text-lg">Advanced Financial Investigation Techniques</h3>
                <p className="text-gray-300 text-sm mt-1">Next session: May 25, 2026</p>
              </div>
            </motion.div>
            
            {/* Accent elements */}
            <motion.div
              className="absolute -bottom-8 -left-8 w-32 h-32 bg-blue-600 rounded-full filter blur-xl opacity-20"
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;