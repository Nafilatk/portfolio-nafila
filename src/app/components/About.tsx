"use client";

import { useEffect } from "react";
import { gsap } from "@/app/lib/gsap";

export default function About() {
  useEffect(() => {
    gsap.from(".about-text", {
      scrollTrigger: {
        trigger: ".about",
        start: "top 80%",
      },
      y: 80,
      opacity: 0,
      duration: 1.2,
    });
  }, []);

  return (
    <section id="about" className="about min-h-screen bg-neutral-900 text-white flex items-center px-20">
      <div className="about-text max-w-3xl">
        <h2 className="text-6xl font-bold mb-6">About Me</h2>
        <p className="text-gray-400 text-lg leading-relaxed">
          I am Nafila, a passionate self-learner and React Developer
          focused on building modern, scalable, and visually engaging
          web experiences.
        </p>
      </div>
    </section>
  );
}
