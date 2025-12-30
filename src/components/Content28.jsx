"use client";

import React, { useState } from "react";

export function Content28() {
  const stats = [
    {
      label: "People Reached",
      value: "120,000+",
      description:
        "Across rural and urban regions in Zimbabwe.",
      moreInfo:
        "This includes outreach through health initiatives, education programs, and community events over the past 5 years, empowering individuals and families.",
    },
    {
      label: "Meals Distributed",
      value: "850,000+",
      description: "Delivered to families and children in need.",
      moreInfo:
        "Our nutrition support program ensures that vulnerable populations receive daily meals, particularly during droughts and economic hardships.",
    },
    {
      label: "Communities Supported",
      value: "75+",
      description: "From Matabeleland to Manicaland and beyond.",
      moreInfo:
        "These communities benefit from sustainable projects including clean water access, sanitation, and local capacity building.",
    },
    {
      label: "Volunteers Engaged",
      value: "2,500+",
      description: "Local champions driving impact on the ground.",
      moreInfo:
        "Our volunteer network includes skilled professionals, youth leaders, and community elders actively participating in program delivery and advocacy.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white px-[5%] py-20">
      <div className="container max-w-6xl mx-auto">
        {/* Centered Heading and paragraph on top */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold md:text-4xl text-green-900 mb-4">
            Our Impact
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Through our grassroots efforts, partnerships, and relentless
            commitment, we've been able to make meaningful change in some of
            Zimbabwe's most underserved communities.
          </p>
        </div>

        {/* Main content: stats left, image right */}
        <div className="flex flex-col md:flex-row gap-12 items-start">
          {/* Left: Stats */}
          <div className="md:w-1/2 space-y-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="pb-4 cursor-pointer border-b border-gray-300"
                onClick={() => toggle(index)}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-3xl font-bold text-green-900">
                      {stat.value}
                    </div>
                    <div className="text-lg font-semibold">{stat.label}</div>
                    <p className="text-gray-600 text-sm mt-1">{stat.description}</p>
                  </div>
                  <div className="text-green-900 text-xl select-none">
                    {openIndex === index ? "▾" : "▸"}
                  </div>
                </div>
                {openIndex === index && (
                  <p className="mt-2 text-gray-700 text-sm">{stat.moreInfo}</p>
                )}
              </div>
            ))}
          </div>

          {/* Right: Image */}
          <div className="md:w-1/2">
            <img
              src="/assets/image43.jpeg"
              alt="Community impact"
              className="rounded-xl object-cover w-full h-[350px] md:h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
