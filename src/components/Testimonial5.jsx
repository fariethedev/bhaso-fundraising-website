"use client";

import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote: "BHASO's initiatives have empowered our community significantly.",
    name: "Jane Doe",
    role: "Community Leader, Local NGO",
  },
  {
    quote: "The programs offered by BHASO are life-saving and transformative.",
    name: "John Smith",
    role: "Health Worker, NGO",
  },
  {
    quote: "Their support changed my life for the better.",
    name: "Sarah Chikomba",
    role: "Youth Advocate, Harare",
  },
  {
    quote: "BHASO brings hope where it's needed most.",
    name: "Tawanda Ncube",
    role: "Volunteer, Masvingo",
  },
  {
    quote: "They've helped our village thrive.",
    name: "Grace Moyo",
    role: "Community Health Facilitator",
  },
];

export function Testimonial5() {
  const [startIndex, setStartIndex] = useState(0);

  const visibleTestimonials = testimonials.slice(startIndex, startIndex + 3);

  const handleNext = () => {
    if (startIndex + 3 < testimonials.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <section className="bg-[#113d29] text-white py-20 md:py-28 px-[5%] text-center">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-16"
      >
        Community Voices
      </motion.h1>

      <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 mb-12 min-h-[300px]">
        <AnimatePresence mode="popLayout">
          {visibleTestimonials.map((testimonial, idx) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
              transition={{ duration: 0.5 }}
              key={testimonial.name}
              className="bg-[#0e3322] border border-white/10 rounded-3xl p-8 text-left shadow-xl w-full md:w-1/3 flex flex-col justify-between"
            >
              <div className="text-6xl text-[#14b8a6] font-serif mb-2 leading-none">“</div>
              <blockquote className="text-lg font-light italic text-gray-200 mb-8 flex-grow">
                {testimonial.quote}
              </blockquote>
              <div>
                <p className="font-bold text-[#14b8a6]">{testimonial.name}</p>
                <p className="text-sm font-light text-gray-400">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="flex justify-center items-center gap-6">
        <button
          onClick={handlePrev}
          className={`p-4 rounded-full border border-white/20 bg-transparent hover:bg-[#14b8a6] hover:border-[#14b8a6] transition-all duration-300 ${startIndex === 0 ? "opacity-30 cursor-not-allowed hover:bg-transparent hover:border-white/20" : ""
            }`}
          disabled={startIndex === 0}
        >
          <FaArrowLeft className="text-white" />
        </button>
        <button
          onClick={handleNext}
          className={`p-4 rounded-full border border-white/20 bg-transparent hover:bg-[#14b8a6] hover:border-[#14b8a6] transition-all duration-300 ${startIndex + 3 >= testimonials.length
              ? "opacity-30 cursor-not-allowed hover:bg-transparent hover:border-white/20"
              : ""
            }`}
          disabled={startIndex + 3 >= testimonials.length}
        >
          <FaArrowRight className="text-white" />
        </button>
      </div>
    </section>
  );
}
