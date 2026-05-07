import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMail, FiPhone, FiClock, FiMapPin, FiSend, FiCalendar, FiUser, FiMessageSquare, FiChevronDown } from 'react-icons/fi';
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [activeFaq, setActiveFaq] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const faqs = [
    {
      question: "What is forensic auditing?",
      answer: "Forensic auditing involves investigating financial records for signs of fraud, misconduct, or other irregularities — often in legal or regulatory contexts."
    },
    {
      question: "Who can become a Certified Forensic Auditor (CFA)?",
      answer: "Professionals with backgrounds in accounting, auditing, law, compliance, or fraud detection are eligible, subject to meeting certification criteria."
    },
    {
      question: "Can I take courses online?",
      answer: "Yes, IOIFA offers both virtual and in-person training options to accommodate different learning preferences and locations."
    }
  ];

  const upcomingEvent = {
    title: "IOIFA Global Forensic Audit Conference",
    date: "November 15-17, 2023",
    location: "London, UK",
    description: "Join industry leaders for the premier event in forensic auditing, featuring cutting-edge research, practical workshops, and networking opportunities."
  };

  return (
    <motion.div 
      className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-40 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Contact Header */}
        <div className="text-center mb-16">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Contact <span className="text-blue-400">IOIFA</span>
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            We'd love to hear from you. Reach out with questions, partnership inquiries, or feedback.
          </motion.p>
        </div>

        {/* Contact Information */}
        <motion.div 
          className="grid md:grid-cols-2 gap-12 mb-24"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-6">Head Office</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <FiMapPin className="text-blue-400 mt-1 mr-4 flex-shrink-0" size={20} />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Address</h3>
                  <p className="text-gray-300">Suite 8 Destiny Plaza, Km 45, Lekki-Epe Expressway, Alfa Bus Stop, Sangotedo, Lagos State, Nigeria.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <FiPhone className="text-blue-400 mt-1 mr-4 flex-shrink-0" size={20} />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Phone</h3>
                  <p className="text-gray-300">08085939337</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <FiMail className="text-blue-400 mt-1 mr-4 flex-shrink-0" size={20} />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
                  <p className="text-gray-300">info@ioifa.org</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <FiClock className="text-blue-400 mt-1 mr-4 flex-shrink-0" size={20} />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Working Hours</h3>
                  <p className="text-gray-300">Monday – Friday, 8AM – 5PM (GMT+1)</p>
                </div>
              </div>
              
              <div className="pt-4">
                <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                    <FaLinkedin size={20} />
                  </a>
                  <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                    <FaTwitter size={20} />
                  </a>
                  <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                    <FaFacebook size={20} />
                  </a>
                  <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                    <FaInstagram size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-6">Online Contact Form</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">Your Name</label>
                <div className="relative">
                  <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 pl-10 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">Your Email</label>
                <div className="relative">
                  <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 pl-10 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-gray-300 mb-2">Subject</label>
                <div className="relative">
                  <FiMessageSquare className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What is this about?"
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 pl-10 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">Your Message</label>
                <div className="relative">
                  <FiMessageSquare className="absolute left-3 top-4 text-gray-400" />
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 pl-10 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  ></textarea>
                </div>
              </div>
              
              <motion.button
                type="submit"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg shadow-md w-full"
              >
                <FiSend className="mr-2" />
                Send Message
              </motion.button>
            </form>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div 
          className="mb-24"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-center text-white mb-12">Frequently Asked Questions</h2>
          <div className="bg-gray-800 rounded-xl shadow-lg border border-gray-700 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div 
                key={index}
                className="border-b border-gray-700 last:border-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
              >
                <button
                  className="w-full px-6 py-5 text-left flex justify-between items-center"
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                >
                  <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                  <FiChevronDown className={`text-blue-400 transform transition-transform ${activeFaq === index ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {activeFaq === index && (
                    <motion.div
                      className="px-6 pb-5 text-gray-300"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Events Section */}
        <motion.div
          className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl p-12 text-white shadow-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Upcoming Events</h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">{upcomingEvent.title}</h3>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center">
                    <FiCalendar className="text-blue-300 mr-3" />
                    <span className="text-gray-200">{upcomingEvent.date}</span>
                  </div>
                  <div className="flex items-center">
                    <FiMapPin className="text-blue-300 mr-3" />
                    <span className="text-gray-200">{upcomingEvent.location}</span>
                  </div>
                </div>
                <p className="text-gray-200 mb-8">{upcomingEvent.description}</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-600 font-medium py-3 px-8 rounded-lg shadow-md"
                >
                  Register Now
                </motion.button>
              </div>
              
              <div className="relative">
                <div className="absolute -inset-4 bg-blue-900 rounded-2xl rotate-2 opacity-30"></div>
                <div className="relative bg-white p-1 rounded-xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                    alt="Conference" 
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;