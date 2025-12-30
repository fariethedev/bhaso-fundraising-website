"use client";

import { Button } from "@relume_io/relume-ui";
import React, { useState, useRef } from "react";
import { RxChevronRight } from "react-icons/rx";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";

export function Layout240() {
  const programs = [
    {
      src: "/assets/image348.jpeg",
      alt: "Health and Wellbeing",
      title: "Health & Wellbeing",
      desc: "Comprehensive testing, treatment and care programs",
      detailed:
        "BHASO implements community-driven HIV/TB programs ensuring equitable access to services with focus on early diagnosis and treatment adherence. Our differentiated service delivery models reach vulnerable populations across Zimbabwe.",
    },
    {
      src: "/assets/image45.jpeg",
      alt: "Climate Smart Agriculture",
      title: "Climate Change and Resilience",
      desc: "Agroecology and climate-resilient farming practices",
      detailed:
        "We promote sustainable agriculture through training in climate-smart techniques, helping smallholder farmers adapt to changing weather patterns while improving food security and nutrition in vulnerable communities.",
    },
    {
      src: "/assets/image66.jpeg",
      alt: "Gender Equality",
      title: "Gender & Human Rights",
      desc: "Reducing GBV and discrimination against marginalized groups",
      detailed:
        "Our programs address gender-based violence and promote rights for women, youth, LGBTQ+ communities and people with disabilities through advocacy, education and economic empowerment initiatives.",
    },
    {
      src: "/assets/bhaso.png",
      alt: "Strategic Information",
      title: "Strategic Information & Knowledge Management",
      desc: "Data-driven programming and research",
      detailed:
        "BHASO strengthens evidence-based decision making through robust monitoring & evaluation, research and knowledge management systems that inform our health and climate justice interventions.",
    },
    {
      src: "/assets/image348.jpeg",
      alt: "Resource Mobilisation",
      title: "Resource Mobilisation",
      desc: "Building sustainability through partnerships and innovation",
      detailed:
        "We enhance organisational sustainability by mobilising financial, technical, and human resources through strategic partnerships, donor engagement, and innovative funding approaches aligned with our mission.",
    },
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -320,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 320,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-white px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12">
          <p className="text-sm uppercase tracking-widest text-green-700 mb-2">
            Our Strategic Pillars
          </p>
          <h2 className="text-3xl font-extrabold md:text-4xl leading-tight text-green-900">
            {programs[selectedIndex].title}
          </h2>
        </div>

        {/* Cards with navigation arrows */}
        <div className="relative flex items-center">
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-green-900 text-white p-3 rounded-full hover:bg-green-800 shadow-md"
          >
            <FiChevronLeft size={24} />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide py-4 px-8"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {programs.map(({ src, alt, title, desc }, i) => (
              <div
                key={i}
                onClick={() => setSelectedIndex(i)}
                className={`flex-shrink-0 w-[300px] h-[220px] cursor-pointer transition-all duration-200 ${
                  i === selectedIndex
                    ? "ring-4 ring-green-700"
                    : "opacity-90 hover:opacity-100"
                }`}
                style={{ scrollSnapAlign: "start" }}
              >
                <div className="relative w-full h-full rounded-lg overflow-hidden shadow-lg">
                  <img
                    src={src}
                    alt={alt}
                    loading="lazy"
                    className="w-full h-full object-cover brightness-75"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
                    <h4 className="text-lg font-bold text-white">{title}</h4>
                    <p className="text-white text-sm">{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-green-900 text-white p-3 rounded-full hover:bg-green-800 shadow-md"
          >
            <FiChevronRight size={24} />
          </button>
        </div>

        {/* Detailed description */}
        <div className="mt-12 max-w-3xl">
          <p className="text-lg leading-relaxed text-gray-700 mb-8">
            {programs[selectedIndex].detailed}
          </p>

          <div className="flex gap-6 flex-wrap">
            <Link
              to="/about"
              className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 inline-block text-center rounded-md"
            >
              Learn About Our Programs
            </Link>

            <Link
              to="/our-work"
              className="flex items-center text-green-700 hover:text-green-900 text-lg"
            >
              View Strategic Plan
              <RxChevronRight className="ml-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
