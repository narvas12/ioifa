import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FiUsers, FiGlobe, FiCalendar, FiAward, FiArrowRight } from "react-icons/fi";
import Hero from "../../components/homeComponents/HeroSection";

const stats = [
  { value: "10,000+", label: "Certified Members", icon: <FiUsers className="w-5 h-5" /> },
  { value: "60+", label: "Countries", icon: <FiGlobe className="w-5 h-5" /> },
  { value: "15+", label: "Years of Excellence", icon: <FiCalendar className="w-5 h-5" /> },
  { value: "500+", label: "Certified This Year", icon: <FiAward className="w-5 h-5" /> },
];

const testimonials = [
  {
    quote: "The CFA certification opened doors to international cases I never thought possible.",
    author: "Maria Gonzalez, CFA",
    position: "Senior Forensic Auditor, Madrid",
  },
  {
    quote: "IOIFA's training transformed how we approach complex financial investigations.",
    author: "David Chen",
    position: "Head of Compliance, Singapore",
  },
  {
    quote: "The ethical framework provided by IOIFA gives our reports unmatched credibility.",
    author: "Amina Diallo, CFA",
    position: "Forensic Consultant, Dakar",
  },
  {
    quote: "Best investment in my professional development. The network alone is invaluable.",
    author: "James Wilson",
    position: "Financial Crimes Investigator, London",
  },
];

const Index = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, when: "beforeChildren" },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 10 },
    },
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <Hero />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Stats Bar */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/60 border border-gray-700 rounded-2xl p-6 text-center hover:border-blue-500/50 transition-colors"
              whileHover={{ y: -4 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex justify-center mb-3">
                <div className="p-2 bg-blue-600/20 rounded-lg text-blue-400">
                  {stat.icon}
                </div>
              </div>
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Why Choose IOIFA */}
        <motion.div
          className="mb-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-3xl font-bold text-center text-white mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Why Choose <span className="text-blue-400">IOIFA</span> Certification?
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "🌍",
                title: "Global Recognition",
                text: "Our certifications are respected by governments, corporations, and courts worldwide.",
              },
              {
                icon: "🎓",
                title: "CFA Program",
                text: "The gold-standard Certified Forensic Auditor program with practical case studies.",
              },
              {
                icon: "🤝",
                title: "Professional Network",
                text: "Connect with 10,000+ forensic professionals across 60 countries.",
              },
              {
                icon: "📘",
                title: "Cutting-Edge Research",
                text: "Access to our latest forensic methodologies and standards library.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700 hover:border-blue-400 transition-colors"
                whileHover={{ y: -8, scale: 1.02, boxShadow: "0 10px 25px -5px rgba(0,0,0,0.3)" }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Upcoming Training */}
        <motion.div
          className="bg-gradient-to-r from-blue-800 to-blue-600 rounded-2xl p-8 md:p-12 text-white mb-24 shadow-xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Upcoming Training Programs</h2>
            <p className="text-lg mb-8 opacity-90">
              Join our world-class training sessions led by industry experts. Virtual and in-person options available.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              {[
                "Introduction to Forensic Auditing (May 25–27, 2026)",
                "Digital Forensics Certification (September 28–30, 2026)",
                "Anti-Money Laundering Specialist (July 29–31, 2026)",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white/10 p-4 rounded-lg border border-white/20 hover:bg-white/20 transition-colors"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-start gap-3">
                    <FiCalendar className="w-4 h-4 mt-0.5 flex-shrink-0 opacity-80" />
                    <span className="text-sm">{item}</span>
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.button
              onClick={() => navigate('/training')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 font-medium py-3 px-6 rounded-lg shadow-md hover:bg-gray-100 transition-colors flex items-center gap-2"
            >
              View All Training Dates
              <FiArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          className="mb-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Trusted by Professionals <span className="text-blue-400">Worldwide</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 hover:border-blue-400/50 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ y: -4 }}
              >
                <div className="text-3xl text-blue-400 mb-4 font-serif leading-none">"</div>
                <p className="text-gray-300 mb-6 italic leading-relaxed">{testimonial.quote}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-600/30 rounded-full flex items-center justify-center text-blue-400 font-semibold text-sm flex-shrink-0">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm">{testimonial.author}</p>
                    <p className="text-gray-400 text-xs">{testimonial.position}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          className="text-center py-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Advance Your Forensic Audit Career?
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Join thousands of professionals who trust IOIFA for their certification and continuing education.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              onClick={() => navigate('/membership')}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(0,0,0,0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white font-medium py-3 px-8 rounded-lg shadow-lg text-base transition-all flex items-center justify-center gap-2"
            >
              Enroll Now
              <FiArrowRight className="w-4 h-4" />
            </motion.button>
            <motion.button
              onClick={() => navigate('/certification')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent text-white font-medium py-3 px-8 rounded-lg border border-gray-600 hover:border-blue-400 text-base transition-all"
            >
              View Certifications
            </motion.button>
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
};

export default Index;
