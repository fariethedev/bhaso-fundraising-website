import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

export function StrategicPillars() {
    const programs = [
        {
            src: "/assets/image348.jpeg",
            alt: "Health and Wellbeing",
            title: "Health & Wellbeing",
            desc: "Comprehensive testing, treatment and care programs",
        },
        {
            src: "/assets/image45.jpeg",
            alt: "Climate Smart Agriculture",
            title: "Climate Change and Resilience",
            desc: "Agroecology and climate-resilient farming practices",
        },
        {
            src: "/assets/image66.jpeg",
            alt: "Gender Equality",
            title: "Gender & Human Rights",
            desc: "Reducing GBV and discrimination against marginalized groups",
        },
        {
            src: "/assets/bhaso.png",
            alt: "Strategic Information",
            title: "Strategic Information & Knowledge Management",
            desc: "Data-driven programming and research",
        },
        {
            src: "/assets/image348.jpeg",
            alt: "Resource Mobilisation",
            title: "Resource Mobilisation",
            desc: "Building sustainability through partnerships and innovation",
        },
    ];

    return (
        <section className="bg-[#113d29] px-[5%] py-16 md:py-24 lg:py-28 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-[#0f3624] -skew-x-12 translate-x-32 hidden lg:block opacity-50"></div>

            <div className="container mx-auto max-w-7xl relative z-10">
                {/* Header Layout */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="max-w-xl"
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <span className="w-12 h-px bg-[#14b8a6]"></span>
                            <p className="font-bold text-[#14b8a6] uppercase tracking-[0.2em] text-sm">
                                Services
                            </p>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight">
                            Explore our wide<br />range of services
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex gap-4 items-center shrink-0"
                    >
                        <Link
                            to="/about"
                            className="px-6 py-3 font-bold text-white border border-[#14b8a6] rounded-full hover:bg-[#14b8a6] transition-colors whitespace-nowrap"
                        >
                            Get in touch
                        </Link>
                        <Link
                            to="/our-work"
                            className="px-6 py-3 font-semibold text-gray-300 border border-gray-600 rounded-full hover:bg-white/10 hover:border-gray-400 transition-colors flex items-center gap-2 whitespace-nowrap"
                        >
                            Browse all services
                        </Link>
                    </motion.div>
                </div>

                {/* CSS Scroll Snap Grid */}
                <div className="flex overflow-x-auto gap-8 pb-8 snap-x snap-mandatory scrollbar-hide -mx-[5%] px-[5%] sm:mx-0 sm:px-0">
                    {programs.map(({ src, alt, title, desc }, i) => (
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            key={i}
                            className="shrink-0 w-[85vw] sm:w-[380px] snap-center sm:snap-start group cursor-pointer"
                        >
                            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] mb-6 mb-6">
                                <img
                                    src={src}
                                    alt={alt}
                                    loading="lazy"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out brightness-90 group-hover:brightness-100"
                                />
                                {/* Status indicator pill */}
                                <div className="absolute bottom-6 left-6 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center p-2 shadow-lg scale-90 group-hover:scale-100 transition-transform">
                                    <svg className="w-5 h-5 text-[#14b8a6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                            </div>

                            <h4 className="text-xl font-bold font-serif text-white mb-3 group-hover:text-[#14b8a6] transition-colors">
                                {title}
                            </h4>
                            <p className="text-gray-400 font-light leading-relaxed line-clamp-3">
                                {desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
