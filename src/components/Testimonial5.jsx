"use client";

import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

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
    <section className="bg-white text-green-900 py-20 px-6 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-12">Community Voices</h1>

      <div className="flex justify-center gap-6 mb-10">
        {visibleTestimonials.map((testimonial, idx) => (
          <div
            key={idx}
            className="bg-green-50 border border-green-700 rounded-xl p-6 text-left shadow-md w-full max-w-xs flex flex-col justify-between"
          >
            <div className="text-5xl text-green-700 font-serif mb-4">“</div>
            <blockquote className="text-lg font-medium italic mb-4">
              {testimonial.quote}
            </blockquote>
            <div>
              <p className="font-bold">{testimonial.name}</p>
              <p className="text-sm">{testimonial.role}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center gap-6">
        <button
          onClick={handlePrev}
          className={`p-3 rounded-full border border-green-700 bg-green-100 hover:bg-green-200 ${
            startIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={startIndex === 0}
        >
          <FaArrowLeft className="text-green-700" />
        </button>
        <button
          onClick={handleNext}
          className={`p-3 rounded-full border border-green-700 bg-green-100 hover:bg-green-200 ${
            startIndex + 3 >= testimonials.length
              ? "opacity-50 cursor-not-allowed"
              : ""
          }`}
          disabled={startIndex + 3 >= testimonials.length}
        >
          <FaArrowRight className="text-green-700" />
        </button>
      </div>
    </section>
  );
}
