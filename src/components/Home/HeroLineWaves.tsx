"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import LineWaves from "@/components/ui/LineWaves";

const BG = "#020202";
const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

/* ── BlurIn ─────────────────────────────────────────────────── */
function BlurIn({
  children,
  delay = 0,
  duration = 0.6,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
      animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

/* ── SplitText ──────────────────────────────────────────────── */
function SplitText({
  text,
  className,
  wordDelay = 0.07,
  startDelay = 0,
  duration = 0.6,
}: {
  text: string;
  className?: string;
  wordDelay?: number;
  startDelay?: number;
  duration?: number;
}) {
  return (
    <span className={className}>
      {text.split(" ").map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-[0.22em]"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration,
            delay: startDelay + i * wordDelay,
            ease: EASE,
          }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

/* ── Hero ───────────────────────────────────────────────────── */
export function HeroLineWaves() {
  return (
    <section
      className="relative h-screen w-full overflow-hidden"
      style={{ backgroundColor: BG }}
    >
      {/* ── LineWaves canvas ─────────────────────────────────── */}
      <div className="absolute inset-0 z-0">
        <LineWaves
          speed={0.2}
          innerLineCount={36}
          outerLineCount={42}
          warpIntensity={0.85}
          rotation={-30}
          edgeFadeWidth={0.08}
          colorCycleSpeed={0.38}
          brightness={0.19}
          color1="#4f46e5"
          color2="#7c3aed"
          color3="#06b6d4"
          enableMouseInteraction={true}
          mouseInfluence={1.8}
        />
      </div>

      {/* ── Left shield: widens on 2xl to cover broader text column ── */}
      <div
        className="absolute inset-y-0 left-0 w-[68%] 2xl:w-[72%] z-10 pointer-events-none"
        style={{
          background: `linear-gradient(to right, ${BG} 44%, transparent)`,
        }}
      />

      {/* ── Bottom fade ──────────────────────────────────────── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-64 z-10 pointer-events-none"
        style={{ background: `linear-gradient(to top, ${BG} 15%, transparent)` }}
      />

      {/* ── Blur transition at bottom ────────────────────────── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-48 z-[11] pointer-events-none backdrop-blur-xl"
        style={{
          maskImage: "linear-gradient(to bottom, transparent, black 60%)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent, black 60%)",
        }}
      />

      {/* ── Layout ───────────────────────────────────────────── */}
      <div className="relative z-20 h-full flex items-center">
        <div className="w-full max-w-7xl 2xl:max-w-[1440px] mx-auto px-6 lg:px-12 2xl:px-20">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between lg:gap-16 2xl:gap-24">

            {/* ── TEXT COLUMN ─────────────────────────────────── */}
            {/* Wider than before: was lg:w-1/2 max-w-lg, now fills ~60% */}
            <div className="w-full lg:w-[60%] 2xl:w-[62%] flex flex-col gap-6 2xl:gap-8">

              {/* Badge */}
              <BlurIn delay={0}>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 backdrop-blur-sm px-4 py-1.5 w-fit">
                  <Sparkles className="w-3 h-3 text-white/80" />
                  <span className="text-sm 2xl:text-base font-medium text-white/80">
                    New AI Automation Ally
                  </span>
                </div>
              </BlurIn>
              <h1 className="
                text-[2.8rem]
                sm:text-5xl
                md:text-6xl
                lg:text-[3.8rem]
                xl:text-7xl
                2xl:text-[5.5rem]
                font-medium leading-[1.05] tracking-tight text-white lw-display
              ">
                <SplitText
                  text="Unlock the Power"
                  className="block"
                  startDelay={0.1}
                  wordDelay={0.07}
                />
                <SplitText
                  text="of AI for Your"
                  className="block"
                  startDelay={0.38}
                  wordDelay={0.07}
                />
                <SplitText
                  text="Business."
                  className="lw-serif italic block"
                  startDelay={0.65}
                  wordDelay={0.07}
                />
              </h1>

              {/* Subtitle */}
              <BlurIn delay={0.75}>
                <p className="text-neutral-300 text-base md:text-lg 2xl:text-xl leading-relaxed max-w-xl 2xl:max-w-2xl">
                  Our cutting-edge AI platform automates, analyzes, and
                  accelerates your workflows so you can focus on what really
                  matters.
                </p>
              </BlurIn>

              {/* CTAs */}
              <BlurIn delay={0.9}>
                <div className="flex flex-wrap gap-4">
                  <button
                    className="group inline-flex items-center gap-2 bg-white text-[#020202] rounded-full px-5 py-3 2xl:px-7 2xl:py-3.5 font-medium text-sm 2xl:text-base hover:bg-white/90 transition-colors"
                    data-cal-namespace="chat-with-hubtech"
                    data-cal-link="hubtech/demo"
                    data-cal-config='{"layout":"month_view"}'
                  >
                    Book A Free Call
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
                  </button>
                  <button className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white rounded-full px-8 py-3 2xl:px-10 2xl:py-3.5 font-medium text-sm 2xl:text-base hover:bg-white/25 transition-colors">
                    Learn now
                  </button>
                </div>
              </BlurIn>
            </div>

            {/* ── RIGHT: empty — waves fill this area ─────────── */}
            <div className="hidden lg:block lg:w-[40%] 2xl:w-[38%]" aria-hidden="true" />
          </div>
        </div>
      </div>

      {/* ── Fonts ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@500;600;700&family=DM+Serif+Display:ital@0;1&display=swap');
        .lw-display { font-family: 'Syne', sans-serif; }
        .lw-serif   { font-family: 'DM Serif Display', serif; }
      `}</style>
    </section>
  );
}

export default HeroLineWaves;
