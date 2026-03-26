"use client";

import React from "react";
import Link from "next/link";
import { StarsBackground } from "@/components/ui/stars-background";
import { ShineBorder } from "@/components/ui/shine-border";
import { InteractiveHoverButton } from "../ui/interactive-hover-button";

export const JoinUs = () => {
  return (
    <section className="relative w-full overflow-hidden bg-black py-24 md:py-32 flex items-center justify-center min-h-[600px]">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#010309]/50 to-[#010309] z-10 pointer-events-none" />
      <StarsBackground className="opacity-80 z-0" starCount={200} />

      <div className="relative z-20 w-full max-w-6xl px-4 md:px-8">
        <div className="relative flex flex-col items-center justify-center rounded-2xl bg-black px-6 py-20 text-center border-none shadow-2xl">
          
          <ShineBorder 
            className="rounded-2xl"
            shineColor={["#00e699", "#0077ff", "#00e699"]}
            borderWidth={2}
            duration={25}
          />
          
          <h2 className="relative z-10 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
            Ready to Transform Your Business with HubTech?
          </h2>
          <p className="relative z-10 text-slate-300 text-sm md:text-base max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            Ship 10x faster with our highly customizable components and expert team to build modern websites and applications that look and feel the way you mean it.
          </p>
          
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto">
            <Link href="#contact" className="w-full sm:w-auto">
              <InteractiveHoverButton>Book a call</InteractiveHoverButton>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
