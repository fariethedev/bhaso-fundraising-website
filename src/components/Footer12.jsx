"use client";

import React from "react";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

export function Footer12() {
  return (
    <footer className="px-[5%] py-12 md:py-16 lg:py-20 bg-green-900 text-white">
      <div className="container mx-auto max-w-7xl">
        <div className="border-b border-green-700 pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* About Column */}
            <div className="lg:col-span-2">
              <img
                src="/assets/logo.png"
                alt="BHASO Logo"
                className="h-16 mb-4"
              />
              <p className="text-green-200 mb-6">
                Batanai HIV & AIDS Services Organisation (BHASO) is a pioneering Zimbabwean NGO 
                established in 1992. We implement innovative community health and climate justice 
                programs across four provinces.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/strategic-plan" 
                  className="px-4 py-2 bg-green-800 hover:bg-green-700 text-white rounded text-sm transition"
                >
                  View Strategic Plan
                </Link>
                <Link 
                  to="/contact" 
                  className="px-4 py-2 border border-green-300 text-green-300 hover:bg-green-800 rounded text-sm transition"
                >
                  Partner With Us
                </Link>
              </div>
            </div>

            {/* Quick Links Column */}
            <div>
              <h3 className="text-xl font-bold mb-4">Our Programs</h3>
              <ul className="space-y-2 text-green-200">
                <li><Link to="/programs/hiv-tb" className="hover:underline">HIV/TB Management</Link></li>
                <li><Link to="/programs/climate" className="hover:underline">Climate Justice</Link></li>
                <li><Link to="/programs/gender" className="hover:underline">Gender & Human Rights</Link></li>
                <li><Link to="/programs/research" className="hover:underline">Strategic Information</Link></li>
                <li><Link to="/programs/all" className="hover:underline">All Programs</Link></li>
              </ul>
            </div>

            {/* Get Involved Column */}
            <div>
              <h3 className="text-xl font-bold mb-4">Get Involved</h3>
              <ul className="space-y-2 text-green-200">
                <li><Link to="/volunteer" className="hover:underline">Volunteer</Link></li>
                <li><Link to="/donate" className="hover:underline">Donate</Link></li>
                <li><Link to="/partners" className="hover:underline">Partnerships</Link></li>
                <li><Link to="/resources" className="hover:underline">Resources</Link></li>
                <li><Link to="/news" className="hover:underline">News & Updates</Link></li>
              </ul>
            </div>

            {/* Contact Column */}
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <div className="space-y-3 text-green-200">
                <div className="flex items-start">
                  <FiMapPin className="mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p>7298 Bugwa Street,Rujeko B</p>
                    <p>Masvingo, Zimbabwe</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <FiPhone className="mr-3" />
                  <div>
                    <p>+263 242 123 456</p>
                    <p>+263 772 987 654 (Mobile)</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <FiMail className="mr-3" />
                  <div>
                    <p>information@bhaso.org</p>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 gap-6">
          <p className="text-sm text-green-300">
            © {new Date().getFullYear()} BHASO. All rights reserved.
          </p>

          {/* Social Media Icons */}
          <div className="flex space-x-5">
            <a href="#" className="text-green-300 hover:text-white transition">
              <FaFacebookF size={18} />
            </a>
            <a href="#" className="text-green-300 hover:text-white transition">
              <FaTwitter size={18} />
            </a>
            <a href="#" className="text-green-300 hover:text-white transition">
              <FaInstagram size={18} />
            </a>
            <a href="#" className="text-green-300 hover:text-white transition">
              <FaLinkedinIn size={18} />
            </a>
          </div>

          {/* Legal Links */}
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-sm text-green-300 hover:underline">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-green-300 hover:underline">
              Terms of Service
            </Link>
            <Link to="/sitemap" className="text-sm text-green-300 hover:underline">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
