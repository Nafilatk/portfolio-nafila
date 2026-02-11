'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

export default function Interface() {
  const containerRef = useRef(null);

  useGSAP(() => {
    // Initial reveal
    gsap.from('.nav-link', {
      y: -20,
      opacity: 0,
      stagger: 0.1,
      duration: 0.8,
      ease: 'power3.out'
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="fixed top-0 w-full z-50 px-12 py-8 flex justify-between items-center mix-blend-difference text-white font-sans uppercase tracking-widest text-xs">
      {/* Left Brand */}
      <div className="font-anton text-2xl tracking-normal">
        CINE<span className="text-[#E22D35]">+</span>DAILY
      </div>

      {/* Center Nav */}
      <nav className="flex gap-12 text-neutral-400">
        {['Top Charts', 'Production', 'Box Office', 'IMAX 3D'].map((item) => (
          <a key={item} href="#" className="nav-link hover:text-white transition-colors duration-300 relative group">
            {item}
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#E22D35] group-hover:w-full transition-all duration-300"></span>
          </a>
        ))}
      </nav>

      {/* Right Icons */}
      <div className="flex gap-4 items-center">
        <button className="w-8 h-8 rounded-full border border-neutral-600 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
          🔍
        </button>
        <button className="w-8 h-8 rounded-full border border-neutral-600 flex items-center justify-center hover:bg-[#E22D35] hover:border-[#E22D35] transition-colors">
          👤
        </button>
      </div>
    </div>
  );
}