"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import {
  Brain, Database, Cloud, Settings, Bot, Activity,
  Layout, Code2, Server, Globe, Rocket, Smartphone,
  Palette, Layers, TestTube2, ShoppingBag, ClipboardList,
  FileSearch, Cog, Play, BarChart3, ShieldCheck,
} from "lucide-react";

const services = [
  { id: "ai", title: "AI Development", description: "Build intelligent systems that automate and predict outcomes." },
  { id: "web", title: "Web Development", description: "Create modern, responsive, and highly scalable web applications." },
  { id: "app", title: "App Development", description: "Deliver seamless native and cross-platform mobile experiences." },
  { id: "testing", title: "QA & Testing", description: "Ensure flawless execution with automated and manual testing." },
];

/* ─── Types ────────────────────────────────────────────── */
type GlowColor = "blue"|"yellow"|"pink"|"green"|"orange"|"cyan"|"white"|"rose"|"purple";
interface PathDef { id: string; d: string; color: GlowColor; dur: number; delay: number; dashed?: boolean }
interface NodeDef { x: number; y: number; w: number; h: number; icon: React.ReactNode; label: string; sub?: string; delay: number; round?: boolean }

/* ─── Glow Gradient Stops ──────────────────────────────── */
const GLOW: Record<GlowColor, [string, string]> = {
  blue: ["#00E8ED", "#0088FF"], yellow: ["#FFD800", "#FFD800"],
  pink: ["#FF008B", "#830CD1"], green: ["#22c55e", "#22c55e"],
  orange: ["#f97316", "#f97316"], cyan: ["#06b6d4", "#06b6d4"],
  white: ["#ffffff", "#ffffff"], rose: ["#f43f5e", "#f43f5e"],
  purple: ["#a855f7", "#7c3aed"],
};

/* ─── SVG Defs (rendered per-flow SVG) ─────────────────── */
const FlowDefs = ({ fid, paths }: { fid: string; paths: PathDef[] }) => (
  <defs>
    {/* Glow radial gradients */}
    {(Object.entries(GLOW) as [GlowColor, [string,string]][]).map(([name, [c1, c2]]) => (
      <radialGradient key={name} id={`${fid}-g-${name}`} fx="1">
        <stop offset="0%" stopColor={c1} />
        <stop offset="50%" stopColor={c2} />
        <stop offset="100%" stopColor="transparent" />
      </radialGradient>
    ))}
    {/* Path masks */}
    {paths.map(p => (
      <mask key={p.id} id={`${fid}-m-${p.id}`}>
        <path d={p.d} strokeWidth="3" stroke="white" fill="none" />
      </mask>
    ))}
    {/* Endpoint marker (small dark circle) */}
    <marker id={`${fid}-dot`} viewBox="0 0 10 10" refX="5" refY="5" markerWidth="10" markerHeight="10">
      <circle cx="5" cy="5" r="2.5" fill="#111" stroke="#333" strokeWidth="0.5">
        <animate attributeName="r" values="0;3;2.5" dur="0.5s" fill="freeze" />
      </circle>
    </marker>
    {/* Arrow marker */}
    <marker id={`${fid}-arr`} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#d8b4fe" opacity="0.8" />
    </marker>
    {/* Line gradient */}
    <linearGradient id={`${fid}-lg`} x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stopColor="#a855f7" stopOpacity="0.3" />
      <stop offset="50%" stopColor="#d8b4fe" stopOpacity="0.6" />
      <stop offset="100%" stopColor="#a855f7" stopOpacity="0.3" />
    </linearGradient>
    {/* Pin gradient */}
    <linearGradient id={`${fid}-pin`} x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="#4F4F4F" /><stop offset="60%" stopColor="#121214" />
    </linearGradient>
    {/* Hub shadow */}
    <filter id={`${fid}-sh`} x="-50%" y="-50%" width="200%" height="200%">
      <feDropShadow dx="1.5" dy="1.5" stdDeviation="1" floodColor="black" floodOpacity="0.15" />
    </filter>
    {/* Text shimmer */}
    <linearGradient id={`${fid}-ts`} x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stopColor="#666"><animate attributeName="offset" values="-2;-1;0" dur="5s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/></stop>
      <stop offset="25%" stopColor="white"><animate attributeName="offset" values="-1;0;1" dur="5s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/></stop>
      <stop offset="50%" stopColor="#666"><animate attributeName="offset" values="0;1;2" dur="5s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/></stop>
    </linearGradient>
  </defs>
);

