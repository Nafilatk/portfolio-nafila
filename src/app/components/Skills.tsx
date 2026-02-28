const skillGroups = [
  {
    title: "Frontend Fundamentals",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript"],
  },
  {
    title: "Styling and UI",
    skills: ["Tailwind CSS", "Bootstrap", "Figma"],
  },
  {
    title: "Frameworks and Libraries",
    skills: ["Next.js", "GSAP", "Three.js"],
  },
  {
    title: "State Management",
    skills: ["Redux", "Redux Toolkit"],
  },
  {
    title: "Other Tools",
    skills: ["C++", "AI Tools"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className=" text-white py-20">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.4em] text-red-700 mb-3">Capabilities</p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Skills and Tools I Use to Build Modern Web Experiences
          </h2>
          <p className="text-gray-400 mt-5 text-base md:text-lg">
            A focused stack across frontend engineering, animation, design workflow, and AI-assisted development.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-colors hover:border-red-800/70"
            >
              <h3 className="text-xl font-semibold mb-4">{group.title}</h3>
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-black/40 px-4 py-2 text-sm font-medium text-gray-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
