import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export function GenderRights() {
    const steps = [
        {
            num: "01",
            title: "Women's Empowerment",
            desc: "Providing 5,000+ women with financial literacy training, microfinance opportunities, and leadership development programs.",
        },
        {
            num: "02",
            title: "Rights Protection",
            desc: "Operating 20+ advocacy groups supporting marginalized individuals with legal aid and essential social services.",
        },
        {
            num: "03",
            title: "Policy Advocacy",
            desc: "Working with local governments to ensure inclusive policies that protect the most vulnerable in our communities.",
        },
    ];

    return (
        <section className="bg-[#fcfcfa] px-[5%] py-16 md:py-24 lg:py-28">
            <div className="container mx-auto max-w-7xl">
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
                                Our Process
                            </p>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 leading-tight">
                            Advancing Equality & Rights
                        </h2>
                        <p className="mt-6 text-lg text-gray-600 font-light leading-relaxed">
                            BHASO's Gender and Human Rights program tackles systemic discrimination against women and youth
                            in Zimbabwe. Through our targeted step-by-step approach, we've reduced gender-based violence incidents by 40%.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="shrink-0"
                    >
                        <Link
                            to="/about"
                            className="px-8 py-4 font-bold text-white bg-[#14b8a6] rounded-full hover:bg-[#0f8c7e] transition-colors shadow-lg shadow-teal-500/30 whitespace-nowrap"
                        >
                            Join Our Advocacy
                        </Link>
                    </motion.div>
                </div>

                {/* Content Section */}
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-stretch">
                    {/* Left Image Section */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="w-full lg:w-1/2 relative min-h-[400px]"
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl h-full w-full">
                            <img
                                src="/assets/image0.jpeg"
                                alt="Women participating in BHASO's empowerment workshop"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
                            />
                        </div>
                    </motion.div>

                    {/* Right Steps Sequence */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="w-full lg:w-1/2 flex flex-col justify-center"
                    >
                        <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 relative">

                            {/* Vertical connection line */}
                            <div className="absolute left-[39px] top-12 bottom-12 w-px bg-gray-100 z-0"></div>

                            <div className="space-y-8 relative z-10">
                                {steps.map((step, index) => (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.15 }}
                                        key={index}
                                        className="flex gap-6"
                                    >
                                        {/* Number bubble */}
                                        <div className="w-12 h-12 shrink-0 rounded-full bg-green-50 flex items-center justify-center font-bold text-[#14b8a6] border-4 border-white shadow-sm font-serif">
                                            {step.num}
                                        </div>
                                        <div className="pt-2 pb-4">
                                            <h4 className="text-xl font-bold text-gray-900 mb-2 font-serif">{step.title}</h4>
                                            <p className="text-gray-500 font-light leading-relaxed">{step.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
