"use client";

import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

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
  {
    id: 6,
    title: "Shining a Light on Transparency in Education",
    date: "2026-02-05",
    publishedDate: "Published on 05/02/26",
    image: "/assets/image45.jpeg",
    category: "Education & Transparency",
    content: `
      Yesterday, on 04/02/26, BHASO and the Ministry of Education facilitated a crucial meeting on Transparency and Accountability in the education sector in Masvingo Province, hosted by Transparency International Zimbabwe.

      THE CHALLENGES:

      - High fees and exploitation of students
      - Limited access to resources like internet, computers, and textbooks
      - Lack of transparency in school management and fee structures
      - Inadequate support for children with special needs
      - Corruption in school fund management

      THE WAY FORWARD:

      - Promote transparency and accountability in school management
      - Strengthen community involvement in school decision-making
      - Prioritize student welfare and transparency
      - Support vulnerable students through initiatives like BEAM
      - Encourage parents and communities to engage with schools and report corruption

      LET'S WORK TOGETHER!

      We urge parents, communities, and schools to work together to address these challenges and ensure quality education for all. Let's prioritize transparency, accountability, and student welfare.

      REPORT CORRUPTION: If you suspect corruption or malpractice in schools, report it to the relevant authorities. Let's build a transparent and accountable education system!

      Transparency International Zimbabwe
      #TransparencyInEducation #AccountabilityInEducation
    `,
    related: [1, 3],
  },
  {
    id: 7,
    title: "Locally Led Development Capacity Building",
    date: "2026-02-05",
    publishedDate: "Published 11 hours ago",
    image: "/assets/image46.jpeg",
    category: "Capacity Building & Development",
    content: `
      STRENGTHENING COMMUNITY SUPPORT GROUPS IN TIMES OF FUNDING CUTS

      Last week, I had the privilege of participating in the Locally Led Development Capacity Building Workshop hosted by VSO Zimbabwe at the Great Zimbabwe Hotel in Masvingo. The workshop brought together Community Support Group (CSG) representatives, VSO staff, volunteers, and duty bearers to co-create and refine the Intersectionality Toolkit for Locally Led Development.

      The training was more than just a technical exercise. It was a timely reminder that in an era of shrinking donor funding, our resilience must come from within communities themselves. By equipping CSGs with tools for context analysis, programme design, monitoring, and impact capture, we are shifting power to where it belongs — the people most affected by health and development challenges.

      FOR BHASO, WHICH ITSELF EMBODIES THE SPIRIT OF A CSG, THIS TRAINING REINFORCED OUR COMMITMENT TO:

      Resilience and sustainability: Building strategic plans and capacities that allow us to operate independently.

      Inclusion and equity: Ensuring marginalized groups — women, youth, PLHIV, and persons with disabilities — have voice and agency in governance.

      Accountability and advocacy: Documenting evidence, generating knowledge products, and influencing policy instruments at local and national levels.

      In times of funding cuts, the temptation is to scale back. Yet the lesson from this workshop is clear: we must scale forward by strengthening local ownership, diversifying resources, and embedding accountability into every process. Locally led development is not a slogan — it is a survival strategy and a pathway to sustainable impact.

      I am grateful to VSO Zimbabwe and all partners for creating this space. Together, we are proving that when communities lead, development endures.

      VSO Zimbabwe

      #LocallyLedDevelopment #PowerShift #CSGs #BHASO #Resilience #CommunityOwnership
    `,
    related: [6, 1],
  },
  {
    id: 8,
    title: "Embracing the New Normal in Global Health and Development",
    date: "2026-01-12",
    publishedDate: "Published on 12/01/26",
    image: "/assets/image48.jpeg",
    category: "Global Health & Development",
    content: `
      2025 WAS A GAME-CHANGER.

      The architecture of global health and community development shifted dramatically. Funding landscapes changed in ways few anticipated. Donor communities reduced commitments, priorities shifted, and traditional ways of doing business were disrupted. Governments and organisations alike were caught off guard, forced to rethink how programmes would be sustained and how new resources could be mobilised.

      This sudden contraction in donor support has had profound consequences. Many development workers found themselves unemployed, and the mental health toll across the sector has been heavy. Yet, within this disruption lies an opportunity: a chance to reimagine the future of development.

      LESSONS FROM 2025

      Funding shocks are real: Reliance on external donors alone is no longer sustainable.

      Domestic resource mobilisation is critical: Governments and business communities in developing countries must step forward to inject resources into programmes.

      Adaptability is a matter of survival: Organisations that pivot quickly, innovate, and align with the genuine needs of communities are the ones that will endure.

      THE CALL FOR 2026: INNOVATION AND PEOPLE-CENTRED ACTION

      In 2026, we must embrace the new order with courage and creativity. The era of waiting for donor rescue is over. Instead, we must:

      Be driven by the needs of the people we serve, not our own institutional comfort.

      Innovate boldly: Explore new models of financing, partnerships, and technology integration.

      Rebuild trust: Communities must see us as allies who stand with them, not as outsiders imposing agendas.

      Prioritise mental health: Support development workers who have borne the brunt of uncertainty and change.

      A MESSAGE OF HOPE

      Yes, the landscape has changed. Yes, the challenges are immense. But despair is not an option. History shows that moments of disruption often spark the greatest breakthroughs. Together, we can build resilient systems that thrive beyond donor cycles.

      The new normal is not something to fear — it is something to embrace. By standing united, innovating relentlessly, and keeping people at the center of our work, we will not only survive this transition but emerge stronger.

      Together, we will make it. HAPPY 2026 !!!!!!

      #NewNormal #GlobalHealth #Development #Innovation #Resilience #PeopleCentred
    `,
    related: [7, 6],
  },
  {
    id: 9,
    title: "BHASO at World AIDS Day and Candlelight Memorial Service",
    date: "2025-12-03",
    publishedDate: "Published on 03/12/25",
    image: "/assets/image56.jpeg",
    category: "HIV & AIDS Awareness",
    content: `
      BHASO joins the global community to remember those who have died from AIDS, support those living with HIV, and work towards ending the epidemic.

      As an organization, BHASO provides care, support, and prevention services to people affected by HIV and AIDS. We're committed to making a difference in our community.

      THE CANDLELIGHT MEMORIAL SERVICE IS A TIME TO:

      - Remember those who have passed away from AIDS-related illnesses
      - Show love and support to people living with HIV and their families
      - Renew our commitment to fighting HIV and AIDS

      THIS YEAR'S THEME IS "OVERCOMING DISRUPTION, TRANSFORMING THE AIDS RESPONSE". WE'LL KEEP WORKING TO:

      - Provide care and support to those in need
      - Prevent new HIV infections through education and testing
      - Fight for the rights of people living with HIV
      - Raise awareness about HIV and AIDS

      In the lead-up to World AIDS Day, BHASO had the opportunity to meet with like-minded organizations and activists to discuss our shared goals and strategies. We also had a productive meeting with the Minister of Health and their team, who gained valuable insights into our work and the challenges we face. We're grateful for the opportunity to collaborate and look forward to continued partnership in the fight against HIV and AIDS.

      PARTNERS AND COLLABORATORS:

      Ministry of Health and Child Care
      COMPASSAfrica
      JF Kapnek Zimbabwe
      Zimbabwe National Network of People Living with HIV
      Organization for Public Health Interventions and Development (OPHID)
      AHF Africa
      Jointed Hands Welfare Organisation
      Anna Beisse-Munemo
      Global Network of People living with HIV (GNP+)

      #WorldAIDSDay #CandlelightMemorial #EndAIDS #HIVAwareness #BHASO
    `,
    related: [1, 6],
  },
];

