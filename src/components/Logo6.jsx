"use client";

import React from "react";
import { motion } from "framer-motion";

export function Logo6() {
  const logos = [
    { src: "https://www.aidshealth.org/wp-content/uploads/2021/02/logoColor-scaled.jpg", alt: "AIDS Healthcare Foundation" },
    { src: "https://www.oxfamamerica.org/documents/536/OX_HL_C_RGB.png", alt: "Oxfam" },
    { src: "https://www.znnp.org/images/logo7.png", alt: "ZNNP+" },
    { src: "https://safaids.net/wp-content/uploads/2024/05/SAfAIDS-logo.png", alt: "SAfAIDS" },
    { src: "https://www.pactworld.org/themes/custom/ai/logo.svg", alt: "Pact" },
    { src: "https://www.pangaeazw.org/wp-content/uploads/2024/04/IMG-20240408-WA0006.jpg", alt: "Pangaea Zimbabwe" }
  ];

  return (
    <section id="relume" className="px-[5%] py-12 md:py-16 lg:py-20 bg-[#fcfcfa]">
      <div className="container mx-auto">
        <h2 className="mx-auto mb-10 w-full max-w-lg text-center text-lg md:text-xl font-bold text-[#113d29] font-serif">
          Trusted by organizations making a difference
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {logos.map((logo, index) => (
            <motion.img
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              src={logo.src}
              className="h-14 md:h-16 w-auto max-w-[120px] md:max-w-[150px] object-contain grayscale hover:grayscale-0 transition-all duration-300"
              alt={logo.alt}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
