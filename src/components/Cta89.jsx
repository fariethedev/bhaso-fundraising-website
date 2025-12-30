"use client";

import React from "react";

export const Cta89 = () => {
  const partners = [
    "MOHCC", "NAC", "Global Fund", "MSF", "REPSSI", "Newlife Centre"
  ];

  const strategicGoals = [
    {
      title: "Resource Mobilization",
      description: "Ensuring that the organisation has enough resources to carry out its mission and vision."
    },
    {
      title: "Economic Empowerment",
      description: "Strengthening economic opportunities for vulnerable communities through income-generating activities and financial literacy programs."
    },
    {
      title: "Advancing Climate Justice",
      description: "Addressing climate change impacts and promoting environmental sustainability through agro-ecology and income-strengthening activities."
    },
    {
      title: "Fighting Stigma and Discrimination",
      description: "Actively combating stigma and discrimination faced by people living with HIV through the formation of support groups and advocacy efforts."
    },
    {
      title: "Upholding Gender and Human Rights",
      description: "Advocating for gender equality and human rights, ensuring inclusive and equitable access to services for all marginalized populations."
    },
    {
      title: "Strengthening Strategic Information Management",
      description: "Utilizing data and evidence to inform programming and advocacy efforts, ensuring effective and targeted interventions."
    }
  ];

  const specificObjectives = [
    {
      area: "Gender and Human Rights",
      objectives: [
        "By December 2027, BHASO will reduce gender-based violence by 40% through targeted programs that provide education, support, and resources to at least 10,000 women and girls across Zimbabwe.",
        "By December 2027, BHASO will enhance economic opportunities for women and marginalized communities by facilitating access to financial resources, land, and employment for 5,000 women, youth, people living with disabilities, and members of the LGBTQ+ community in Zimbabwe.",
        "By December 2027, BHASO will increase community engagement and legal support for vulnerable populations, establishing 20 advocacy groups to address discrimination and legal challenges faced by sex workers, the LGBTQ+ community, and other marginalized groups, ultimately reducing incidents of rights violations by 50%."
      ]
    },
    {
      area: "Strategic Information and Knowledge Management",
      objectives: [
        "Conduct research and establish a dedicated research center within BHASO.",
        "Enhance innovation in the design and implementation of BHASO's programs.",
        "Monitor progress, evaluate impact, and identify areas for improvement to ensure accountability, learning, and the effective dissemination of knowledge by December 2027."
      ]
    },
    {
      area: "Resource Mobilisation",
      objectives: [
        "Secure diverse funding sources to ensure long-term financial viability, enabling BHASO to maintain and expand its operations effectively.",
        "Foster collaborations with stakeholders, including government agencies, private sector entities, and community organizations, to leverage additional resources and expertise.",
        "Mobilize local resources and actively involve community members in initiatives, reinforcing ownership, sustainability, and commitment to the organization's mission."
      ]
    },
    {
      area: "Wellness",
      objectives: [
        "Enhance HIV prevention, testing, Care and treatment services to reduce new infections and AIDS-related deaths.",
        "Provide comprehensive health services addressing mental health, TB, malaria, and NCDs for people living and affected with HIV in the 4 provinces of Zimbabwe",
        "Integrate HIV services with sexual and reproductive health services to provide comprehensive care.",
        "Engage in advocacy efforts to influence public health policies and secure funding."
      ]
    }
  ];

  return (
    <section className="py-16 px-4 bg-green-900 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Strategic Goals 2023-2027</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {strategicGoals.map((goal, index) => (
            <div key={index} className="bg-green-700 p-6 rounded-lg hover:bg-green-600 transition-all duration-300 hover:scale-105">
              <h3 className="text-xl font-semibold mb-3">{goal.title}</h3>
              <p className="text-sm">{goal.description}</p>
            </div>
          ))}
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-center mb-8">Specific Objectives by Focus Area</h3>
          <div className="space-y-8">
            {specificObjectives.map((item, index) => (
              <div key={index} className="bg-green-700 p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-4">{item.area}</h4>
                <ul className="space-y-3">
                  {item.objectives.map((objective, objIndex) => (
                    <li key={objIndex} className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>{objective}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Partners & Supporters</h2>
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {partners.map((partner, index) => (
            <div key={index} className="bg-green-700 px-6 py-3 rounded-full hover:bg-green-600 transition-all duration-300 hover:scale-105">
              {partner}
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-6">Join Us in Building Healthier Communities</h3>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-3 bg-white text-green-900 font-semibold rounded-lg hover:bg-green-100 transition-all duration-300 transform hover:scale-105">
              Support Our Work
            </button>
            <button className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-green-900 transition-all duration-300 transform hover:scale-105">
              Volunteer With Us
            </button>
            <button className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-green-900 transition-all duration-300 transform hover:scale-105">
              Subscribe to Newsletter
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};