/* ─── Rendered paths (draw-in + glow trails) ───────────── */
const FlowPaths = ({ fid, paths }: { fid: string; paths: PathDef[] }) => (
  <g className="text-[#888]">
    {/* Visible lines with draw-in animation */}
    {paths.map(p => (
      <path key={`l-${p.id}`} d={p.d}
        stroke={p.dashed ? "#555" : `url(#${fid}-lg)`}
        strokeWidth={p.dashed ? "1" : "0.5"} fill="none"
        strokeDasharray={p.dashed ? "4 4" : "100 100"}
        pathLength={p.dashed ? undefined : 100}
        markerStart={p.dashed ? undefined : `url(#${fid}-dot)`}
        markerEnd={`url(#${fid}-arr)`}
      >
        {!p.dashed && (
          <animate attributeName="stroke-dashoffset" from="100" to="0"
            dur="1s" begin={`${p.delay}s`} fill="freeze"
            calcMode="spline" keySplines="0.25,0.1,0.5,1" keyTimes="0;1" />
        )}
      </path>
    ))}
    {/* Glow trails (masked radial-gradient circles with animateMotion) */}
    {paths.filter(p => !p.dashed).map(p => (
      <g key={`g-${p.id}`} mask={`url(#${fid}-m-${p.id})`}>
        <circle r="18" fill={`url(#${fid}-g-${p.color})`}>
          <animateMotion dur={`${p.dur}s`} repeatCount="indefinite" path={p.d} begin={`${p.delay + 1}s`} />
        </circle>
      </g>
    ))}
  </g>
);

/* ─── Node (foreignObject with spring entrance) ────────── */
const N = ({ x, y, w, h, icon, label, sub, delay = 0, round }: NodeDef) => (
  <foreignObject x={x} y={y} width={w} height={h}>
    <motion.div initial={{ opacity: 0, scale: 0.7, y: 12 }} animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 22, delay }}
      className={`w-full h-full flex flex-col items-center justify-center ${round ? "" : "bg-[#111116] border border-white/10 rounded-xl shadow-lg"} p-3`}>
      {round ? (<>
        <div className="bg-[#111116] border border-white/10 w-16 h-16 rounded-full flex items-center justify-center mb-2 shadow-lg shadow-purple-900/20">{icon}</div>
        <p className="bg-[#020202] px-2 text-white text-[11px] font-medium -mt-2 border border-white/5 rounded text-center leading-tight py-1">{label}</p>
      </>) : (<>
        <div className="mb-2">{icon}</div>
        <p className="text-white text-xs font-medium text-center leading-tight">{label}</p>
        {sub && <p className="text-white/40 text-[10px] mt-0.5 text-center">{sub}</p>}
      </>)}
    </motion.div>
  </foreignObject>
);

/* ─── Central Hub (CPU-style box with pins) ────────────── */
const Hub = ({ x, y, w = 140, h = 60, label, sub, fid, icon }: { x: number; y: number; w?: number; h?: number; label: string; sub?: string; fid: string; icon?: React.ReactNode }) => (
  <foreignObject x={x - 10} y={y - 10} width={w + 20} height={h + 20}>
    <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.3 }}
      className="w-full h-full flex items-center justify-center">
      <div className="relative">
        {/* Connection pins */}
        <div className="absolute -top-1.5 left-1/4 w-1 h-2 bg-gradient-to-b from-[#4F4F4F] to-[#121214] rounded-sm" />
        <div className="absolute -top-1.5 left-3/4 w-1 h-2 bg-gradient-to-b from-[#4F4F4F] to-[#121214] rounded-sm" />
        <div className="absolute -bottom-1.5 left-1/4 w-1 h-2 bg-gradient-to-b from-[#4F4F4F] to-[#121214] rounded-sm" />
        <div className="absolute -bottom-1.5 left-3/4 w-1 h-2 bg-gradient-to-b from-[#4F4F4F] to-[#121214] rounded-sm" />
        <div className="absolute top-1/4 -left-1.5 h-1 w-2 bg-gradient-to-r from-[#4F4F4F] to-[#121214] rounded-sm" />
        <div className="absolute top-3/4 -left-1.5 h-1 w-2 bg-gradient-to-r from-[#4F4F4F] to-[#121214] rounded-sm" />
        <div className="absolute top-1/4 -right-1.5 h-1 w-2 bg-gradient-to-l from-[#4F4F4F] to-[#121214] rounded-sm" />
        <div className="absolute top-3/4 -right-1.5 h-1 w-2 bg-gradient-to-l from-[#4F4F4F] to-[#121214] rounded-sm" />
        {/* Body */}
        <div className="bg-[#111116] border border-white/15 rounded-lg px-5 py-3 flex items-center gap-3 shadow-xl shadow-purple-900/10">
          {icon && <div className="p-1.5 bg-white/5 rounded-md border border-white/5">{icon}</div>}
          <div>
            <p className="text-white text-sm font-semibold tracking-wide">{label}</p>
            {sub && <p className="text-white/40 text-[10px]">{sub}</p>}
          </div>
        </div>
      </div>
    </motion.div>
  </foreignObject>
);

