"use client";

import React from "react";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { FaFacebookSquare } from "react-icons/fa";

const teamMembers = [
  {
    name: "Alice M.",
    position: "Founder Director",
    bio: "Empowering communities through education and support.",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    linkedin: "#",
    facebook: "#",
  },
  {
    name: "John D.",
    position: "Program Manager",
    bio: "Expert in HIV/AIDS outreach and community engagement.",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    linkedin: "#",
    facebook: "#",
  },
  {
    name: "Sarah K.",
    position: "Health Coordinator",
    bio: "Focusing on health education and climate resilience.",
    image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg",
    linkedin: "#",
    facebook: "#",
  },
  {
    name: "Michael T.",
    position: "Outreach Specialist",
    bio: "Connecting communities with vital support.",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
    linkedin: "#",
    facebook: "#",
  },
  {
    name: "Linda S.",
    position: "Finance Officer",
    bio: "Ensuring financial sustainability for programs.",
    image: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg",
    linkedin: "#",
    facebook: "#",
  },
  {
    name: "Daniel W.",
    position: "Research Lead",
    bio: "Leading impactful community-focused research.",
    image: "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg",
    linkedin: "#",
    facebook: "#",
  },
  {
    name: "Maria G.",
    position: "Legal Advisor",
    bio: "Advocating for community rights and justice.",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    linkedin: "#",
    facebook: "#",
  },
  {
    name: "Samuel P.",
    position: "Communications Lead",
    bio: "Driving awareness through effective outreach.",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
    linkedin: "#",
    facebook: "#",
  },
];

export function Team2() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-white text-gray-800">
      <div className="container mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20">
          <div className="mb-6 md:mb-0 md:w-1/2">
            <h2 className="text-4xl font-bold md:text-6xl">Meet Our Team</h2>
          </div>
          <div className="md:w-1/2 text-right">
            <p className="text-md md:text-lg max-w-md ml-auto">
              Meet the passionate individuals behind Bhaso, each committed to building a better future for our communities.
            </p>
          </div>
        </div>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="relative h-[400px] w-full rounded-xl overflow-hidden shadow-lg group"
            >
              <img
                src={member.image}
                alt={member.name}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/80 via-black/50 to-transparent text-white p-4">
                <h5 className="text-lg font-semibold">{member.name}</h5>
                <h6 className="text-sm text-gray-200 mb-1">{member.position}</h6>
                <p className="text-xs mb-3">{member.bio}</p>
                <div className="flex gap-3">
                  <a href={member.linkedin} aria-label="LinkedIn">
                    <BiLogoLinkedinSquare className="text-white size-5 hover:text-blue-500" />
                  </a>
                  <a href={member.facebook} aria-label="Facebook">
                    <FaFacebookSquare className="text-white size-5 hover:text-blue-600" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
