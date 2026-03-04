"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Code2, 
  Palette, 
  Sparkles, 
  Brain, 
  Wrench,
  Zap,
  Box,
  ChevronRight,
  X
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
    title: "Frameworks & Libraries",
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
    skills: ["Redux Toolkit", "Zustand", "Context API", "React Query"],
    description: "Efficiently managing application state and data flow",
    gradient: "from-orange-500/20 to-red-500/20"
  },
  {
    title: "Performance & SEO",
    icon: <Zap className="w-5 h-5" />,
    color: "from-yellow-500 to-amber-500",
    skills: ["Web Vitals", "Lazy Loading", "Code Splitting", "Next SEO"],
    description: "Ensuring fast, efficient, and optimized user experiences",
    gradient: "from-yellow-500/20 to-amber-500/20"
  },
  {
    title: "Workflow & Tools",
    icon: <Wrench className="w-5 h-5" />,
    color: "from-indigo-500 to-purple-500",
    skills: ["Git", "GitHub Actions", "AI Tools", "VS Code"],
    description: "Additional tools and technologies in my daily workflow",
    gradient: "from-indigo-500/20 to-purple-500/20"
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
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
    <section id="skills" className="relative min-h-screen bg-slate-950 text-white py-24 overflow-hidden">
      
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-red-600/20 blur-[120px]" 
        />
        <motion.div 
          animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-[60%] -right-[10%] w-[40%] h-[60%] rounded-full bg-blue-600/10 blur-[120px]" 
        />
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12 lg:px-24">
        
        {/* Header Section */}
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
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-500 hover:scale-[1.02] hover:border-red-500/50 hover:shadow-2xl hover:shadow-red-500/10"
            >
              {/* Animated gradient background inside card */}
              <motion.div
                className={`absolute inset-0 opacity-0 bg-gradient-to-br ${group.gradient} transition-opacity duration-500`}
                animate={{ opacity: hoveredCard === index ? 0.15 : 0 }}
              />
              
              {/* Glowing orb effect inside card */}
              <motion.div
                className="absolute -right-10 -top-10 w-40 h-40 bg-red-500/20 rounded-full blur-3xl pointer-events-none"
                animate={{
                  scale: hoveredCard === index ? 1.2 : 1,
                  opacity: hoveredCard === index ? 0.5 : 0.1
                }}
                transition={{ duration: 0.5 }}
              />

              <div className="relative z-10">
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
                      <div className="text-white">{group.icon}</div>
                    </motion.div>
                    <h3 className="text-xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                      {group.title}
                    </h3>
                  </div>
                  
                  <motion.div
                    animate={{
                      x: hoveredCard === index ? 5 : 0,
                      opacity: hoveredCard === index ? 1 : 0.3
                    }}
                  >
                    <ChevronRight className="w-5 h-5 text-red-400" />
                  </motion.div>
                </div>

                <p className="text-sm text-gray-500 mb-6 line-clamp-2 group-hover:text-gray-300 transition-colors">
                  {group.description}
                </p>

                {/* Skill Tags */}
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
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
                    </motion.button>
                  ))}
                </div>

                {/* Progress indicator border */}
                <motion.div 
                  className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-red-500 to-red-300"
                  initial={{ width: 0 }}
                  animate={{ width: hoveredCard === index ? "100%" : "0%" }}
                  transition={{ duration: 0.4 }}
                />
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Floating Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 flex flex-wrap justify-center gap-12 md:gap-24"
        >
          {[
            { value: "20+", label: "Technologies Mastered" },
            { value: "3+", label: "Years Experience" },
            { value: "50+", label: "Projects Completed" }
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <motion.div 
                className="text-4xl font-bold bg-gradient-to-r from-red-500 to-red-300 bg-clip-text text-transparent mb-2"
                whileHover={{ scale: 1.1 }}
              >
                {stat.value}
              </motion.div>
              <div className="text-sm font-medium text-gray-500 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Selected Skill Toast/Modal */}
        <AnimatePresence>
          {selectedSkill && (
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-slate-900 to-slate-800 border border-red-500/20 text-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-4"
            >
              <Sparkles className="w-5 h-5 text-red-400" />
              <div className="flex flex-col">
                <span className="text-xs text-gray-400 uppercase tracking-wider">Technology Selected</span>
                <span className="font-semibold">{selectedSkill}</span>
              </div>
              <button 
                onClick={() => setSelectedSkill(null)}
                className="ml-4 p-1 rounded-md text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}