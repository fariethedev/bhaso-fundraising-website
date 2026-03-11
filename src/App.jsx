import React from "react";
import { Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Navbar2 } from "./components/Navbar2";
import { Footer12 } from "./components/Footer12";
import { CookieBar } from "./components/CookieBar";

import Home from "./pages/home";
import AboutUs from "./pages/AboutUs";
import OurWork from "./pages/OurWork";
import GetInvolved from "./pages/GetInvolved";
import BlogPosts from "./pages/BlogPosts";
import BlogPost from "./pages/BlogPost";
import ContactUs from "./pages/ContactUs";
import Donate from "./pages/Donate";

export default function App() {
  return (
    <>
      <Helmet>
        <title>BHASO | Batanai HIV & AIDS Services Organisation</title>
        <meta name="description" content="BHASO is a Zimbabwean leader in HIV/AIDS response, climate justice, and community resilience." />
        <meta name="keywords" content="BHASO, HIV/AIDS, Zimbabwe, Climate Justice, Gender Rights" />
        <meta property="og:title" content="BHASO | Batanai HIV & AIDS Services Organisation" />
        <meta property="og:description" content="Pioneering Community Health & Climate Resilience Since 1992" />
        <meta property="og:type" content="website" />
      </Helmet>

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
      <CookieBar />
    </>
  );
}
