"use client";

import { Button, Input } from "@relume_io/relume-ui";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const volunteerHighlights = [
  {
    title: "Community Health Educator",
    description:
      "Help educate rural communities on HIV prevention and support testing efforts. Make a direct impact with your voice and passion.",
  },
  {
    title: "Agriculture Field Trainer",
    description:
      "Teach climate-smart farming techniques to smallholder farmers. Empower sustainable agriculture and help communities thrive.",
  },
  {
    title: "Youth Mentor",
    description:
      "Mentor adolescent girls and young women, fostering life skills and HIV prevention awareness through our DREAMS program.",
  },
];

export function Cta20() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [status, setStatus] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % volunteerHighlights.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const { title, description } = volunteerHighlights[currentIndex];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      if (data.success) {
        setStatus(" Thank you! Your message has been sent.");
        e.target.reset();
      } else {
        setStatus("Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus(" Network error. Please try again later.");
    }
  };

  return (
    <section className="relative w-full bg-green-900 min-h-[500px]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/assets/image43.jpeg')",
        }}
      />
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative max-w-7xl mx-auto px-4 py-16 flex flex-col lg:flex-row justify-between items-center gap-12">
        <div className="max-w-xl text-white text-center lg:text-left">
          <h2 className="text-4xl font-bold mb-4">{title}</h2>
          <p className="text-green-100 text-lg">{description}</p>
        </div>

        <div className="w-full max-w-md bg-green-700 p-8 rounded-lg shadow-xl">
          <div className="mb-6 text-center lg:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Join BHASO's Community
            </h2>
            <p className="mt-2 text-green-100">
              Connect with us to receive updates, volunteer opportunities, and
              learn how you can support our mission for healthier communities in
              Zimbabwe.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="hidden"
              name="access_key"
              value="YOUR_ACCESS_KEY_HERE"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                id="firstName"
                name="firstName"
                type="text"
                placeholder="First Name"
                required
                className="bg-white/10 border-green-600 text-white placeholder-green-200 focus:ring-green-400 focus:border-green-400"
              />
              <Input
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Last Name"
                required
                className="bg-white/10 border-green-600 text-white placeholder-green-200 focus:ring-green-400 focus:border-green-400"
              />
            </div>

            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Email Address"
              required
              className="bg-white/10 border-green-600 text-white placeholder-green-200 focus:ring-green-400 focus:border-green-400"
            />

            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="Phone Number"
              className="bg-white/10 border-green-600 text-white placeholder-green-200 focus:ring-green-400 focus:border-green-400"
            />

            <div className="flex items-center">
              <input
                id="newsletter"
                name="newsletter"
                type="checkbox"
                className="h-4 w-4 text-green-600 focus:ring-green-500 border-green-300 rounded"
              />
              <label
                htmlFor="newsletter"
                className="ml-2 block text-sm text-green-100"
              >
                Subscribe to our monthly newsletter
              </label>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button
                type="submit"
                className="bg-white text-green-700 hover:bg-green-100 flex-1"
              >
                Submit
              </Button>
              <Link
                to="/#Cta19"
                className="border-white text-white hover:bg-green-600 flex-1 text-center py-2 rounded-lg"
                onClick={() =>
                  window.open("https://www.bhaso.org/donate", "_blank")
                }
              >
                Donate Now
              </Link>
            </div>

            {status && (
              <p className="text-sm text-green-100 mt-2">{status}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
