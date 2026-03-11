"use client";

import React from "react";
import { motion } from "framer-motion";

export const Cta40 = () => {
  const pillars = [
    {
      title: "Wellness",
      description: "Focus on HIV and AIDS, health, non-communicable diseases (NCDs), TB, mental health, comprehensive sexual reproductive health, pandemic preparedness, and drug abuse.",
    },
    {
      title: "Climate Justice",
      description: "Addressing climate change impacts and promoting environmental sustainability through agro-ecology and income-strengthening activities.",
    },
    {
      title: "Gender and Human Rights",
      description: "Advocating for gender equality and human rights, ensuring inclusive and equitable access to services.",
    },
    {
      title: "Strategic Information Management",
      description: "Utilizing data and evidence to inform programming and advocacy efforts.",
    },
    {
      title: "Resource Mobilisation",
      description: "Ensuring that the organisation has enough resources to carry out its mission and vision.",
    }
  ];

  return (
    <section className="py-20 md:py-28 px-[5%] bg-[#113d29] text-white">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-serif font-bold text-center mb-16"
        >
          Our Strategic Pillars
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {pillars.map((pillar, index) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={index}
              className={`p-8 rounded-3xl text-left bg-[#0e3322] border border-white/10 hover:border-[#14b8a6]/50 shadow-xl hover:-translate-y-2 transition-all duration-300`}
            >
              <h3 className="text-xl font-bold mb-4 text-[#14b8a6]">{pillar.title}</h3>
              <p className="text-sm font-light text-gray-300 leading-relaxed">{pillar.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};