/* ─── Background dots ──────────────────────────────────── */
const BgDots = () => (
  <div className="absolute inset-0 opacity-20 pointer-events-none"
    style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "24px 24px",
      maskImage: "radial-gradient(ellipse at center, black 30%, transparent 70%)",
      WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 70%)" }} />
);

/* ─── Canvas wrapper ───────────────────────────────────── */
const Canvas = ({ children, fid, paths }: { children: React.ReactNode; fid: string; paths: PathDef[] }) => (
  <div className="relative w-full h-[550px] flex items-center justify-center p-4">
    <BgDots />
    <svg className="w-full h-full max-h-[500px]" viewBox="0 0 1050 600" preserveAspectRatio="xMidYMid meet">
      <FlowDefs fid={fid} paths={paths} />
      <FlowPaths fid={fid} paths={paths} />
      {children}
    </svg>
  </div>
);

/* ══════════════════════════════════════════════════════════
   AI FLOW
   ══════════════════════════════════════════════════════════ */
const aiPaths: PathDef[] = [
  { id: "1", d: "M 190 120 L 280 120", color: "blue", dur: 2.5, delay: 0.2 },
  { id: "2", d: "M 450 120 h 20 q 20 0 20 20 v 30 q 0 20 -20 20 h -240 q -20 0 -20 20 v 50 q 0 20 20 20 h 50", color: "yellow", dur: 4.5, delay: 0.5 },
  { id: "3", d: "M 450 300 L 530 300", color: "pink", dur: 2.5, delay: 1.2 },
  { id: "4", d: "M 760 300 L 830 300", color: "green", dur: 2.5, delay: 1.6 },
  { id: "5", d: "M 645 370 L 675 440", color: "orange", dur: 2, delay: 2, dashed: true },
];
const AIFlow = () => (
  <Canvas fid="ai" paths={aiPaths}>
    <N x={30} y={70} w={160} h={100} icon={<Database className="w-7 h-7 text-indigo-400" strokeWidth={1.5}/>} label="Data Audit & Prep" sub="Collect & Cleanse" delay={0} />
    <N x={290} y={70} w={160} h={100} icon={<Brain className="w-7 h-7 text-orange-400" strokeWidth={1.5}/>} label={"Model Selection\n& Training"} delay={0.15} />
    <N x={290} y={250} w={160} h={100} icon={<Activity className="w-7 h-7 text-purple-400" strokeWidth={1.5}/>} label={"Fine-tuning &\nOptimization"} delay={0.4} />
    <Hub x={550} y={260} w={200} h={70} label="AI Integration" sub="API & System Merge" fid="ai" icon={<Bot className="w-5 h-5 text-white" />} />
    <N x={840} y={250} w={160} h={100} icon={<Cloud className="w-7 h-7 text-emerald-400" strokeWidth={1.5}/>} label="Deployment" sub="Scale & Monitor" delay={0.8} />
    <N x={600} y={440} w={140} h={120} icon={<Settings className="w-8 h-8 text-white/70 animate-[spin_8s_linear_infinite]" strokeWidth={1.5}/>} label={"Continuous\nLearning"} round delay={1} />
  </Canvas>
);

/* ══════════════════════════════════════════════════════════
   WEB FLOW
   ══════════════════════════════════════════════════════════ */
