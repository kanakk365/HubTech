"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { Check, ChevronRight } from "lucide-react";
import { tabsData } from "@/lib/projects";

/* ─── SINGLE STACKING CARD COMPONENT ─────────────────────── */

interface CardProps {
  product: typeof tabsData[0];
  index: number;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

const StackCard: React.FC<CardProps> = ({ product, index, progress, range, targetScale }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Scale down the card when it gets scrolled past its stick point
  const scale = useTransform(progress, range, [1, targetScale]);

  // Styling properties mapped by index
  const glows = [
    "radial-gradient(circle at 0% 0%, rgba(249, 115, 22, 0.25) 0%, rgba(0,0,0,0) 60%)",
    "radial-gradient(circle at 50% -20%, rgba(139, 92, 246, 0.25) 0%, rgba(0,0,0,0) 70%)",
    "radial-gradient(circle at 100% 100%, rgba(16, 185, 129, 0.25) 0%, rgba(0,0,0,0) 70%)",
    "radial-gradient(circle at 0% 100%, rgba(56, 189, 248, 0.25) 0%, rgba(0,0,0,0) 70%)",
  ];
  
  const currentGlow = glows[index % glows.length];
  
  // Get main image representing this product (using first subTab's image)
  const imageUrl = product.subTabs[0]?.imageUrl || "";

  return (
    <div ref={containerRef} className="h-screen w-full flex items-center justify-center sticky top-0">
      <motion.div
        style={{ 
          scale, 
          top: `calc(-5% + ${index * 25}px)` 
        }}
        className="w-full max-w-6xl mx-auto px-4 sm:px-6 relative"
      >
        <div 
          className="relative bg-[#050505] rounded-[2rem] border border-white/10 overflow-hidden w-full h-auto lg:h-[650px] shadow-2xl flex flex-col lg:flex-row items-stretch"
        >
          {/* Card background glow */}
          <div 
            className="absolute inset-0 pointer-events-none z-0 mix-blend-screen opacity-70"
            style={{ background: currentGlow }}
          />

          {/* Left Text Content Area */}
          <div className="flex-1 p-8 lg:p-14 flex flex-col justify-center relative z-10">
            <div className="inline-flex items-center gap-2 mb-4">
               <span className="uppercase tracking-widest text-[10px] sm:text-xs font-semibold text-white/50">{product.label}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-white leading-[1.15] mb-4 sm:mb-6 tracking-tight [text-wrap:balance]">
              {product.title}
            </h2>
            <p className="text-base sm:text-lg text-slate-400 mb-8 sm:mb-10 leading-relaxed max-w-lg [text-wrap:balance]">
              {product.description}
            </p>

            {/* Features list (mapped from subTabs) */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {product.subTabs.map((subTab, i) => (
                 <div key={i} className="flex gap-3">
                   <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-white/10 flex items-center justify-center border border-white/10">
                     <Check className="w-3 h-3 text-white" />
                   </div>
                   <div>
                     <p className="text-[15px] font-medium text-slate-100 mb-1 leading-snug">
                       {subTab.label}
                     </p>
                     <p className="text-[13px] text-slate-500 leading-snug line-clamp-2">
                       {subTab.description}
                     </p>
                   </div>
                 </div>
              ))}
            </div>

            {/* Action button */}
            <div className="mt-10 sm:mt-12">
              <button className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-6 py-3 rounded-xl font-medium text-sm transition-colors flex items-center gap-2 group w-full sm:w-auto justify-center">
                 Explore {product.label}
                 <ChevronRight className="w-4 h-4 text-white/50 group-hover:text-white group-hover:translate-x-1 transition-all" />
              </button>
            </div>
          </div>

          {/* Right Visual Image Area */}
          <div className="w-full lg:w-[45%] bg-[#0a0a0f] border-t lg:border-t-0 lg:border-l border-white/10 relative z-10 flex flex-col items-center justify-center p-6 sm:p-10 min-h-[300px] lg:min-h-0">
             {/* Render the actual product image */}
             {imageUrl && (
               <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/5 shadow-2xl">
                 <Image 
                   src={imageUrl} 
                   alt={product.title}
                   fill
                   className="object-cover transition-transform duration-700 hover:scale-105"
                   sizes="(max-width: 1024px) 100vw, 50vw"
                 />
                 <div className="absolute inset-0 shadow-[inset_0_0_50px_rgba(0,0,0,0.6)] pointer-events-none" />
               </div>
             )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

/* ─── MAIN SCROLL COMPONENT ──────────────────────────────── */

export const ProductsScrollSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress of the entire stack container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section 
      ref={containerRef}
      className="relative bg-black w-full"
    >
      {/* Intro Header Before Stack (Optional, adds nice transition) */}
      <div className="w-full text-center py-10 bg-black text-white relative z-10">
        <div className="flex flex-col items-center justify-center gap-2 ">
          <div>
            <span className="text-gray-500 text-lg">{"("}</span>
            <span className="text-lg text-gray-300">
              Efficiency, Scalability, and Agility
            </span>
            <span className="text-gray-500 text-lg">{")"}</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold leading-tight">
            <span className="text-white">Our Products</span>
          </h2>
        </div>
      </div>

      {/* The Stack */}
      <div className="w-full pb-[10vh]">
        {tabsData.map((tab, i) => {
          // Calculate target scale based on position in stack
          // Last card doesn't scale down, first card scales down the most
          const targetScale = 1 - ((tabsData.length - i) * 0.04); // slightly gentler scale down
          
          return (
            <StackCard 
              key={i}
              product={tab}
              index={i}
              progress={scrollYProgress}
              // The range over which this card scales down.
              // We map its scale from the time it hits the top until the container ends.
              range={[i * (1 / tabsData.length), 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </section>
  );
};
