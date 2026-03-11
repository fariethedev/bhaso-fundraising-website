import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

export function OurApproach() {
    return (
        <section className="bg-white px-[5%] py-16 md:py-24 lg:py-28 overflow-hidden">
            <div className="container mx-auto max-w-7xl">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">

                    {/* Left Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="w-full lg:w-1/2 order-2 lg:order-1"
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <span className="w-12 h-px bg-[#14b8a6]"></span>
                            <p className="font-bold text-[#14b8a6] uppercase tracking-[0.2em] text-sm">
                                About Us
                            </p>
                        </div>

                        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-gray-900 leading-[1.1]">
                            Why choose us?
                        </h2>

                        <p className="text-lg text-gray-600 mb-8 leading-relaxed font-light">
                            BHASO implements integrated programs addressing Zimbabwe's interconnected health and climate challenges.
                            Through our innovative models like SWAG and CHASA, we provide HIV/TB services, climate-smart agriculture
                            training, and gender equality programs across four provinces. Our community-centered approach ensures
                            sustainable impact aligned with Zimbabwe's National Development Strategy and Global AIDS targets.
                        </p>

                        <div className="space-y-6 mb-10">
                            <div className="flex items-start gap-4">
                                <div className="mt-1 bg-[#14b8a6]/10 text-[#14b8a6] p-2 rounded-full shrink-0">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 text-lg mb-1">Eco friendly</h4>
                                    <p className="text-gray-600 font-light">Promoting sustainable climate-smart agriculture practices.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="mt-1 bg-[#14b8a6]/10 text-[#14b8a6] p-2 rounded-full shrink-0">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 text-lg mb-1">Community driven</h4>
                                    <p className="text-gray-600 font-light">Locally led development with impact at the grassroots level.</p>
                                </div>
                            </div>
                        </div>

                        <Link
                            to="/about"
                            className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white bg-[#14b8a6] rounded-full overflow-hidden transition-all hover:bg-[#0f8c7e] hover:shadow-lg hover:shadow-[#14b8a6]/30 w-full sm:w-auto text-center"
                        >
                            <span className="relative z-10 transition-transform group-hover:-translate-x-1">Get in touch</span>
                        </Link>
                    </motion.div>

                    {/* Right Image Grid */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="w-full lg:w-1/2 order-1 lg:order-2"
                    >
                        <div className="grid grid-cols-2 gap-4 h-[500px] md:h-[600px]">
                            {/* Left tall image */}
                            <div className="col-span-1 h-full rounded-2xl overflow-hidden shadow-lg transform -translate-y-8">
                                <img
                                    src="/assets/image78.jpeg"
                                    alt="Community health workers"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                            {/* Right stacked images */}
                            <div className="col-span-1 flex flex-col gap-4 h-full transform translate-y-8">
                                <div className="h-1/2 rounded-2xl overflow-hidden shadow-lg">
                                    <img
                                        src="/assets/image45.jpeg"
                                        alt="Climate smart agriculture"
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                                <div className="h-1/2 rounded-2xl overflow-hidden shadow-lg">
                                    <img
                                        src="/assets/image66.jpeg"
                                        alt="Gender rights workshop"
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                            </div>

                        </div>
                        {/* Floating review card */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6, duration: 0.5 }}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:left-auto lg:right-1/4 lg:-translate-x-0 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-2xl border border-white/50 max-w-[240px] z-10 hidden sm:block pointer-events-none"
                        >
                            <p className="text-gray-800 font-medium text-sm leading-snug mb-3 items-center line-clamp-3">
                                "Reliable and meticulous work made the renovation process easy"
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-[#14b8a6]/20 flex items-center justify-center text-[#14b8a6] font-bold text-xs shrink-0">
                                    SM
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-gray-900">Sophie Moore</p>
                                    <p className="text-[10px] text-gray-500">New York, NY</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
