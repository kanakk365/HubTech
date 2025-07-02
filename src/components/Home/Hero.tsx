"use client";
import React, { useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";



export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const directionRef = useRef<'forward' | 'reverse'>('forward');
  // Use requestAnimationFrame for smooth reverse playback
  const reverseRafRef = useRef<number | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const step = 0.016; // ~60fps for smoother reverse
    let reversing = false;

    const reverseStep = () => {
      if (!video) return;
      if (video.currentTime <= step) {
        video.currentTime = 0;
        directionRef.current = "forward";
        reversing = false;
        video.play();
        if (reverseRafRef.current) cancelAnimationFrame(reverseRafRef.current);
        reverseRafRef.current = null;
      } else {
        video.currentTime = Math.max(0, video.currentTime - step);
        reverseRafRef.current = requestAnimationFrame(reverseStep);
      }
    };

    const playReverse = () => {
      if (reversing) return;
      reversing = true;
      directionRef.current = "reverse";
      video.pause();
      reverseStep();
    };

    const handleEnded = () => {
      playReverse();
    };

    video.addEventListener("ended", handleEnded);

    directionRef.current = "forward";
    video.playbackRate = 1;

    return () => {
      video.removeEventListener("ended", handleEnded);
      if (reverseRafRef.current) cancelAnimationFrame(reverseRafRef.current);
    };
  }, []);

  return (
    <>
      <main className="overflow-hidden">
        <section className="relative">
          {/* Floor Background Image */}
          {/* <Image
            alt="Floor background"
            src="/static/landing-page/bg-hero-1.webp"
            width={1920}
            height={1080}
            priority
            className=" pointer-events-none absolute top-10 left-0 right-0 mx-auto hidden h-screen w-full select-none md:block opacity-80 transition-opacity duration-500"
            style={{
              color: 'transparent',
              maskImage: 'linear-gradient(to top, transparent 15%, black 25%)',
              maskComposite: 'exclude'
            }}
          /> */}
          {/* Light Ray Background */}
          <Image
            alt="Light ray background"
            src="/static/landing-page/bg-light.webp"
            width={1920}
            height={1080}
            priority
            className=" z-10 pointer-events-none absolute -top-0 left-0 right-0 mx-auto hidden h-screen w-full select-none md:block transition-all duration-500"
            style={{
              color: 'transparent',
              maskImage: 'linear-gradient(to top, transparent 15%, black 25%)',
              maskComposite: 'exclude'
            }}
          />
          <div className="pb-24 pt-12 md:pb-32 lg:pb-56 lg:pt-44">
            <div className="relative mx-auto flex lg:gap-28 max-w-7xl flex-col pl-6 lg:flex-row lg:items-center lg:justify-between">
              {/* Left: Text Content */}
              <div className="mx-auto max-w-lg text-center lg:ml-0 lg:w-1/2 lg:text-left">
                <h1 className="mt-8 max-w-2xl text-balance text-5xl font-medium md:text-6xl lg:mt-16 xl:text-7xl text-white">
                  Ship 10x Faster with HubTech
                </h1>
                <p className="mt-8 max-w-2xl text-pretty text-lg text-neutral-300">
                  Highly customizable components for building modern websites
                  and applications that look and feel the way you mean it.
                </p>

                <div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
                  <Button
                    asChild
                    size="lg"
                    className="px-5 text-base bg-white text-black hover:bg-neutral-200"
                  >
                    <Link href="#link">
                      <span className="text-nowrap">Start Building</span>
                    </Link>
                  </Button>
                  <Button
                    key={2}
                    asChild
                    size="lg"
                    variant="outline"
                    className="px-5 text-base border-white text-white hover:bg-white hover:text-black"
                  >
                    <Link href="#link">
                      <span className="text-nowrap">Request a demo</span>
                    </Link>
                  </Button>
                </div>
              </div>
              {/* Right: Video Cube */}
              <div className="mt-12 lg:mt-0 lg:w-1/2 flex justify-center items-center relative">
                {/* Spotlight Effect on Cube */}
                
                <video
                  ref={videoRef}
                  src="/Vid/cube2.mp4"
                  autoPlay
                  muted
                  playsInline
                  className="shadow-lg max-w-xl relative z-5"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
