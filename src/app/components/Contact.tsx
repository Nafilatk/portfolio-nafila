'use client';
import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

const Contact = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.from('.end-credit', {
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 75%", // Triggers slightly earlier for a smoother reveal
            },
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.15,
            ease: "power3.out"
        });
    }, { scope: containerRef }); // useGSAP automatically handles cleanup!

    const currentYear = new Date().getFullYear();

    return (
        <section 
            ref={containerRef} 
            className="w-full min-h-screen bg-black flex flex-col justify-center items-center px-6 py-24 font-sans text-white border-t border-zinc-900"
        >
            {/* Keeping your font-anton class for the cinematic heading */}
            <h2 className="text-[12vw] leading-none text-[#E22D35] font-anton end-credit text-center mb-12 select-none tracking-tight mix-blend-exclusion">
                THE END
            </h2>

            <div className="max-w-2xl text-center space-y-8 end-credit">
                <p className="text-xl font-bold text-zinc-400 tracking-[0.3em] uppercase">
                    Interested in a Sequel?
                </p>
                <a
                    href="mailto:nafilatk7@gmail.com"
                    className="inline-block text-3xl md:text-5xl font-black hover:text-[#E22D35] transition-all duration-300 border-b-2 border-transparent hover:border-[#E22D35] pb-2"
                >
                    nafilatk7@gmail.com
                </a>
            </div>

            {/* Formatted social links with proper URLs and target="_blank" */}
            <div className="mt-32 flex flex-wrap justify-center gap-8 md:gap-16 text-sm text-zinc-500 font-bold tracking-[0.2em] uppercase end-credit">
                <a 
                    href="https://instagram.com/nafilaeaa" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-white hover:-translate-y-1 transition-all duration-300"
                >
                    Instagram
                </a>
                <a 
                    href="https://@NafilaTk99314" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-white hover:-translate-y-1 transition-all duration-300"
                >
                    Twitter
                </a>
                <a 
                    href="https://linkedin.com/in/Nafilatk" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-white hover:-translate-y-1 transition-all duration-300"
                >
                    LinkedIn
                </a>
            </div>

            {/* Dynamic Copyright Year */}
            <div className="mt-16 text-xs text-zinc-600 font-bold tracking-widest uppercase end-credit">
                © {currentYear} Nafila TK. ALL RIGHTS RESERVED.
            </div>
        </section>
    );
};

export default Contact;