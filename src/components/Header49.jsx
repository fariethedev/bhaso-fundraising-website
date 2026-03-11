"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const backgroundImages = [
  "/assets/image66.jpeg",
  "/assets/image75.jpeg",
  "/assets/image98.jpeg",
];

export function Header49() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundImages.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[500px] md:h-[600px] lg:h-[650px] overflow-hidden flex items-center justify-center">
      <AnimatePresence>
        <motion.img
          key={currentSlide}
          src={backgroundImages[currentSlide]}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-[#113d29]/60 mix-blend-multiply"></div>

      <div className="z-10 text-center px-4 max-w-4xl mt-20">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white font-serif font-extrabold text-5xl md:text-6xl lg:text-7xl drop-shadow-2xl"
        >
          About BHASO
        </motion.h1>
      </div>
    </section>
  );
}
