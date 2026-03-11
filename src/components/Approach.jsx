"use client";

import React from "react";
import { motion } from "framer-motion";

export const Approach = () => {
  const approaches = [
    {
      title: "Community Systems Strengthening",
      description: "We empower local structures by equipping them with essential skills to monitor, advocate, and demand services related to human rights, sexual and reproductive health (SRH) rights, and HIV prevention, treatment, care, support, and control."
    },
    {
      title: "Innovative Models",
      description: "BHASO has pioneered various innovative models tailored to address HIV management challenges effectively, including SWAG, CHASA, Out-of-Facility Community ART Distribution, and CARGS."
    },
    {
      title: "Fighting Stigma and Discrimination",
      description: "BHASO actively combats stigma and discrimination faced by people living with HIV through the formation of support groups that create safe spaces for sharing experiences and receiving emotional support."
    }
  ];

  const keyFocusAreas = [
    {
      title: "HIV and TB Management",
      description: "BHASO implements comprehensive, community-driven programs designed to manage and prevent the spread of HIV and tuberculosis (TB). These programs ensure equitable access to testing, treatment, and continuous care for affected individuals, with a strong focus on early diagnosis and adherence to treatment regimens. BHASO also works closely with healthcare providers to offer support services that address the physical, emotional, and social needs of people living with HIV and TB, thereby improving overall health outcomes."
    },
    {
      title: "Open Access to HIV & SRHR Services for PLHIV and AGYW",
      description: "BHASO prioritizes providing open and stigma-free access to sexual and reproductive health and rights (SRHR) services for people living with HIV (PLHIV) and adolescent girls and young women (AGYW). These services include family planning, maternal healthcare, HIV counseling, and prevention programs. BHASO's holistic approach ensures that PLHIV and AGYW receive comprehensive care, which integrates HIV management with sexual and reproductive health services, empowering them to make informed choices and lead healthier lives."
    },
    {
      title: "Psychosocial Support (PSS) and Mental Health",
      description: "In collaboration with organizations such as REPSSI and Newlife Centre, BHASO provides essential psychosocial support (PSS) and mental health services to individuals and communities affected by HIV, poverty, and other socio-economic challenges. These services include counseling, peer support groups, and mental health education, helping individuals cope with the psychological effects of living with HIV and other stressors. This holistic approach addresses both the emotional and mental well-being of affected populations."
    },
    {
      title: "Climate Change and Resilience",
      description: "BHASO recognizes the significant impact of climate change on vulnerable communities, particularly in rural areas where livelihoods are heavily dependent on agriculture. Through the promotion of sustainable practices and adaptation strategies, BHASO strengthens the resilience of these communities. Key interventions include the promotion of agroecology and climate-resilient agricultural practices. Additionally, income-strengthening activities help families diversify their income streams, reducing their vulnerability to climate-induced shocks such as droughts and floods, while improving food security."
    },
    {
      title: "Food Security and Livelihoods",
      description: "Addressing food security is central to BHASO's mission. Through the promotion of climate-smart agricultural practices, BHASO helps smallholder farmers improve productivity, diversify crops, and enhance nutrition. By encouraging crop rotation, organic farming, and water conservation techniques, BHASO contributes to both environmental sustainability and the economic empowerment of farming communities. These efforts directly impact the livelihoods of vulnerable populations, ensuring better food security and long-term resilience."
    },
    {
      title: "Agroecology",
      description: "Agroecology is a key focus for BHASO as it combines environmental sustainability with economic viability. By promoting farming practices that work with nature—such as organic farming, the use of natural fertilizers, and biodiversity conservation—BHASO helps communities mitigate the effects of climate change. These practices not only improve soil health and crop yields but also contribute to long-term food security by fostering sustainable agricultural ecosystems."
    },
    {
      title: "Evidence-Based Advocacy on Health and Rights",
      description: "BHASO is committed to advocating for policies and programs that uphold human rights and improve health outcomes for marginalized populations. The organization uses data and evidence to inform its advocacy efforts, ensuring that its recommendations are grounded in research and practical experience. By engaging with policymakers, healthcare providers, and communities, BHASO influences decisions that promote equitable access to healthcare, protect human rights, and foster inclusive development."
    },
    {
      title: "Community Systems Strengthening",
      description: "Through a range of community-based initiatives, BHASO strengthens community systems to ensure that health services and support structures are sustainable and responsive to local needs. BHASO fosters leadership development, social mobilization, and community-based monitoring to improve coordination and strengthen linkages among healthcare providers, community leaders, and civil society organizations. This approach empowers communities to take ownership of their health outcomes and build long-term resilience."
    }
  ];

  return (
    <section className="py-20 md:py-28 px-[5%] bg-[#fcfcfa]">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-serif font-bold text-[#113d29] text-center mb-16"
        >
          Our Approaches
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {approaches.map((approach, index) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={index}
              className="bg-white border border-[#113d29]/10 p-8 rounded-3xl hover:-translate-y-2 transition-transform duration-300 shadow-xl"
            >
              <h3 className="text-2xl font-bold text-[#113d29] mb-4">{approach.title}</h3>
              <p className="text-gray-600 font-light leading-relaxed">{approach.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-serif font-bold text-[#113d29] text-center mb-16"
        >
          Key Focus Areas
        </motion.h2>
        <div className="space-y-8">
          {keyFocusAreas.map((area, index) => (
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              key={index}
              className="bg-white border text-left border-[#113d29]/10 p-8 rounded-3xl hover:border-[#14b8a6]/50 transition-colors duration-300 shadow-md hover:shadow-xl"
            >
              <h3 className="text-2xl font-bold text-[#113d29] mb-4">{area.title}</h3>
              <p className="text-gray-700 font-light leading-relaxed text-lg">{area.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24 bg-[#113d29] text-white p-10 md:p-14 rounded-3xl shadow-xl"
        >
          <h3 className="text-3xl font-serif font-bold mb-10 text-center">Innovative HIV Management Models</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#0e3322] border border-white/10 p-6 rounded-2xl">
              <h4 className="text-xl font-bold mb-3 text-[#14b8a6]">Sex Workers Advocacy Group (SWAG)</h4>
              <p className="font-light text-gray-200 leading-relaxed">Focused on amplifying the voices of sex workers and advocating for their rights.</p>
            </div>
            <div className="bg-[#0e3322] border border-white/10 p-6 rounded-2xl">
              <h4 className="text-xl font-bold mb-3 text-[#14b8a6]">Community HIV AIDS Support Agent (CHASA)</h4>
              <p className="font-light text-gray-200 leading-relaxed">Community-based agents who provide education, support, and linkage to care.</p>
            </div>
            <div className="bg-[#0e3322] border border-white/10 p-6 rounded-2xl">
              <h4 className="text-xl font-bold mb-3 text-[#14b8a6]">Out-of-Facility Community ART Distribution</h4>
              <p className="font-light text-gray-200 leading-relaxed">Piloted with MSF, this model brings antiretroviral therapy closer to people in need.</p>
            </div>
            <div className="bg-[#0e3322] border border-white/10 p-6 rounded-2xl">
              <h4 className="text-xl font-bold mb-3 text-[#14b8a6]">Community ART Refill Groups (CARGS)</h4>
              <p className="font-light text-gray-200 leading-relaxed">Promoting peer-led ART distribution and adherence monitoring.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};