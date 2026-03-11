import React from "react";
import { Link } from "react-router-dom";
import { LatestNews } from "../components/LatestNews";
import { motion } from "framer-motion";

export default function BlogPosts() {
  const posts = [
    {
      id: 9,
      src: "/assets/image56.jpeg",
      title: "BHASO at World AIDS Day and Candlelight Memorial Service",
    },
    {
      id: 8,
      src: "/assets/image48.jpeg",
      title: "Embracing the New Normal in Global Health and Development",
    },
    {
      id: 7,
      src: "/assets/image46.jpeg",
      title: "Locally Led Development Capacity Building",
    },
    {
      id: 6,
      src: "/assets/image45.jpeg",
      title: "Shining a Light on Transparency in Education",
    },
    {
      id: 1,
      src: "https://images.pexels.com/photos/33011250/pexels-photo-33011250.jpeg",
      title: "Innovative HIV Prevention Strategies in Zimbabwe",
    },
    {
      id: 2,
      src: "https://images.pexels.com/photos/33023725/pexels-photo-33023725.jpeg",
      title: "Climate Change Impacts on Health Outcomes",
    },
    {
      id: 3,
      src: "https://images.pexels.com/photos/5789278/pexels-photo-5789278.jpeg",
      title: "Empowering Women Through Health Initiatives",
    },
  ];

  return (
    <div className="px-[5%] py-16 md:py-24 bg-[#fcfcfa] min-h-screen">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-serif font-bold text-[#113d29] mb-12"
        >
          Latest Blogs
        </motion.h1>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Link
                to={`/blog/${post.id}`}
                className="block bg-white border border-[#113d29]/10 rounded-3xl overflow-hidden hover:shadow-xl hover:-translate-y-2 hover:border-[#14b8a6]/50 transition-all duration-300 group"
              >
                <div className="overflow-hidden">
                  <img
                    src={post.src}
                    alt={post.title}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h2 className="font-bold text-xl text-[#113d29] group-hover:text-[#14b8a6] transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Optional: Your LatestNews section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24"
        >
          <LatestNews />
        </motion.div>
      </div>
    </div>
  );
}
