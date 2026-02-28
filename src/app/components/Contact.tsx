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
                start: "top 75%",
            },
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.15,
            ease: "power3.out"
        });
    }, { scope: containerRef }); 

    const currentYear = new Date().getFullYear();

    return (
        <section 
            ref={containerRef} 
            className="w-full min-h-screen bg-black flex flex-col justify-center items-center px-4 sm:px-6 py-20 md:py-24 font-sans text-white border-t border-zinc-900 overflow-hidden"
        >
            {/* Main Call to Action */}
            <h2 className="text-[13vw] md:text-[11vw] lg:text-[9vw] leading-none text-red-600 font-anton end-credit text-center mb-6 md:mb-10 select-none tracking-tight mix-blend-exclusion">
                LET'S BUILD
            </h2>

            <div className="max-w-3xl text-center space-y-8 md:space-y-10 end-credit w-full px-2">
                
                {/* Developer-focused Subtitles */}
                <div className="space-y-4">
                    <p className="text-sm md:text-xl font-bold text-zinc-400 tracking-[0.2em] md:tracking-[0.3em] uppercase">
                        Looking for a Frontend Developer?
                    </p>
                    <p className="text-sm md:text-base text-zinc-500 font-medium max-w-lg mx-auto leading-relaxed">
                        Whether you need a pixel-perfect UI, complex animations, or a highly performant web application, my inbox is always open. Let's turn your ideas into interactive reality.
                    </p>
                </div>

                {/* Email Link */}
                <a
                    href="mailto:nafilatk7@gmail.com"
                    className="inline-block text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black text-white hover:text-red-600 transition-all duration-300 border-b-2 border-transparent hover:border-red-600 pb-1 md:pb-2 break-all sm:break-normal"
                >
                    nafilatk7@gmail.com
                </a>
            </div>

            {/* Social Links including GitHub */}
            <div className="mt-20 md:mt-32 flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-12 text-xs sm:text-sm text-zinc-500 font-bold tracking-[0.15em] sm:tracking-[0.2em] uppercase end-credit">
                <a 
                    href="https://github.com/Nafilatk" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-white hover:-translate-y-1 transition-all duration-300"
                >
                    GitHub
                </a>
                <a 
                    href="https://linkedin.com/in/Nafilatk" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-white hover:-translate-y-1 transition-all duration-300"
                >
                    LinkedIn
                </a>
                <a 
                    href="https://x.com/NafilaTk99314" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-white hover:-translate-y-1 transition-all duration-300"
                >
                    Twitter
                </a>
                <a 
                    href="https://instagram.com/nafilaeaa" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-white hover:-translate-y-1 transition-all duration-300"
                >
                    Instagram
                </a>
            </div>

            <div className="mt-12 md:mt-16 text-[10px] sm:text-xs text-zinc-600 font-bold tracking-widest uppercase end-credit text-center px-4">
                © {currentYear} Nafila TK. CRAFTED WITH REACT & GSAP.
            </div>
        </section>
    );
};

export default Contact;