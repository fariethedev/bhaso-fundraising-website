"use client";

import React from "react";

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
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-green-900 text-center mb-12">Our Approaches</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {approaches.map((approach, index) => (
            <div key={index} className="bg-green-50 p-6 rounded-lg hover:bg-green-100 transition-all duration-300 hover:shadow-md">
              <h3 className="text-xl font-semibold text-green-900 mb-4">{approach.title}</h3>
              <p className="text-gray-700">{approach.description}</p>
            </div>
          ))}
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-green-900 text-center mb-12">Key Focus Areas</h2>
        <div className="space-y-8">
          {keyFocusAreas.map((area, index) => (
            <div key={index} className="bg-green-50 p-6 rounded-lg hover:bg-green-100 transition-all duration-300 hover:shadow-md">
              <h3 className="text-xl font-semibold text-green-900 mb-4">{area.title}</h3>
              <p className="text-gray-700">{area.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-green-900 text-white p-8 rounded-lg">
          <h3 className="text-2xl font-semibold mb-6">Innovative HIV Management Models</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold mb-2">Sex Workers Advocacy Group (SWAG)</h4>
              <p>Focused on amplifying the voices of sex workers and advocating for their rights.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2">Community HIV AIDS Support Agent (CHASA)</h4>
              <p>Community-based agents who provide education, support, and linkage to care.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2">Out-of-Facility Community ART Distribution</h4>
              <p>Piloted with MSF, this model brings antiretroviral therapy closer to people in need.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2">Community ART Refill Groups (CARGS)</h4>
              <p>Promoting peer-led ART distribution and adherence monitoring.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};