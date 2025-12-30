"use client";

import React, { useState } from "react";

const moreContent = (
  <>
    <p>
      BHASO’s community programs include tailored HIV/AIDS counseling, climate
      adaptation training, and women’s empowerment workshops. We believe these
      programs build lasting resilience and foster local leadership.
    </p>
    <p>
      We also partner with governmental and international agencies to
      influence policies that prioritize vulnerable populations and
      sustainable development. Our collaborative approach has helped expand
      services and reach over 100,000 beneficiaries annually.
    </p>
    <p>
      Our vision is a Zimbabwe where everyone has equal access to health care,
      education, and economic opportunities in a climate-secure future.
      Through innovation and inclusiveness, BHASO remains committed to this
      transformative journey.
    </p>
    <p>
      Our team actively monitors emerging health trends and environmental
      changes to adapt our programs accordingly. We prioritize transparency,
      community involvement, and sustainability in all our initiatives.
    </p>
    <p>
      BHASO’s volunteer network is one of the largest in the region, enabling
      rapid response to crises and ongoing support for vulnerable groups.
      Continuous training and capacity-building ensure our impact is both
      effective and lasting.
    </p>
  </>
);

export function Layout24() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="relume" className="w-full bg-green-800 px-[5%] py-20 md:py-28 text-white">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8 text-center max-w-[90%]">
          About BHASO (Batanai HIV/AIDS Service Organisation)
        </h2>

        {/* About text */}
        <div className="space-y-6 text-base md:text-lg leading-relaxed text-green-100 max-w-full">
          <p>
            Founded in the early 2000s, BHASO (Batanai HIV/AIDS Service
            Organization) began as a grassroots initiative to provide
            life-saving care and education to communities deeply affected by the
            HIV/AIDS epidemic. Our journey started with a small group of
            volunteers dedicated to outreach, support, and creating awareness
            in remote and underserved areas of Zimbabwe.
          </p>

          <p>
            Over the years, our work expanded beyond HIV/AIDS, as we recognized
            the intersection between public health, poverty, and climate
            vulnerability. In response, we adopted a holistic approach that
            integrates health education, gender equity, youth empowerment, and
            sustainable environmental practices. Today, BHASO operates across
            multiple provinces, delivering impact-driven programs with a focus
            on resilience and community leadership.
          </p>

          <p>
            Our core mission is to empower individuals and families through
            knowledge, resources, and advocacy. Whether it's providing access to
            antiretroviral therapy, supporting orphans and vulnerable children,
            training climate-smart farmers, or championing women's rights, we
            believe in leaving no one behind. Our dedicated team of health
            workers, educators, and environmental champions collaborate closely
            with local stakeholders to ensure lasting change.
          </p>

          <p>
            BHASO continues to evolve, driven by the voices of the communities
            we serve. As we move forward, we remain committed to innovation,
            inclusivity, and impact — creating a future where health,
            opportunity, and dignity are a reality for all.
          </p>

          {showMore && moreContent}
        </div>

        {/* Bottom navigation buttons */}
        <div className="mt-6 flex gap-4">
          <button
            onClick={() => setShowMore(false)}
            disabled={!showMore}
            className={`p-2 rounded-full bg-green-900 hover:bg-green-700 transition disabled:opacity-50 disabled:cursor-not-allowed`}
            aria-label="Show less about BHASO"
          >
            {/* Up arrow */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
            </svg>
          </button>
          <button
            onClick={() => setShowMore(true)}
            disabled={showMore}
            className={`p-2 rounded-full bg-green-900 hover:bg-green-700 transition disabled:opacity-50 disabled:cursor-not-allowed`}
            aria-label="Show more about BHASO"
          >
            {/* Down arrow */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
