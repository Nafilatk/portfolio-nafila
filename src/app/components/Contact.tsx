'use client';
import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Contact = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            gsap.from('.end-credit', {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 60%",
                },
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out"
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="w-full min-h-screen bg-black flex flex-col justify-center items-center px-6 py-24 font-anton text-white border-t border-neutral-900">
            <h2 className="text-[12vw] leading-none text-[#E22D35] mix-blend-exclusion end-credit text-center mb-12 select-none">
                THE END
            </h2>

            <div className="max-w-2xl text-center space-y-8 end-credit">
                <p className="text-xl font-sans text-neutral-400 tracking-widest uppercase">
                    Interested in a Sequel?
                </p>
                <a
                    href="mailto:contact@production.com"
                    className="inline-block text-4xl md:text-6xl hover:text-[#E22D35] transition-colors duration-300 border-b-2 border-transparent hover:border-[#E22D35]"
                >
                    CONTACT@STUDIO.COM
                </a>
            </div>

            <div className="mt-32 flex gap-12 text-sm text-neutral-500 font-sans tracking-[0.2em] uppercase end-credit">
                <a href="#" className="hover:text-white transition-colors">Instagram</a>
                <a href="#" className="hover:text-white transition-colors">Twitter</a>
                <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            </div>

            <div className="mt-12 text-xs text-neutral-700 font-sans end-credit">
                © 2025 NEXT.JS STUDIOS. ALL RIGHTS RESERVED.
            </div>
        </section>
    );
};

export default Contact;
