import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // <-- import Link

const slides = [
  {
    image: "/assets/bg2.png",
    heading: "Creating HIV-Resilient Communities",
    text: "BHASO implements comprehensive HIV/TB programs ensuring equitable access to testing, treatment, and care across Zimbabwe.",
  },
  {
    image: "/assets/image56.jpeg",
    heading: "Advancing Climate Change & Food Security",
    text: "We promote climate-smart agriculture and sustainable practices to strengthen community resilience against climate change impacts.",
  },
  {
    image: "/assets/image65.jpeg",
    heading: "Championing Gender Equality & Human Rights",
    text: "Our programs address gender-based violence and discrimination while empowering marginalized groups including women, youth, and LGBTQ+ communities.",
  },
  {
    image: "/assets/image334.jpeg",
    heading: "Innovative Community Health Solutions",
    text: "Through models like SWAG and CHASA, we're transforming HIV management with community-centered approaches.",
  },
];

export function Header1() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
        setFade(false);
      }, 500);
    }, 10000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const currentSlide = slides[currentIndex];

  return (
    <section className="relative w-full h-[720px] overflow-hidden">
      {/* Background Image with fade transition */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ${fade ? "opacity-0" : "opacity-100"
          }`}
      >
        <img
          src={currentSlide.image}
          alt={currentSlide.heading}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content with fade transition */}
      <div
        className={`relative z-10 h-full flex items-center justify-center text-center px-[5%] transition-opacity duration-1000 ${fade ? "opacity-0" : "opacity-100"
          }`}
      >
        <div className="max-w-6xl">
          <h1 className="mb-4 text-8xl font-bold md:text-8xl lg:text-8xl text-white">
            {currentSlide.heading}
          </h1>
          <p className="text-lg mb-6 max-w-2xl mx-auto text-white">
            {currentSlide.text}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {/* Link routing to /OurWork */}
            <Link
              to="/our-work"
              className="bg-green-900  text-white hover:bg-green-700 px-4 py-2 rounded"
            >
              Support Our Work
            </Link>

            {/* Link routing to #donate section on homepage */}
            <Link
              to="/donate"
              className="border border-white text-white hover:bg-white hover:text-green-700 px-4 py-2 rounded"
            >
              Donate Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
