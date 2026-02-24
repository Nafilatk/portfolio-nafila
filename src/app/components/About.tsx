"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "@/app/lib/gsap";
import { motion } from "framer-motion";

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const skillRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Initial Reveal
      gsap.from(".reveal-title", {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out",
        stagger: 0.1
      });

      // 2. Scroll Triggered Bio Reveal
      const paragraphs = gsap.utils.toArray(".bio-para");
      paragraphs.forEach((para: any) => {
        gsap.from(para, {
          scrollTrigger: {
            trigger: para,
            start: "top 85%",
            end: "top 70%",
            scrub: 1,
          },
          y: 50,
          opacity: 0,
          perspective: 1000,
          rotationX: -20,
        });
      });

      // 3. Image Parallax & Scale
      gsap.to(".about-image-inner", {
        scrollTrigger: {
          trigger: ".about-image-container",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
        y: -100,
        scale: 1.1,
      });

      // 4. Skills Stagger
      gsap.from(".skill-chip", {
        scrollTrigger: {
          trigger: ".skills-section",
          start: "top 80%",
        },
        y: 30,
        opacity: 0,
        stagger: 0.05,
        duration: 0.8,
        ease: "back.out(1.7)",
      });

      // 5. Background Blob Animation
      gsap.to(".bg-blob", {
        x: "random(-100, 100)",
        y: "random(-100, 100)",
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 2
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const skills = [
    "React.js", "Next.js", "TypeScript", "JavaScript (ES6+)",
    "GSAP", "Framer Motion", "Tailwind CSS", "Redux Toolkit",
    "Node.js", "MongoDB", "Figma", "UI/UX Design", "Git", "REST APIs"
  ];

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen bg-[#050505] text-white pt-32 pb-24 overflow-hidden selection:bg-blue-500 selection:text-white"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-[10%] left-[-5%] w-[40vw] h-[40vw] bg-blue-600/10 rounded-full blur-[120px] bg-blob pointer-events-none"></div>
      <div className="absolute bottom-[10%] right-[-5%] w-[35vw] h-[35vw] bg-purple-600/10 rounded-full blur-[120px] bg-blob pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 lg:px-24">

        {/* Header Section */}
        <div className="mb-20 md:mb-32">
          <div className="overflow-hidden">
            <h2 className="reveal-title text-sm md:text-base font-bold uppercase tracking-[0.5em] text-blue-500 mb-4 inline-block">
              Discovery / 01
            </h2>
          </div>
          <div className="flex flex-wrap">
            {"BEYOND THE INTERFACE.".split(" ").map((word, i) => (
              <div key={i} className="overflow-hidden mr-4 md:mr-8 mb-4">
                <h1 className="reveal-title text-5xl md:text-8xl lg:text-9xl font-black leading-none tracking-tighter">
                  {word === "INTERFACE." ? (
                    <span className="outline-text">{word}</span>
                  ) : (
                    word
                  )}
                </h1>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start">

          {/* Left Side: Image & Sticky info */}
          <div className="lg:col-span-5 space-y-12">
            <div className="about-image-container relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 group">
              <div className="about-image-inner relative w-full h-full scale-125">
                <Image
                  src="/WhatsApp Image 2026-01-21 at 5.31.47 PM.jpeg"
                  alt="Nafila TK"
                  fill
                  className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>

              {/* Floating label */}
              <div className="absolute bottom-8 left-8">
                <p className="text-xs uppercase tracking-widest text-white/50 mb-1">Based in</p>
                <p className="text-xl font-medium">Kerala, India</p>
              </div>
            </div>

            <div className="space-y-6 pt-8">
              <div className="h-px w-24 bg-blue-600"></div>
              <h3 className="text-2xl font-bold italic serif">"Code is my canvas, and logic is the brush."</h3>
              <p className="text-gray-500 max-w-sm">
                Focusing on the intersection of design and engineering to create
                unforgettable digital moments.
              </p>
            </div>
          </div>

          {/* Right Side: Detailed Bio */}
          <div className="lg:col-span-7 space-y-12">
            <div className="space-y-8">
              <p className="bio-para text-2xl md:text-3xl lg:text-4xl font-medium leading-tight text-gray-200">
                Hi, I'm <span className="text-blue-500 font-bold">Nafila TK</span>.
                A Frontend Developer orchestrating digital experiences with
                precision and purpose.
              </p>

              <p className="bio-para text-lg md:text-xl text-gray-400 leading-relaxed">
                My journey into development began with strong self-learning,
                hands-on experimentation, and a deep curiosity about how
                digital interfaces work behind the scenes. I don't just build websites;
                I create functional art that solves problems.
              </p>

              <p className="bio-para text-lg md:text-xl text-gray-400 leading-relaxed">
                During my internship experience, I translated complex UI designs
                into dynamic, responsive interfaces. I believe in writing
                structured, maintainable code that grows with the product, ensuring
                every pixel serves a purpose.
              </p>
            </div>

            {/* Skills Section */}
            <div className="skills-section pt-12 border-t border-white/10 space-y-8">
              <h4 className="text-sm uppercase tracking-widest text-blue-500 font-bold">Technological Arsenal</h4>

              <div className="flex flex-wrap gap-3">
                {skills.map((skill, i) => (
                  <span
                    key={skill}
                    className="skill-chip px-5 py-3 rounded-full bg-white/5 border border-white/10 text-sm md:text-base font-medium transition-all hover:bg-blue-600/20 hover:border-blue-500/50 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Experience Summary */}
            <div className="grid grid-cols-2 gap-8 pt-12 border-t border-white/10">
              <div className="space-y-2">
                <p className="text-4xl md:text-5xl font-bold tracking-tighter text-blue-500">2+</p>
                <p className="text-xs uppercase tracking-widest text-gray-500">Projects Completed</p>
              </div>
              <div className="space-y-2">
                <p className="text-4xl md:text-5xl font-bold tracking-tighter text-blue-500">6+</p>
                <p className="text-xs uppercase tracking-widest text-gray-500">Months Exp.</p>
              </div>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
