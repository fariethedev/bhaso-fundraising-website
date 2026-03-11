import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const currentSlide = slides[currentIndex];

  return (
    <section className="relative w-full h-[70vh] sm:h-[80vh] lg:h-[720px] overflow-hidden">
      {/* Background Image */}
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

      {/* Content */}
      <div
        className={`relative z-10 h-full flex items-center justify-center text-center px-4 sm:px-[5%] transition-opacity duration-1000 ${fade ? "opacity-0" : "opacity-100"
          }`}
      >
        <div className="max-w-6xl">
          <h1 className="mb-4 font-bold text-white
            text-3xl sm:text-4xl md:text-6xl lg:text-8xl">
            {currentSlide.heading}
          </h1>

          <p className="mb-6 mx-auto text-white
            text-sm sm:text-base md:text-lg max-w-xl md:max-w-2xl">
            {currentSlide.text}
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/our-work"
              className="bg-[#113d29] text-white hover:bg-[#14b8a6] px-8 py-3 rounded-full font-bold text-sm sm:text-base border border-transparent transition-colors shadow-lg shadow-[#113d29]/20"
            >
              Support Our Work
            </Link>

            <Link
              to="/donate"
              className="border border-white text-white hover:bg-white hover:text-[#113d29] px-8 py-3 rounded-full font-bold text-sm sm:text-base transition-colors shadow-lg"
            >
              Donate Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
