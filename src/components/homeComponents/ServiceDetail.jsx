import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaChartLine, FaRegFileAlt, FaCalculator, FaPalette, FaIdCard, FaArrowLeft } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from '../Navs/Header';
import Modal from '../../modals/FormModal';
import CompanyNameReservationForm from '../forms/CompanyNameReservationForm';
import BusinessConsultancyForm from '../forms/FinancialConsultancyForm';
import FinancialConsultancyForm from '../forms/FinancialConsultancyForm';
import BusinessBrandingForm from '../forms/BusinessBrandingForm';
import NinSimServicesForm from '../forms/NinSimServicesForm';

const servicesData = {
    'business-consultancy': {
        icon: <FaChartLine className="w-12 h-12" />,
        title: "Business Consultancy",
        description: "Comprehensive business consulting services to help your organization grow and thrive in competitive markets. Our experts provide strategic guidance tailored to your specific needs.",
        form: BusinessConsultancyForm,
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
    'business-registration': {
        icon: <FaRegFileAlt className="w-12 h-12" />,
        title: "Business Registration",
        description: "Complete business registration services to ensure your company is properly established and compliant with all regulatory requirements.",
        form: CompanyNameReservationForm,
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
    'financial-consultancy': {
        icon: <FaCalculator className="w-12 h-12" />,
        title: "Financial Consultancy",
        description: "Professional financial services to help you manage your business finances efficiently and maintain compliance with all financial regulations.",
        form: FinancialConsultancyForm,
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
    'business-branding': {
        icon: <FaPalette className="w-12 h-12" />,
        title: "Business Branding",
        description: "Creative branding solutions to establish and enhance your company's identity in the marketplace.",
        form: BusinessBrandingForm,
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
    'nin-sim-services': {
        icon: <FaIdCard className="w-12 h-12" />,
        title: "NIN & SIM Services",
        description: "Complete NIN and SIM registration services to ensure compliance with national identification requirements.",
        form: NinSimServicesForm,
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
};

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const service = servicesData[serviceId];
    const [showModal, setShowModal] = useState(false);

    if (!service) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0a0e29] to-[#1a1f4d] text-white">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
                    <Link
                        to="/"
                        className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
                    >
                        <FaArrowLeft className="mr-2" /> Back to Services
                    </Link>
                </div>
            </div>
        );
    }

    const ServiceForm = service.form;

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10
            }
        }
    };

    return (
        <div className="bg-gray-900 text-white ">
            <Header />
            <div className="min-h-screen bg-gradient-to-b from-[#0a0e29] to-[#1a1f4d] text-white pt-20">

                {/* Back button */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="container mx-auto px-6 pt-8"
                >
                    <Link
                        to="/"
                        className="inline-flex items-center text-blue-300 hover:text-blue-100 transition-colors"
                    >
                        <FaArrowLeft className="mr-2" /> Back to Services
                    </Link>
                </motion.div>

                {/* Service Header */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                    className={`bg-gradient-to-r ${service.color} py-16`}
                >
                    <div className="container mx-auto px-6">
                        <motion.div
                            className="flex flex-col md:flex-row items-center justify-between gap-8"
                            variants={itemVariants}
                        >
                            <div className="flex flex-col md:flex-row items-center gap-8">
                                <motion.div
                                    className="p-6 bg-white/20 rounded-2xl backdrop-blur-sm border border-white/10"
                                    whileHover={{ rotate: 5, scale: 1.05 }}
                                    transition={{ type: "spring" }}
                                >
                                    {service.icon}
                                </motion.div>
                                <div className="flex-1">
                                    <motion.h1
                                        className="text-4xl md:text-5xl font-bold mb-4"
                                        variants={itemVariants}
                                    >
                                        {service.title}
                                    </motion.h1>
                                    <motion.p
                                        className="text-xl text-blue-100 max-w-3xl mb-6"
                                        variants={itemVariants}
                                    >
                                        {service.description}
                                    </motion.p>
                                </div>
                            </div>

                            <motion.button
                                onClick={() => setShowModal(true)}
                                className={`px-8 py-4 ${service.accent} rounded-lg font-bold text-white transition-all`}
                                variants={itemVariants}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                animate={{
                                    scale: [1, 1.03, 1],
                                    opacity: [1, 0.9, 1]
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            >
                                Request Service
                            </motion.button>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Service Content */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                    className="container mx-auto px-6 py-16"
                >
                    <motion.h2
                        className="text-3xl font-bold mb-12 text-center"
                        variants={itemVariants}
                    >
                        Service Offerings
                    </motion.h2>

                    <motion.div
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                        variants={containerVariants}
                    >
                        {service.items.map((item, index) => (
                            <motion.div
                                key={index}
                                className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10 hover:border-white/20 transition-all"
                                variants={itemVariants}
                                whileHover={{
                                    y: -5,
                                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.2)"
                                }}
                            >
                                <div className={`w-12 h-12 ${service.accent} rounded-lg flex items-center justify-center mb-4`}>
                                    <span className="text-white font-bold">{index + 1}</span>
                                </div>
                                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                <p className="text-blue-100/80">{item.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* CTA Section */}
                    <motion.div
                        className="mt-24 bg-gradient-to-r from-blue-900/50 to-indigo-900/50 rounded-2xl p-12 text-center border border-cyan-300/20 relative overflow-hidden"
                        variants={itemVariants}
                    >
                        <div className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <motion.h3
                            className="text-3xl font-bold mb-6 relative z-10"
                            variants={itemVariants}
                        >
                            Ready to Get Started?
                        </motion.h3>
                        <motion.p
                            className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto relative z-10"
                            variants={itemVariants}
                        >
                            Contact us today to learn more about how our {service.title} services can benefit your business.
                        </motion.p>
                        <motion.div
                            variants={itemVariants}
                            className="relative z-10"
                        >
                            <Link
                                to="/contact"
                                className={`inline-block px-8 py-4 ${service.accent} hover:opacity-90 rounded-lg font-bold text-white transition-all`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Contact Our Team
                            </Link>
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* Modal for service request */}
                <Modal show={showModal} onClose={() => setShowModal(false)}>
                    <div className="p-6">
                        <h2 className="text-2xl font-bold mb-6 text-gray-400">
                            Request {service.title} Service
                        </h2>
                        <ServiceForm serviceName={service.title} onSuccess={() => setShowModal(false)} />
                    </div>
                </Modal>
            </div>
        </div>
    );
};

export default ServiceDetail;