"use client";
import React, { useState } from "react";

export default function GetInvolved() {
  const volunteerPrograms = [
    {
      title: "HIV/TB Programs",
      description: "Help provide education, testing, and support services for communities affected by HIV and tuberculosis.",
      image: "/assets/image66.jpeg",
      details: "Our HIV/TB programs focus on prevention, testing, and treatment support. Volunteers assist with community outreach, education workshops, and patient support services. No medical background required - we provide full training."
    },
    {
      title: "Climate Initiatives",
      description: "Join efforts to combat climate change by promoting sustainability and environmental awareness.",
      image: "/assets/image98.jpeg",
      details: "Climate initiative volunteers work on tree planting, recycling programs, and environmental education. Activities include organizing clean-ups, conducting sustainability workshops, and advocating for green policies in local communities."
    },
    {
      title: "Gender Equality",
      description: "Advocate for women's rights, gender equality, and empowerment in local communities.",
      image: "/assets/image854.jpeg",
      details: "Gender equality volunteers support our empowerment programs through mentorship, skills training, and awareness campaigns. We work with schools, community centers, and workplaces to promote equal opportunities for all."
    },
    {
      title: "Research & Data",
      description: "Support evidence-based decision-making through data collection, analysis, and research projects.",
      image: "/assets/image655.jpeg",
      details: "Our research volunteers help collect and analyze data that informs our programs and advocacy work. Opportunities include field research, data entry, statistical analysis, and report writing."
    },
    {
      title: "Community Outreach",
      description: "Engage directly with communities to provide support, resources, and development programs.",
      image: "/assets/image767.jpeg",
      details: "Community outreach volunteers are the face of BHASO in local neighborhoods. Activities include organizing events, distributing resources, conducting needs assessments, and connecting community members with services."
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    program: "",
    experience: "",
    availability: "",
  });

  const [selectedProgram, setSelectedProgram] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage("");
    setErrorMessage("");

    const formPayload = {
      access_key: "dea587fe-1343-4a7f-96d3-03ea027a7f52",
      ...formData,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formPayload),
      });

      const result = await response.json();
      if (result.success) {
        setSuccessMessage("Thank you! Your application has been submitted.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          program: "",
          experience: "",
          availability: "",
        });
      } else {
        setErrorMessage("Something went wrong. Please try again.");
      }
    } catch {
      setErrorMessage("Network error. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleProgramClick = (program) => {
    setSelectedProgram(program);
  };

  const handleBackToPrograms = () => {
    setSelectedProgram(null);
  };

  return (
    <div className="px-[5%] py-12 md:py-16 lg:py-20 space-y-20 bg-[#fcfcfa]">
      {/* Hero Section with Pixels Image */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="order-2 md:order-1">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-[#113d29] mb-6">
            Make a Difference Today
          </h1>
          <p className="text-lg text-gray-600 font-light mb-8 leading-relaxed">
            At BHASO, we believe in the power of collective action. When you
            volunteer, you're not just giving your time — you're shaping lives,
            building stronger communities, and creating a better future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#volunteer-form"
              className="px-8 py-4 bg-[#113d29] hover:bg-[#14b8a6] text-white rounded-full font-bold transition-colors duration-300 text-center shadow-lg"
            >
              Apply Now
            </a>
            <a
              href="#programs"
              className="px-8 py-4 border border-[#113d29] text-[#113d29] hover:bg-[#14b8a6]/10 rounded-full font-bold transition-colors duration-300 text-center"
            >
              Explore Programs
            </a>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <img
            src="/assets/image334.jpeg"
            alt="Volunteers working together"
            className="rounded-3xl shadow-xl w-full h-auto object-cover aspect-video"
          />
        </div>
      </div>

      {/* Programs Section */}
      <div id="programs">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#113d29] mb-4">
            Our Volunteer Programs
          </h2>
          <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
            Choose a program that matches your interests and skills. Each opportunity
            makes a real impact in our community.
          </p>
        </div>

        {selectedProgram ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img
                src={selectedProgram.image}
                alt={selectedProgram.title}
                className="w-full h-64 md:h-96 object-cover"
              />
            </div>
            <div>
              <button
                onClick={handleBackToPrograms}
                className="mb-6 flex items-center text-[#14b8a6] hover:text-[#113d29] font-bold transition-colors duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
                Back to all programs
              </button>
              <h3 className="text-3xl font-serif font-bold text-[#113d29] mb-6">
                {selectedProgram.title}
              </h3>
              <p className="text-gray-600 font-light leading-relaxed mb-8 text-lg">{selectedProgram.details}</p>
              <a
                href="#volunteer-form"
                className="inline-block px-8 py-4 bg-[#113d29] hover:bg-[#14b8a6] text-white rounded-full font-bold transition-colors duration-300 shadow-md"
              >
                Apply for this program
              </a>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {volunteerPrograms.map((program, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer border border-[#113d29]/10 hover:border-[#14b8a6]/30 hover:-translate-y-1"
                onClick={() => handleProgramClick(program)}
              >
                <div className="h-48 overflow-hidden rounded-t-3xl">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-[#113d29] mb-3 group-hover:text-[#14b8a6] transition-colors duration-300">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 font-light mb-6 line-clamp-3">{program.description}</p>
                  <button className="text-[#14b8a6] font-bold hover:text-[#113d29] flex items-center transition-colors duration-300">
                    Learn more
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Impact Stories Section */}
      <div className="bg-white border border-[#113d29]/5 rounded-3xl p-8 md:p-14 shadow-lg">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#113d29] mb-4">
            Volunteer Impact Stories
          </h2>
          <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
            Hear from volunteers who have made a difference through our programs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#fcfcfa] p-8 rounded-3xl shadow-sm border border-[#113d29]/10">
            <div className="flex items-center mb-6">
              <img
                src="/assets/image59.jpeg"
                alt="Sarah"
                className="w-14 h-14 rounded-full object-cover mr-4"
              />
              <div>
                <h4 className="font-bold text-[#113d29] text-lg">Sarah K.</h4>
                <p className="text-sm font-semibold text-[#14b8a6]">HIV/TB Program Volunteer</p>
              </div>
            </div>
            <p className="text-gray-600 font-light italic leading-relaxed text-lg">
              "Volunteering with BHASO's HIV awareness program changed my perspective completely. Seeing the direct impact of our education workshops in rural communities showed me how much difference one person can make."
            </p>
          </div>
          <div className="bg-[#fcfcfa] p-8 rounded-3xl shadow-sm border border-[#113d29]/10">
            <div className="flex items-center mb-6">
              <img
                src="/assets/image90.jpeg"
                alt="James"
                className="w-14 h-14 rounded-full object-cover mr-4"
              />
              <div>
                <h4 className="font-bold text-[#113d29] text-lg">James M.</h4>
                <p className="text-sm font-semibold text-[#14b8a6]">Climate Initiative Volunteer</p>
              </div>
            </div>
            <p className="text-gray-600 font-light italic leading-relaxed text-lg">
              "The tree planting initiative not only helped the environment but connected me with amazing people in my community. We've planted over 500 trees in our neighborhood in just six months!"
            </p>
          </div>
        </div>
      </div>

      {/* Volunteer Application Form */}
      <div
        id="volunteer-form"
        className="max-w-4xl mx-auto bg-white p-10 md:p-14 rounded-3xl shadow-xl border border-[#113d29]/5"
      >
        <h2 className="text-4xl font-serif font-bold text-[#113d29] mb-4">
          Volunteer Application
        </h2>
        <p className="text-lg text-gray-600 font-light mb-10">
          Fill out the form below to start your volunteer journey with us. We'll get back to you within 3 business days.
        </p>
        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          onSubmit={handleSubmit}
        >
          <div>
            <label className="block text-sm font-bold text-[#113d29] mb-2">Full Name*</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full border border-gray-200 p-4 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#14b8a6] focus:border-[#14b8a6] bg-[#fcfcfa] transition-colors"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-[#113d29] mb-2">Email*</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full border border-gray-200 p-4 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#14b8a6] focus:border-[#14b8a6] bg-[#fcfcfa] transition-colors"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-[#113d29] mb-2">Phone Number*</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full border border-gray-200 p-4 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#14b8a6] focus:border-[#14b8a6] bg-[#fcfcfa] transition-colors"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-[#113d29] mb-2">Program Interest*</label>
            <select
              name="program"
              value={formData.program}
              onChange={handleInputChange}
              className="w-full border border-gray-200 p-4 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#14b8a6] focus:border-[#14b8a6] bg-[#fcfcfa] transition-colors"
              required
            >
              <option value="">Select a program</option>
              {volunteerPrograms.map((program, i) => (
                <option key={i} value={program.title}>
                  {program.title}
                </option>
              ))}
            </select>
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-bold text-[#113d29] mb-2">Relevant Experience*</label>
            <textarea
              name="experience"
              value={formData.experience}
              onChange={handleInputChange}
              rows="3"
              className="w-full border border-gray-200 p-4 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#14b8a6] focus:border-[#14b8a6] bg-[#fcfcfa] transition-colors resize-none"
              required
            ></textarea>
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-bold text-[#113d29] mb-2">Availability*</label>
            <textarea
              name="availability"
              value={formData.availability}
              onChange={handleInputChange}
              rows="2"
              className="w-full border border-gray-200 p-4 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#14b8a6] focus:border-[#14b8a6] bg-[#fcfcfa] transition-colors resize-none"
              required
            ></textarea>
          </div>

          <div className="md:col-span-2 mt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-8 py-4 bg-[#113d29] hover:bg-[#14b8a6] text-white rounded-full font-bold w-full md:w-auto transition-colors duration-300 shadow-lg text-lg"
            >
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </button>
          </div>
        </form>

        {successMessage && (
          <p className="mt-6 text-[#14b8a6] font-bold text-center">{successMessage}</p>
        )}
        {errorMessage && (
          <p className="mt-6 text-red-500 font-bold text-center">{errorMessage}</p>
        )}
      </div>

      {/* Call to Action */}
      <div className="bg-[#113d29] text-white text-center py-16 px-6 md:px-12 rounded-3xl shadow-xl border border-white/10 relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Ready to Make an Impact?</h2>
          <p className="text-lg font-light max-w-2xl mx-auto mb-10 leading-relaxed text-gray-200">
            Join our community of changemakers and help create lasting positive change.
            Whether you can give a few hours a week or make a long-term commitment,
            your contribution matters.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a
              href="#volunteer-form"
              className="px-8 py-4 bg-[#14b8a6] hover:bg-white text-white hover:text-[#113d29] rounded-full font-bold transition-all duration-300 shadow-lg"
            >
              Apply Now
            </a>
            <a
              href="#programs"
              className="px-8 py-4 border border-white text-white hover:bg-white/10 rounded-full font-bold transition-all duration-300"
            >
              Explore Programs
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}