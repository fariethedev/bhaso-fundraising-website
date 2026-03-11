import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export function LatestNews() {
  const newsItems = [
    {
      id: 9,
      src: "/assets/image56.jpeg",
      category: "NEWS",
      title: "BHASO at World AIDS Day and Candlelight Memorial Service",
      date: "December 03, 2025",
    },
    {
      id: 8,
      src: "/assets/image48.jpeg",
      category: "ARTICLE",
      title: "Embracing the New Normal in Global Health and Development",
      date: "January 12, 2026",
    },
    {
      id: 7,
      src: "/assets/image46.jpeg",
      category: "TUTORIAL",
      title: "Locally Led Development Capacity Building",
      date: "February 05, 2026",
    },
    {
      id: 6,
      src: "/assets/image45.jpeg",
      category: "ARTICLE",
      title: "Shining a Light on Transparency in Education",
      date: "February 05, 2026",
    },
  ];

  return (
    <section id="news" className="bg-[#fcfcfa] px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 border-b border-[#113d29]/10 pb-6">
          <h2 className="mb-4 md:mb-0 text-3xl font-bold text-[#113d29] md:text-5xl font-serif">
            Latest News
          </h2>
          <Link
            to="/blog"
            className="text-sm font-bold text-[#14b8a6] hover:text-[#113d29] transition-colors uppercase tracking-widest px-4 py-2 border border-[#14b8a6]/20 hover:border-[#113d29]/50 rounded-full bg-white shadow-sm"
          >
            view all news →
          </Link>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 shrink-0">
          {newsItems.map((post, index) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={post.id}
            >
              <Link
                to={`/blog/${post.id}`}
                className="group flex flex-col sm:flex-row gap-6 hover:-translate-y-2 p-4 -ml-4 rounded-3xl hover:bg-white hover:shadow-xl border border-transparent hover:border-[#14b8a6]/20 transition-all duration-300"
              >
                <div className="overflow-hidden shrink-0 rounded-2xl w-full sm:w-48 h-48 shadow-md">
                  <img
                    src={post.src}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
                <div className="flex flex-col justify-center py-2 flex-grow">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-[#14b8a6]/10 text-[#14b8a6] text-[10px] uppercase font-bold px-3 py-1.5 tracking-wider rounded-full border border-[#14b8a6]/20">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-500 font-medium tracking-wide">
                      {post.date}
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#113d29] group-hover:text-[#14b8a6] transition-colors leading-snug font-serif line-clamp-3">
                    {post.title}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
