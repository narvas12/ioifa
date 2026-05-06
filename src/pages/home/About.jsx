import React from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/Navs/Header';
import Footer from '../../components/Navs/Footer';
import AboutSection from '../../components/homeComponents/AboutSection';
import ServicesSection from '../../components/homeComponents/ServicesSection';
import { FiArrowRight, FiAward, FiBarChart2, FiCpu, FiHeart, FiUsers, FiZap } from 'react-icons/fi';
import TeamSection from '../../components/homeComponents/TeamSection';

const About = () => {
  // Enhanced vision and mission data
  const aboutData = {
    vision: {
      statement: "Innovatively empowering businesses to sustainably thrive and create lasting values.",
      elements: [
        {
          icon: <FiBarChart2 className="w-6 h-6" />,
          title: "Empowerment Through Expertise",
          description: "Equipping businesses with tools, strategies, and insights through cutting-edge technology and industry expertise."
        },
        {
          icon: <FiCpu className="w-6 h-6" />,
          title: "Innovation at the Core",
          description: "Embedding innovation in every operation with AI, automation, and blockchain to keep clients competitive."
        },
        {
          icon: <FiHeart className="w-6 h-6" />,
          title: "Sustainability as Priority",
          description: "Championing eco-friendly operations that reduce carbon footprint while maintaining profitability."
        },
        {
          icon: <FiUsers className="w-6 h-6" />,
          title: "People-Centered Approach",
          description: "Building high-performing teams and inclusive cultures where people flourish."
        },
        {
          icon: <FiZap className="w-6 h-6" />,
          title: "Resilience & Adaptability",
          description: "Developing agile methodologies for risk management and long-term success."
        },
        {
          icon: <FiAward className="w-6 h-6" />,
          title: "Creating Lasting Value",
          description: "Delivering enduring impact through financial stability and community contributions."
        }
      ]
    },
    mission: {
      statement: "To transform businesses by combining strategic foresight, operational excellence, and compassionate leadership.",
      actions: [
        "Customized Business Solutions",
        "Accounting Excellence",
        "Brand Strategy Development",
        "Premium Contract Services",
        "Technology Integration",
        "Leadership Development",
        "Community Engagement",
        "Continuous Learning"
      ]
    }
  };

  return (
    <div className="bg-gray-900 text-white">
      {/* Luxury Header with Dark Transparent Background */}
      <Header />
      
      {/* Main Content */}
      <main>
        {/* Hero Banner for About Page */}
        <section className="relative h-96 flex items-center justify-center bg-gradient-to-r from-blue-900/70 to-indigo-900/70 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-30"></div>
          <div className="relative z-10 text-center px-6">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">OLIF</span>
            </motion.h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-blue-100">
              Pioneering business transformation through innovation, expertise, and sustainable solutions.
            </p>
          </div>
        </section>

        {/* Luxury About Section */}
        <AboutSection aboutData={aboutData} />

        {/* Services Showcase */}
        <ServicesSection />

        {/* Values Section */}
        <section className="py-20 pb-64 bg-gradient-to-b from-gray-900 to-blue-900/10">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300">Core Values</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-yellow-500 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { 
                  title: "Integrity", 
                  description: "Uncompromising ethics in all our dealings",
                  icon: "🤝"
                },
                { 
                  title: "Excellence", 
                  description: "Striving for the highest standards in service delivery",
                  icon: "✨"
                },
                { 
                  title: "Innovation", 
                  description: "Constantly evolving to provide cutting-edge solutions",
                  icon: "💡"
                },
                { 
                  title: "Sustainability", 
                  description: "Balancing profitability with environmental responsibility",
                  icon: "🌱"
                },
                { 
                  title: "Collaboration", 
                  description: "Building strong partnerships for mutual success",
                  icon: "🤝"
                },
                { 
                  title: "Impact", 
                  description: "Creating measurable value for our clients and communities",
                  icon: "📈"
                }
              ].map((value, index) => (
                <motion.div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-amber-400/30 transition-all"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                  <p className="text-blue-100/80">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <TeamSection />
      </main>
<Footer />
      {/* Luxury Footer would go here */}
    </div>
  );
};

export default About;