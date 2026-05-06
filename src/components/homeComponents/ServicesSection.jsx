// src/components/ServicesSection.jsx
import React from 'react';
import { FaChartLine, FaRegFileAlt, FaCalculator, FaPalette, FaIdCard } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ServicesSection = () => {
  const services = [
    {
      id: 'business-consultancy',
      icon: <FaChartLine className="w-8 h-8" />,
      title: "Business Consultancy",
      items: [
        {
          title: "Proposal Development",
          description: "Expertly crafted proposals to secure funding and support for your business."
        },
        {
          title: "Budgeting",
          description: "Tailored budgeting solutions to optimize financial planning and management."
        },
        {
          title: "Company Profile",
          description: "Professional company profiles to showcase your business's strengths and values."
        },
        {
          title: "Hiring",
          description: "Strategic recruitment services to find the best talent for your organization."
        },
        {
          title: "Training",
          description: "Customized training programs to enhance employee skills and performance."
        }
      ],
      color: "from-blue-900 to-blue-700",
      accent: "bg-blue-500"
    },
    {
      id: 'business-registration',
      icon: <FaRegFileAlt className="w-8 h-8" />,
      title: "Business Registration",
      items: [
        {
          title: "CAC Registration",
          description: "Streamlined registration with the Corporate Affairs Commission."
        },
        {
          title: "TIN Registration",
          description: "Tax Identification Number registration with the Federal Inland Revenue Service."
        },
        {
          title: "PENCOM Registration",
          description: "Pension Commission registration for compliance and regulatory requirements."
        },
        {
          title: "SCUML Registration",
          description: "Special Control Unit against Money Laundering registration for SMEs."
        },
        {
          title: "BPP Registration",
          description: "Bureau of Public Procurement registration for businesses in the public sector."
        },
        {
          title: "ITF Registration",
          description: "Industrial Training Fund registration for employee training and development."
        },
        {
          title: "NSITF Registration",
          description: "Nigeria Social Insurance Trust Fund registration for employee benefits."
        }
      ],
      color: "from-purple-900 to-purple-700",
      accent: "bg-purple-500"
    },
    {
      id: 'financial-consultancy',
      icon: <FaCalculator className="w-8 h-8" />,
      title: "Financial Consultancy",
      items: [
        {
          title: "Bookkeeping",
          description: "Accurate and timely bookkeeping services for financial record-keeping."
        },
        {
          title: "Data Entry",
          description: "Efficient data entry services for financial data management."
        },
        {
          title: "Annual Returns",
          description: "Preparation and filing of annual returns with regulatory bodies."
        },
        {
          title: "Financial Statements",
          description: "Preparation of financial statements for businesses and organizations."
        },
        {
          title: "Tax Filing",
          description: "Expert tax filing services to ensure compliance and minimize liabilities."
        },
        {
          title: "PAYE",
          description: "Pay As You Earn services for employee tax compliance."
        }
      ],
      color: "from-green-900 to-green-700",
      accent: "bg-green-500"
    },
    {
      id: 'business-branding',
      icon: <FaPalette className="w-8 h-8" />,
      title: "Business Branding",
      items: [
        {
          title: "Graphics Design",
          description: "Creative graphics design services for logos, brochures, and marketing materials."
        },
        {
          title: "Website/App Development",
          description: "Customized website and application development for businesses."
        },
        {
          title: "Banners & Signage",
          description: "Design and production of visual marketing materials."
        },
        {
          title: "Billboards",
          description: "Professional billboard design and placement services."
        },
        {
          title: "Social Media Management",
          description: "Strategic social media management to enhance online presence."
        },
        {
          title: "Marketing",
          description: "Targeted marketing services to reach your business goals."
        }
      ],
      color: "from-amber-900 to-amber-700",
      accent: "bg-amber-500"
    },
    {
      id: 'nin-sim-services',
      icon: <FaIdCard className="w-8 h-8" />,
      title: "NIN & SIM Services",
      items: [
        {
          title: "NIN Registration",
          description: "New NIN registration services for individuals."
        },
        {
          title: "NIN Update",
          description: "Updating existing NIN information for accuracy."
        },
        {
          title: "NIN Printing",
          description: "Printing of NIN documents for official use."
        },
        {
          title: "NIN Reprinting",
          description: "Reprinting services for lost or damaged NIN documents."
        },
        {
          title: "SIM Registration",
          description: "SIM card registration services for individuals and businesses."
        }
      ],
      color: "from-red-900 to-red-700",
      accent: "bg-red-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { 
      y: -50,
      opacity: 0,
      scale: 0.95
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
        duration: 0.5
      }
    },
    hover: {
      y: -15,
      transition: { 
        type: "spring",
        stiffness: 300
      }
    }
  };

  const listItemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: (i) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.05 + 0.3,
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    })
  };

  return (
    <section id='services' className="py-24 bg-gradient-to-b from-[#0a0e29] to-[#1a1f4d] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full filter blur-[100px]"></div>
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-purple-500 rounded-full filter blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            variants={itemVariants}
          >
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-200">Premium Services</span>
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-300 mx-auto mb-8 rounded-full"
            variants={itemVariants}
          ></motion.div>
          <motion.p 
            className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Bespoke solutions crafted to elevate your business to new heights of success and innovation.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {services.map((service, index) => (
            <Link 
              to={`/services/${service.id}`} 
              key={index}
              className="group block"
            >
              <motion.div
                className="group bg-white/5 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 border border-white/10 hover:border-white/20 relative h-full"
                variants={itemVariants}
                whileHover="hover"
              >
                {/* Glow effect */}
                <div className={`absolute inset-0 ${service.accent} opacity-0 group-hover:opacity-10 blur-md transition-opacity duration-500`}></div>
                
                {/* Service Header */}
                <motion.div 
                  className={`bg-gradient-to-r ${service.color} p-8 text-white relative overflow-hidden`}
                  variants={itemVariants}
                >
                  <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full"></div>
                  <div className="flex items-center gap-6 relative z-10">
                    <motion.div 
                      className="p-4 bg-white/20 rounded-xl backdrop-blur-sm border border-white/10 group-hover:bg-white/30 transition-all duration-500"
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      transition={{ type: "spring" }}
                    >
                      {service.icon}
                    </motion.div>
                    <h3 className="text-2xl font-bold">{service.title}</h3>
                  </div>
                </motion.div>

                {/* Service Items */}
                <div className="p-8">
                  <ul className="space-y-4">
                    {service.items.slice(0, 3).map((item, itemIndex) => (
                      <motion.li 
                        key={itemIndex}
                        className="flex items-start"
                        custom={itemIndex}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={listItemVariants}
                        whileHover={{ x: 5 }}
                      >
                        <motion.div 
                          className={`w-2 h-2 rounded-full ${service.accent} mt-2 mr-4 flex-shrink-0`}
                          animate={{ scale: [1, 1.5, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        ></motion.div>
                        <div>
                          <h4 className="text-blue-100 text-lg font-medium">{item.title}</h4>
                          <p className="text-blue-100/70 text-sm mt-1">{item.description}</p>
                        </div>
                      </motion.li>
                    ))}
                    {service.items.length > 3 && (
                      <motion.li
                        className="text-blue-200/70 text-sm mt-2"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={listItemVariants}
                      >
                        + {service.items.length - 3} more services...
                      </motion.li>
                    )}
                  </ul>

                  {/* CTA Button */}
                  <motion.div 
                    className={`mt-8 w-full py-3 px-6 rounded-lg font-medium text-white ${service.accent} hover:opacity-90 transition-all duration-300 relative overflow-hidden group`}
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.03,
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)"
                    }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <span className="relative z-10">View Details</span>
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </motion.div>
                </div>
              </motion.div>
            </Link>
          ))}

          {/* Consultation Card */}
          <motion.div
            className="bg-gradient-to-br from-blue-900/80 to-indigo-900/80 rounded-2xl shadow-2xl overflow-hidden p-8 text-white border border-cyan-300/20 relative group"
            variants={itemVariants}
            whileHover={{ 
              y: -15,
              transition: { type: "spring", stiffness: 300 }
            }}
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-cyan-500 opacity-0 group-hover:opacity-10 blur-md transition-opacity duration-500"></div>
            
            <motion.h3 
              className="text-3xl font-bold mb-6 relative z-10"
              variants={itemVariants}
            >
              Tailored Solutions
            </motion.h3>
            <motion.p 
              className="mb-8 text-blue-100 text-lg relative z-10"
              variants={itemVariants}
            >
              Our concierge team crafts fully customized solutions for your unique business challenges.
            </motion.p>
            <div className="space-y-5 relative z-10">
              <motion.div 
                className="relative"
                variants={itemVariants}
              >
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full px-5 py-3 rounded-xl bg-blue-900/50 border border-blue-300/30 placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-cyan-300/50 text-white backdrop-blur-sm"
                />
              </motion.div>
              <motion.div 
                className="relative"
                variants={itemVariants}
              >
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full px-5 py-3 rounded-xl bg-blue-900/50 border border-blue-300/30 placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-cyan-300/50 text-white backdrop-blur-sm"
                />
              </motion.div>
              <motion.div 
                className="relative"
                variants={itemVariants}
              >
                <textarea 
                  placeholder="How can we serve you?" 
                  rows="4"
                  className="w-full px-5 py-3 rounded-xl bg-blue-900/50 border border-blue-300/30 placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-cyan-300/50 text-white backdrop-blur-sm"
                />
              </motion.div>
              <motion.button 
                className="w-full py-4 px-6 bg-gradient-to-r from-cyan-400 to-blue-400 text-blue-900 font-bold rounded-xl hover:opacity-90 transition-all duration-300 relative overflow-hidden group"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)"
                }}
                whileTap={{ scale: 0.97 }}
              >
                <span className="relative z-10">Request Concierge Service</span>
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;