"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Scene from "@/app/components/UserInterface";
import ProjectCard from "@/app/components/Projects";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Portfolio() {
  const container = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal Hero text
      gsap.from(".reveal", {
        y: 120,
        opacity: 0,
        duration: 1.2,
        stagger: 0.1,
        ease: "power4.out",
      });

      // Scroll animation for project grid
      gsap.from(".project-grid", {
        scrollTrigger: {
          trigger: ".project-grid",
          start: "top 85%",
        },
        opacity: 0,
        y: 100,
        duration: 1,
        ease: "power3.out",
      });
    }, container);

    return () => ctx.revert();
  }, []);

  const projects = [
    { title: "Learnest.ai", tech: "Next.js | AI", desc: "Revolutionizing learning through AI-driven personalization." },
    { title: "Solar System", tech: "Three.js | R3F", desc: "A physically accurate 3D simulation of our planetary system." },
    { title: "E-Commerce", tech: "React | TS", desc: "High-conversion storefront with seamless motion design." },
  ];

  const skills = ["HTML", "JS", "TS", "React.js", "Next.js", "GSAP", "Three.js"];

  return (
    <main ref={container} className="bg-neutral-950 text-white selection:bg-blue-600">
      <Scene />

      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center px-10 md:px-32 relative">
        <div className="overflow-hidden">
          <h1 className="reveal text-7xl md:text-[10rem] font-black leading-[0.9] uppercase italic">
            Nafila <span className="text-blue-600">TK</span>
          </h1>
        </div>
        <div className="overflow-hidden mt-4">
          <p className="reveal text-lg md:text-2xl text-neutral-400 max-w-2xl">
            Frontend Expert specializing in high-performance React architectures and 3D web experiences.
          </p>
        </div>
      </section>

      {/* Work Section */}
      <section className="py-40 px-10 md:px-32 bg-neutral-950/80 backdrop-blur-sm">
        <h2 className="text-sm uppercase tracking-[0.3em] text-blue-500 mb-20">Selected Works</h2>
        <div className="project-grid grid grid-cols-1 lg:grid-cols-3 gap-16">
          {projects.map((p, i) => (
            <ProjectCard key={i} index={i} {...p} />
          ))}
        </div>
      </section>

      {/* Infinite Skills Tape */}
      <section className="py-20 overflow-hidden border-y border-neutral-800 bg-white text-black">
        <div className="flex whitespace-nowrap space-x-12 animate-marquee">
          {[...skills, ...skills].map((skill, i) => (
            <span key={i} className="text-6xl md:text-8xl font-black uppercase italic">
              {skill} —
            </span>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="p-10 text-center text-neutral-600 text-sm">
        <p>BUILDING THE FUTURE OF THE WEB • 2026</p>
      </footer>
    </main>
  );
}