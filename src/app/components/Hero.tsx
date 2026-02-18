"use client";

import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import Image from "next/image";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const characterRef = useRef<HTMLDivElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Entrance Animation
      tl.from(".scrolling-bg", {
        opacity: 0,
        filter: "blur(20px)",
        duration: 2,
      })
        .from(
          characterRef.current,
          {
            y: 150,
            opacity: 0,
            duration: 1.5,
            ease: "power4.out",
          },
          "-=1.5"
        )
        .from(
          ".tech-tag",
          {
            y: 20,
            opacity: 0,
            stagger: 0.1,
            ease: "back.out(1.7)",
          },
          "-=0.5"
        )
        .from(
          detailsRef.current,
          {
            x: -30,
            opacity: 0,
            duration: 1,
          },
          "-=0.8"
        );

      // Mouse Parallax
      const handleMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        const xPos = clientX / window.innerWidth - 0.5;
        const yPos = clientY / window.innerHeight - 0.5;

        gsap.to(characterRef.current, {
          x: xPos * 40,
          y: yPos * 20,
          duration: 1,
          ease: "power2.out",
        });

        gsap.to(".scrolling-bg", {
          x: -xPos * 20,
          duration: 1.5,
          ease: "power2.out",
        });
      };

      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={container}
      className="relative h-screen w-full overflow-hidden text-white font-sans"
    >
      {/* 🔥 Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Hero.jpeg"
          alt="Background"
          fill
          priority
          className="object-cover brightness-85 contrast-110 saturate-125"
        />
      </div>

      {/* 🔥 Dark Cinematic Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* 🔥 Infinite Scrolling Text */}
      <div className="scrolling-bg absolute inset-0 flex flex-col justify-center overflow-hidden pointer-events-none z-20">
        <div className="flex animate-scroll whitespace-nowrap text-[25vw] font-black uppercase tracking-tighter leading-none opacity-10 outline-text">
          <span className="mr-20">Frontend Developer</span>
          <span className="mr-20">Frontend Developer</span>
        </div>
        <div className="flex animate-scroll-reverse whitespace-nowrap text-[25vw] font-black uppercase tracking-tighter leading-none opacity-5">
          <span className="mr-20">Creative Engineer</span>
          <span className="mr-20">Creative Engineer</span>
        </div>
      </div>

      {/* 🔥 Hero Character Image */}
      <div
        ref={characterRef}
        className="absolute inset-0 z-30 flex items-end justify-center pointer-events-none"
      >
        <div className="relative w-[45vw] max-w-[600px] h-[85vh]">
          <Image
            src="/heroimage.jpeg"
            alt="Hero Character"
            fill
            priority
            className="object-contain object-bottom"
            style={{
              maskImage: "linear-gradient(to bottom, black 70%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to bottom, black 70%, transparent 100%)",
            }}
          />
        </div>
      </div>

      {/* 🔥 Tech Tags */}
      <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-12 z-40 pointer-events-none">
        <div className="flex flex-col gap-4">
          <span className="tech-tag bg-white/5 border border-white/10 px-4 py-2 rounded-full text-[10px] tracking-widest backdrop-blur-md uppercase">
            React.js
          </span>
          <span className="tech-tag bg-white/5 border border-white/10 px-4 py-2 rounded-full text-[10px] tracking-widest backdrop-blur-md uppercase">
            Next.js
          </span>
        </div>
        <div className="flex flex-col gap-4 items-end">
          <span className="tech-tag bg-white/5 border border-white/10 px-4 py-2 rounded-full text-[10px] tracking-widest backdrop-blur-md uppercase">
            GSAP / Framer
          </span>
          <span className="tech-tag bg-white/5 border border-white/10 px-4 py-2 rounded-full text-[10px] tracking-widest backdrop-blur-md uppercase">
            TypeScript
          </span>
        </div>
      </div>

      {/* 🔥 Details Bottom Left */}
      <div
        ref={detailsRef}
        className="absolute bottom-12 left-10 z-50 max-w-md"
      >
        <h2 className="text-5xl font-black mb-4 tracking-tighter italic">
          NAFILA.
        </h2>
        <div className="h-[2px] w-20 bg-red-600 mb-6"></div>
        <p className="text-xs uppercase tracking-[0.3em] opacity-50 mb-2 font-bold">
          Based in India
        </p>
        <p className="text-sm leading-relaxed text-gray-300 font-light max-w-xs">
          Crafting immersive digital experiences through clean code and fluid
          animations. Specializing in creative frontend solutions.
        </p>
      </div>

      {/* 🔥 CTA */}
      <div className="absolute bottom-12 right-10 z-50 flex flex-col items-end">
        <div className="relative group cursor-pointer">
          <div className="absolute -inset-4 border border-red-600/30 rounded-full animate-spin-slow group-hover:border-red-600 transition-colors"></div>
          <button className="w-24 h-24 rounded-full bg-white text-black text-[10px] font-bold uppercase tracking-widest transition-transform hover:scale-110">
            View
            <br />
            Works
          </button>
        </div>
      </div>

      {/* 🔥 Animations */}
      <style jsx global>{`
        .outline-text {
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.3);
          color: transparent;
        }
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        @keyframes scroll-reverse {
          from {
            transform: translateX(-50%);
          }
          to {
            transform: translateX(0);
          }
        }
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll-reverse {
          animation: scroll-reverse 40s linear infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </main>
  );
}
