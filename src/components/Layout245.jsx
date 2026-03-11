"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Layout245() {
  const timeline = [
    {
      period: "1991 - 1998 onwards",
      desc: `BHASO began as an idea and grassroots initiative during the early 90s,
      focused on raising awareness about HIV/AIDS in Zimbabwe. Volunteers worked tirelessly 
      to reduce stigma and provide basic education to communities most affected by the epidemic.`,
      more: `Despite limited resources, the organization’s founders established trust by
      engaging directly with affected families and advocating for testing and care. This 
      formative period set the stage for BHASO's future expansions.`,
    },
    {
      period: "1999 - 2005",
      desc: `Officially founded in 2001, BHASO expanded its scope to include support for
      orphans and vulnerable children, realizing the epidemic’s broad social impact.`,
      more: `Volunteer-led peer education networks were established alongside psychosocial
      support groups. BHASO strengthened ties with schools and churches to ensure children 
      had access to education and healthcare.`,
    },
    {
      period: "2006 - 2011",
      desc: `During this period, BHASO launched nutrition and home-based care programs 
      aimed at improving patient health and reducing pressure on hospitals.`,
      more: `Training caregivers, providing food supplements, and working with local 
      clinics enabled better health outcomes. These years also marked BHASO's early focus 
      on environmental sustainability.`,
    },
    {
      period: "2012 - 2017",
      desc: `BHASO introduced climate-smart agriculture initiatives to address food security 
      and environmental vulnerability, expanding its holistic approach.`,
      more: `Programs trained farmers in sustainable techniques and water conservation, 
      helping communities build resilience against climate challenges.`,
    },
    {
      period: "2018 - 2024",
      desc: `In recent years, BHASO expanded its digital presence with mobile health units 
      and online education campaigns to reach remote areas.`,
      more: `Technology integration improved data tracking, remote counseling, and the 
      dissemination of health and environmental knowledge.`,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const delay = 12000;
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === timeline.length - 1 ? 0 : prevIndex + 1
      );
    }, delay);
    return () => resetTimeout();
  }, [currentIndex, timeline.length]);

  const prevTab = () =>
    setCurrentIndex(currentIndex === 0 ? timeline.length - 1 : currentIndex - 1);

  const nextTab = () =>
    setCurrentIndex(currentIndex === timeline.length - 1 ? 0 : currentIndex + 1);

  const currentItem = timeline[currentIndex];

  return (
    <section className="px-[5%] py-20 md:py-28 lg:py-32 bg-[#fcfcfa] flex flex-col items-center">
      <div className="max-w-5xl w-full text-center">
        <h2 className="text-[#113d29] text-4xl md:text-5xl font-serif font-bold mb-16">Our Journey</h2>

        {/* Content */}
        <div className="relative min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              <h3 className="text-4xl font-extrabold text-[#113d29] mb-8">
                {currentItem.period}
              </h3>
              <div className="text-gray-700 max-w-[90%] mx-auto text-left text-lg md:text-xl leading-relaxed font-light">
                <p className="mb-6">{currentItem.desc}</p>
                <p>{currentItem.more}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-8 mt-12">
          <button
            onClick={prevTab}
            aria-label="Previous period"
            className="bg-[#113d29] hover:bg-[#14b8a6] text-white w-14 h-14 flex items-center justify-center rounded-full transition-colors shadow-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextTab}
            aria-label="Next period"
            className="bg-[#113d29] hover:bg-[#14b8a6] text-white w-14 h-14 flex items-center justify-center rounded-full transition-colors shadow-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
