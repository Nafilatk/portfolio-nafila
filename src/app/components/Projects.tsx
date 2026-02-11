"use client";

import { useEffect } from "react";
import { gsap } from "@/app/lib/gsap";

export default function Projects() {
  useEffect(() => {
    gsap.from(".project-card", {
      scrollTrigger: {
        trigger: "#projects",
        start: "top 70%",
      },
      y: 100,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
    });
  }, []);

  return (
    <section id="projects" className="min-h-screen bg-black text-white px-20 py-32">
      <h2 className="text-6xl font-bold mb-16">Projects</h2>

      <div className="grid md:grid-cols-2 gap-10">
        <div className="project-card bg-neutral-900 p-10 rounded-3xl">
          <h3 className="text-2xl font-semibold">E-commerce Platform</h3>
          <p className="text-gray-400 mt-4">
            Full-featured dynamic store with authentication, cart,
            wishlist, and payment flow.
          </p>
        </div>

        <div className="project-card bg-neutral-900 p-10 rounded-3xl">
          <h3 className="text-2xl font-semibold">Learnest AI</h3>
          <p className="text-gray-400 mt-4">
            AI-powered learning platform with animated UI and API integration.
          </p>
        </div>
      </div>
    </section>
  );
}
