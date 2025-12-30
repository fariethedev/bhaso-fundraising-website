"use client";

import React from "react";

// Layout1_1 Component - Impact Highlights
export const Layout1_1 = () => {
  const stats = [
    { number: "95%", label: "Viral suppression among clients" },
    { number: "40%", label: "Reduction target for gender-based violence" },
    { number: "5km", label: "Average distance to essential services" },
    { number: "4", label: "Provinces served in Zimbabwe" }
  ];

  return (
    <section className="py-16 px-4 bg-green-900 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-green-800 rounded-lg hover:bg-green-700 transition-all duration-300 hover:scale-105">
              <div className="text-4xl font-bold mb-2">{stat.number}</div>
              <p className="text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center mb-8">Success Stories</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-green-800 p-6 rounded-lg hover:bg-green-700 transition-all duration-300">
              <h4 className="text-xl font-semibold mb-3">Sex Workers Advocacy Group (SWAG)</h4>
              <p>Amplifying the voices of sex workers and advocating for their rights through community-led initiatives.</p>
            </div>
            <div className="bg-green-800 p-6 rounded-lg hover:bg-green-700 transition-all duration-300">
              <h4 className="text-xl font-semibold mb-3">Community HIV AIDS Support Agent (CHASA)</h4>
              <p>Community-based agents providing education, support, and linkage to care for people living with HIV.</p>
            </div>
            <div className="bg-green-800 p-6 rounded-lg hover:bg-green-700 transition-all duration-300">
              <h4 className="text-xl font-semibold mb-3">Community ART Refill Groups (CARGS)</h4>
              <p>Promoting peer-led ART distribution and adherence monitoring to improve treatment outcomes.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Cta13 Component - Geographic Reach
export const Cta13 = () => {
  const provinces = [
    "Masvingo",
    "Matabeleland South",
    "Manicaland",
    "Midlands"
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-green-900 text-center mb-12">Our Geographic Reach</h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2">
            <div className="bg-green-100 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-green-900 mb-4">Operating in 4 Zimbabwean Provinces</h3>
              <ul className="space-y-2">
                {provinces.map((province, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-green-900 rounded-full mr-3"></span>
                    <span className="text-lg">{province}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-gray-700">
                These regions were strategically chosen due to their unique challenges, including high rates of HIV, limited access to healthcare services, and the impacts of socio-economic and environmental issues.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="bg-green-900 text-white p-8 rounded-lg h-full">
              <h3 className="text-2xl font-semibold mb-4">Regional Challenges</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>High rates of HIV infections among young people</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Limited access to healthcare services</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Impact of climate change on health outcomes</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Food insecurity and livelihood challenges</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Gender-based violence and discrimination</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};