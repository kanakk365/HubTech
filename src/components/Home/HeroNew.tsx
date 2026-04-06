"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";

/* ─── CONSTANTS ─────────────────────────────────────────── */
const BG_COLOR = "#070612";
const HLS_SRC =
  "https://stream.mux.com/s8pMcOvMQXc4GD6AX4e1o01xFogFxipmuKltNfSYza0200.m3u8";

/* ─── BLUR-IN ANIMATION ────────────────────────────────── */
interface BlurInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

const BlurIn: React.FC<BlurInProps> = ({
  children,
  delay = 0,
  duration = 0.6,
  className,
}) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
    animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
    transition={{ duration, delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

/* ─── SPLIT-TEXT ANIMATION ──────────────────────────────── */
interface SplitTextProps {
  text: string;
  className?: string;
  wordDelay?: number;
  startDelay?: number;
  duration?: number;
}

const SplitText: React.FC<SplitTextProps> = ({
  text,
  className,
  wordDelay = 0.08,
  startDelay = 0,
  duration = 0.6,
}) => {
  const words = text.split(" ");
  return (
    <span className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-[0.25em]"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration,
            delay: startDelay + i * wordDelay,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
};

/* ─── HLS VIDEO BACKGROUND ──────────────────────────────── */
const HLSVideo: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const loadHLS = async () => {
      // Native HLS support (Safari)
      if (video.canPlayType("application/vnd.apple.mpegurl")) {
        video.src = HLS_SRC;
        video.play().catch(() => {});
        return;
      }

      // hls.js for other browsers
      const { default: Hls } = await import("hls.js");
      if (Hls.isSupported()) {
        const hls = new Hls({ startLevel: -1 });
        hls.loadSource(HLS_SRC);
        hls.attachMedia(video);
        hls.on(Hls.Events.MANIFEST_PARSED, () => {
          video.play().catch(() => {});
        });

        return () => hls.destroy();
      }
    };

    const cleanup = loadHLS();
    return () => {
      cleanup?.then((fn) => fn?.());
    };
  }, []);

  return (
    <video
      ref={videoRef}
      autoPlay
      loop
      muted
      playsInline
      className="absolute inset-0 h-full object-cover z-0"
      style={{
        marginLeft: "200px",
        width: "calc(100% - 200px)",
        transform: "scale(1.2)",
        transformOrigin: "left center",
      }}
    />
  );
};

/* ─── MAIN HERO SECTION ─────────────────────────────────── */
export const HeroSectionNew: React.FC = () => {
  return (
    <section
      className="relative h-screen w-full overflow-hidden flex items-center"
      style={{ backgroundColor: BG_COLOR }}
    >
      {/* ── Video Background ── */}
      <HLSVideo />

      {/* ── Bottom fade gradient ── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 z-10 pointer-events-none"
        style={{
          background: `linear-gradient(to top, ${BG_COLOR}, transparent)`,
        }}
      />

      {/* ── Left fade gradient ── */}
      <div
        className="absolute inset-y-0 left-0 w-[55%] z-10 pointer-events-none"
        style={{
          background: `linear-gradient(to right, ${BG_COLOR} 30%, transparent)`,
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col gap-12 max-w-2xl">

          {/* Badge + Heading + Subtitle group */}
          <div className="flex flex-col gap-6">

            {/* Badge */}
            <BlurIn delay={0} duration={0.6}>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 backdrop-blur-sm px-4 py-1.5 w-fit">
                <Sparkles className="w-3 h-3 text-white/80" />
                <span className="text-sm font-medium text-white/80">
                  New AI Automation Ally
                </span>
              </div>
            </BlurIn>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight lg:leading-[1.2] text-white">
              <SplitText
                text="Unlock the Power of AI"
                className="block"
                startDelay={0.1}
              />
              <span className="inline">
                <SplitText text="for Your" startDelay={0.5} />
                {" "}
                <SplitText
                  text="Business."
                  startDelay={0.66}
                  className="font-serif italic"
                />
              </span>
            </h1>

            {/* Subtitle */}
            <BlurIn delay={0.4} duration={0.6}>
              <p className="text-white/80 text-lg font-normal leading-relaxed max-w-xl">
                Our cutting-edge AI platform automates, analyzes, and
                accelerates your workflows so you can focus on what really
                matters.
              </p>
            </BlurIn>
          </div>

          {/* CTA Buttons */}
          <BlurIn delay={0.6} duration={0.6}>
            <div className="flex flex-wrap gap-4">
              {/* Primary */}
              <Link href="/book-call">
                <button className="inline-flex items-center gap-2 bg-white text-[#070612] rounded-full px-5 py-3 font-medium text-sm hover:bg-white/90 transition-colors">
                  Book A Free Call
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>

              {/* Secondary */}
              <button className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white rounded-full px-8 py-3 font-medium text-sm hover:bg-white/25 transition-colors">
                Learn now
              </button>
            </div>
          </BlurIn>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionNew;
