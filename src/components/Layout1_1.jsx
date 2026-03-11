"use client";

import React from "react";
import { motion } from "framer-motion";

// Layout1_1 Component - Impact Highlights
export const Layout1_1 = () => {
  const stats = [
    { number: "95%", label: "Viral suppression among clients" },
    { number: "40%", label: "Reduction target for gender-based violence" },
    { number: "5km", label: "Average distance to essential services" },
    { number: "4", label: "Provinces served in Zimbabwe" }
  ];

  return (
    <section className="py-20 md:py-28 px-[5%] bg-[#113d29] text-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-serif font-bold text-center mb-16"
        >
          Our Impact
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={index}
              className="text-center p-8 bg-[#0e3322] border border-white/10 rounded-3xl hover:border-[#14b8a6]/50 transition-all duration-300 hover:shadow-xl"
            >
              <div className="text-5xl font-extrabold text-[#14b8a6] mb-4">{stat.number}</div>
              <p className="text-lg font-light text-gray-300">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-24">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-serif font-bold text-center mb-12"
          >
            Success Stories
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Sex Workers Advocacy Group (SWAG)", desc: "Amplifying the voices of sex workers and advocating for their rights through community-led initiatives." },
              { title: "Community HIV AIDS Support Agent (CHASA)", desc: "Community-based agents providing education, support, and linkage to care for people living with HIV." },
              { title: "Community ART Refill Groups (CARGS)", desc: "Promoting peer-led ART distribution and adherence monitoring to improve treatment outcomes." }
            ].map((story, idx) => (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                key={idx}
                className="bg-[#0e3322] border border-white/10 p-8 rounded-3xl hover:border-[#14b8a6]/50 transition-all duration-300 shadow-xl"
              >
                <h4 className="text-2xl font-bold mb-4 text-[#14b8a6]">{story.title}</h4>
                <p className="text-gray-300 font-light leading-relaxed">{story.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Cta13 Component - Geographic Reach
export const Cta13 = () => {
  const provinces = [
    "Masvingo",
    "Matabeleland South",
    "Manicaland",
    "Midlands"
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
          Our Geographic Reach
        </motion.h2>
        <div className="flex flex-col md:flex-row items-stretch gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2"
          >
            <div className="bg-white border border-[#113d29]/10 p-8 md:p-12 rounded-3xl shadow-xl h-full">
              <h3 className="text-3xl font-bold text-[#113d29] mb-8">Operating in 4 Zimbabwean Provinces</h3>
              <ul className="space-y-4">
                {provinces.map((province, index) => (
                  <li key={index} className="flex items-center group">
                    <span className="w-3 h-3 bg-[#14b8a6] rounded-full mr-4 group-hover:scale-125 transition-transform"></span>
                    <span className="text-xl font-medium text-gray-800">{province}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-gray-600 font-light leading-relaxed text-lg">
                These regions were strategically chosen due to their unique challenges, including high rates of HIV, limited access to healthcare services, and the impacts of socio-economic and environmental issues.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full md:w-1/2"
          >
            <div className="bg-[#113d29] text-white p-8 md:p-12 rounded-3xl shadow-xl h-full">
              <h3 className="text-3xl font-bold mb-8 text-[#14b8a6]">Regional Challenges</h3>
              <ul className="space-y-5">
                {[
                  "High rates of HIV infections among young people",
                  "Limited access to healthcare services",
                  "Impact of climate change on health outcomes",
                  "Food insecurity and livelihood challenges",
                  "Gender-based violence and discrimination"
                ].map((challenge, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="mr-3 text-[#14b8a6] mt-1">✔</span>
                    <span className="font-light text-lg text-gray-200">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};