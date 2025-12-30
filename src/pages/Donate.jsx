"use client";

import React from "react";
import { Cta19 } from "../components/Cta19";

export default function Donate() {
  return (
    <main className="w-full font-sans">

      {/* HERO SECTION */}
      <section
        className="relative w-full h-[550px] bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/image59.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            Support Our Strategic Mission
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl leading-relaxed">
            Your donation directly supports BHASO's 2023-2027 Strategic Plan to create HIV/health-resilient communities across Zimbabwe.
          </p>
        </div>
      </section>

      {/* IMPACT SECTION */}
      <section className="py-20 bg-gray-50 text-center">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Your Support Matters</h2>
          <p className="text-lg text-gray-600 mb-12">
            Every contribution fuels our strategic pillars from comprehensive HIV/TB management and gender equality to climate justice and community systems strengthening.
          </p>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
              <img src="/assets/image33.jpeg" alt="Healthcare" className="w-full h-48 object-cover rounded" />
              <h3 className="text-xl font-semibold mt-4">Health and Wellbeing</h3>
              <p className="text-gray-600 mt-2">
                Ensuring equitable access to testing, treatment, and continuous care for people living with HIV and TB, focusing on early diagnosis and treatment adherence.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
              <img src="/assets/image854.jpeg" alt="Climate Action" className="w-full h-48 object-cover rounded" />
              <h3 className="text-xl font-semibold mt-4">Climate change</h3>
              <p className="text-gray-600 mt-2">
                Addressing disproportionate climate change impacts on marginalized communities through agroecology and climate-resilient agricultural practices.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
              <img src="/assets/image78.jpeg" alt="Empowerment" className="w-full h-48 object-cover rounded" />
              <h3 className="text-xl font-semibold mt-4">Gender and Human Rights</h3>
              <p className="text-gray-600 mt-2">
                Reducing gender-based violence and enhancing economic opportunities for women, youth, and marginalized communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STRATEGIC PILLARS SECTION */}
      <section className="py-20 bg-white text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl text-green-900 font-bold mb-12">Our Strategic Pillars 2023-2027</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="p-6 bg-green-900 rounded-lg hover:bg-green-700 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-3">Health and Wellness</h3>
              <p className="text-sm">Focus on HIV/AIDS, NCDs, TB, mental health, sexual reproductive health, pandemic preparedness, and drug abuse.</p>
            </div>
            <div className="p-6 bg-green-900 rounded-lg hover:bg-green-600 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-3">Climate Change</h3>
              <p className="text-sm">Addressing climate change impacts and promoting environmental sustainability through agro-ecology and income-strengthening activities.</p>
            </div>
            <div className="p-6 bg-green-900 rounded-lg hover:bg-green-500 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-3">Gender & Human Rights</h3>
              <p className="text-sm">Advocating for gender equality and human rights, ensuring inclusive and equitable access to services.</p>
            </div>
            <div className="p-6 bg-green-900 rounded-lg hover:bg-green-400 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-3">Strategic Information</h3>
              <p className="text-sm">Utilizing data and evidence to inform programming and advocacy efforts.</p>
            </div>
            <div className="p-6 bg-green-900 rounded-lg hover:bg-green-300 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-3">Resource Mobilisation</h3>
              <p className="text-sm">Ensuring that the organisation has enough resources to carry out its mission and vision.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION SECTION (KEEP Cta19) */}
      <Cta19 />

      {/* INNOVATIVE MODELS SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Innovative Community Models</h2>
          <p className="text-lg text-gray-600 mb-12">
            BHASO has pioneered various innovative models that are widely implemented under the Global Fund and other organizations.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 bg-green-50 rounded-lg">
              <img src="/assets/image90.jpeg" alt="SWAG" className="w-full h-40 object-cover rounded mb-3"/>
              <h3 className="text-xl font-semibold text-green-900 mb-2">Sex Workers Advocacy Group (SWAG)</h3>
              <p className="text-gray-700">Amplifying the voices of sex workers and advocating for their rights.</p>
            </div>
            <div className="p-6 bg-green-50 rounded-lg">
              <img src="/assets/image100.jpeg" alt="CHASA" className="w-full h-40 object-cover rounded mb-3"/>
              <h3 className="text-xl font-semibold text-green-900 mb-2">Community HIV AIDS Support Agent (CHASA)</h3>
              <p className="text-gray-700">Community-based agents providing education, support, and linkage to care.</p>
            </div>
            <div className="p-6 bg-green-50 rounded-lg">
              <img src="/assets/image655.jpeg" alt="Community ART Distribution" className="w-full h-40 object-cover rounded mb-3"/>
              <h3 className="text-xl font-semibold text-green-900 mb-2">Out-of-Facility ART Distribution</h3>
              <p className="text-gray-700">Bringing antiretroviral therapy closer to people in need.</p>
            </div>
            <div className="p-6 bg-green-50 rounded-lg">
              <img src="/assets/image59.jpeg" alt="CARGS" className="w-full h-40 object-cover rounded mb-3"/>
              <h3 className="text-xl font-semibold text-green-900 mb-2">Community ART Refill Groups (CARGS)</h3>
              <p className="text-gray-700">Promoting peer-led ART distribution and adherence monitoring.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL / TRUST SECTION */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Real Impact Stories</h2>
          <p className="text-lg text-gray-600 mb-10">
            "Thanks to BHASO's Community ART Refill Groups, I no longer travel long distances for medication. This has helped me adhere to treatment and continue supporting my family."
            <span className="block mt-2 font-semibold text-gray-800">– Community Member, Masvingo Province</span>
          </p>
          <div className="bg-green-800 text-white p-8 rounded-lg max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">Our Achievements</h3>
            <p className="mb-2">• Reduced average distance to essential services to within 5km</p>
            <p className="mb-2">• Established well-functioning support groups offering emotional support</p>
            <p className="mb-2">• Piloted models adopted in the Operational Service Delivery Manual by Ministry of Health</p>
            <p>• Contributed to Zimbabwe achieving UNAIDS 95-95-95 targets ahead of schedule</p>
          </div>
        </div>
      </section>

      {/* FINAL PUSH SECTION */}
      <section className="bg-green-900 text-white text-center py-16">
        <h2 className="text-4xl font-bold mb-4">Join Us in Building Resilient Communities</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Your support empowers us to continue our mission of fostering HIV/health-resilient communities through integrated health services, advocacy, and economic empowerment.
        </p>
        <a
          href="#Cta19"
          className="inline-block bg-white text-green-900 font-bold px-8 py-4 rounded-lg hover:bg-gray-200 transition"
        >
          Support Our Strategic Plan
        </a>
      </section>

    </main>
  );
}
