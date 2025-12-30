"use client";
import React from "react";
// For RxChevronRight (from react-icons/rx)
import { RxChevronRight } from "react-icons/rx";

// For FiChevronLeft (from react-icons/fi)
import { FiChevronLeft } from "react-icons/fi";

// For Link (from react-router-dom)
import { Link } from "react-router-dom";
export function Layout6() {
  return (
    <section id="gender-rights" className="bg-white px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-2 lg:items-center lg:gap-x-20">
          {/* Text content - now comes first on mobile */}
          <div className="order-2 lg:order-1">
            <p className="mb-2 font-semibold text-green-800 uppercase tracking-widest">
              Gender & Human Rights
            </p>
            <h1 className="mb-5 text-3xl font-bold leading-tight text-green-900 md:text-4xl lg:text-5xl">
              Advancing Equality and Rights for Marginalized Groups
            </h1>
            <p className="mb-6 text-lg text-gray-700 md:mb-8">
              BHASO's Gender and Human Rights program tackles systemic discrimination against women and youth 
       in Zimbabwe. Through advocacy, education, and economic empowerment, 
              we've reduced gender-based violence incidents by 40% in our operational areas since 2020.
            </p>
            
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2 max-w-xl">
              <div>
                <h6 className="mb-3 text-lg font-bold md:mb-4 md:text-xl text-green-800">
                  Women's Empowerment
                </h6>
                <p className="text-gray-700">
                  Providing 5,000+ women with financial literacy training, microfinance opportunities, 
                  and leadership development programs.
                </p>
              </div>
              <div>
                <h6 className="mb-3 text-lg font-bold md:mb-4 md:text-xl text-green-800">
                  Rights Protection
                </h6>
                <p className="text-gray-700">
                  Operating 20+ advocacy groups supporting sex workers  individuals with legal 
                  aid and social services.
                </p>
              </div>
            </div>

           <div className="flex flex-wrap gap-4 mt-8">
  <Link
    to="/about"
    className="bg-green-800 hover:bg-green-700 text-white px-6 py-3 rounded-md flex items-center"
  >
    Join Our Advocacy
    <RxChevronRight className="ml-1" size={18} />
  </Link>
  <Link
    to="/#Testimonial15"
    className="border border-green-800 text-green-800 hover:bg-green-50 px-6 py-3 rounded-md inline-block text-center"
  >
    Success Stories
  </Link>
</div>
          </div>

          {/* Image - now full height and larger */}
          <div className="order-1 lg:order-2 h-full min-h-[400px] lg:min-h-[600px]">
            <img
              src="/assets/image0.jpeg"
              className="w-full h-full object-cover rounded-lg shadow-xl"
              alt="Women participating in BHASO's empowerment workshop"
            />
          </div>
        </div>
      </div>
    </section>
  );
}