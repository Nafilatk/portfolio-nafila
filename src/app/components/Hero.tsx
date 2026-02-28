"use client";

import React, { useRef, useLayoutEffect, useState } from "react";
import gsap from "gsap";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const leftTextRef = useRef<HTMLDivElement>(null);
  const lanyardContainerRef = useRef<HTMLDivElement>(null);
  const cardOuterRef = useRef<HTMLDivElement>(null);
  const cardInnerRef = useRef<HTMLDivElement>(null); // New ref for the flip
  const glareRef = useRef<HTMLDivElement>(null);

  const [isHovering, setIsHovering] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false); // Flip state

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from(leftTextRef.current?.children || [], {
        y: 40,
        opacity: 0,
        stagger: 0.2,
        duration: 1.2,
        ease: "power4.out",
        delay: 0.2,
      });

      tl.from(
        lanyardContainerRef.current,
        {
          y: -200,
          rotationZ: 15,
          opacity: 0,
          duration: 2,
          ease: "elastic.out(1, 0.4)",
        },
        "-=0.8"
      );
    }, container);

    return () => ctx.revert();
  }, []);

  // Handle the tap/click to flip
  const handleFlip = () => {
    setIsFlipped(!isFlipped);

    // GSAP flip animation
    gsap.to(cardInnerRef.current, {
      rotateY: isFlipped ? 0 : 180,
      duration: 1.2,
      ease: "power2.inOut",
      overwrite: "auto",
    });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardOuterRef.current || !lanyardContainerRef.current || !glareRef.current) return;

    const rect = cardOuterRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;
    const swingAngle = ((x - centerX) / centerX) * 3;

    // Apply tilt to the OUTER container so it doesn't fight the flip
    gsap.to(cardOuterRef.current, {
      rotateX: rotateX,
      rotateY: rotateY,
      duration: 0.8,
      ease: "sine.out",
      overwrite: "auto",
    });

    gsap.to(lanyardContainerRef.current, {
      rotateZ: swingAngle,
      duration: 1.1,
      ease: "sine.out",
      transformOrigin: "top center",
      overwrite: "auto",
    });

    gsap.to(glareRef.current, {
      x: (x / rect.width) * 100 - 50,
      y: (y / rect.height) * 100 - 50,
      opacity: 1,
      duration: 0.7,
      ease: "sine.out",
      overwrite: "auto",
    });
  };

  const handleMouseLeave = () => {
    setIsHovering(false);

    gsap.to(cardOuterRef.current, {
      rotateX: 0,
      rotateY: 0,
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });

    gsap.to(lanyardContainerRef.current, {
      rotateZ: 0,
      duration: 2,
      ease: "elastic.out(1, 0.2)",
    });

    gsap.to(glareRef.current, {
      opacity: 0,
      duration: 0.4,
    });
  };

  return (
    <main
      ref={container}
      className="relative  flex h-screen w-full items-center justify-between overflow-hidden  text-black font-sans selection:bg-blue-200 selection:text-blue-900"
    >
      <div
        className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#000 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      ></div>

      {/* LEFT: Text Content */}
      <div className="relative z-10 flex w-1/2 flex-col pl-12 md:pl-24 lg:pl-32">
        <div ref={leftTextRef} className="space-y-4">
          <div className="space-y-[-10px]">
            <h1 className="text-4xl font-bold tracking-tighter md:text-8xl lg:text-9xl text-gray-200">
              NAFILA
            </h1>
            <span className="text-4xl font-bold tracking-tighter text-red-800 md:text-8xl lg:text-9xl">
              TK
            </span>
          </div>

          <div className="pt-4">
            <p className="text-sm font-medium uppercase tracking-[0.4em] text-gray-500 md:text-base">
              Frontend Developer
            </p>
            <div className="mt-4 h-[3px] w-12 bg-blue-600"></div>
          </div>
        </div>
      </div>

      {/* RIGHT: Interactive Lanyard */}
      <div className="relative z-20 flex h-full w-1/2 items-start justify-center pt-[-50px]">
        <div
          ref={lanyardContainerRef}
          className="relative flex flex-col items-center"
          style={{ transformOrigin: "top center", perspective: "1200px" }}
        >
          {/* Lanyard Strap hardware... */}
          <div className="relative -mt-40 flex flex-col items-center">
            <div className="h-64 w-5 rounded-full bg-gradient-to-b from-gray-300 via-gray-400 to-gray-600 shadow-inner"></div>
            <div className="z-10 -mt-2 flex h-10 w-8 flex-col items-center justify-start rounded-md bg-gradient-to-b from-gray-300 to-gray-500 shadow-lg border border-gray-400">
              <div className="mt-1 h-3 w-4 rounded-sm bg-gray-200 shadow-inner"></div>
              <div className="mt-1 h-4 w-2 rounded-full bg-gradient-to-b from-gray-400 to-gray-600"></div>
            </div>
            <div className="z-0 -mt-2 h-4 w-12 rounded-t-xl bg-white/20 backdrop-blur-md border border-white/40 shadow-sm"></div>
          </div>

          {/* Outer Card Wrapper (Handles 3D Hover Tilt) */}
          <div
            ref={cardOuterRef}
            className="group relative mt-1 cursor-pointer"
            style={{ transformStyle: "preserve-3d" }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={handleMouseLeave}
            onClick={handleFlip}
          >
            <div
              className={`absolute -inset-2 rounded-3xl bg-blue-500/20 blur-2xl transition-opacity duration-500 ${isHovering ? 'opacity-100' : 'opacity-40'}`}
              style={{ transform: "translateZ(-20px)" }}
            ></div>

            {/* Inner Card Wrapper (Handles 180deg Flip) */}
            <div
              ref={cardInnerRef}
              className="relative h-[420px] w-[300px] rounded-2xl shadow-2xl"
              style={{ transformStyle: "preserve-3d" }}
            >

              {/* === FRONT OF CARD === */}
              <div
                className="absolute inset-0 overflow-hidden rounded-2xl bg-black p-3 backdrop-blur-xl border border-red-700/50"
                style={{ backfaceVisibility: "hidden" }}
              >
                <div className="relative h-[75%] w-full overflow-hidden rounded-xl bg-gray-100">
                  <img
                    src="/heroimage.jpeg"
                    alt="Nafila TK"
                    className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 "></div>
                </div>

                <div className="absolute bottom-6 left-6 right-6">
                  <h2 className="text-2xl font-bold tracking-tight text-gray-300">Nafila TK</h2>
                  <p className="text-sm font-medium text-red-800 mt-0.5">Frontend Developer</p>
                </div>

                <div
                  ref={glareRef}
                  className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay transition-opacity duration-300"
                  style={{
                    background: "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 60%)",
                    transform: "scale(2)",
                  }}
                ></div>
              </div>

              {/* === BACK OF CARD === */}
              <div
                className="absolute inset-0 overflow-hidden rounded-2xl bg-[#000000] p-6 text-white border border-red-700/50 flex flex-col"
                style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 bg-red-600/20 rounded-full flex items-center justify-center">
                    <span className=" font-bold text-red-800">NT</span>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] text-gray-400 uppercase tracking-widest">Access Level</p>
                    <p className="text-sm font-bold text-red-800">ADMIN</p>
                  </div>
                </div>

                <div className="space-y-4 flex-grow">
                  <div>
                    <h3 className="text-xs text-gray-400 uppercase tracking-widest mb-2">Core Tech Stack</h3>
                    <div className="flex flex-wrap gap-2">
                      {['React.js', 'Next.js', 'TypeScript', 'GSAP', 'Figma'].map((tech) => (
                        <span key={tech} className="text-xs bg-white/10 px-2 py-1 rounded-md border border-white/5">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xs text-gray-400 uppercase tracking-widest mb-2">Currently</h3>
                    <p className="text-sm">Frontend Developer Intern @ Bridgeon Solutions</p>
                  </div>
                </div>

                {/* Simulated Barcode */}
                <div className="mt-auto pt-4 border-t border-white/10">
                  <div className="w-full h-8 flex justify-between items-center opacity-50">
                    {[...Array(30)].map((_, i) => (
                      <div key={i} className={`h-full bg-white ${[0, 2, 5, 8, 12, 15, 19, 22, 26, 28].includes(i % 30) ? 'w-1' : 'w-0.5'}`}></div>
                    ))}
                  </div>
                  <p className="text-center text-[8px] text-gray-500 tracking-[0.3em] mt-2">101101001101</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
