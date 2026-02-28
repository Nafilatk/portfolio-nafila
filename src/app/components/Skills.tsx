"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { 
  Code2, 
  Palette, 
  Sparkles, 
  Brain, 
  Cpu, 
  Wrench,
  Globe,
  Zap,
  Box,
  Layers,
  Figma,
  Smartphone,
  ChevronRight
} from "lucide-react";

const skillGroups = [
  {
    title: "Frontend Fundamentals",
    icon: <Code2 className="w-5 h-5" />,
    color: "from-blue-500 to-cyan-500",
    skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript"],
    description: "Building the core structure and logic of modern web applications",
    gradient: "from-blue-500/20 to-cyan-500/20"
  },
  {
    title: "Styling and UI",
    icon: <Palette className="w-5 h-5" />,
    color: "from-purple-500 to-pink-500",
    skills: ["Tailwind CSS", "Bootstrap", "Figma", "Framer Motion"],
    description: "Creating beautiful, responsive, and intuitive user interfaces",
    gradient: "from-purple-500/20 to-pink-500/20"
  },
  {
    title: "Frameworks and Libraries",
    icon: <Box className="w-5 h-5" />,
    color: "from-green-500 to-emerald-500",
    skills: ["Next.js 14", "React.js", "GSAP", "Three.js"],
    description: "Leveraging powerful tools to build scalable applications",
    gradient: "from-green-500/20 to-emerald-500/20"
  },
  {
    title: "State Management",
    icon: <Brain className="w-5 h-5" />,
    color: "from-orange-500 to-red-500",
    skills: ["Redux", "Redux Toolkit", "Zustand", "Context API"],
    description: "Efficiently managing application state and data flow",
    gradient: "from-orange-500/20 to-red-500/20"
  },
  {
    title: "Performance & Optimization",
    icon: <Zap className="w-5 h-5" />,
    color: "from-yellow-500 to-amber-500",
    skills: ["Web Vitals", "Lazy Loading", "Code Splitting", "SEO"],
    description: "Ensuring fast, efficient, and optimized user experiences",
    gradient: "from-yellow-500/20 to-amber-500/20"
  },
  {
    title: "Other Tools",
    icon: <Wrench className="w-5 h-5" />,
    color: "from-indigo-500 to-purple-500",
    skills: ["C++", "Python", "Git", "AI Tools", "VS Code"],
    description: "Additional tools and technologies in my workflow",
    gradient: "from-indigo-500/20 to-purple-500/20"
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 12
    }
  }
};

export default function Skills() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="relative text-white py-20 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900 to-black">
        <div className="absolute inset-0 opacity-30">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-red-500 rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              animate={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                transition: {
                  duration: Math.random() * 10 + 10,
                  repeat: Infinity,
                  ease: "linear"
                }
              }}
            />
          ))}
        </div>
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12 lg:px-24">
        {/* Header with animated elements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 40 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="h-0.5 bg-gradient-to-r from-red-500 to-red-300"
            />
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-xs uppercase tracking-[0.4em] text-red-400 font-semibold"
            >
              Capabilities
            </motion.p>
          </div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
          >
            Skills and Tools I Use to Build{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-400 to-red-300">
              Modern Web Experiences
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-gray-400 mt-6 text-base md:text-lg leading-relaxed max-w-xl"
          >
            A focused stack across frontend engineering, animation, design workflow, 
            and AI-assisted development. Each tool carefully chosen for maximum impact.
          </motion.p>
        </motion.div>

        {/* Interactive Skills Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {skillGroups.map((group, index) => (
            <motion.article
              key={group.title}
              variants={itemVariants}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.02] to-white/[0.05] p-6 transition-all duration-500 hover:scale-[1.02] hover:border-red-500/50 hover:shadow-2xl hover:shadow-red-500/10"
            >
              {/* Animated gradient background */}
              <motion.div
                className={`absolute inset-0 opacity-0 bg-gradient-to-br ${group.gradient} transition-opacity duration-500`}
                animate={{
                  opacity: hoveredCard === index ? 0.15 : 0
                }}
              />
              
              {/* Glowing orb effect */}
              <motion.div
                className="absolute -right-10 -top-10 w-40 h-40 bg-red-500/10 rounded-full blur-3xl"
                animate={{
                  scale: hoveredCard === index ? 1.2 : 1,
                  opacity: hoveredCard === index ? 0.3 : 0.1
                }}
                transition={{ duration: 0.5 }}
              />

              <div className="relative z-10">
                {/* Header with icon */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <motion.div 
                      className={`p-2.5 rounded-lg bg-gradient-to-br ${group.color} bg-opacity-10 border border-white/10`}
                      animate={{
                        rotate: hoveredCard === index ? 360 : 0,
                        scale: hoveredCard === index ? 1.1 : 1
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="text-white">
                        {group.icon}
                      </div>
                    </motion.div>
                    <h3 className="text-xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                      {group.title}
                    </h3>
                  </div>
                  
                  {/* Interactive indicator */}
                  <motion.div
                    animate={{
                      x: hoveredCard === index ? 5 : 0,
                      opacity: hoveredCard === index ? 1 : 0.5
                    }}
                  >
                    <ChevronRight className="w-5 h-5 text-red-400" />
                  </motion.div>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-500 mb-4 line-clamp-2 group-hover:text-gray-400 transition-colors">
                  {group.description}
                </p>

                {/* Skills with interactive tags */}
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, skillIndex) => (
                    <motion.button
                      key={skill}
                      onClick={() => setSelectedSkill(skill)}
                      className="relative overflow-hidden group/btn"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="relative z-10 block px-3 py-1.5 text-xs font-medium rounded-full border border-white/10 bg-black/40 text-gray-300 transition-all duration-300 group-hover/btn:border-red-500/50 group-hover/btn:bg-red-500/10 group-hover/btn:text-red-300">
                        {skill}
                      </span>
                      <motion.span
                        className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/20 to-red-500/0"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.5 }}
                      />
                    </motion.button>
                  ))}
                </div>

                {/* Progress indicator (decorative) */}
                <motion.div 
                  className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-red-500 to-red-300"
                  initial={{ width: 0 }}
                  animate={{
                    width: hoveredCard === index ? "100%" : "0%"
                  }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Interactive floating stats */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-wrap justify-center gap-8"
        >
          <div className="text-center">
            <motion.div 
              className="text-3xl font-bold bg-gradient-to-r from-red-500 to-red-300 bg-clip-text text-transparent"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              20+
            </motion.div>
            <div className="text-sm text-gray-500 mt-1">Technologies Mastered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-red-500 to-red-300 bg-clip-text text-transparent">
              3+
            </div>
            <div className="text-sm text-gray-500 mt-1">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-red-500 to-red-300 bg-clip-text text-transparent">
              50+
            </div>
            <div className="text-sm text-gray-500 mt-1">Projects Completed</div>
          </div>
        </motion.div>

        {/* Selected skill modal (optional) */}
        {selectedSkill && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-4 right-4 bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-lg shadow-2xl"
          >
            <div className="flex items-center gap-3">
              <Sparkles className="w-5 h-5" />
              <span>Selected: {selectedSkill}</span>
              <button 
                onClick={() => setSelectedSkill(null)}
                className="ml-4 text-white/80 hover:text-white"
              >
                ×
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}