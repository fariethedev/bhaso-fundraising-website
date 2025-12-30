"use client";

import { Button } from "@relume_io/relume-ui";
import React, { useRef } from "react";
import { RxChevronUp, RxChevronDown } from "react-icons/rx";
import { Link } from "react-router-dom";


export function Blog55() {
  const mainPost = {
    id: 1,
    src: "/assets/image900.jpeg",
    category: "Health & Wellness",
    title: "Innovative HIV Prevention Strategies in Zimbabwe",
    desc: "Exploring BHASO's community-driven approaches to HIV prevention and treatment adherence.",
  };

  const sidePosts = [
    {
      id: 2,
      src: "/assets/image877.jpeg",
      category: "Climate Justice",
      title: "Climate Change Impacts on Health Outcomes",
      desc: "How BHASO integrates climate resilience with HIV programming in vulnerable communities.",
    },
    {
      id: 3,
      src: "/assets/image767.jpeg",
      category: "Gender Rights",
      title: "Empowering Women Through Health Initiatives",
      desc: "BHASO's programs addressing gender-based violence and economic empowerment.",
    },
    {
      id: 4,
      src: "/assets/image907.jpeg",
      category: "Community Health",
      title: "Strengthening Community Health Systems",
      desc: "The SWAG and CHASA models revolutionizing HIV care in Zimbabwe.",
    },
    {
      id: 5,
      src: "/assets/image768.jpeg",
      category: "Strategic Information",
      title: "Data-Driven Approaches to Health Equity",
      desc: "How BHASO uses research and knowledge management to enhance program impact.",
    },
  ];

  const scrollRef = useRef(null);

  const scrollUp = () => scrollRef.current?.scrollBy({ top: -200, behavior: "smooth" });
  const scrollDown = () => scrollRef.current?.scrollBy({ top: 200, behavior: "smooth" });

  return (
    <section id="blogs" className="bg-white px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-12 max-w-xl">
          <p className="mb-3 font-semibold text-green-700 uppercase">BHASO Insights</p>
          <h1 className="mb-4 text-3xl font-bold text-green-900 md:text-5xl">
            News & Updates
          </h1>
          <p className="text-gray-600">Updates on our 2023-2027 strategic pillars and programs.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-10 md:gap-12">
          {/* Featured Post */}
          <Link
            to={`/blog/${mainPost.id}`}
            className="group relative flex-1 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={mainPost.src}
              alt={mainPost.title}
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-green-900 p-6 text-white">
              <p className="mb-1 font-semibold text-green-300">{mainPost.category}</p>
              <h3 className="text-3xl font-bold leading-tight">{mainPost.title}</h3>
              <p className="mt-2 text-sm">{mainPost.desc}</p>
            </div>
          </Link>

          {/* Side posts */}
          <div className="flex flex-col gap-2 flex-[0.6] relative">
            <div className="flex justify-end mb-2 gap-2">
              <button
                onClick={scrollUp}
                aria-label="Scroll up"
                className="rounded bg-green-900 p-2 text-white hover:bg-green-800"
              >
                <RxChevronUp size={20} />
              </button>
              <button
                onClick={scrollDown}
                aria-label="Scroll down"
                className="rounded bg-green-900 p-2 text-white hover:bg-green-800"
              >
                <RxChevronDown size={20} />
              </button>
            </div>

            <div
              ref={scrollRef}
              className="flex flex-col gap-6 max-h-[620px] overflow-y-auto pr-2 scrollbar-hide hover:overflow-y-scroll"
            >
              {sidePosts.map((post) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.id}`}
                  className="group flex gap-4 rounded-lg border border-green-100 p-4 hover:shadow-md transition-shadow duration-300 bg-white"
                >
                  <img
                    src={post.src}
                    alt={post.title}
                    className="w-28 h-28 rounded-md object-cover flex-shrink-0"
                  />
                  <div>
                    <p className="mb-1 font-semibold text-green-700">{post.category}</p>
                    <h3 className="text-lg font-bold text-green-900 group-hover:text-green-700">
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-600">{post.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end mt-10 md:mt-14 lg:mt-16">
          <Link
          to={"/blog"}
            title="View all"
            variant="secondary"
            className="bg-green-900 text-white hover:bg-green-800"
          >
            View All latest news
          </Link>
        </div>
      </div>
    </section>
  );
}
