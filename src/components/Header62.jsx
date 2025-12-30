"use client";

import React, { useState, useEffect } from "react";

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
    <section className="relative w-full h-[550px] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
        style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
      ></div>

      {/* Content (Centered with margin from top) */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center mt-48">
        <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg mb-4">
          {slides[currentSlide].title}
        </h1>
        <p className="text-lg md:text-xl text-white drop-shadow-md leading-relaxed">
          {slides[currentSlide].description}
        </p>
      </div>

      {/* Optional fade effect overlay at bottom */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/40 to-transparent"></div>
    </section>
  );
}
