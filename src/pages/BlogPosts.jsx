import React from "react";
import { Link } from "react-router-dom";
import { Blog55 } from "../components/Blog55";

export default function BlogPosts() {
  const posts = [
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
    <div className="px-4 py-10 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-green-900 mb-8">Latest Blogs</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link
            to={`/blog/${post.id}`}
            key={post.id}
            className="block border border-green-100 rounded-lg overflow-hidden hover:shadow-md transition"
          >
            <img
              src={post.src}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="font-semibold text-green-800">{post.title}</h2>
            </div>
          </Link>
        ))}
      </div>

      {/* Optional: Your Blog55 section */}
      <div className="mt-12">
        <Blog55 />
      </div>
    </div>
  );
}
