import React, { useState } from "react";
import { Button } from "@relume_io/relume-ui";
import { FiMail, FiPhone, FiMapPin, FiClock } from "react-icons/fi";
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    program: "HIV/TB Management",
    message: "",
  });

  const [submitStatus, setSubmitStatus] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How can I volunteer with BHASO's health programs?",
      answer: "We train community health volunteers quarterly. Contact our HR department for upcoming training dates.",
    },
    {
      question: "What items can I donate to support your work?",
      answer: "We accept medical supplies, farming tools, and educational materials.",
    },
    {
      question: "How does BHASO ensure donor accountability?",
      answer: "We publish annual reports and are audited by KPMG Zimbabwe.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus(null);

    const data = {
      access_key: "dea587fe-1343-4a7f-96d3-03ea027a7f52",
      ...formData,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          program: "HIV/TB Management",
          message: "",
        });
      }
    } catch (error) {
      console.error("Form submission failed:", error);
    }
  };

  return (
    <div className="bg-[#fcfcfa] text-gray-900">
      {/* HERO */}
      <section className="relative bg-cover bg-center h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden"
        style={{ backgroundImage: "url('https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg')" }}>
        <div className="absolute inset-0 bg-[#113d29]/70 mix-blend-multiply"></div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-center text-white px-4 max-w-4xl mt-16"
        >
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 drop-shadow-xl">
            Connect With BHASO
          </h1>
          <p className="text-xl md:text-2xl font-light text-gray-200 max-w-2xl mx-auto drop-shadow-md">
            Let's work together to build HIV-resilient, climate-smart, and inclusive communities across Zimbabwe.
          </p>
        </motion.div>
      </section>

      {/* CONTACT CARDS */}
      <section className="py-20 px-[5%] max-w-7xl mx-auto grid md:grid-cols-3 gap-8 relative -mt-20 z-10">
        {[
          { icon: <FiPhone />, title: "Phone", content: ["+263 242 123 456", "+263 772 987 654"] },
          { icon: <FiMail />, title: "Email", content: ["information@bhaso.org"] },
          { icon: <FiMapPin />, title: "Head Office", content: ["7298 Bugwa Street, Rujeko B", "Masvingo, Zimbabwe"] }
        ].map((card, idx) => (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            key={idx}
            className="bg-white p-10 rounded-3xl text-center shadow-xl border border-[#113d29]/5 hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="flex justify-center text-[#14b8a6] text-4xl mb-6 bg-[#14b8a6]/10 w-20 h-20 mx-auto rounded-full items-center">
              {card.icon}
            </div>
            <h3 className="font-bold font-serif text-2xl mb-4 text-[#113d29]">
              {card.title}
            </h3>
            <div className="text-gray-600 font-light space-y-1">
              {card.content.map((line, i) => <p key={i}>{line}</p>)}
            </div>
          </motion.div>
        ))}
      </section>

      {/* ENGAGEMENT */}
      <section className="py-16 md:py-24 px-[5%] max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-[#113d29]">
            How We Can Support You
          </h2>
          <p className="mb-8 text-lg text-gray-600 font-light leading-relaxed">
            Whether you are a community member, partner, donor, or volunteer,
            BHASO offers meaningful ways to engage and create impact.
          </p>

          <ul className="space-y-6 text-gray-700">
            {[
              { title: "Community Support", desc: "HIV/TB care, psychosocial support, and referrals." },
              { title: "Partnerships", desc: "Program collaboration and institutional partnerships." },
              { title: "Volunteering", desc: "Community health and youth-led initiatives." },
              { title: "Research & Advocacy", desc: "Evidence-based policy and community advocacy." }
            ].map((item, idx) => (
              <li key={idx} className="flex flex-col">
                <strong className="text-[#14b8a6] text-lg font-bold">{item.title}</strong>
                <span className="text-gray-600 font-light">{item.desc}</span>
              </li>
            ))}
          </ul>

          <button className="mt-10 px-8 py-4 bg-[#113d29] hover:bg-[#14b8a6] text-white rounded-full transition-colors duration-300 shadow-xl font-medium">
            Start a Conversation
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[#113d29] text-white p-10 md:p-14 rounded-3xl shadow-xl border border-white/10"
        >
          <div className="flex items-center mb-10">
            <FiClock className="text-[#14b8a6] text-4xl mr-4" />
            <h3 className="text-3xl font-serif font-bold">
              Operating Hours
            </h3>
          </div>
          <div className="space-y-6 text-lg font-light">
            <div className="flex justify-between border-b border-white/10 pb-4">
              <span>Weekdays</span>
              <span className="font-medium text-[#14b8a6]">8:00 AM – 5:00 PM</span>
            </div>
            <div className="flex justify-between border-b border-white/10 pb-4">
              <span>Saturdays</span>
              <span className="font-medium text-[#14b8a6]">9:00 AM – 1:00 PM</span>
            </div>
            <div className="flex justify-between">
              <span>Sundays</span>
              <span className="font-medium text-gray-400">Closed</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* FAQ + FORM */}
      <section className="py-16 md:py-24 px-[5%] max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl md:text-4xl font-serif font-bold mb-10 text-[#113d29]">
            Frequently Asked Questions
          </h3>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white border border-[#113d29]/10 rounded-2xl overflow-hidden shadow-sm">
                <button
                  onClick={() => toggleFAQ(i)}
                  className="w-full px-6 py-5 text-left font-bold text-lg text-[#113d29] flex justify-between items-center group"
                >
                  {faq.question}
                  <span className={`text-[#14b8a6] transition-transform duration-300 ${activeIndex === i ? "rotate-180" : ""}`}>
                    {activeIndex === i ? "−" : "+"}
                  </span>
                </button>
                <AnimatePresence>
                  {activeIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-6 pb-5 text-gray-600 font-light"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white p-10 md:p-12 rounded-3xl shadow-xl border border-[#113d29]/10"
        >
          <h3 className="text-3xl font-serif font-bold mb-8 text-[#113d29]">
            Ask About Our Programs
          </h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-4 rounded-xl border border-gray-200 focus:border-[#14b8a6] focus:outline-none focus:ring-1 focus:ring-[#14b8a6] transition-colors bg-[#fcfcfa]"
            />

            <input
              name="email"
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-4 rounded-xl border border-gray-200 focus:border-[#14b8a6] focus:outline-none focus:ring-1 focus:ring-[#14b8a6] transition-colors bg-[#fcfcfa]"
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-4 rounded-xl border border-gray-200 focus:border-[#14b8a6] focus:outline-none focus:ring-1 focus:ring-[#14b8a6] transition-colors bg-[#fcfcfa] resize-none"
            />

            <button type="submit" className="w-full py-4 bg-[#113d29] hover:bg-[#14b8a6] text-white rounded-full font-bold transition-colors duration-300 shadow-lg text-lg">
              Submit Inquiry
            </button>

            {submitStatus === "success" && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-[#14b8a6] font-medium text-center mt-4"
              >
                Thank you! Your message has been sent successfully.
              </motion.p>
            )}
          </form>
        </motion.div>
      </section>

      {/* SOCIALS */}
      <section className="py-20 bg-[#113d29] text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-serif font-bold mb-10">Follow Us</h2>
          <div className="flex justify-center space-x-8 text-3xl">
            {[FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn].map((Icon, i) => (
              <a key={i} href="#" className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#14b8a6] hover:scale-110 transition-all duration-300">
                <Icon />
              </a>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}
