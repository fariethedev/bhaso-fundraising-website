"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";
import { Link } from "react-router-dom"; 

export function Layout192() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div className="order-2 md:order-1">
            <img
              src="/assets/image78.jpeg"
              className="w-full rounded-md object-cover"
              alt="BHASO community health workers providing care"
            />
          </div>
          <div className="order-1 lg:order-2">
            <p className="mb-2 font-semibold text-green-800 uppercase tracking-widest">
              Our Approach
            </p>
            <h2 className="mb-5 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl text-green-900">
              Building HIV-Resilient & Climate-Smart Communities
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              BHASO implements integrated programs addressing Zimbabwe's interconnected health and climate challenges. 
              Through our innovative models like SWAG and CHASA, we provide HIV/TB services, climate-smart agriculture 
              training, and gender equality programs across four provinces. Our community-centered approach ensures 
              sustainable impact aligned with Zimbabwe's National Development Strategy and Global AIDS targets.
            </p>
          <div className="flex flex-wrap gap-4">
  <Link
    to="/our-work"
    className="bg-green-800 text-white px-6 py-3 rounded-md hover:bg-green-700 text-sm font-medium flex items-center"
  >
    View Our Strategic Plan
    <RxChevronRight className="ml-1" size={18} />
  </Link>

  <Link
    to="/about"
    className="border border-green-800 text-green-800 px-6 py-3 rounded-md hover:bg-green-50 text-sm font-medium inline-block text-center"
  >
    Our Programs
  </Link>
</div>
          </div>
        </div>
      </div>
    </section>
  );
}