interface ProjectProps {
  index: number;
  title: string;
  tech: string;
  desc: string;
}

export default function ProjectCard({ index, title, tech, desc }: ProjectProps) {
  return (
    <div className="project-card group cursor-pointer border-t border-neutral-800 pt-8 transition-colors hover:border-blue-600">
      <span className="text-blue-500 font-mono text-sm">0{index + 1}</span>
      <h4 className="text-3xl font-bold mt-2 group-hover:translate-x-4 transition-transform duration-500 uppercase">
        {title}
      </h4>
      <p className="text-neutral-500 mt-2 font-medium">{tech}</p>
      <div className="mt-4 overflow-hidden max-h-0 group-hover:max-h-20 transition-all duration-700 ease-in-out">
        <p className="text-sm text-neutral-400 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}