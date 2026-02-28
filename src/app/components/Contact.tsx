'use client';
import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

const Contact = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.from('.contact-reveal', {
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
            },
            y: 80,
            opacity: 0,
            duration: 1.2,
            stagger: 0.1,
            ease: "expo.out"
        });
    }, { scope: containerRef }); 

    const currentYear = new Date().getFullYear();

    return (
        <section 
            ref={containerRef} 
            className="w-full min-h-screen  flex flex-col justify-between px-6 sm:px-12 py-20 font-sans text-white overflow-hidden"
        >
            {/* Top Bar: Live Status & Role */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full mb-16 gap-6 contact-reveal">
                <div className="flex items-center gap-3">
                    {/* Pulsating green dot */}
                    <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                    <p className="text-zinc-400 text-xs sm:text-sm font-semibold tracking-widest uppercase">
                        Currently React Intern @ Bridgeon Solutions
                    </p>
                </div>
                <p className="text-zinc-600 text-xs sm:text-sm font-bold tracking-[0.2em] uppercase">
                    Available for freelance
                </p>
            </div>

            {/* Main Content: Massive Typography Call to Action */}
            <div className="flex-grow flex flex-col justify-center w-full">
                <h2 className="text-[12vw] md:text-[9vw] leading-[0.9] font-black text-white uppercase tracking-tighter contact-reveal">
                    Have an <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">idea?</span>
                </h2>
                <h2 className="text-[12vw] md:text-[9vw] leading-[0.9] font-black text-zinc-800 uppercase tracking-tighter hover:text-white transition-colors duration-500 contact-reveal cursor-default">
                    Let's build it.
                </h2>
                
                <div className="mt-16 md:mt-24 contact-reveal">
                    <p className="text-zinc-500 mb-3 text-xs md:text-sm tracking-[0.3em] uppercase font-bold">
                        Drop a line
                    </p>
                    <a
                        href="mailto:nafilatk7@gmail.com"
                        className="inline-block text-3xl sm:text-5xl md:text-7xl font-bold text-white hover:italic transition-all duration-300 border-b-4 border-transparent hover:border-red-600 pb-2 md:pb-4"
                    >
                        nafilatk7@gmail.com
                    </a>
                </div>
            </div>

            {/* Footer Area: Structured Socials & Copyright */}
            <div className="mt-20 flex flex-col-reverse md:flex-row justify-between items-start md:items-center w-full gap-10 border-t border-zinc-900 pt-10 contact-reveal">
                <div className="text-[10px] sm:text-xs text-zinc-600 font-bold tracking-widest uppercase">
                    © {currentYear} NAFILA TK. BUILT WITH NEXT.JS & GSAP.
                </div>
                
                <div className="flex flex-wrap gap-6 sm:gap-10 text-xs sm:text-sm font-bold tracking-[0.15em] uppercase text-zinc-400">
                    <a href="https://github.com/Nafilatk" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 hover:-translate-y-1 transition-all duration-300">GitHub</a>
                    <a href="https://linkedin.com/in/Nafilatk" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 hover:-translate-y-1 transition-all duration-300">LinkedIn</a>
                    <a href="https://x.com/NafilaTk99314" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 hover:-translate-y-1 transition-all duration-300">Twitter</a>
                    <a href="https://instagram.com/nafilaeaa" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 hover:-translate-y-1 transition-all duration-300">Instagram</a>
                </div>
            </div>
        </section>
    );
};

export default Contact;