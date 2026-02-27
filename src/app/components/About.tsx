"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

export default function AboutPage() {
  const textRef = useRef<HTMLDivElement>(null);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    const ctx = gsap.context(() => {
      // Text reveal animation with smooth scroll
      gsap.from(".about-text", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });

      // Smooth auto-scroll effect
      if (scrollAreaRef.current) {
        const scrollHeight = scrollAreaRef.current.scrollHeight;
        const clientHeight = scrollAreaRef.current.clientHeight;
        
        // Create a smooth scrolling animation
        gsap.to(scrollAreaRef.current, {
          scrollTo: {
            y: scrollHeight - clientHeight,
            autoKill: false,
          },
          duration: 12,
          ease: "power1.inOut",
          repeat: -1,
          yoyo: true,
          modifiers: {
            scrollTop: (value) => {
              // Ensure smooth scrolling without jumps
              return Math.min(Math.max(parseFloat(value), 0), scrollHeight - clientHeight);
            }
          }
        });
      }

      // Smooth scroll behavior for manual scrolling
      if (scrollAreaRef.current) {
        scrollAreaRef.current.style.scrollBehavior = 'smooth';
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="h-140 bg-[#050505] text-white pt-10 pb-10 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start">

          {/* LEFT SIDE - Sticky Image */}
          <div className="lg:col-span-5">
            <div className="sticky top-32 relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 group">
              <Image
                src="/WhatsApp Image 2026-01-21 at 5.31.47 PM.jpeg"
                alt="Nafila TK"
                fill
                className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />

              <div className="absolute bottom-8 left-8">
                <p className="text-xs uppercase tracking-widest text-white/50 mb-1">
                  Based in
                </p>
                <p className="text-xl font-medium">
                  Kerala, India
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - Scrollable Animated Text */}
          <div
            ref={scrollAreaRef}
            className="lg:col-span-7 h-140px overflow-y-auto px-4 md:px-5 lg:px-16 py-10 lg:py-20 scroll-smooth"
            style={{
              scrollBehavior: 'smooth',
              scrollbarWidth: 'thin',
              scrollbarColor: '#991b1b #1a1a1a',
            }}
          >
            <div ref={textRef} className="space-y-8">
              <p className="about-text text-2xl md:text-3xl font-medium leading-tight text-gray-200">
                Hi, I'm{" "}
                <span className="text-red-800 font-bold">
                  Nafila TK
                </span>.
                A Frontend Developer orchestrating digital experiences
                with precision and purpose.
              </p>

              <p className="about-text text-lg md:text-xl text-gray-400 leading-relaxed">
                My journey into development began with strong self-learning,
                hands-on experimentation, and a deep curiosity about how
                digital interfaces work behind the scenes.
                I don't just build websites; I create functional art that solves problems.
              </p>

              <p className="about-text text-lg md:text-xl text-gray-400 leading-relaxed">
                During my internship experience, I translated complex UI designs
                into dynamic, responsive interfaces.
                I believe in writing structured, maintainable code that grows with the product.
              </p>

              <div className="about-text h-px w-24 bg-red-800 my-8"></div>

              <h3 className="about-text text-3xl md:text-4xl font-bold italic leading-relaxed">
                "Code is my canvas, and logic is the brush."
              </h3>

              <p className="about-text text-gray-400 max-w-lg text-lg pb-10">
                Focusing on the intersection of design and engineering
                to create unforgettable digital moments.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Custom scrollbar styles */}
      <style jsx>{`
        .lg\\:col-span-7::-webkit-scrollbar {
          width: 6px;
        }
        .lg\\:col-span-7::-webkit-scrollbar-track {
          background: #1a1a1a;
          border-radius: 10px;
        }
        .lg\\:col-span-7::-webkit-scrollbar-thumb {
          background: #991b1b;
          border-radius: 10px;
          transition: all 0.3s ease;
        }
        .lg\\:col-span-7::-webkit-scrollbar-thumb:hover {
          background: #b91c1c;
        }
      `}</style>
    </section>
  );
}
