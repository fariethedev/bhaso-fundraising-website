import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export function Cta8() {
  return (
    <section className="bg-[#fcfcfa] px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#113d29] rounded-[2rem] overflow-hidden shadow-2xl relative border border-white/10"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="relative z-10 p-10 md:p-16 flex flex-col items-center text-center">
            <h2 className="mb-6 text-3xl md:text-5xl font-serif font-bold text-white">
              Join BHASO's Mission
            </h2>
            <p className="mb-10 text-lg md:text-xl text-gray-300 max-w-2xl font-light leading-relaxed">
              Your support helps us deliver life-changing HIV programs, climate resilience initiatives,
              and gender equality advocacy across Zimbabwe.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto">
              <Link
                to="/donate"
                className="bg-[#14b8a6] hover:bg-[#0f8c7e] text-white font-bold px-8 py-4 rounded-full transition-colors shadow-lg shadow-teal-500/30 text-center"
              >
                Donate Now
              </Link>
              <Link
                to="/get-involved"
                className="bg-transparent border border-gray-400 text-white hover:bg-white hover:text-[#113d29] font-bold px-8 py-4 rounded-full transition-colors text-center"
              >
                Volunteer With Us
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}