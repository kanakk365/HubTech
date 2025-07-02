"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import Link from "next/link";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // Add throttling for smoother performance
    let ticking = false;
    const smoothScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", smoothScroll);
    return () => window.removeEventListener("scroll", smoothScroll);
  }, []);

  

  const Logo = () => (
    <Link
      href="/"
      className="font-normal flex space-x-2 items-center text-sm mr-4 text-black px-2 py-1 relative z-20"
    >
      <span className="font-medium text-black dark:text-white">HubTech</span>
    </Link>
  );

  const NavLinks = () => (
    <div className="lg:flex flex-row flex-1 absolute inset-0 hidden items-center justify-center space-x-2 lg:space-x-2 text-sm text-zinc-600 font-medium hover:text-zinc-800 transition duration-300">
      <Link
        href="/#features"
        className="text-neutral-600 dark:text-neutral-300 relative px-4 py-2 hover:text-neutral-800 dark:hover:text-neutral-100 transition-all duration-300 ease-out hover:scale-105"
      >
        <span className="relative z-20">Features</span>
      </Link>
      <Link
        href="/#pricing"
        className="text-neutral-600 dark:text-neutral-300 relative px-4 py-2 hover:text-neutral-800 dark:hover:text-neutral-100 transition-all duration-300 ease-out hover:scale-105"
      >
        <span className="relative z-20">Pricing</span>
      </Link>
      <Link
        href="/#contact"
        className="text-neutral-600 dark:text-neutral-300 relative px-4 py-2 hover:text-neutral-800 dark:hover:text-neutral-100 transition-all duration-300 ease-out hover:scale-105"
      >
        <span className="relative z-20">Contact</span>
      </Link>
    </div>
  );

  const ActionButtons = () => (
    <div className="flex items-center gap-4">
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        className="hidden md:block"
      >
        <Link
          href="/login"
          className="px-4 py-2 rounded-md text-black text-sm font-bold relative cursor-pointer hover:-translate-y-1 transition-all duration-300 ease-out text-center bg-transparent shadow-none dark:text-white hover:scale-105"
        >
          Login
        </Link>
      </motion.div>
      <button
        className="px-3 py-2 rounded-md bg-white text-black text-sm font-bold relative cursor-pointer hover:-translate-y-1 transition-all duration-300 ease-out text-center shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] hidden md:block hover:scale-105 hover:shadow-[0_0_32px_rgba(34,_42,_53,_0.12),_0_2px_4px_rgba(0,_0,_0,_0.1),_0_0_0_1px_rgba(34,_42,_53,_0.08),_0_0_8px_rgba(34,_42,_53,_0.16),_0_24px_80px_rgba(47,_48,_55,_0.1),_0_2px_0_rgba(255,_255,_255,_0.15)_inset]"
        data-cal-namespace="chat-with-hubtech"
        data-cal-link="hubtech/demo"
        data-cal-config='{"layout":"month_view"}'
      >
        Book a call
      </button>
    </div>
  );

  const MobileMenuButton = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="tabler-icon tabler-icon-menu-2 text-black dark:text-white"
    >
      <path d="M4 6l16 0"></path>
      <path d="M4 12l16 0"></path>
      <path d="M4 18l16 0"></path>
    </svg>
  );

  return (
    <div className=" mt-2 w-full fixed top-0 inset-x-0 z-50">
      {/* Desktop Navbar */}
      <motion.div
        className="hidden lg:flex flex-row self-start items-center justify-between py-2 max-w-7xl mx-auto px-4 rounded-full relative z-[60] w-full"
        style={{
          minWidth: "800px",
          willChange: "auto",
        }}
        animate={{
          backgroundColor: "transparent",
          backdropFilter: isScrolled ? "blur(10px)" : "blur(0px)",
          boxShadow: isScrolled
            ? "rgba(34, 42, 53, 0.12) 0px 0px 24px, rgba(0, 0, 0, 0.10) 0px 1px 1px, rgba(34, 42, 53, 0.08) 0px 0px 0px 1px, rgba(34, 42, 53, 0.16) 0px 0px 4px, rgba(47, 48, 55, 0.10) 0px 16px 68px, rgba(255, 255, 255, 0.15) 0px 1px 0px inset"
            : "rgba(34, 42, 53, 0.12) 0px 0px 0px, rgba(0, 0, 0, 0.10) 0px 0px 0px, rgba(34, 42, 53, 0.08) 0px 0px 0px 0px, rgba(34, 42, 53, 0.16) 0px 0px 0px, rgba(47, 48, 55, 0.10) 0px 0px 0px, rgba(255, 255, 255, 0.15) 0px 0px 0px inset",
          transform: isScrolled ? "translateY(20px)" : "none",
          width: isScrolled ? "40%" : "100%",
        }}
        transition={{
          duration: 0.6,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      >
        <Logo />
        <NavLinks />
        <ActionButtons />
      </motion.div>

      {/* Mobile Navbar */}
      <motion.div
        className=" flex relative flex-col lg:hidden w-full justify-between items-center max-w-[calc(100vw-2rem)] mx-auto px-0 py-2 z-50"
        style={{
          willChange: "auto",
          borderRadius: "2rem",
        }}
        animate={{
          backgroundColor: isScrolled
            ? "rgba(255, 255, 255, 0.8)"
            : "transparent",
          backdropFilter: isScrolled ? "blur(10px)" : "blur(0px)",
          boxShadow: isScrolled
            ? "rgba(34, 42, 53, 0.06) 0px 0px 24px, rgba(0, 0, 0, 0.05) 0px 1px 1px, rgba(34, 42, 53, 0.04) 0px 0px 0px 1px, rgba(34, 42, 53, 0.08) 0px 0px 4px, rgba(47, 48, 55, 0.05) 0px 16px 68px, rgba(255, 255, 255, 0.1) 0px 1px 0px inset"
            : "rgba(34, 42, 53, 0.06) 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px, rgba(34, 42, 53, 0.04) 0px 0px 0px 0px, rgba(34, 42, 53, 0.08) 0px 0px 0px, rgba(47, 48, 55, 0.05) 0px 0px 0px, rgba(255, 255, 255, 0.1) 0px 0px 0px inset",
          width: isScrolled ? "90%" : "100%",
          paddingRight: isScrolled ? "12px" : "0px",
          paddingLeft: isScrolled ? "12px" : "0px",
          transform: isScrolled ? "translateY(20px)" : "none",
        }}
        transition={{
          duration: 0.6,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      >
        <div className="flex flex-row justify-between items-center w-full">
          <Logo />
          <MobileMenuButton />
        </div>
      </motion.div>
    </div>
  );
};

export default Navbar;
