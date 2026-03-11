"use client";

import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { motion } from "framer-motion";

const programs = [
  {
    id: "wellness",
    title: "Health and Wellbeing",
    image: "/assets/image09.jpeg",
    shortDesc: "Comprehensive HIV and TB prevention, testing, and treatment programs",
    fullDesc: [
      "BHASO implements community-driven HIV/TB programs ensuring equitable access to services with focus on early diagnosis and treatment adherence.",
      "Our differentiated service delivery models reach vulnerable populations across Zimbabwe with 95% viral suppression rates among clients.",
      "Key components:",
      "- Community ART Refill Groups (CARGs)",
      "- Out-of-facility medication distribution",
      "- Psychosocial support groups",
      "- TB screening and treatment linkage",
    ],
    stats: "1.2M Zimbabweans on ART with 95% viral suppression",
  },
  {
    id: "climate",
    title: "Climate Change",
    image: "/assets/image23.jpeg",
    shortDesc: "Agroecology and climate-resilient farming practices",
    fullDesc: [
      "We promote sustainable agriculture through training in climate-smart techniques, helping smallholder farmers adapt to changing weather patterns.",
      "Program highlights:",
      "- Training 5,000+ farmers in agroecology",
      "- Establishing community seed banks",
      "- Promoting water conservation techniques",
      "- Supporting nutrition gardens for PLHIV",
      "- Income-strengthening activities",
    ],
    stats: "5,000+ farmers trained in sustainable methods",
  },
  {
    id: "gender",
    title: "Gender & Human Rights",
    image: "/assets/image76.jpeg",
    shortDesc: "Reducing GBV and discrimination against marginalized groups",
    fullDesc: [
      "Our programs address gender-based violence and promote rights for women, youth, LGBTQ+ communities through:",
      "- Establishing 20+ advocacy groups",
      "- Providing legal aid services",
      "- Economic empowerment programs",
      "- Community sensitization campaigns",
      "- Safe spaces for vulnerable populations",
      "We've achieved 40% reduction in GBV incidents in our operational areas since 2020.",
    ],
    stats: "40% reduction in GBV incidents since 2020",
  },
  {
    id: "information",
    title: "Strategic Information Management",
    image: "/assets/image31.jpeg",
    shortDesc: "Data-driven programming and research",
    fullDesc: [
      "BHASO strengthens evidence-based decision making through:",
      "- Robust monitoring & evaluation systems",
      "- Community-based research initiatives",
      "- Data collection and analysis training",
      "- Digital health solutions",
      "- Knowledge management platforms",
      "Our research center produces actionable insights that shape Zimbabwe's health and climate policies.",
    ],
    stats: "7 research papers published in 2023",
  },
];

export function Layout12() {
  const [expandedProgram, setExpandedProgram] = useState(null);
  const [showFullDetails, setShowFullDetails] = useState(false);

  const handleProgramClick = (programId) => {
    if (expandedProgram === programId) {
      setExpandedProgram(null);
      setShowFullDetails(false);
    } else {
      setExpandedProgram(programId);
      setShowFullDetails(false);
    }
  };

  return (
    <section className="px-[5%] py-16 bg-[#fcfcfa]">
      <div className="container mx-auto max-w-7xl">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#113d29] mb-4">
            Our Strategic Programs
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-light">
            Click on any program to view its full details and impact.
          </p>
        </motion.div>

        {/* Program Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              key={program.id}
              onClick={() => handleProgramClick(program.id)}
              className={`relative rounded-3xl shadow-lg overflow-hidden cursor-pointer group transition-all duration-300 ${expandedProgram === program.id ? "ring-4 ring-[#14b8a6]" : "hover:-translate-y-2 hover:shadow-xl"
                }`}
            >
              <img
                src={program.image}
                alt={program.title}
                className="w-full h-64 object-cover"
              />
              <div className="bg-[#113d29] text-white p-6">
                <h3 className="text-xl font-bold mb-2">{program.title}</h3>
                <p className="text-sm font-light text-gray-300">{program.shortDesc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Expanded Program Details */}
        {expandedProgram && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="mt-12 bg-white border border-[#113d29]/10 rounded-3xl p-8 md:p-10 shadow-xl"
          >
            <h3 className="text-3xl font-serif font-bold text-[#113d29] mb-4">
              {programs.find((p) => p.id === expandedProgram).title}
            </h3>
            <p className="text-gray-700 mb-4 font-semibold">
              Impact: {programs.find((p) => p.id === expandedProgram).stats}
            </p>

            <div className="space-y-3">
              {programs
                .find((p) => p.id === expandedProgram)
                .fullDesc.slice(0, showFullDetails ? undefined : 2)
                .map((item, i) => (
                  <p key={i} className="text-gray-700 text-lg leading-relaxed">
                    {item}
                  </p>
                ))}
            </div>

            <button
              onClick={() => setShowFullDetails(!showFullDetails)}
              className="mt-6 flex items-center text-[#14b8a6] hover:text-[#0f8c7e] font-bold transition-colors"
            >
              {showFullDetails ? (
                <>
                  Show Less <FiChevronUp className="ml-2" />
                </>
              ) : (
                <>
                  See More <FiChevronDown className="ml-2" />
                </>
              )}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
