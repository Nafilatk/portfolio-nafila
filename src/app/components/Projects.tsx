import React from "react";

interface ProjectProps {
  index: number;
  title: string;
  tech: string;
  desc: string;
  url: string;
}

export default function ProjectCard({ index, title, tech, desc, url }: ProjectProps) {
  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer" 
      // The card is now a fixed width block that shrinks to fit mobile
      className="block outline-none w-[85vw] md:w-[450px] shrink-0"
    >
      <div className="project-card group cursor-pointer border-t-2 border-zinc-800 pt-8 pb-8 transition-colors hover:border-red-600 h-full flex flex-col justify-start">
        <span className="text-red-600 font-mono text-lg font-bold">
          0{index + 1}
        </span>
        <h4 className="text-4xl md:text-5xl text-white font-black mt-4 group-hover:translate-x-4 transition-transform duration-500 uppercase tracking-tight">
          {title}
        </h4>
        <p className="text-zinc-500 mt-4 font-bold uppercase tracking-wider text-sm">
          {tech}
        </p>
        
        {/* Description expands downwards to prevent horizontal layout shifting */}
        <div className="mt-6 overflow-hidden max-h-0 group-hover:max-h-40 transition-all duration-700 ease-in-out">
          <p className="text-base text-zinc-400 leading-relaxed">
            {desc}
          </p>
        </div>
      </div>
    </a>
  );
}