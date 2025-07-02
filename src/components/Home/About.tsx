"use client";

import React, { useState } from "react";
import Image from "next/image";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

const About = () => {
  const [activeSection, setActiveSection] = useState(1); // Foundation Models is active by default

  const sections = [
    {
      id: 0,
      title: "Fine-Tuning and RLHF",
      description:
        "Adapt best-in-class foundation models to your business and your specific data to build sustainable, successful AI programs and data from your enterprise.",
      image: "/static/landing-page/rlhf.png", // You'll need to add these images
      video: "/Vid/cube.mp4", // Using existing video as placeholder
    },
    {
      id: 1,
      title: "Foundation Models",
      description:
        "Scale partners or integrates with all of the leading AI models, from open-source to closed-source, including OpenAI, Google, Meta, Cohere, and more.",
      image: "/static/landing-page/foundation-models.png",
      video: "/Vid/cube2.mp4",
    },
    {
      id: 2,
      title: "Enterprise Data",
      description:
        "Scale's Data Engine enables you to integrate your enterprise data into the fold of these models, providing the base for long-term strategic differentiation.",
      image: "/static/landing-page/data-engine.png",
      video: "/Vid/cube.mp4",
    },
  ];

  const mobileSlides = [
    {
      title: "Enterprise GenAI Platform",
      description:
        "The only full-stack GenAI Platform for your Enterprise, powered by the Scale Data Engine.",
      image: "/static/landing-page/whole-model.png",
    },
    ...sections.map((section) => ({
      title: section.title,
      description: section.description,
      image: section.image,
    })),
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <>
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
        <h2 className="font-medium leading-snug text-white lg:leading-[1.25] text-3xl md:text-4.5xl lg:text-5xl [text-wrap:balance]">
          Full-Stack AI Solutions
        </h2>
        <p className="mt-4 lg:mt-2 leading-[1.60] text-neutral-100 lg:text-gray-300 lg:text-xl [text-wrap:balance] [white-space:inherit] block font-normal">
          Outcomes delivered with world-class data, models, agents, and deployment.
        </p>
        <a 
          style={{ WebkitTapHighlightColor: 'transparent' }}
          className="relative focus-visible:outline outline-[rgba(255,255,255,0.64)] rounded-xl outline-offset-[3px] inline-block mt-8" 
          href="/demo"
        >
          <div className="font-medium justify-center flex flex-nowrap whitespace-nowrap transition-translate duration-300 cursor-pointer group items-center h-full group leading-[150%] new-button_button--pink__gdR3d text-sm px-[30px] py-[14px] text-white ">
            Book a Demo
            <span className="inline-block ml-1 font-normal duration-300 w-fit transition-translate group-hover:translate-x-1 font-unicode">
              →
            </span>
          </div>
          <span className="after:content-[''] after:inline-block absolute inset-0 after:inset-0 after:absolute select-none pointer-events-none after:rounded-[11px] rounded-[11px] shadow-[inset_0_0_0_1px_rgba(255,255,255,1)] after:shadow-[inset_0_0_0_1px_rgba(200,139,196,0.4)]"></span>
        </a>
      </div>

      {/* Main Content Section */}
      <div className="flex max-w-7xl justify-center flex-col mb-24 md:mb-40 xl:mb-16 sm:h-[700px] h-[590px] mx-auto xl:flex-row mt-28 xl:mt-0">
      {/* Left side - Interactive sections (Desktop) */}
      <div className="relative z-10 hidden w-full -mr-9 xl:inline-block xl:w-6/12 xl:min-w-[510px]">
        <div className="absolute w-full -translate-y-1/2 top-1/2">
          {sections.map((section) => (
            <div
              key={section.id}
              className={`border-b group last:border-transparent border-white/10 group hover:border-white hover:last:border-white hover:opacity-100 transition-all duration-300 cursor-pointer ${
                activeSection === section.id ? "opacity-100" : "opacity-30"
              }`}
              onMouseEnter={() => setActiveSection(section.id)}
            >
              <p className="w-full pt-6 pb-2 text-2xl leading-10 text-left text-white font-aeonik">
                {section.title}
              </p>
              <p className="pb-6 overflow-hidden text-white transition-colors group-hover:text-white/70">
                {section.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Right side - Images/Videos */}
      <div className="relative inline-block w-full -mb-3 xl:h-full xl:mb-10 xl:mx-auto">
        {/* Desktop Images/Videos */}
        <div className="relative hidden w-full h-full xl:block">
          {sections.map((section) => (
            <React.Fragment key={section.id}>
              {/* Image */}
              {/* Video overlay */}
              <div
                className={`w-[624px] h-[624px] absolute z-10 transition-opacity duration-300 flex justify-end items-center right-0 top-[38px] ${
                  activeSection === section.id ? "opacity-100" : "opacity-0"
                }`}
              >
                <video
                  autoPlay
                  playsInline
                  loop
                  muted
                  className="w-full h-full object-cover"
                >
                  <source src={section.video} type="video/mp4" />
                </video>
              </div>
            </React.Fragment>
          ))}
        </div>

        {/* Mobile Slider - Images */}
        <div className="keen-slider !overflow-visible xl:absolute pb-6 xl:!hidden">
          {mobileSlides.map((slide, index) => (
            <Image
              key={index}
              alt={slide.title}
              loading="lazy"
              width={334}
              height={307}
              className="object-contain w-full h-auto keen-slider__slide"
              style={{
                transform: `translate3d(${index * 64 + 12.1875}px, 0px, 0px)`,
                opacity: currentSlide === index ? 1 : 0.7,
              }}
              sizes="100vw"
              src={slide.image}
            />
          ))}
        </div>
      </div>

      {/* Mobile Content */}
      <div className="px-7 w-screen left-1/2 -translate-x-1/2 relative sm:w-auto sm:px-0 xl:mb-6 xl:hidden">
        <div className="keen-slider !overflow-visible pb-24">
          {mobileSlides.map((slide, index) => (
            <div
              key={index}
              className={`space-y-4 keen-slider__slide ${
                currentSlide === index ? "active" : ""
              }`}
              style={{
                transform: `translate3d(${index * 64 + 12.1875}px, 0px, 0px)`,
              }}
            >
              <p className="text-2xl leading-10 font-aeonik text-white">
                {slide.title}
              </p>
              <p className="text-white/70">{slide.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Navigation Dots */}
      <div className="relative z-50 mx-auto -mt-16 lg:-mt-10 xl:hidden">
        {mobileSlides.map((_, index) => (
          <button
            key={index}
            className="px-1 py-2 sm:px-2"
            aria-label={`Slide ${index + 1}`}
            type="button"
            onClick={() => setCurrentSlide(index)}
          >
            <div
              className={`h-1 sm:h-1.5 md:h-2 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? "bg-white w-4 sm:w-5 md:w-6"
                  : "bg-white/40 w-1 sm:w-1.5 md:w-2"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
    </>
  );
};

export default About;
