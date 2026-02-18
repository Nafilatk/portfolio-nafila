"use client";

import Image from "next/image";
import { useEffect } from "react";
import { gsap } from "@/app/lib/gsap"

export default function AboutPage() {
  useEffect(() => {
    gsap.from(".about-content", {
      y: 80,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
    });

    gsap.from(".about-image", {
      x: -80,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
    });
  }, []);

  return (
    <div className="min-h-screen bg-[var(--background)] text-white px-6 md:px-20 py-20 flex items-center">
      <div className="grid md:grid-cols-2 gap-16 items-center w-full">

        {/* Image Section */}
        <div className="about-image relative w-full h-[450px] rounded-3xl overflow-hidden bg-neutral-900 flex items-center justify-center">

          {/* Replace this image with your own */}
          <Image
            src="/WhatsApp Image 2026-01-21 at 5.31.47 PM.jpeg" // Add your image inside public folder
            alt="Nafila Profile"
            fill
            className="object-cover"
          />

          {/* Optional Overlay Effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        </div>

        {/* Content Section */}
        <div className="about-content">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            About Me
          </h1>

          <p className="text-lg text-gray-400 leading-relaxed mb-6">
            I am Nafila TK, a passionate Frontend Developer who focuses on building
            modern, scalable, and visually immersive web experiences.
            My journey into development began with strong self-learning,
            hands-on experimentation, and a deep curiosity about how
            digital interfaces work behind the scenes.
          </p>

          <p className="text-lg text-gray-400 leading-relaxed mb-6">
            During my internship experience, I worked on real-world
            applications where I translated UI designs into dynamic,
            responsive interfaces while ensuring clean architecture
            and performance optimization. I believe in writing
            structured, maintainable code that grows with the product.
          </p>

          <p className="text-lg text-gray-400 leading-relaxed">
            I have successfully developed complete applications including
            a full-featured e-commerce platform and an AI-powered learning
            system, handling everything from interface design to backend
            integration. My approach combines creativity with technical
            precision, allowing me to craft products that are both
            beautiful and functional.
          </p>
        </div>

      </div>
    </div>
  );
}
