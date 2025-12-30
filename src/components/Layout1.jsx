"use client";

import React from "react";

export const Layout1 = () => {
  const focusAreas = [
    {
      title: "HIV and TB Management",
      description: "Comprehensive, community-driven programs to manage and prevent the spread of HIV and tuberculosis, ensuring equitable access to testing, treatment, and continuous care.",
      icon: ""
    },
    {
      title: "Gender and Human Rights",
      description: "Advocating for policies that uphold human rights and improve health outcomes for marginalized populations through evidence-based advocacy.",
      icon: ""
    },
    {
      title: "Climate Justice and Resilience",
      description: "Addressing the disproportionate impact of climate change on vulnerable communities through sustainable practices and adaptation strategies.",
      icon: ""
    },
    {
      title: "Mental Health and Psychosocial Support",
      description: "Providing essential psychosocial support and mental health services to individuals and communities affected by HIV, poverty, and socio-economic challenges.",
      icon: ""
    },
    {
      title: "Food Security and Livelihoods",
      description: "Promoting climate-smart agricultural practices to improve productivity, diversify crops, and enhance nutrition for smallholder farmers.",
      icon: ""
    },
    {
      title: "Community Systems Strengthening",
      description: "Empowering local structures with essential skills to monitor, advocate, and demand services related to human rights and health.",
      icon: ""
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-green-900 text-center mb-12">Our Key Focus Areas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {focusAreas.map((area, index) => (
            <div key={index} className="bg-green-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-4xl mb-4">{area.icon}</div>
              <h3 className="text-xl font-semibold text-green-900 mb-3">{area.title}</h3>
              <p className="text-gray-700">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