function ImageSlideshow({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative w-full rounded-2xl overflow-hidden mb-8 shadow-lg bg-gray-100 h-[400px] md:h-[500px]">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          src={images[currentIndex]}
          alt="Blog imagery"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      {/* Internal Overlay */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>

      {/* Navigation Buttons */}
      {images.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#113d29]/80 text-white p-3 rounded-full hover:bg-[#14b8a6] transition-all duration-300 backdrop-blur-sm z-10"
            aria-label="Previous image"
          >
            &#10094;
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#113d29]/80 text-white p-3 rounded-full hover:bg-[#14b8a6] transition-all duration-300 backdrop-blur-sm z-10"
            aria-label="Next image"
          >
            &#10095;
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-white scale-125" : "bg-white/50 hover:bg-white/80"
                  }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function BlogPost() {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === parseInt(id));
  const relatedPosts = blogPosts.filter((p) => post?.related.includes(p.id));

  if (!post) {
    return <div className="p-20 text-center font-serif text-2xl text-[#113d29]">Blog not found</div>;
  }

  // Create slideshow images array from post and related posts
  const slideshowImages = [
    post.image,
    ...relatedPosts.map((p) => p.image),
  ];

  return (
    <div className="bg-[#fcfcfa] min-h-screen pt-12 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        {/* Main Blog Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <ImageSlideshow images={slideshowImages} />
          <div className="flex items-center gap-4 mb-4">
            <span className="px-3 py-1 bg-[#14b8a6]/10 text-[#14b8a6] font-semibold text-sm rounded-full tracking-wide">
              {post.category}
            </span>
            <p className="text-sm font-light text-gray-500">{post.date}</p>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#113d29] mb-8 leading-tight">
            {post.title}
          </h1>
          <div className="prose max-w-none text-gray-700 font-light leading-relaxed whitespace-pre-line text-lg">
            {post.content}
          </div>
        </motion.div>

        {/* Related Blogs */}
        <div className="mt-20 pt-10 border-t border-gray-200">
          <h2 className="text-3xl font-serif font-bold text-[#113d29] mb-8">Related Articles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {relatedPosts.map((related, idx) => (
              <motion.div
                key={related.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Link
                  to={`/blog/${related.id}`}
                  className="flex gap-4 p-4 rounded-2xl border border-[#113d29]/10 hover:border-[#14b8a6]/50 bg-white hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="w-1/3 rounded-xl overflow-hidden">
                    <img
                      src={related.image}
                      alt={related.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="w-2/3 flex flex-col justify-center">
                    <p className="text-xs font-semibold text-[#14b8a6] mb-1">{related.category}</p>
                    <h3 className="text-lg font-bold text-[#113d29] mb-2 leading-tight group-hover:text-[#14b8a6] transition-colors line-clamp-2">{related.title}</h3>
                    <p className="text-xs font-light text-gray-400">{related.date}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
