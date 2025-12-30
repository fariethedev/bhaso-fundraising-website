"use client";


import React, { useEffect, useState } from "react";
import { RxChevronRight } from "react-icons/rx";
import { Link } from "react-router-dom";

export function Layout237() {
  const slides = [
    {
      title: "Vision",
      text: "A healthy and resilient community",
    },
    {
      title: "Mission",
      text: "Improving HIV and health outcomes to alleviate poverty and foster resilience",
    },
    {
      title: "Strategic Pillars",
      text: "Health and Wellbeing, Climate Justice, Gender & Human Rights, Strategic Information, and Resource Mobilization",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="bg-white pb-16 md:pb-20 lg:pb-24">
      {/* Full-width Vision/Mission banner */}
      <div className="w-full bg-green-900 text-white text-center py-10 mb-12">
        <h3 className="text-2xl font-semibold mb-2">{slides[current].title}</h3>
        <p className="text-base max-w-4xl mx-auto">{slides[current].text}</p>
      </div>

      {/* Content Section (No max-width on the section itself) */}
      <div className="px-[5%]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left image */}
          <div className="flex justify-center">
            <img
              src="/assets/bhaso1.png"
              alt="BHASO community health workers"
              className="rounded-lg shadow-lg w-full max-w-[600px] h-auto"
            />
          </div>

          {/* Right side content */}
          <div className="max-w-xl">
            <p className="font-semibold text-green-700 uppercase mb-3 tracking-widest">
              About BHASO
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight text-green-900">
              Pioneering Community Health & Climate Resilience Since 1992
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-black">
              Batanai HIV & AIDS Services Organisation (BHASO) is a Zimbabwean leader in HIV/AIDS
              response and climate justice. We implement innovative models like SWAG and CHASA to
              deliver comprehensive health services, promote gender equality, and build
              climate-resilient communities across four provinces. Our work aligns with the Global
              AIDS Strategy 2021-2026 and Zimbabwe's national health priorities.
            </p>

            <div className="flex gap-6">
              <Link
                to="/about"
                className="bg-green-700 hover:bg-green-600 text-white px-6 py-3 inline-block text-center"
              >
                Learn More
              </Link>
              <Link
                to="/our-work"
                className="flex items-center text-green-700 hover:text-green-900 px-0 py-0"
              >
                View Strategic Plan
                <RxChevronRight className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
