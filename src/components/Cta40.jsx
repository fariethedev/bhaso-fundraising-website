"use client";

import React from "react";
import CountUp from "react-countup";

export const Cta40 = () => {
  const pillars = [
    {
      title: "Wellness",
      description: "Focus on HIV and AIDS, health, non-communicable diseases (NCDs), TB, mental health, comprehensive sexual reproductive health, pandemic preparedness, and drug abuse.",
      color: "bg-green-800"
    },
    {
      title: "Climate Justice",
      description: "Addressing climate change impacts and promoting environmental sustainability through agro-ecology and income-strengthening activities.",
      color: "bg-green-700"
    },
    {
      title: "Gender and Human Rights",
      description: "Advocating for gender equality and human rights, ensuring inclusive and equitable access to services.",
      color: "bg-green-600"
    },
    {
      title: "Strategic Information Management",
      description: "Utilizing data and evidence to inform programming and advocacy efforts.",
      color: "bg-green-500"
    },
    {
      title: "Resource Mobilisation",
      description: "Ensuring that the organisation has enough resources to carry out its mission and vision.",
      color: "bg-green-400"
    }
  ];

  return (
    <section className="py-16 px-4 bg-green-900 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Strategic Pillars</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {pillars.map((pillar, index) => (
            <div key={index} className={`p-6 rounded-lg text-center ${pillar.color} hover:shadow-xl transition-all duration-300 hover:-translate-y-2`}>
              <h3 className="text-xl font-semibold mb-3">{pillar.title}</h3>
              <p className="text-sm">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};