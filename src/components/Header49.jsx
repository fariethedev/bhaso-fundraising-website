"use client";

import React, { useState, useEffect } from "react";

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
    }, 7000); // Auto-slide every 7 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="relume"
      className="relative h-[500px] md:h-[600px] lg:h-[650px] bg-cover bg-center bg-no-repeat flex items-center justify-center transition-all duration-700"
      style={{
        backgroundImage: `url(${backgroundImages[currentSlide]})`,
      }}
    >
      <div className="z-10 text-center">
        <p className="text-white font-extrabold text-4xl md:text-5xl lg:text-6xl drop-shadow-lg">
          About Us
        </p>
      </div>
    </section>
  );
}
