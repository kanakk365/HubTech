"use client";

import React, { useState } from "react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

const About = () => {
  const [activeSection, setActiveSection] = useState(1); // Foundation Models is active by default

  const sections = [
    {
      id: 0,
      title: "Fine-Tuning and RLHF",
      description:
        "Adapt best-in-class foundation models to your business and your specific data to build sustainable, successful AI programs and data from your enterprise.",
      image: "/static/landing-page/whole-model.webp", // You'll need to add these images
      video: "/Vid/cube.mp4", // Using existing video as placeholder
    },
    {
      id: 1,
      title: "Foundation Models",
      description:
        "Scale partners or integrates with all of the leading AI models, from open-source to closed-source, including OpenAI, Google, Meta, Cohere, and more.",
      image: "/static/landing-page/whole-model.webp",
      video: "/Vid/cube2.mp4",
    },
    {
      id: 2,
      title: "Enterprise Data",
      description:
        "Scale's Data Engine enables you to integrate your enterprise data into the fold of these models, providing the base for long-term strategic differentiation.",
      image: "/static/landing-page/whole-model.webp",
      video: "/Vid/cube.mp4",
    },
  ];

  const mobileSlides = [
    {
      title: "Enterprise GenAI Platform",
      description:
        "The only full-stack GenAI Platform for your Enterprise, powered by the Scale Data Engine.",
      image: "/static/landing-page/whole-model.webp",
      video: "/Vid/cube.mp4",
    },
    ...sections.map((section) => ({
      title: section.title,
      description: section.description,
      image: section.image,
      video: section.video,
    })),
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
            className="bg-white bg-opacity-5 text-[#D1AAD7] px-4 py-2 tracking-[3px] text-xs md:px-5 md:py-2 lg:text-xs uppercase"
            duration={2}
          >
            AI for the Enterprise
          </HoverBorderGradient>
        </div>
        <h2 className="font-medium leading-snug text-white lg:leading-[1.25] text-2xl sm:text-3xl md:text-4xl lg:text-5xl [text-wrap:balance]">
          Full-Stack AI Solutions
        </h2>
        <p className="mt-4 lg:mt-2 leading-[1.60] text-neutral-100 lg:text-gray-300 text-base sm:text-lg lg:text-xl [text-wrap:balance] px-4 sm:px-0">
          Outcomes delivered with world-class data, models, agents, and
          deployment.
        </p>
        <a
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
        </a>
      </div>

      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto mb-24 md:mb-40 xl:mb-16">
        {/* Desktop Layout */}
        <div className="hidden xl:flex xl:h-[700px]">
          {/* Left side - Interactive sections */}
          <div className="relative z-10 w-6/12 min-w-[510px] -mr-9">
            <div className="absolute w-full -translate-y-1/2 top-1/2">
              {sections.map((section) => (
                <div
                  key={section.id}
                  className={`border-b group last:border-transparent border-white/10 hover:border-white hover:last:border-white hover:opacity-100 transition-all duration-300 cursor-pointer ${
                    activeSection === section.id ? "opacity-100" : "opacity-30"
                  }`}
                  onMouseEnter={() => setActiveSection(section.id)}
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

          {/* Right side - Videos */}
          <div className="relative w-full h-full">
            {sections.map((section) => (
              <div
                key={section.id}
                className={`w-[624px] h-[624px] absolute z-10 transition-opacity duration-300 flex justify-end items-center right-0 top-[38px] ${
                  activeSection === section.id ? "opacity-100" : "opacity-0"
                }`}
              >
                <video
                  autoPlay
                  playsInline
                  loop
                  muted
                  className="w-full h-full object-cover rounded-lg"
                >
                  <source src={section.video} type="video/mp4" />
                </video>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="xl:hidden">
          {/* Mobile Image/Video */}
          <div className="relative mb-8 mx-auto max-w-sm">
            <div className="aspect-square relative overflow-hidden rounded-lg">
              <video
                autoPlay
                playsInline
                loop
                muted
                className="w-full h-full object-cover"
              >
                <source
                  src={mobileSlides[currentSlide].video}
                  type="video/mp4"
                />
              </video>
            </div>
          </div>

          {/* Mobile Content */}
          <div className="px-4 sm:px-6">
            <div className="text-center mb-8">
              <h3 className="text-xl sm:text-2xl font-medium text-white mb-4">
                {mobileSlides[currentSlide].title}
              </h3>
              <p className="text-white/70 text-base sm:text-lg leading-relaxed">
                {mobileSlides[currentSlide].description}
              </p>
            </div>

            <div className="flex items-center justify-center mb-8">
              {/* Dots indicator */}
              <div className="flex space-x-2 ">
                {mobileSlides.map((_, index) => (
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
