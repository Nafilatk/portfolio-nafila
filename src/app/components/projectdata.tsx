"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectCard from "@/app/components/Projects";

const projectsData = [
  {
    title: "E-Commerce Dashboard",
    tech: "React.js • JavaScript • Tailwind CSS • Redux Toolkit • Json-server",
    desc: "A high-performance User and admin dashboard with real-time data visualization, advanced filtering, and global state management.",
    url: "https://glamcart-dicc.vercel.app/",
  },
  {
    title: "3D Solar",
    tech: "Next.js • GSAP • Three.js",
    desc: "A 3D interactive Solar System featuring smooth scroll animations, custom 3D models.",
    url: "https://your-portfolio-link.com",
  },
  {
    title: "Learnest.ai",
    tech: "Next.js • TypeScript • Figma • GSAP • Three.js • Python ",
    desc: "A Ai Powered Online Learning platform , full Stack project .",
    url: "https://your-task-app-link.com",
  },
  {
    title: "ArenaOps",
    tech: "Next.js • TypeScript • SCSS • GSAP • Three.js • Redux Toolkit",
    desc: "A Stadium management platform with 4 dashboards (User,Admin,Stadium Manager,Event Manager).",
    url: "https://your-visualizer-link.com",
  },
];

export default function HorizontalProjects() {
  const triggerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // 1. Register the plugin
    gsap.registerPlugin(ScrollTrigger);

    const slider = sliderRef.current;

    // 2. Create the horizontal scroll animation
    if (slider) {
      gsap.to(slider, {
        // Move the slider to the left by its total scrollable width
        x: () => -(slider.scrollWidth - window.innerWidth) + "px",
        ease: "none",
        scrollTrigger: {
          trigger: triggerRef.current,
          pin: true, // Pin the section to the screen
          scrub: 1,  // Smooth scrubbing (1 second catch-up time)
          invalidateOnRefresh: true, // Recalculates on window resize
          // The distance you have to scroll to finish the animation
          end: () => "+=" + slider.scrollWidth, 
        },
      });
    }
  }, { scope: triggerRef });

  return (
    // The trigger container takes up the full screen height
    <section 
      ref={triggerRef} 
      className="h-screen bg-black overflow-hidden flex flex-col justify-center font-sans"
    >
      {/* The slider container is wider than the screen (w-max) */}
      <div 
        ref={sliderRef} 
        className="flex items-center gap-16 md:gap-32 px-[10vw] w-max"
      >
        
        {/* Intro / Header Panel */}
        <div className="w-[85vw] md:w-[400px] shrink-0">
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-none">
            Selected <br/> <span className="text-red-600">Works</span>
          </h2>
          <p className="text-zinc-400 mt-6 text-lg">
            Scroll to explore my recent projects, highlighting expertise in scalable architectures and engaging user interfaces.
          </p>
          <div className="mt-8 h-1 w-24 bg-red-600"></div>
        </div>

        {/* Project Cards */}
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            index={index}
            title={project.title}
            tech={project.tech}
            desc={project.desc}
            url={project.url}
          />
        ))}

        {/* Padding at the end of the scroll */}
        <div className="w-[10vw] shrink-0"></div>
      </div>
    </section>
  );
}