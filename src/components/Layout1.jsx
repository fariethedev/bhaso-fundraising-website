"use client";

import React from "react";
import { motion } from "framer-motion";

export const Layout1 = () => {
  const focusAreas = [
    {
      title: "HIV and TB Management",
      description: "Comprehensive, community-driven programs to manage and prevent the spread of HIV and tuberculosis, ensuring equitable access to testing, treatment, and continuous care.",
    },
    {
      title: "Gender and Human Rights",
      description: "Advocating for policies that uphold human rights and improve health outcomes for marginalized populations through evidence-based advocacy.",
    },
    {
      title: "Climate Justice and Resilience",
      description: "Addressing the disproportionate impact of climate change on vulnerable communities through sustainable practices and adaptation strategies.",
    },
    {
      title: "Mental Health and Psychosocial Support",
      description: "Providing essential psychosocial support and mental health services to individuals and communities affected by HIV, poverty, and socio-economic challenges.",
    },
    {
      title: "Food Security and Livelihoods",
      description: "Promoting climate-smart agricultural practices to improve productivity, diversify crops, and enhance nutrition for smallholder farmers.",
    },
    {
      title: "Community Systems Strengthening",
      description: "Empowering local structures with essential skills to monitor, advocate, and demand services related to human rights and health.",
    }
  ];

  return (
    <section className="py-20 md:py-28 px-[5%] bg-[#fcfcfa]">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-serif font-bold text-[#113d29] text-center mb-16"
        >
          Our Key Focus Areas
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {focusAreas.map((area, index) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={index}
              className="bg-white p-8 rounded-3xl border border-[#113d29]/10 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-[#14b8a6]/10 rounded-full mb-6 flex items-center justify-center text-[#14b8a6] group-hover:bg-[#14b8a6] group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#113d29] mb-4">{area.title}</h3>
              <p className="text-gray-600 font-light leading-relaxed">{area.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
