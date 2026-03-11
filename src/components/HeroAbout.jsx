import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

export function HeroAbout() {
    const slides = [
        {
            title: "Vision",
            text: "A healthy and resilient community",
        },
        {
            title: "Mission",
            text: "Improving HIV and health outcomes to alleviate poverty and foster resilience",
        },
        {
            title: "Strategic Pillars",
            text: "Health and Wellbeing, Climate Justice, Gender & Human Rights, Strategic Information, and Resource Mobilization",
        },
    ];

    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <section className="bg-[#fcfcfa] pt-6 pb-16 md:pb-24">
            {/* Top Banner (Vision/Mission) */}
            <div className="w-full bg-[#113d29] text-white text-center py-12 mb-16 relative overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={current}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative z-10 px-4"
                    >
                        <h3 className="text-3xl font-serif mb-3 tracking-wide">{slides[current].title}</h3>
                        <p className="text-lg md:text-xl font-light max-w-4xl mx-auto opacity-90 leading-relaxed font-sans">{slides[current].text}</p>
                    </motion.div>
                </AnimatePresence>

                {/* Subtle background decoration */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#14b8a6]/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-[5%] max-w-7xl">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">

                    {/* Left Image Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="w-full lg:w-1/2 relative"
                    >
                        <div className="relative rounded-2xl overflow-hidden aspect-[4/3] md:aspect-[3/2] shadow-2xl">
                            <img
                                src="/assets/bhaso1.png"
                                alt="BHASO community health workers"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
                            />
                            <div className="absolute inset-0 bg-[#113d29]/10 hover:bg-transparent transition-colors duration-500"></div>
                        </div>

                        {/* Floating Info Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="absolute -bottom-8 -right-4 md:-bottom-12 md:-right-8 bg-white p-6 shadow-xl rounded-xl max-w-xs border border-gray-100 hidden sm:block"
                        >
                            <div className="flex items-start gap-4">
                                <div className="bg-[#14b8a6]/10 p-3 rounded-full shrink-0">
                                    <svg className="w-6 h-6 text-[#14b8a6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 border-b border-gray-200 pb-1 mb-2">Since 1992</h4>
                                    <p className="text-sm text-gray-500">Decades of impact in HIV/AIDS response & climate justice</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Content Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="w-full lg:w-1/2"
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <span className="w-12 h-px bg-[#14b8a6]"></span>
                            <p className="font-bold text-[#14b8a6] uppercase tracking-[0.2em] text-sm">
                                About Us
                            </p>
                        </div>

                        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-gray-900 leading-[1.1]">
                            Pioneering Community Health & Climate Resilience
                        </h2>

                        <p className="text-lg text-gray-600 mb-8 leading-relaxed font-light">
                            Batanai HIV & AIDS Services Organisation (BHASO) is a Zimbabwean leader in HIV/AIDS
                            response and climate justice. We implement innovative models like SWAG and CHASA to
                            deliver comprehensive health services, promote gender equality, and build
                            climate-resilient communities across four provinces.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                            <Link
                                to="/about"
                                className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white bg-[#14b8a6] rounded-full overflow-hidden transition-all hover:bg-[#0f8c7e] hover:shadow-lg hover:shadow-[#14b8a6]/30 w-full sm:w-auto text-center"
                            >
                                <span className="relative z-10 transition-transform group-hover:-translate-x-1">Get in touch</span>
                            </Link>

                            <Link
                                to="/our-work"
                                className="group flex items-center gap-2 text-gray-600 hover:text-[#113d29] font-semibold transition-colors w-full sm:w-auto justify-center sm:justify-start"
                            >
                                <span>Browse services</span>
                                <FiArrowRight className="transform transition-transform group-hover:translate-x-1" />
                            </Link>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
