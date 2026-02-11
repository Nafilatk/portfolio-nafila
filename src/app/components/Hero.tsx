"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/app/lib/gsap";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = heroRef.current;

    gsap.from(".hero-title", {
      y: 100,
      opacity: 0,
      duration: 1.5,
      ease: "power4.out",
    });

    gsap.from(".hero-sub", {
      y: 50,
      opacity: 0,
      delay: 0.5,
      duration: 1.5,
      ease: "power4.out",
    });

    gsap.to(".bg-circle", {
      scale: 1.2,
      scrollTrigger: {
        trigger: el,
        start: "top top",
        scrub: true,
      },
    });
  }, []);

  return (
    <section
      ref={heroRef}
      className="h-screen relative flex items-center justify-center bg-black text-white overflow-hidden"
    >
      <div className="absolute bg-circle w-[600px] h-[600px] bg-red-600 rounded-full blur-3xl opacity-20"></div>

      <h1 className="hero-title absolute text-[12vw] font-extrabold text-white/10 tracking-widest">
        NAFILA
      </h1>

      <div className="z-10 text-center">
        <h2 className="hero-sub text-4xl font-bold">
          Frontend Developer
        </h2>
        <p className="text-gray-400 mt-4">
          React • Next.js • TypeScript
        </p>
      </div>
    </section>
  );
}
