import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar2 } from "./components/Navbar2";
import { Footer12 } from "./components/Footer12";

import Home from "./pages/home";
import AboutUs from "./pages/AboutUs";
import OurWork from "./pages/OurWork";
import GetInvolved from "./pages/GetInvolved";
import BlogPosts from "./pages/BlogPosts";
import BlogPost from "./pages/BlogPost"; // ✅ new page
import ContactUs from "./pages/ContactUs";
import Donate from "./pages/Donate";

export default function App() {
  return (
    <>
      <Navbar2 />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/our-work" element={<OurWork />} />
        <Route path="/get-involved" element={<GetInvolved />} />
        <Route path="/blog" element={<BlogPosts />} />
        <Route path="/blog/:id" element={<BlogPost />} /> {/* ✅ single post route */}
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/donate" element={<Donate />} />
      </Routes>

      <Footer12 />
    </>
  );
}
