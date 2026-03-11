import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function ImpactGallery() {
    const featuredImage = {
        src: "/assets/image32.jpeg", // Using one of the available images as featured
        alt: "Featured Impact Story",
    };

    const images = [
        { src: "/assets/image30.jpeg", alt: "Community Health Drive" },
        { src: "/assets/image009.jpeg", alt: "Sustainable Farming Initiative" },
        { src: "/assets/image08.jpeg", alt: "Climate Education Campaign" },
        { src: "/assets/image3.jpeg", alt: "Youth Empowerment Event" },
        { src: "/assets/image006.jpeg", alt: "Mental Health Awareness Workshop" },
        { src: "/assets/image16.jpeg", alt: "Local Farming Community" },
        { src: "/assets/image14.jpeg", alt: "Clean Water Initiative" },
        { src: "/assets/image07.jpeg", alt: "Education for All" },
        { src: "/assets/image43.jpeg", alt: "Community Outreach Program" },
        { src: "/assets/image45.jpeg", alt: "Women's Empowerment Seminar" },
        { src: "/assets/image48.jpeg", alt: "Nutritional Support Distribution" },
        { src: "/assets/image53.jpeg", alt: "Agricultural Training Session" },
        { src: "/assets/image56.jpeg", alt: "Child Welfare Initiative" },
        { src: "/assets/image59.jpeg", alt: "Local Enterprise Support" },
        { src: "/assets/image66.jpeg", alt: "Disease Prevention Campaign" },
        { src: "/assets/image71.jpeg", alt: "Rural Healthcare Access" },
        { src: "/assets/food01.jpeg", alt: "Food Security Program" },
        { src: "/assets/image78.jpeg", alt: "Youth Leadership Workshop" },
    ];

    const allImages = [featuredImage, ...images];
    const [selectedIndex, setSelectedIndex] = useState(null);

    const handleClose = () => {
        setSelectedIndex(null);
    };

    const handleKeyDown = (e) => {
        if (selectedIndex !== null) {
            if (e.key === 'Escape') {
                handleClose();
            } else if (e.key === 'ArrowRight' && selectedIndex < allImages.length - 1) {
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
        <section className="bg-white px-[5%] py-16 md:py-24 lg:py-28 relative overflow-hidden">
            <div className="container mx-auto max-w-7xl">
                {/* Header Layout */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="max-w-xl"
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <span className="w-12 h-px bg-[#14b8a6]"></span>
                            <p className="font-bold text-[#14b8a6] uppercase tracking-[0.2em] text-sm">
                                Our Work
                            </p>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 leading-tight">
                            Our past projects and <br /> community impact
                        </h2>
                        <p className="mt-6 text-lg text-gray-600 font-light leading-relaxed">
                            Explore our initiatives through these impactful moments captured in photos.
                        </p>
                    </motion.div>
                </div>

                {/* Dense Masonry-style Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[250px]">
                    {/* Main Large Item (Featured Image) spans 2x2 */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        onClick={() => setSelectedIndex(0)}
                        className="col-span-2 row-span-2 relative rounded-2xl overflow-hidden cursor-pointer group shadow-lg"
                    >
                        <img
                            src={featuredImage.src}
                            alt={featuredImage.alt}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                            draggable={false}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                            <p className="text-white text-lg font-bold truncate drop-shadow-md">{featuredImage.alt}</p>
                        </div>
                    </motion.div>

                    {/* Regular Image Items */}
                    {images.slice(0, 11).map((img, index) => {
                        const i = index + 1; // offset for the featured image
                        return (
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                key={i}
                                onClick={() => setSelectedIndex(i)}
                                className="relative rounded-2xl overflow-hidden cursor-pointer group shadow-sm hover:shadow-xl transition-shadow"
                            >
                                <img
                                    src={img.src}
                                    alt={img.alt}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                                    draggable={false}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                    <p className="text-white text-sm font-bold truncate drop-shadow-md">{img.alt}</p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* Expanded Lightbox Modal */}
            <AnimatePresence>
                {selectedIndex !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 md:p-12 backdrop-blur-xl"
                        onClick={handleClose}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative w-full max-w-6xl h-[80vh] flex flex-col justify-center items-center"
                            onClick={e => e.stopPropagation()}
                        >
                            <button
                                onClick={handleClose}
                                className="absolute top-4 right-4 text-white hover:text-red-400 bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors z-10"
                            >
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            <div className="w-full h-full flex items-center justify-center relative bg-black/50 rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                                <img
                                    src={allImages[selectedIndex].src}
                                    alt={allImages[selectedIndex].alt}
                                    className="w-full h-full object-contain"
                                    draggable={false}
                                />
                            </div>

                            {/* Lightbox Controls */}
                            <div className="w-full mt-6 flex justify-between items-center text-white bg-white/5 backdrop-blur-md p-4 rounded-xl border border-white/10">
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        if (selectedIndex > 0) setSelectedIndex(prev => prev - 1);
                                    }}
                                    disabled={selectedIndex === 0}
                                    className={`p-3 rounded-full bg-white/10 ${selectedIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-white/20 transition-colors'}`}
                                >
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>

                                <div className="text-center px-4">
                                    <p className="font-bold text-lg">
                                        {allImages[selectedIndex].alt}
                                    </p>
                                    <p className="text-xs text-gray-400 mt-1 uppercase tracking-widest">
                                        Image {selectedIndex + 1} of {allImages.length}
                                    </p>
                                </div>

                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        if (selectedIndex < allImages.length - 1) setSelectedIndex(prev => prev + 1);
                                    }}
                                    disabled={selectedIndex === allImages.length - 1}
                                    className={`p-3 rounded-full bg-white/10 ${selectedIndex === allImages.length - 1 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-white/20 transition-colors'}`}
                                >
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
