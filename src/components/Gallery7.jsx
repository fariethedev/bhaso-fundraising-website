"use client";

import React, { useState, useRef, useEffect } from "react";

export function Gallery7() {
  const featuredVideo = {
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    alt: "Featured Video: Impact Story",
    poster: "https://via.placeholder.com/800x450?text=Video+Thumbnail"
  };

  const images = [
    {
      src: "/assets/image30.jpeg",
      alt: "Community Health Drive",
    },
    {
      src: "/assets/image009.jpeg",
      alt: "Sustainable Farming Initiative",
    },
    {
      src: "/assets/image08.jpeg",
      alt: "Climate Education Campaign",
    },
    {
      src: "/assets/image3.jpeg",
      alt: "Youth Empowerment Event",
    },
    {
      src: "/assets/image006.jpeg",
      alt: "Mental Health Awareness Workshop",
    },
    {
      src: "/assets/image16.jpeg",
      alt: "Local Farming Community",
    },
    {
      src: "/assets/image14.jpeg",
      alt: "Clean Water Initiative",
    },
    {
      src: "/assets/image07.jpeg",
      alt: "Education for All",
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollBy = (distance) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: distance, behavior: "smooth" });
    }
  };

  const handleClose = () => {
    setSelectedIndex(null);
  };

  const handleKeyDown = (e) => {
    if (selectedIndex !== null) {
      if (e.key === 'Escape') {
        handleClose();
      } else if (e.key === 'ArrowRight' && selectedIndex < images.length) {
        setSelectedIndex(prev => prev + 1);
      } else if (e.key === 'ArrowLeft' && selectedIndex > 0) {
        setSelectedIndex(prev => prev - 1);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex]);

  return (
    <section className="bg-white px-[5%] py-16 md:py-24 lg:py-28 text-green-900 relative">
      <div className="container mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">Our Impact Gallery</h2>
          <p className="text-md md:text-lg text-green-700 max-w-3xl mx-auto">
            Explore our initiatives through these impactful moments captured in video and photos.
          </p>
        </div>

        {selectedIndex === null ? (
          <>
            {/* Arrows - Only show on desktop */}
            {!isMobile && (
              <>
                <button
                  onClick={() => scrollBy(-400)}
                  aria-label="Scroll Left"
                  className="absolute left-2 top-1/2 -translate-y-1/2 z-10 rounded-full bg-green-900/80 p-2 hover:bg-green-800 transition backdrop-blur-sm"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={() => scrollBy(400)}
                  aria-label="Scroll Right"
                  className="absolute right-2 top-1/2 -translate-y-1/2 z-10 rounded-full bg-green-900/80 p-2 hover:bg-green-800 transition backdrop-blur-sm"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}

            {/* Horizontal Scroll Container */}
            <div
              ref={scrollRef}
              className="flex overflow-x-auto no-scrollbar gap-4 px-4"
              style={{ scrollSnapType: "x mandatory" }}
            >
              {/* Featured Video */}
              <div
                onMouseEnter={() => !isMobile && setHoveredIndex(0)}
                onMouseLeave={() => !isMobile && setHoveredIndex(null)}
                onClick={() => setSelectedIndex(0)}
                className="relative overflow-hidden shadow-lg cursor-pointer flex-shrink-0 group"
                style={{
                  width: isMobile ? "280px" : hoveredIndex === 0 ? "480px" : "320px",
                  height: isMobile ? "157px" : hoveredIndex === 0 ? "288px" : "192px",
                  scrollSnapAlign: "start",
                  transition: "width 0.3s ease, height 0.3s ease",
                }}
              >
                <div className="relative w-full h-full">
                  <video
                    src={featuredVideo.src}
                    poster={featuredVideo.poster}
                    className="w-full h-full object-cover"
                    preload="metadata"
                    muted
                    loop
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-green-900/80 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-white ml-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div
                  className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white text-sm font-medium"
                >
                  {featuredVideo.alt}
                </div>
              </div>

              {/* Images */}
              {images.map((img, index) => {
                const i = index + 1; // video is index 0
                const isHovered = !isMobile && hoveredIndex === i;
                return (
                  <div
                    key={index}
                    onMouseEnter={() => !isMobile && setHoveredIndex(i)}
                    onMouseLeave={() => !isMobile && setHoveredIndex(null)}
                    onClick={() => setSelectedIndex(i)}
                    className="relative overflow-hidden shadow-lg cursor-pointer flex-shrink-0 group"
                    style={{
                      width: isMobile ? "280px" : isHovered ? "480px" : "320px",
                      height: isMobile ? "157px" : isHovered ? "288px" : "192px",
                      scrollSnapAlign: "start",
                      transition: "width 0.3s ease, height 0.3s ease",
                    }}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover"
                      draggable={false}
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition" />
                    <div
                      className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white text-sm font-medium"
                    >
                      {img.alt}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Scroll indicator for mobile */}
            {isMobile && (
              <div className="text-center mt-4 text-green-700 text-sm">
                Scroll horizontally to view more
              </div>
            )}
          </>
        ) : (
          // Expanded view
          <div className="fixed inset-0 bg-black/90 z-50 flex flex-col items-center justify-center p-4 backdrop-blur-sm" onClick={handleClose}>
            <div className="relative w-full max-w-6xl max-h-[90vh]" onClick={e => e.stopPropagation()}>
              {selectedIndex === 0 ? (
                // Featured video expanded
                <video
                  src={featuredVideo.src}
                  className="w-full h-full rounded-lg shadow-lg object-contain"
                  controls
                  autoPlay
                  preload="auto"
                />
              ) : (
                <img
                  src={images[selectedIndex - 1].src}
                  alt={images[selectedIndex - 1].alt}
                  className="w-full h-full rounded-lg shadow-lg object-contain"
                  draggable={false}
                />
              )}

              <div className="mt-4 flex justify-between items-center w-full max-w-6xl">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    if (selectedIndex > 0) setSelectedIndex(prev => prev - 1);
                  }}
                  disabled={selectedIndex === 0}
                  className={`p-2 rounded-full ${selectedIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white/20'}`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <div className="text-center">
                  <p className="text-white text-lg font-medium px-4">
                    {selectedIndex === 0
                      ? featuredVideo.alt
                      : images[selectedIndex - 1].alt}
                  </p>
                  <p className="text-white/70 text-sm mt-1">
                    {selectedIndex} of {images.length + 1}
                  </p>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    if (selectedIndex < images.length) setSelectedIndex(prev => prev + 1);
                  }}
                  disabled={selectedIndex === images.length}
                  className={`p-2 rounded-full ${selectedIndex === images.length ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white/20'}`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              <button
                onClick={handleClose}
                className="absolute -top-12 right-0 text-white hover:bg-white/20 p-2 rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>

      <style>{`
        /* Hide scrollbar */
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>
    </section>
  );
}