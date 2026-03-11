"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    image: "/assets/image900.jpeg",
    title: "Our Work",
    description:
      "We empower communities through healthcare, climate resilience, and gender equality initiatives across Zimbabwe.",
  },
  {
    image: "/assets/image877.jpeg",
    title: "Community-Led Health",
    description:
      "Providing accessible HIV, TB, and wellness programs to improve lives in underserved areas.",
  },
  {
    image: "/assets/image655.jpeg",
    title: "Sustainable Development",
    description:
      "Supporting climate-smart agriculture, environmental conservation, and local economic growth.",
  },
];

export function Header62() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrentSlide((prev) => (prev + 1) % slides.length),
      7000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[550px] md:h-[650px] overflow-hidden flex items-center justify-center">
      <AnimatePresence>
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
        ></motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-[#113d29]/60 mix-blend-multiply transition-colors duration-1000"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center mt-20">
        <motion.h1
          key={`title-${currentSlide}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white drop-shadow-2xl mb-6"
        >
          {slides[currentSlide].title}
        </motion.h1>
        <motion.p
          key={`desc-${currentSlide}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-200 font-light drop-shadow-md leading-relaxed max-w-2xl mx-auto"
        >
          {slides[currentSlide].description}
        </motion.p>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/60 to-transparent"></div>
    </section>
  );
}
