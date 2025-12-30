"use client";

import React from "react";
import { useParams, Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "Innovative HIV Prevention Strategies in Zimbabwe",
    date: "2025-08-05",
    image: "https://images.pexels.com/photos/33011250/pexels-photo-33011250.jpeg",
    category: "Health & Wellness",
    content: `
      Zimbabwe has been at the forefront of innovative HIV prevention strategies,
      thanks to community-driven approaches that prioritize education, accessibility,
      and adherence to treatment. BHASO works closely with local clinics, volunteers,
      and peer educators to ensure that vulnerable communities receive the resources
      they need.

      One of the most successful strategies has been the integration of HIV prevention
      services into routine health visits. This ensures that patients are not only
      tested but also educated on prevention methods such as PrEP (pre-exposure
      prophylaxis) and safe practices. BHASO also supports youth-friendly services,
      recognizing the unique challenges young people face.

      Moving forward, the organization aims to scale these programs to reach rural
      communities where access to healthcare is limited.
    `,
    related: [2, 3],
  },
  {
    id: 2,
    title: "Climate Change Impacts on Health Outcomes",
    date: "2025-07-28",
    image: "https://images.pexels.com/photos/33023725/pexels-photo-33023725.jpeg",
    category: "Climate Justice",
    content: `
      Climate change is not just an environmental issue—it’s a public health crisis.
      Rising temperatures, unpredictable rainfall patterns, and extreme weather events
      are affecting food security, increasing the spread of diseases, and worsening
      health outcomes.

      BHASO has been integrating climate resilience into its health programs by promoting
      sustainable agriculture, supporting communities in flood-prone areas, and ensuring
      that healthcare facilities are prepared for climate-related disruptions.

      This approach not only saves lives but also builds stronger, more resilient communities
      that can adapt to future challenges.
    `,
    related: [1, 4],
  },
  {
    id: 3,
    title: "Empowering Women Through Health Initiatives",
    date: "2025-07-15",
    image: "https://images.pexels.com/photos/5789278/pexels-photo-5789278.jpeg",
    category: "Gender Rights",
    content: `
      Women's health is directly linked to community health, and BHASO’s programs
      focus on ensuring that women have access to safe, affordable, and respectful
      healthcare. This includes maternal care, HIV prevention, and economic empowerment
      initiatives.

      By addressing gender-based violence and promoting education, BHASO empowers
      women to take control of their health and futures. Microfinance programs and
      skill-building workshops have also helped women become financially independent,
      reducing their vulnerability to exploitation.
    `,
    related: [1, 4],
  },
  {
    id: 4,
    title: "Strengthening Community Health Systems",
    date: "2025-06-30",
    image: "https://images.pexels.com/photos/6646817/pexels-photo-6646817.jpeg",
    category: "Community Health",
    content: `
      Strong community health systems are the backbone of effective healthcare delivery.
      BHASO has pioneered the SWAG (Sustainable Wellness and Growth) and CHASA
      (Community Health and Support Alliance) models, which focus on training local
      healthcare workers and establishing reliable supply chains for medicines.

      These models ensure that even the most remote villages have access to timely,
      quality healthcare services. They also emphasize prevention, education, and
      the use of local resources.
    `,
    related: [2, 3],
  },
  {
    id: 5,
    title: "Data-Driven Approaches to Health Equity",
    date: "2025-06-20",
    image: "https://images.pexels.com/photos/3845744/pexels-photo-3845744.jpeg",
    category: "Strategic Information",
    content: `
      Data is a powerful tool in the fight for health equity. BHASO collects and
      analyzes health data to identify gaps in service delivery, track the effectiveness
      of programs, and make evidence-based decisions.

      This commitment to research and knowledge management ensures that resources are
      allocated where they are needed most and that interventions are continuously
      improved for greater impact.
    `,
    related: [1, 2],
  },
];

export default function BlogPost() {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === parseInt(id));
  const relatedPosts = blogPosts.filter((p) => post.related.includes(p.id));

  if (!post) {
    return <div className="p-6">Blog not found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 flex gap-8">
      {/* Main Blog Section */}
      <div className="flex-1">
        <img src={post.image} alt={post.title} className="w-full rounded-lg mb-4" />
        <p className="text-sm text-gray-500">{post.date}</p>
        <h1 className="text-3xl font-bold text-green-900 mb-2">{post.title}</h1>
        <p className="text-green-700 font-semibold mb-4">{post.category}</p>
        <div className="text-gray-700 leading-relaxed whitespace-pre-line">
          {post.content}
        </div>

        {/* Related Blogs */}
        <h2 className="text-2xl font-bold text-green-900 mt-10 mb-4">Related Blogs</h2>
        <div className="space-y-4">
          {relatedPosts.map((related) => (
            <Link
              key={related.id}
              to={`/blog/${related.id}`}
              className="flex items-center gap-4 border p-4 rounded-lg hover:shadow-md"
            >
              <img
                src={related.image}
                alt={related.title}
                className="w-32 h-24 object-cover rounded-md"
              />
              <div>
                <p className="text-sm text-gray-500">{related.date}</p>
                <h3 className="text-lg font-bold text-green-900">{related.title}</h3>
                <p className="text-sm text-gray-600">{related.category}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Advertisement Section */}
      <div className="w-1/3 bg-green-50 p-4 rounded-lg shadow-sm">
        <h3 className="text-lg font-bold text-green-900 mb-4">Local Businesses</h3>
        <p className="text-sm text-gray-700 mb-4">
          Advertise your business here and reach thousands of readers each month.
        </p>
        <div className="space-y-4">
          <div className="p-3 border rounded-lg bg-white">
            <p className="font-semibold text-green-800">Green Valley Groceries</p>
            <p className="text-xs text-gray-500">Organic & Fresh Produce</p>
          </div>
          <div className="p-3 border rounded-lg bg-white">
            <p className="font-semibold text-green-800">Tech Solutions Hub</p>
            <p className="text-xs text-gray-500">Affordable IT Support</p>
          </div>
        </div>
      </div>
    </div>
  );
}
