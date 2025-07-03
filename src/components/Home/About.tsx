"use client";

import React, { useState } from "react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

const About = () => {
  const [activeSection, setActiveSection] = useState<number | null>(null); // All sections active initially

  const sections = [
    {
      id: 0,
      title: "AI Based Softwares",
      description:
        "Leverage the power of AI to transform your business operations. We specialize in building intelligent systems using fine-tuned AI agents tailored to your enterprise data.",
      detailedDescription:
        "Whether it's predictive analytics, automation, or intelligent assistants - we turn your data into real, actionable outcomes. Our AI solutions are designed to integrate seamlessly with your existing workflows, providing immediate value while scaling with your business needs. From natural language processing to computer vision, we implement cutting-edge AI technologies that drive measurable results.",
      image: "/static/landing-page/whole-model.webp",
      video: "/Vid/cube.mp4",
    },
    {
      id: 1,
      title: "Web Development",
      description:
        "Robust. Scalable. Secure. From dynamic web apps to full-stack enterprise solutions, our team builds digital products that perform flawlessly across devices and platforms.",
      detailedDescription:
        "We use the latest technologies and frameworks to ensure fast, responsive, and SEO-optimized websites that grow with your business. Our development process emphasizes clean code, performance optimization, and security best practices. Whether you need a simple landing page or a complex web application, we deliver solutions that exceed expectations and drive business growth.",
      image: "/static/landing-page/whole-model.webp",
      video: "/Vid/cube2.mp4",
    },
    {
      id: 2,
      title: "UI-UX Design",
      description:
        "Designs that delight and convert. Our UI-UX experts craft user experiences that are not only visually stunning but also highly functional and intuitive.",
      detailedDescription:
        "We focus on user-centered design principles to boost engagement, drive retention, and create a seamless journey for every user. Our design process involves thorough research, prototyping, and testing to ensure every interface element serves a purpose. From wireframes to high-fidelity mockups, we create designs that tell your brand story while optimizing for conversions and user satisfaction.",
      image: "/static/landing-page/whole-model.webp",
      video: "/Vid/cube.mp4",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="flex flex-col max-w-3xl mx-auto items-center justify-center text-center md:mb-20 md:mt-12 mb-16">
        <div className="mb-5 lg:mb-5">
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="div"
            className=" text-[#D1AAD7] px-4 py-2 tracking-[3px] text-xs md:px-5 md:py-2 lg:text-xs uppercase"
            duration={2}
          >
            Our Services
          </HoverBorderGradient>
        </div>
        <h2 className="font-medium leading-snug text-white lg:leading-[1.25] text-2xl sm:text-3xl md:text-4xl lg:text-5xl [text-wrap:balance]">
          Digital Solutions That Drive Results
        </h2>
        <p className="mt-4 lg:mt-2 leading-[1.60] text-neutral-100 lg:text-gray-300 text-base sm:text-lg lg:text-xl [text-wrap:balance] px-4 sm:px-0">
          From AI-powered software to beautiful user experiences, we deliver
          comprehensive digital solutions for modern businesses.
        </p>
        {/* <a
          style={{ WebkitTapHighlightColor: "transparent" }}
          className="relative focus-visible:outline outline-[rgba(255,255,255,0.64)] rounded-xl outline-offset-[3px] inline-block mt-8"
          href="/demo"
        >
          <div className="font-medium justify-center flex flex-nowrap whitespace-nowrap transition-translate duration-300 cursor-pointer group items-center h-full group leading-[150%] new-button_button--pink__gdR3d text-sm px-[30px] py-[14px] text-white ">
            Book a Demo
            <span className="inline-block ml-1 font-normal duration-300 w-fit transition-translate group-hover:translate-x-1">
              →
            </span>
          </div>
        </a> */}
      </div>

      {/* Main Content Section */}
      <div className=" max-w-6xl mx-auto mb-24 md:mb-40 xl:mb-16">
        {/* Desktop Layout */}
        <div className="hidden xl:flex xl:h-[700px]">
          {/* Left side - Interactive sections */}
          <div className="relative z-10 w-6/12 min-w-[510px] ">
            <div className="absolute w-full -translate-y-1/2 top-1/2">
              {sections.map((section) => (
                <div
                  key={section.id}
                  className={`border-b group last:border-transparent border-white/10 hover:border-white hover:last:border-white hover:opacity-100 transition-all duration-300 cursor-pointer ${
                    activeSection === null
                      ? "opacity-100" // All sections active initially
                      : activeSection === section.id
                      ? "opacity-100"
                      : "opacity-30"
                  }`}
                  onMouseEnter={() => setActiveSection(section.id)}
                  onMouseLeave={() => setActiveSection(null)} // Reset to show all when not hovering
                >
                  <p className="w-full pt-6 pb-2 text-2xl leading-10 text-left text-white">
                    {section.title}
                  </p>
                  <p className="pb-6 overflow-hidden text-white transition-colors group-hover:text-white/70">
                    {section.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Detailed Content */}
          <div className="  relative w-full h-full flex items-center justify-end">
            <div className="max-w-lg px-8">
              {(() => {
                // Determine which section to show: activeSection, or default to index 1 (Web Development)
                const showSection = activeSection === null ? 1 : activeSection;
                const section = sections.find((s) => s.id === showSection);
                if (!section) return null;
                return (
                  <div
                    key={section.id}
                    className="transition-opacity duration-300 opacity-100"
                  >
                    <div className=" backdrop-blur-sm rounded-2xl p-8 shadow-[0_-2px_4px_rgba(255,255,255,0.1),0_-8px_16px_rgba(255,255,255,0.05),0_-16px_32px_rgba(255,255,255,0.02)]">
                      <h3 className="text-2xl font-semibold text-white mb-4">
                        {section.title}
                      </h3>
                      <p className="text-white/80 leading-relaxed text-lg">
                        {section.detailedDescription}
                      </p>
                      <div className="mt-6 pt-6 border-t border-white/10">
                        <div className="flex items-center space-x-4">
                          <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                          <span className="text-purple-300 text-sm font-medium">
                            Premium Service
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="xl:hidden">
          {/* Mobile Content */}
          <div className="px-4 sm:px-6">
            {/* Current slide content */}
            <div className="mb-8">
              {(() => {
                const section = sections[currentSlide];
                if (!section) return null;
                
                return (
                  <div className="backdrop-blur-sm rounded-2xl p-6 shadow-[0_-2px_4px_rgba(255,255,255,0.1),0_-8px_16px_rgba(255,255,255,0.05),0_-16px_32px_rgba(255,255,255,0.02)]">
                    <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4">
                      {section.title}
                    </h3>
                    <p className="text-white/80 leading-relaxed text-base sm:text-lg mb-6">
                      {section.detailedDescription}
                    </p>
                    <div className="pt-4 border-t border-white/10">
                      <div className="flex items-center space-x-4">
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                        <span className="text-purple-300 text-sm font-medium">
                          Premium Service
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>

            <div className="flex items-center justify-center mb-8">
              {/* Dots indicator */}
              <div className="flex space-x-2">
                {sections.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentSlide === index
                        ? "bg-white w-6"
                        : "bg-white/40 w-2"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