const webPaths: PathDef[] = [
  { id: "1", d: "M 190 180 L 290 180", color: "blue", dur: 2.5, delay: 0.2 },
  { id: "2", d: "M 460 180 L 560 180", color: "cyan", dur: 2.5, delay: 0.5 },
  { id: "3", d: "M 730 180 L 830 180", color: "yellow", dur: 2.5, delay: 0.8 },
  { id: "4", d: "M 650 250 v 40 q 0 20 -20 20 h -180 q -20 0 -20 20 v 40 q 0 20 20 20 h 20", color: "pink", dur: 4, delay: 1.1 },
  { id: "5", d: "M 630 390 L 730 390", color: "green", dur: 2.5, delay: 1.8 },
  { id: "6", d: "M 230 400 L 450 400", color: "white", dur: 3, delay: 2, dashed: true },
];
const WebFlow = () => (
  <Canvas fid="web" paths={webPaths}>
    <N x={30} y={130} w={160} h={100} icon={<Palette className="w-7 h-7 text-pink-400" strokeWidth={1.5}/>} label="UI/UX Design" sub="Wireframe & Prototype" delay={0} />
    <N x={300} y={130} w={160} h={100} icon={<Code2 className="w-7 h-7 text-cyan-400" strokeWidth={1.5}/>} label="Frontend Dev" sub="React / Next.js" delay={0.15} />
    <Hub x={570} y={140} w={160} h={70} label="Backend Dev" sub="APIs & Logic" fid="web" icon={<Server className="w-5 h-5 text-amber-400" />} />
    <N x={840} y={130} w={160} h={100} icon={<Database className="w-7 h-7 text-blue-400" strokeWidth={1.5}/>} label="Database" sub="Schema & ORM" delay={0.45} />
    <N x={460} y={340} w={170} h={100} icon={<ShieldCheck className="w-7 h-7 text-orange-400" strokeWidth={1.5}/>} label="Testing & QA" sub="Unit & Integration" delay={0.7} />
    <N x={740} y={340} w={170} h={100} icon={<Rocket className="w-7 h-7 text-emerald-400" strokeWidth={1.5}/>} label="Launch" sub="Deploy & Monitor" delay={0.9} />
    <N x={90} y={340} w={140} h={120} icon={<Globe className="w-8 h-8 text-white/70 animate-[spin_12s_linear_infinite]" strokeWidth={1.5}/>} label={"Global\nCDN"} round delay={1.1} />
  </Canvas>
);

/* ══════════════════════════════════════════════════════════
   APP FLOW
   ══════════════════════════════════════════════════════════ */
const appPaths: PathDef[] = [
  { id: "1", d: "M 195 300 L 290 300", color: "blue", dur: 2.5, delay: 0.2 },
  { id: "2", d: "M 460 300 h 30 q 20 0 20 -20 v -100 q 0 -20 20 -20 h 30", color: "cyan", dur: 3.5, delay: 0.6 },
  { id: "3", d: "M 460 300 h 30 q 20 0 20 20 v 100 q 0 20 20 20 h 30", color: "green", dur: 3.5, delay: 0.6 },
  { id: "4", d: "M 750 180 h 30 q 20 0 20 20 v 70 q 0 20 20 20 h 10", color: "yellow", dur: 3, delay: 1.3 },
  { id: "5", d: "M 750 440 h 30 q 20 0 20 -20 v -70 q 0 -20 20 -20 h 10", color: "orange", dur: 3, delay: 1.3 },
  { id: "6", d: "M 530 145 L 585 165", color: "purple", dur: 2, delay: 2, dashed: true },
];
const AppFlow = () => (
  <Canvas fid="app" paths={appPaths}>
    <N x={30} y={250} w={165} h={100} icon={<Layout className="w-7 h-7 text-violet-400" strokeWidth={1.5}/>} label="Wireframing" sub="Layout & Flow" delay={0} />
    <N x={300} y={250} w={160} h={100} icon={<Palette className="w-7 h-7 text-pink-400" strokeWidth={1.5}/>} label="UI/UX Design" sub="Figma & Prototype" delay={0.15} />
    <N x={590} y={130} w={160} h={100} icon={<Smartphone className="w-7 h-7 text-sky-400" strokeWidth={1.5}/>} label="iOS Development" sub="Swift / SwiftUI" delay={0.4} />
    <N x={590} y={390} w={160} h={100} icon={<Smartphone className="w-7 h-7 text-green-400" strokeWidth={1.5}/>} label="Android Dev" sub="Kotlin / Compose" delay={0.4} />
    <Hub x={840} y={260} w={170} h={70} label="Store Release" sub="App Store & Play Store" fid="app" icon={<ShoppingBag className="w-5 h-5 text-emerald-400" />} />
    <N x={460} y={50} w={140} h={120} icon={<Layers className="w-8 h-8 text-white/70 animate-pulse" strokeWidth={1.5}/>} label={"Cross\nPlatform"} round delay={0.9} />
  </Canvas>
);

/* ══════════════════════════════════════════════════════════
   QA & TESTING FLOW
   ══════════════════════════════════════════════════════════ */
