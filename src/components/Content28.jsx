"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Content28() {
  const stats = [
    {
      label: "People Reached",
      value: "120,000+",
      description:
        "Across rural and urban regions in Zimbabwe.",
      moreInfo:
        "This includes outreach through health initiatives, education programs, and community events over the past 5 years, empowering individuals and families.",
    },
    {
      label: "Meals Distributed",
      value: "850,000+",
      description: "Delivered to families and children in need.",
      moreInfo:
        "Our nutrition support program ensures that vulnerable populations receive daily meals, particularly during droughts and economic hardships.",
    },
    {
      label: "Communities Supported",
      value: "75+",
      description: "From Matabeleland to Manicaland and beyond.",
      moreInfo:
        "These communities benefit from sustainable projects including clean water access, sanitation, and local capacity building.",
    },
    {
      label: "Volunteers Engaged",
      value: "2,500+",
      description: "Local champions driving impact on the ground.",
      moreInfo:
        "Our volunteer network includes skilled professionals, youth leaders, and community elders actively participating in program delivery and advocacy.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#fcfcfa] px-[5%] py-20">
      <div className="container max-w-6xl mx-auto">
        {/* Centered Heading and paragraph on top */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-serif font-bold md:text-5xl text-[#113d29] mb-6">
            Our Impact
          </h2>
          <p className="text-gray-700 font-light text-lg md:text-xl leading-relaxed">
            Through our grassroots efforts, partnerships, and relentless
            commitment, we've been able to make meaningful change in some of
            Zimbabwe's most underserved communities.
          </p>
        </motion.div>

        {/* Main content: stats left, image right */}
        <div className="flex flex-col md:flex-row gap-12 items-start">
          {/* Left: Stats */}
          <div className="md:w-1/2 space-y-6">
            {stats.map((stat, index) => (
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                key={index}
                className="pb-4 cursor-pointer border-b border-gray-200"
                onClick={() => toggle(index)}
              >
                <div className="flex justify-between items-center group">
                  <div>
                    <div className="text-4xl font-extrabold text-[#113d29] group-hover:text-[#14b8a6] transition-colors">
                      {stat.value}
                    </div>
                    <div className="text-xl font-bold mt-2 text-gray-800">{stat.label}</div>
                    <p className="text-gray-500 font-light text-sm mt-1">{stat.description}</p>
                  </div>
                  <div className="text-[#14b8a6] text-3xl select-none transition-transform duration-300">
                    {openIndex === index ? "▾" : "▸"}
                  </div>
                </div>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="mt-4 text-gray-700 font-light text-sm leading-relaxed">{stat.moreInfo}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 w-full"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-[#113d29]/20 mix-blend-multiply z-10"></div>
              <img
                src="/assets/image43.jpeg"
                alt="Community impact"
                className="object-cover w-full h-[400px] md:h-[600px] hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
