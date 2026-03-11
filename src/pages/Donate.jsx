"use client";

import React from "react";
import { DonationFlow } from "../components/DonationFlow";

export default function Donate() {
  return (
    <main className="w-full font-sans bg-[#fcfcfa]">
      <DonationFlow />
      {/* HERO SECTION */}
      <section
        className="relative w-full h-[550px] bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/image59.jpeg')" }}
      >
        <div className="absolute inset-0 bg-[#113d29]/70 mix-blend-multiply"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 z-10">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6 drop-shadow-xl">
            Support Our Strategic Mission
          </h1>
          <p className="text-xl md:text-2xl font-light text-gray-200 max-w-2xl leading-relaxed drop-shadow-md">
            Your donation directly supports BHASO's 2023-2027 Strategic Plan to create HIV/health-resilient communities across Zimbabwe.
          </p>
        </div>
      </section>

      {/* IMPACT SECTION */}
      <section className="py-24 bg-[#fcfcfa] text-center">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#113d29] mb-6">Why Your Support Matters</h2>
          <p className="text-lg text-gray-600 font-light mb-16 max-w-3xl mx-auto">
            Every contribution fuels our strategic pillars from comprehensive HIV/TB management and gender equality to climate justice and community systems strengthening.
          </p>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { title: "Health and Wellbeing", img: "/assets/image33.jpeg", desc: "Ensuring equitable access to testing, treatment, and continuous care for people living with HIV and TB, focusing on early diagnosis and treatment adherence." },
              { title: "Climate change", img: "/assets/image854.jpeg", desc: "Addressing disproportionate climate change impacts on marginalized communities through agroecology and climate-resilient agricultural practices." },
              { title: "Gender and Human Rights", img: "/assets/image78.jpeg", desc: "Reducing gender-based violence and enhancing economic opportunities for women, youth, and marginalized communities." }
            ].map((item, idx) => (
              <div key={idx} className="p-8 bg-white rounded-3xl shadow-lg border border-[#113d29]/5 hover:-translate-y-2 hover:shadow-xl hover:border-[#14b8a6]/30 transition-all duration-300">
                <img src={item.img} alt={item.title} className="w-full h-48 object-cover rounded-2xl mb-6 shadow-sm" />
                <h3 className="text-xl font-bold text-[#113d29] mt-2 group-hover:text-[#14b8a6] transition-colors">{item.title}</h3>
                <p className="text-gray-600 font-light mt-4 leading-relaxed line-clamp-4">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STRATEGIC PILLARS SECTION */}
      <section className="py-24 bg-[#113d29] text-white rounded-t-3xl border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-16">Our Strategic Pillars 2023-2027</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { title: "Health and Wellness", desc: "Focus on HIV/AIDS, NCDs, TB, mental health, sexual reproductive health, pandemic preparedness, and drug abuse." },
              { title: "Climate Change", desc: "Addressing climate change impacts and promoting environmental sustainability through agro-ecology and income-strengthening activities." },
              { title: "Gender & Human Rights", desc: "Advocating for gender equality and human rights, ensuring inclusive and equitable access to services." },
              { title: "Strategic Information", desc: "Utilizing data and evidence to inform programming and advocacy efforts." },
              { title: "Resource Mobilisation", desc: "Ensuring that the organisation has enough resources to carry out its mission and vision." }
            ].map((pillar, idx) => (
              <div key={idx} className="p-8 bg-[#0a261a] border border-white/10 rounded-3xl hover:border-[#14b8a6]/70 hover:-translate-y-2 transition-all duration-300 shadow-2xl flex flex-col justify-center">
                <h3 className="text-xl font-bold mb-4 text-[#14b8a6]">{pillar.title}</h3>
                <p className="text-sm font-light leading-relaxed text-gray-300">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INNOVATIVE MODELS SECTION */}
      <section className="py-24 bg-[#fcfcfa]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#113d29] mb-6">Our Innovative Community Models</h2>
          <p className="text-lg text-gray-600 font-light mb-16 max-w-3xl mx-auto">
            BHASO has pioneered various innovative models that are widely implemented under the Global Fund and other organizations.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Sex Workers Advocacy Group (SWAG)", desc: "Amplifying the voices of sex workers and advocating for their rights.", img: "/assets/image90.jpeg" },
              { title: "Community HIV AIDS Support Agent (CHASA)", desc: "Community-based agents providing education, support, and linkage to care.", img: "/assets/image100.jpeg" },
              { title: "Out-of-Facility ART Distribution", desc: "Bringing antiretroviral therapy closer to people in need.", img: "/assets/image655.jpeg" },
              { title: "Community ART Refill Groups (CARGS)", desc: "Promoting peer-led ART distribution and adherence monitoring.", img: "/assets/image59.jpeg" }
            ].map((model, idx) => (
              <div key={idx} className="p-8 bg-white border border-[#113d29]/10 rounded-3xl shadow-sm hover:shadow-xl hover:border-[#14b8a6]/40 hover:-translate-y-1 transition-all duration-300">
                <img src={model.img} alt="Model" className="w-full h-40 object-cover rounded-2xl mb-6 shadow-sm" />
                <h3 className="text-xl font-bold text-[#113d29] mb-3 leading-snug">{model.title}</h3>
                <p className="text-gray-600 font-light text-sm leading-relaxed">{model.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL / TRUST SECTION */}
      <section className="py-24 bg-white text-center border-t border-[#113d29]/5">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#113d29] mb-8">Real Impact Stories</h2>
          <div className="bg-[#14b8a6]/5 border border-[#14b8a6]/20 p-10 md:p-14 rounded-3xl shadow-sm mb-16 relative">
            <svg className="absolute top-6 left-6 text-[#14b8a6]/20 w-16 h-16" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
            </svg>
            <p className="text-xl md:text-2xl text-gray-700 font-light italic leading-relaxed relative z-10 max-w-3xl mx-auto mt-4 px-4">
              "Thanks to BHASO's Community ART Refill Groups, I no longer travel long distances for medication. This has helped me adhere to treatment and continue supporting my family."
              <span className="block mt-6 text-sm md:text-base font-bold text-[#14b8a6] not-italic uppercase tracking-widest">– Community Member, Masvingo Province</span>
            </p>
          </div>
          <div className="bg-[#113d29] text-white p-10 md:p-14 rounded-3xl max-w-3xl mx-auto shadow-2xl relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#14b8a6] rounded-full blur-3xl opacity-20 pointer-events-none"></div>
            <h3 className="text-3xl font-serif font-bold mb-8 relative z-10">Our Achievements</h3>
            <ul className="text-left space-y-4 font-light text-lg relative z-10 w-fit mx-auto">
              <li className="flex items-start gap-4">
                <span className="text-[#14b8a6] font-bold">✓</span> Reduced average distance to essential services to within 5km
              </li>
              <li className="flex items-start gap-4">
                <span className="text-[#14b8a6] font-bold">✓</span> Established well-functioning support groups offering emotional support
              </li>
              <li className="flex items-start gap-4">
                <span className="text-[#14b8a6] font-bold">✓</span> Piloted models adopted in the Operational Service Delivery Manual by Ministry of Health
              </li>
              <li className="flex items-start gap-4">
                <span className="text-[#14b8a6] font-bold">✓</span> Contributed to Zimbabwe achieving UNAIDS 95-95-95 targets ahead of schedule
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* FINAL PUSH SECTION */}
      <section className="bg-[#113d29] text-white text-center py-24 px-6">
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">Join Us in Building Resilient Communities</h2>
        <p className="text-xl font-light mb-12 max-w-3xl mx-auto leading-relaxed text-gray-200">
          Your support empowers us to continue our mission of fostering HIV/health-resilient communities through integrated health services, advocacy, and economic empowerment.
        </p>
        <a
          href="#Cta19"
          className="inline-block bg-[#14b8a6] hover:bg-white text-white hover:text-[#113d29] font-bold px-10 py-5 rounded-full shadow-xl transition-all duration-300 text-lg"
        >
          Support Our Strategic Plan
        </a>
      </section>

    </main>
  );
}
