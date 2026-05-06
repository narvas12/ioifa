import React from 'react';
import { motion } from 'framer-motion';
import { FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';
import TEAM_1 from '../../assets/images/team_1.jpg'
import TEAM_2 from '../../assets/images/team_2.jpg'
import TEAM_3 from '../../assets/images/team_3.jpg'
import TEAM_4 from '../../assets/images/team_4.jpeg'
import BG_1 from '../../assets/images/bg-2.png'



const TeamSection = () => {
    const teamMembers = [
        {
            name: "Sunday Ifeoluwa Okewale",
            position: "Director of Media",
            bio: [
                "Sunday Ifeoluwa Okewale is a passionate and creative Graphics Designer with a strong eye for detail and visual storytelling",
                "He serves as the Lead Designer at Maliq Studios where he brings bold ideas and refined aesthetics to every project. He also contributes his",
                "expertise as a Graphics Designer at Enforca, where he collaborates on innovative brand and media solutions",
                "With a growing portfolio across various industries, Ifeoluwa is committed to delivering impactful designs that elevate brands and engage audiences.",
                "Now a proud member of OLIF team, he looks forward to bringing his design vision to new challenges and opportunities."
            ],
            image: TEAM_1 // Replace with actual image path
        },
        {
            name: "Favour Oluchi Ifeanyi-Udeh, CNA",
            position: "Director of Finance",
            bio: [
                "Distinguished Chartered National Accountant with over six years of postgraduate experience",
                "First Class graduate of Accounting and Finance with a Masters of Commerce degree",
                "Provides strategic financial leadership at OLIF Professional Services Limited",
                "Expertise in financial management, analysis, budgeting, auditing, and taxation",
                "Ensures company's financial health, regulatory compliance, and growth"
            ],
            image: TEAM_2 // Replace with actual image path
        },
        {
            name: "Caleb Ifeanyi Udeh",
            position: "Business Development Manager",
            bio: [
                "Expert in business strategy, financial management, and regulatory compliance",
                "Passionate about empowering entrepreneurs and organizations",
                "Leads efforts to deliver tailored business solutions for clients",
                "Expands OLIF's reach and impact in the business development sector",
                "Fosters long-term success and partnerships for clients"
            ],
            image: TEAM_3 // Replace with actual image path
        },

        {
            name: "Ezechukwu Emmanuel",
            position: "Director of Information & Communications Technology",
            bio: [
                "Visionary tech leader with 6+ years architecting cutting-edge digital solutions",
                "Expert in scalable web applications and APIs that transform businesses",
                "Architected OLIF's digital infrastructure, boosting efficiency by Great Number",
                "Cloud-native specialist with cybersecurity expertise",
                "Mentored 50+ developers in modern engineering practices",
                "Drives digital transformation exceeding industry benchmarks"
            ],
            image: TEAM_4,
            accolades: [
                "Microsoft Certified: Azure Solutions Architect Expert",
                "AWS Certified Solutions Architect - Professional",
                "Google Cloud Certified - Professional Cloud Architect",
                "2023 Tech Innovation Award recipient",
                "Featured speaker at 5 international tech conferences"
            ]
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (
        <section className="py-24 bg-gradient-to-b from-gray-900 to-blue-900/100 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500 rounded-full filter blur-[100px]"></div>
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-500 rounded-full filter blur-[100px]"></div>
            </div>

            {/* Diamond pattern overlay */}
            <div className="absolute inset-0 opacity-5 bg-[url({'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48cGF0aCBkPSJNMzAgMEw2MCAzMEwzMCA2MEwwIDMwWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjAuNSIvPjwvc3ZnPg=='})]"></div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-20"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                >
                    <motion.h2
                        className="text-4xl md:text-5xl font-bold text-white mb-6"
                        variants={itemVariants}
                    >
                        Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Leadership Team</span>
                    </motion.h2>
                    <motion.div
                        className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mb-8 rounded-full"
                        variants={itemVariants}
                    ></motion.div>
                    <motion.p
                        className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed"
                        variants={itemVariants}
                    >
                        The visionary leaders driving OLIF Professional Services Limited to excellence
                    </motion.p>
                </motion.div>

                {/* Team Members */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={index}
                            className="bg-white/5 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-white/10 hover:border-blue-400/30"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={itemVariants}
                            whileHover={{ y: -10 }}
                        >
                            <div className="flex flex-col md:flex-row h-full">
                                {/* Team Member Image */}
                                <div className="md:w-1/3 relative">
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-10"></div>
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover aspect-square"
                                    />
                                    <div className="absolute bottom-4 left-4 z-20">
                                        <div className="flex space-x-3">
                                            <motion.a
                                                href="#"
                                                className="bg-white/10 backdrop-blur-sm p-2 rounded-full text-white hover:bg-blue-600 hover:text-white transition-colors border border-white/20"
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                <FiLinkedin className="w-5 h-5" />
                                            </motion.a>
                                            <motion.a
                                                href="#"
                                                className="bg-white/10 backdrop-blur-sm p-2 rounded-full text-white hover:bg-blue-400 hover:text-white transition-colors border border-white/20"
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                <FiTwitter className="w-5 h-5" />
                                            </motion.a>
                                            <motion.a
                                                href="#"
                                                className="bg-white/10 backdrop-blur-sm p-2 rounded-full text-white hover:bg-gray-600 hover:text-white transition-colors border border-white/20"
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                <FiMail className="w-5 h-5" />
                                            </motion.a>
                                        </div>
                                    </div>
                                </div>

                                {/* Team Member Info */}
                                <div className="md:w-2/3 p-6 md:p-8">
                                    <div className="mb-6">
                                        <h3 className="text-2xl font-bold text-white">{member.name}</h3>
                                        <p className="text-blue-300 font-medium mt-2">{member.position}</p>
                                    </div>

                                    <ul className="space-y-4">
                                        {member.bio.map((point, i) => (
                                            <motion.li
                                                key={i}
                                                className="flex items-start text-blue-100"
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.1 * i + 0.3 }}
                                                viewport={{ once: true }}
                                            >
                                                <motion.div
                                                    className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"
                                                    animate={{ scale: [1, 1.3, 1] }}
                                                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                                                ></motion.div>
                                                <span>{point}</span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;