"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Cpu,
  Database,
  Globe,
  Layers,
  Layout,
  Smartphone,
  Server,
  Terminal,
  Wifi,
  Workflow
} from "lucide-react";

const icons = [
  { icon: Code2, label: "Development" },
  { icon: Server, label: "Infrastructure" },
  { icon: Database, label: "Data" },
  { icon: Globe, label: "Web" },
  { icon: Cpu, label: "Processing" },
  { icon: Layout, label: "UI/UX" },
  { icon: Layers, label: "Architecture" },
  { icon: Smartphone, label: "Responsive" },
  { icon: Terminal, label: "CLI" },
  { icon: Wifi, label: "Connectivity" },
  { icon: Workflow, label: "Automation" },
];

export function TechMarquee() {
  return (
    <section className="relative w-full py-16 bg-black overflow-hidden flex flex-col items-center border-b border-white/5">
      <div className="text-center mb-10 px-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-3 tracking-tight">
          Plug into modern technologies
        </h2>
        <p className="text-neutral-400 text-sm md:text-base max-w-xl mx-auto">
          Seamlessly integrate with the best tools to extend your platform&apos;s capabilities without architectural regret.
        </p>
      </div>

      <div className="relative flex w-full max-w-7xl overflow-hidden py-4 -mx-4 md:mx-0">
        {/* Left and Right Fade Masks */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-[10%] bg-gradient-to-r from-black to-transparent"></div>
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-[10%] bg-gradient-to-l from-black to-transparent"></div>

        {/* Marquee Track */}
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity,
          }}
          className="flex whitespace-nowrap gap-6 pl-6"
        >
          {/* Double the list for seamless looping */}
          {[...icons, ...icons].map((item, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 transition-all duration-300 hover:scale-105 hover:bg-white/10 hover:border-white/20 cursor-default"
            >
              <item.icon className="h-6 w-6 text-neutral-300" />
              <span className="text-base font-medium text-neutral-300">{item.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="relative flex w-full max-w-7xl overflow-hidden py-4 mt-2 -mx-4 md:mx-0">
        {/* Left and Right Fade Masks */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-[10%] bg-gradient-to-r from-black to-transparent"></div>
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-[10%] bg-gradient-to-l from-black to-transparent"></div>

        {/* Marquee Track (Reverse) */}
        <motion.div
          initial={{ x: "-50%" }}
          animate={{ x: 0 }}
          transition={{
            duration: 35,
            ease: "linear",
            repeat: Infinity,
          }}
          className="flex whitespace-nowrap gap-6 pl-6"
        >
          {/* Shuffle/offset second track */}
          {[...icons.slice(4), ...icons.slice(0, 4), ...icons.slice(4), ...icons.slice(0, 4)].map((item, idx) => (
            <div
              key={`rev-${idx}`}
              className="flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 transition-all duration-300 hover:scale-105 hover:bg-white/10 hover:border-white/20 cursor-default"
            >
              <item.icon className="h-6 w-6 text-neutral-300" />
              <span className="text-base font-medium text-neutral-300">{item.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
