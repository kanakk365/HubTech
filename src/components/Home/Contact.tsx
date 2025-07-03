"use client";

import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    jobTitle: "",
    email: "",
    country: "",
    team: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <section className=" lg:px-8 max-w-7xl mx-auto">
      <div className=" overflow-hidden backdrop-blur-sm bg-white/1 relative">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-0 relative z-10">
          {/* Left side - Form */}
          <div className="  flex flex-col items-center justify-center  relative overflow-hidden w-full rounded-xl p-6  ">
            {/* Centered glass card */}
            <div className="relative z-10 w-full max-w-lg rounded-3xl shadow-[0_-2px_4px_rgba(255,255,255,0.1),0_-8px_16px_rgba(255,255,255,0.05),0_-16px_32px_rgba(255,255,255,0.02)]  backdrop-blur-sm  py-4 lg:py-8 lg:p-8 px-4 flex flex-col items-center">
              {/* Title */}
              <h2 className="text-2xl font-semibold text-white mb-2 text-center">
                Get in touch with HubTech
              </h2>
              <p className="text-gray-400 text-sm mb-6 text-center">
                Have an inquiry? Provide your information below.
              </p>

              <form
                onSubmit={handleSubmit}
                className="flex flex-col w-full gap-4"
              >
                {/* Name Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First name*"
                    required
                    className="w-full px-5 py-3 rounded-xl bg-white/5 text-white placeholder-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
                  />
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last name*"
                    required
                    className="w-full px-5 py-3 rounded-xl bg-white/5 text-white placeholder-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
                  />
                </div>

                {/* Company and Job Title */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company name"
                    className="w-full px-5 py-3 rounded-xl bg-white/5 text-white placeholder-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
                  />
                  <input
                    type="text"
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleChange}
                    placeholder="Job title"
                    className="w-full px-5 py-3 rounded-xl bg-white/5 text-white placeholder-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
                  />
                </div>

                {/* Email */}
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Work email*"
                  required
                  className="w-full px-5 py-3 rounded-xl bg-white/5 text-white placeholder-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
                />

                {/* Country */}
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-3 rounded-xl bg-white/5 text-white text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
                >
                  <option value="" disabled className="bg-gray-800">
                    Country*
                  </option>
                  <option value="United States" className="bg-gray-800">
                    United States
                  </option>
                  <option value="Canada" className="bg-gray-800">
                    Canada
                  </option>
                  <option value="United Kingdom" className="bg-gray-800">
                    United Kingdom
                  </option>
                  <option value="Germany" className="bg-gray-800">
                    Germany
                  </option>
                  <option value="France" className="bg-gray-800">
                    France
                  </option>
                  <option value="Australia" className="bg-gray-800">
                    Australia
                  </option>
                  <option value="India" className="bg-gray-800">
                    India
                  </option>
                  <option value="Other" className="bg-gray-800">
                    Other
                  </option>
                </select>

                {/* Message */}
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Please provide details on your project.*"
                  required
                  rows={4}
                  className="w-full px-5 py-3 rounded-xl bg-white/5 text-white placeholder-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400 resize-vertical"
                />

                <hr className="opacity-10" />

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-white/5 text-white font-medium px-5 py-3 rounded-full shadow hover:bg-white/20 transition mb-3 text-sm"
                >
                  Submit Message
                </button>

                {/* Privacy Policy */}
                <div className="text-xs text-gray-400 text-center">
                  By submitting, you agree to our{" "}
                  <a
                    href="/privacy"
                    className="underline text-white/80 hover:text-white"
                  >
                    Privacy Policy
                  </a>
                </div>
              </form>
            </div>
          </div>

          {/* Right side - Video (hidden on mobile) */}
          <div className="hidden lg:flex relative lg:h-full bg-black min-h-[400px] lg:min-h-[600px] items-center justify-center">
            <div className="w-full h-full relative overflow-hidden rounded-xl lg:rounded-l-none">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-[50rem] h-[50rem] mt-10 object-cover"
              >
                <source src="/Vid/contact.webm" type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>

        {/* Background effects - removed, now only on left div */}
      </div>
    </section>
  );
};

export default Contact;
