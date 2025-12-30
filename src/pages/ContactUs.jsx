import React, { useState } from "react";
import { Button } from "@relume_io/relume-ui";
import { FiMail, FiPhone, FiMapPin, FiClock } from "react-icons/fi";
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

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
      answer:
        "We train community health volunteers quarterly. Contact our HR department for upcoming training dates.",
    },
    {
      question: "What items can I donate to support your work?",
      answer:
        "We accept medical supplies, farming tools, and educational materials.",
    },
    {
      question: "How does BHASO ensure donor accountability?",
      answer:
        "We publish annual reports and are audited by KPMG Zimbabwe.",
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
    <div className="bg-white text-gray-900">
      {/* HERO */}
      <section
        className="relative bg-cover bg-center h-96 flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-green-900 bg-opacity-60"></div>
        <div className="relative text-center text-white px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Connect With BHASO
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Let’s work together to build HIV-resilient, climate-smart, and
            inclusive communities across Zimbabwe.
          </p>
        </div>
      </section>

      {/* CONTACT CARDS */}
      <section className="py-16 px-[5%] max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        <ContactCard icon={<FiPhone />} title="Phone">
          <p>+263 242 123 456</p>
          <p>+263 772 987 654</p>
        </ContactCard>

        <ContactCard icon={<FiMail />} title="Email">
          <p>information@bhaso.org</p>
        </ContactCard>

        <ContactCard icon={<FiMapPin />} title="Head Office">
          <p>7298 Bugwa Street, Rujeko B</p>
          <p>Masvingo, Zimbabwe</p>
        </ContactCard>
      </section>

      {/* ENGAGEMENT */}
      <section className="py-16 px-[5%] max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold mb-6 text-green-900">
            How We Can Support You
          </h2>
          <p className="mb-6 text-lg text-gray-700">
            Whether you are a community member, partner, donor, or volunteer,
            BHASO offers meaningful ways to engage and create impact.
          </p>

          <ul className="space-y-4 text-gray-700">
            <li>
              <strong className="text-green-800">Community Support:</strong>{" "}
              HIV/TB care, psychosocial support, and referrals.
            </li>
            <li>
              <strong className="text-green-800">Partnerships:</strong>{" "}
              Program collaboration and institutional partnerships.
            </li>
            <li>
              <strong className="text-green-800">Volunteering:</strong>{" "}
              Community health and youth-led initiatives.
            </li>
            <li>
              <strong className="text-green-800">Research & Advocacy:</strong>{" "}
              Evidence-based policy and community advocacy.
            </li>
          </ul>

          <Button className="mt-8 bg-green-800 hover:bg-green-700 text-white">
            Start a Conversation
          </Button>
        </div>

        <div className="bg-green-50 p-8 rounded-lg">
          <div className="flex items-center mb-6">
            <FiClock className="text-green-800 text-2xl mr-3" />
            <h3 className="text-xl font-semibold text-green-900">
              Operating Hours
            </h3>
          </div>
          <p><strong>Weekdays:</strong> 8:00 AM – 5:00 PM</p>
          <p><strong>Saturdays:</strong> 9:00 AM – 1:00 PM</p>
          <p><strong>Sundays:</strong> Closed</p>
        </div>
      </section>

      {/* FAQ + FORM */}
      <section className="py-16 px-[5%] max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-6">
            Frequently Asked Questions
          </h3>

          {faqs.map((faq, i) => (
            <div key={i} className="border rounded-lg mb-4">
              <button
                onClick={() => toggleFAQ(i)}
                className="w-full px-4 py-3 text-left font-medium text-green-800"
              >
                {faq.question}
              </button>
              {activeIndex === i && (
                <div className="px-4 py-3 text-gray-700 border-t">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="bg-green-50 p-8 rounded-lg">
          <h3 className="text-xl font-semibold mb-6">
            Ask About Our Programs
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 rounded border"
            />

            <input
              name="email"
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded border"
            />

            <textarea
              name="message"
              rows="4"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 rounded border"
            />

            <Button type="submit" className="bg-green-800 text-white w-full">
              Submit Inquiry
            </Button>

            {/* SUCCESS MESSAGE (only after successful send) */}
            {submitStatus === "success" && (
              <p className="text-green-800 font-semibold text-center mt-4">
                Thank you! Your message has been sent successfully.
              </p>
            )}
          </form>
        </div>
      </section>

      {/* SOCIALS */}
      <section className="py-16 bg-green-50 text-center">
        <h2 className="text-3xl font-bold mb-8">Follow Us</h2>
        <div className="flex justify-center space-x-8 text-4xl">
          <FaInstagram />
          <FaFacebookF />
          <FaTwitter />
          <FaLinkedinIn />
        </div>
      </section>
    </div>
  );
}

/* Reusable Card */
function ContactCard({ icon, title, children }) {
  return (
    <div className="bg-green-50 p-8 rounded-lg text-center shadow-sm">
      <div className="flex justify-center text-green-800 text-3xl mb-4">
        {icon}
      </div>
      <h3 className="font-semibold text-xl mb-2 text-green-900">
        {title}
      </h3>
      <div className="text-gray-700">{children}</div>
    </div>
  );
}
