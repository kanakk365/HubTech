"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Coins,
  Zap,
  Layers,
  Atom,
  BarChart3,
  Users,
  Settings,
} from "lucide-react";
import { tabsData } from "../../lib/projects";
import { ShineBorder } from "../ui/shine-border";

// import type { TabData } from "../../lib/projects";

export function Projects() {
  const [activeTab, setActiveTab] = useState("billing");
  const [activeSubTab, setActiveSubTab] = useState<Record<string, string>>({
    billing: "tournaments",
    charging: "streaming",
    catalog: "recruitment",
    events: "profiles",
  });

  const activeTabData =
    tabsData.find((tab) => tab.id === activeTab) || tabsData[0];
  const activeSubTabData =
    activeTabData.subTabs.find(
      (subTab) => subTab.id === activeSubTab[activeTab]
    ) || activeTabData.subTabs[0];

  // Icon mapping for dynamic rendering
  const iconMap: Record<
    string,
    React.ComponentType<React.SVGProps<SVGSVGElement>>
  > = {
    Coins,
    Zap,
    Layers,
    Atom,
    BarChart3,
    Users,
    Settings,
  };

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
  };

  const handleSubTabChange = (subTabId: string) => {
    setActiveSubTab((prev) => ({
      ...prev,
      [activeTab]: subTabId,
    }));
  };

  return (
    <div className="min-h-screen bg-black text-white py-10 pb-0 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex flex-col items-center justify-center gap-2 mb-6">
            <div>
              <span className="text-gray-500 text-lg">{"("}</span>
              <span className="text-lg text-gray-300">
                Efficiency, Scalability, and Agility
              </span>
              <span className="text-gray-500 text-lg">{")"}</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              <span className="text-white">Our Products</span>
            </h2>
          </div>

          {/* Main Tabs */}
          <div
            className="flex flex-col sm:flex-row gap-2 mb-1 rounded-2xl p-2 max-w-5xl mx-auto"
            style={{
              boxShadow:
                "rgba(34, 42, 53, 0.12) 0px 0px 24px, rgba(0, 0, 0, 0.10) 0px 1px 1px, rgba(34, 42, 53, 0.08) 0px 0px 0px 1px, rgba(34, 42, 53, 0.16) 0px 0px 4px, rgba(47, 48, 55, 0.10) 0px 16px 68px, rgba(255, 255, 255, 0.15) 0px 1px 0px inset"
            }}
          >
            {tabsData.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`
                relative flex items-center gap-3 px-4 sm:px-6 py-4 rounded-xl transition-all duration-500 ease-out
                ${
                  activeTab === tab.id
                    ? "flex-[2] "
                    : "flex-1 "
                }
              `}
              >
                {activeTab === tab.id && (
                  <ShineBorder
                    shineColor={["#d9d9d9"]}
                    borderWidth={1}
                    duration={14}
                    className="rounded-xl"
                  />
                )}
                <div
                  className={`
                p-2 rounded-lg ${
                  tab.color
                } text-gray-800 transition-transform duration-300
                ${activeTab === tab.id ? "scale-110" : ""}
              `}
                >
                  {(() => {
                    const Icon = iconMap[tab.icon];
                    return Icon ? <Icon className="w-6 h-6" /> : null;
                  })()}
                </div>
                <div className="flex flex-col items-start">
                  <span
                    className={`
                    font-semibold transition-all duration-300
                    ${
                      activeTab === tab.id
                        ? "text-white text-lg"
                        : "text-gray-300"
                    }
                  `}
                  >
                    {tab.label}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Main Content Section */}
          <div className=" text-left max-w-5xl mx-auto flex flex-col lg:flex-row xl:h-[700px] gap-10 rounded-2xl">
            {/* Left side - Sub-tabs Navigation */}
            <div className="relative z-10 w-full lg:w-5/12 lg:min-w-[400px] flex flex-col h-full">
              <div className="flex-1">
                <div className="lg:absolute w-full lg:-translate-y-1/2 lg:top-1/2">
                  <div className="mb-6 lg:mt-0 mt-6">
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-white">
                      {activeTabData.title}
                    </h3>
                  </div>
                  {/* Mobile: Horizontal scroll for sub-tabs */}
                  <div className="lg:hidden mb-6">
                    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                      {activeTabData.subTabs.map((subTab) => (
                        <button
                          key={subTab.id}
                          onClick={() => handleSubTabChange(subTab.id)}
                          className={`
                            flex-shrink-0 px-4 py-2 rounded-lg transition-all duration-300 border
                            ${
                              activeSubTab[activeTab] === subTab.id
                                ? " border-gray-600 text-white"
                                : " border-gray-700/50 text-gray-300 "
                            }
                          `}
                          style={{ boxShadow: "none" }}
                        >
                          <span className="text-sm font-medium whitespace-nowrap">
                            {subTab.label}
                          </span>
                        </button>
                      ))}
                    </div>
                    {/* Show active sub-tab description on mobile */}
                    <div className="mt-4">
                      <h4 className="text-lg font-semibold text-white mb-2">
                        {activeSubTabData.label}
                      </h4>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {activeSubTabData.description}
                      </p>
                    </div>
                  </div>
                  {/* Desktop: Vertical sub-tabs */}
                  <div className="hidden lg:block">
                    {activeTabData.subTabs.map((subTab) => (
                      <div
                        key={subTab.id}
                        className={`border-b group last:border-transparent border-white/10 hover:border-white/30 transition-all duration-300 cursor-pointer ${
                          activeSubTab[activeTab] === subTab.id
                            ? "opacity-100 border-white/50"
                            : "opacity-70 hover:opacity-100"
                        }`}
                        onMouseEnter={() => handleSubTabChange(subTab.id)}
                      >
                        <h4 className="w-full pt-6 pb-2 text-xl font-semibold leading-8 text-left text-white group-hover:text-gray-200 transition-colors">
                          {subTab.label}
                        </h4>
                        <p className="pb-6 text-gray-300 transition-colors group-hover:text-gray-200 leading-relaxed">
                          {subTab.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
            </div>

            {/* Right side - Dashboard Content */}
            <div className="relative w-full lg:w-7/12 h-full ">
              <div className="w-full h-full flex justify-center lg:justify-end items-center">
                <div className="backdrop-blur-sm rounded-xl p-4 lg:p-2 shadow-[0_-2px_4px_rgba(255,255,255,0.1),0_-8px_16px_rgba(255,255,255,0.05),0_-16px_32px_rgba(255,255,255,0.02)] w-full max-w-2xl transition-all duration-500 flex items-center justify-center overflow-hidden">
                  {activeSubTabData.imageUrl && (
                    <div className="relative w-full h-full min-h-[300px] lg:min-h-[400px]">
                      <Image
                        src={activeSubTabData.imageUrl}
                        alt={`${activeSubTabData.label} - ${activeTabData.title}`}
                        fill
                        className="object-cover rounded-xl"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