const testPaths: PathDef[] = [
  { id: "1", d: "M 190 180 L 290 180", color: "blue", dur: 2.5, delay: 0.2 },
  { id: "2", d: "M 460 180 L 560 180", color: "cyan", dur: 2.5, delay: 0.5 },
  { id: "3", d: "M 730 180 L 830 180", color: "yellow", dur: 2.5, delay: 0.8 },
  { id: "4", d: "M 920 250 v 40 q 0 20 -20 20 h -120 q -20 0 -20 20 v 20 q 0 20 20 20 h 10", color: "rose", dur: 3.5, delay: 1.2 },
  { id: "5", d: "M 460 180 h -60 q -20 0 -20 20 v 100 q 0 20 20 20 h 30", color: "pink", dur: 3, delay: 1.5, dashed: true },
  { id: "6", d: "M 440 340 L 260 400", color: "white", dur: 2.5, delay: 2.2, dashed: true },
];
const TestingFlow = () => (
  <Canvas fid="test" paths={testPaths}>
    <N x={30} y={130} w={160} h={100} icon={<ClipboardList className="w-7 h-7 text-amber-400" strokeWidth={1.5}/>} label="Req. Analysis" sub="Scope & Coverage" delay={0} />
    <N x={300} y={130} w={160} h={100} icon={<FileSearch className="w-7 h-7 text-sky-400" strokeWidth={1.5}/>} label="Test Planning" sub="Cases & Suites" delay={0.15} />
    <Hub x={570} y={140} w={160} h={70} label="Automation" sub="CI/CD Pipeline" fid="test" icon={<Cog className="w-5 h-5 text-purple-400 animate-[spin_8s_linear_infinite]" />} />
    <N x={840} y={130} w={160} h={100} icon={<Play className="w-7 h-7 text-green-400" strokeWidth={1.5}/>} label="Execution" sub="Run & Validate" delay={0.45} />
    <N x={440} y={280} w={160} h={100} icon={<TestTube2 className="w-7 h-7 text-teal-400" strokeWidth={1.5}/>} label="Manual Testing" sub="Exploratory & UAT" delay={0.7} />
    <Hub x={800} y={350} w={170} h={70} label="Reports" sub="Metrics & Insights" fid="test" icon={<BarChart3 className="w-5 h-5 text-emerald-400" />} />
    <N x={120} y={330} w={140} h={120} icon={<ShieldCheck className="w-8 h-8 text-white/70 animate-pulse" strokeWidth={1.5}/>} label={"Quality\nGate"} round delay={1} />
  </Canvas>
);

/* ─── Flow map ─────────────────────────────────────────── */
const flows: Record<string, React.FC> = { ai: AIFlow, web: WebFlow, app: AppFlow, testing: TestingFlow };

/* ══════════════════════════════════════════════════════════
   MAIN SECTION
   ══════════════════════════════════════════════════════════ */
export const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState("ai");
  const Flow = flows[activeTab];

  return (
    <section className="relative py-24 bg-[#020202] text-white border-y border-white/5 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col max-w-3xl mx-auto items-center justify-center text-center mb-20">
          <div className="mb-5">
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="div"
              className="text-[#D1AAD7] px-4 py-2 tracking-[3px] text-xs md:px-5 md:py-2 lg:text-xs uppercase"
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
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
          {/* Sidebar */}
          <div className="w-full lg:w-[350px] flex flex-col relative shrink-0">
            <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-white/10" />
            <div className="py-2">
              {services.map(s => {
                const active = activeTab === s.id;
                return (
                  <button key={s.id} onClick={() => setActiveTab(s.id)}
                    className={`relative w-full flex flex-col text-left py-6 px-8 transition-all duration-300 group outline-none ${active ? "" : "hover:bg-white/[0.02]"}`}>
                    {active && <motion.div layoutId="activeBg" className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-purple-500/5 to-transparent rounded-r-xl pointer-events-none" />}
                    {active && <motion.div layoutId="activeTabIndicator" className="absolute left-[-1px] top-0 bottom-0 w-[3px] bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.7)]" transition={{ type: "spring", bounce: 0.2, duration: 0.6 }} />}
                    <h3 className={`relative z-10 font-medium text-xl mb-2 transition-colors duration-300 ${active ? "text-white" : "text-slate-400 group-hover:text-slate-200"}`}>{s.title}</h3>
                    <p className={`relative z-10 text-sm leading-relaxed transition-colors duration-300 ${active ? "text-purple-100/70" : "text-slate-600 group-hover:text-slate-500"}`}>{s.description}</p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Flow Area */}
          <div className="flex-1 w-full min-w-0 h-full">
            <AnimatePresence mode="wait">
              <motion.div key={activeTab}
                initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                exit={{ opacity: 0, filter: "blur(10px)", y: -10 }}
                transition={{ duration: 0.4, ease: "easeOut" }}>
                {Flow && <Flow />}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
