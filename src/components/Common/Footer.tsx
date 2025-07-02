"use client";
import React from "react";
import Link from "next/link";
import WaveAnimation from "../Home/Wave";

const Footer = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center px-4 pt-8 mt-16 ">
      <div className="w-full max-w-[1000px] ">
        <div className="relative">
          <div className="grid grid-cols-2 gap-8 lg:gap-16 text-sm lg:grid-cols-4">
            <ul className="space-y-3">
              <li className="font-mono text-zinc-400 text-xs uppercase tracking-wider">
                GET STARTED
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-zinc-300 hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-zinc-300 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-zinc-300 hover:text-white transition-colors"
                >
                  Our Projects
                </Link>
              </li>
            </ul>

            <ul className="space-y-3">
              <li className="font-mono text-zinc-400 text-xs uppercase tracking-wider">
                SOLUTIONS
              </li>
              <li>
                <Link
                  href="/#services"
                  className="text-zinc-300 hover:text-white transition-colors"
                >
                  How it works
                </Link>
              </li>
              <li>
                <Link
                  href="/#technologies"
                  className="text-zinc-300 hover:text-white transition-colors"
                >
                  Technologies
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="text-zinc-300 hover:text-white transition-colors"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-zinc-300 hover:text-white transition-colors"
                >
                  Pricing
                </Link>
              </li>
            </ul>

            <ul className="space-y-3">
              <li className="font-mono text-zinc-400 text-xs uppercase tracking-wider">
                RESOURCES
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-zinc-300 hover:text-white transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-zinc-300 hover:text-white transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/support"
                  className="text-zinc-300 hover:text-white transition-colors"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="/enterprise"
                  className="text-zinc-300 hover:text-white transition-colors"
                >
                  Enterprise
                </Link>
              </li>
            </ul>

            <ul className="space-y-3">
              <li className="font-mono text-zinc-400 text-xs uppercase tracking-wider">
                LEGAL
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-zinc-300 hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-zinc-300 hover:text-white transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/security"
                  className="text-zinc-300 hover:text-white transition-colors"
                >
                  Security
                </Link>
              </li>
              <li>
                <Link
                  href="/compliance"
                  className="text-zinc-300 hover:text-white transition-colors"
                >
                  Compliance
                </Link>
              </li>
            </ul>
          </div>

          <div className="inline-flex flex-col space-y-3">
            <div className="flex space-x-8 pt-8">
              {/* Security Certifications - You can add your own certifications here */}
              <div className="flex items-center space-x-4 text-zinc-400">
                <span className="text-sm">Trusted & Secure</span>
              </div>
            </div>
            <span id="pending" className="text-sm text-zinc-400">
              *Professional development services
            </span>
          </div>

          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:gap-0 border-t border-dashed border-zinc-700 mt-8 pt-8">
            <div className="flex gap-x-1 space-y-1 pt-1 text-zinc-400 text-[11px]">
              <svg className="transition mt-1 size-2" viewBox="0 0 80 80">
                <title>HubTech</title>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  fill="currentColor"
                  d="M67.4307 11.5693C52.005 -3.85643 26.995 -3.85643 11.5693 11.5693C-3.85643 26.995 -3.85643 52.005 11.5693 67.4307C26.995 82.8564 52.005 82.8564 67.4307 67.4307C82.8564 52.005 82.8564 26.995 67.4307 11.5693ZM17.9332 17.9332C29.8442 6.02225 49.1558 6.02225 61.0668 17.9332C72.9777 29.8442 72.9777 49.1558 61.0668 61.0668C59.7316 62.4019 58.3035 63.5874 56.8032 64.6232L56.8241 64.6023C46.8657 54.6439 46.8657 38.4982 56.8241 28.5398L58.2383 27.1256L51.8744 20.7617L50.4602 22.1759C40.5018 32.1343 24.3561 32.1343 14.3977 22.1759L14.3768 22.1968C15.4126 20.6965 16.5981 19.2684 17.9332 17.9332ZM34.0282 38.6078C25.6372 38.9948 17.1318 36.3344 10.3131 30.6265C7.56889 39.6809 9.12599 49.76 14.9844 57.6517L34.0282 38.6078ZM21.3483 64.0156C29.24 69.874 39.3191 71.4311 48.3735 68.6869C42.6656 61.8682 40.0052 53.3628 40.3922 44.9718L21.3483 64.0156Z"
                ></path>
              </svg>
              HubTech {new Date().getFullYear()}. All Rights Reserved
            </div>

            <div className="flex space-x-2 text-white">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-zinc-300 transition-colors"
                href="https://twitter.com/hubtech"
              >
                <div className="size-6 flex items-center justify-center">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
                  </svg>
                </div>
              </a>

              <a
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-zinc-300 transition-colors"
                href="https://github.com/hubtech"
              >
                <div className="size-6 flex items-center justify-center">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 496 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                  </svg>
                </div>
              </a>

              <a
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-zinc-300 transition-colors"
                href="https://www.linkedin.com/company/hubtech"
              >
                <div className="size-6 flex items-center justify-center">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 448 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Footer;
