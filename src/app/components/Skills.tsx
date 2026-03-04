"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Code2, 
  Box, 
  Globe, 
  Wrench,
  Sparkles,
  Zap,
  Figma,
  GitBranch,
  Command,
  Layers,
  Palette,
  Server,
  Smartphone,
  Wind,
  type Icon
} from "lucide-react";

const skillCategories = [
  {
    id: "languages",
    name: "Languages",
    icon: <Code2 className="w-6 h-6" />,
    color: "from-red-700 to-red-700",
    skills: [
      { name: "HTML5", icon: "🌐", description: "Semantic markup" },
      { name: "CSS3", icon: "🎨", description: "Flexbox, Grid, animations" },
      { name: "JavaScript (ES6+)", icon: "⚡", description: "Modern JS features" },
      { name: "TypeScript", icon: "📘", description: "Type safety" }
    ]
  },
  {
    id: "frameworks",
    name: "Frameworks & Libraries",
    icon: <Layers className="w-6 h-6" />,
    color: "from-red-700 to-red-700",
    skills: [
      { name: "React.js", icon: "⚛️", description: "Component-based UI" },
      { name: "Redux Toolkit", icon: "🔄", description: "State management" },
      { name: "Next.js", icon: "▲", description: "SSR & SSG" },
      { name: "Three.js", icon: "🔄", description: "3D graphics" },
      { name: "React Three Fiber", icon: "🎮", description: "3D for React" },
      { name: "GSAP", icon: "📈", description: "Advanced animations" },
      { name: "Tailwind CSS", icon: "🌊", description: "Utility-first CSS" },
      { name: "Bootstrap", icon: "🅱️", description: "Rapid prototyping" }
    ]
  },
  {
    id: "tools",
    name: "Tools & Platforms",
    icon: <Wrench className="w-6 h-6" />,
    color: "from-red-700 to-red-700",
    skills: [
      { name: "Git", icon: "📦", description: "Version control" },
      { name: "GitHub", icon: "🐙", description: "Collaboration" },
      { name: "Vercel", icon: "▲", description: "Deployment" },
      { name: "JSON Server", icon: "📊", description: "Mock APIs" },
      { name: "Figma", icon: "🎨", description: "UI/UX design" }
    ]
  }
];

export default function CreativeSkills() {
  const [activeCategory, setActiveCategory] = useState("languages");
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const activeData = skillCategories.find(cat => cat.id === activeCategory);

  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black py-20 px-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-red-700/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-700/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Floating Grid */}
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(185, 28, 28, 0.1) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
            }}
            className="inline-block mb-6"
          >
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-br from-red-700 to-red-700 rounded-2xl rotate-45 absolute -z-10 blur-xl opacity-50"></div>
              <div className="w-20 h-20 bg-gradient-to-br from-red-700 to-red-700 rounded-2xl flex items-center justify-center">
                <Command className="w-10 h-10 text-white" />
              </div>
            </div>
          </motion.div>

          <h2 className="text-6xl md:text-7xl font-black text-white mb-4 tracking-tight">
            TECH<span className="text-red-700">.</span>STACK
          </h2>
          
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "200px" }}
            transition={{ delay: 0.5, duration: 1 }}
            className="h-1 bg-gradient-to-r from-transparent via-red-700 to-transparent mx-auto mb-4"
          />

          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Crafting digital experiences with modern tools and technologies
          </p>
        </motion.div>

        {/* Category Tabs - 3D Style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {skillCategories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className={`relative px-6 py-4 rounded-xl font-medium transition-all duration-300 min-w-[160px] backdrop-blur-sm ${
                activeCategory === category.id
                  ? "text-white shadow-[0_0_30px_rgba(185,28,28,0.3)]"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              {/* Background with gradient */}
              <div className={`absolute inset-0 rounded-xl ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-red-700 to-red-700"
                  : "bg-zinc-800/50 border border-zinc-700"
              }`} />
              
              {/* Content */}
              <div className="relative flex items-center gap-3">
                <span className={activeCategory === category.id ? "text-white" : "text-red-700"}>
                  {category.icon}
                </span>
                <span className="font-mono">{category.name}</span>
              </div>

              {/* Glow effect */}
              {activeCategory === category.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-red-700 rounded-xl -z-10 blur-xl"
                  transition={{ type: "spring", bounce: 0.2 }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            {/* Category Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-red-700 to-red-700 rounded-xl flex items-center justify-center text-white shadow-lg">
                {activeData?.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">{activeData?.name}</h3>
                <p className="text-zinc-500">Hover over skills to explore</p>
              </div>
            </motion.div>

            {/* Skills Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {activeData?.skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  onHoverStart={() => setHoveredSkill(skill.name)}
                  onHoverEnd={() => setHoveredSkill(null)}
                  className="group relative"
                >
                  {/* Main Card */}
                  <div className={`relative bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-xl p-5 transition-all duration-300 hover:border-red-700/50 hover:shadow-[0_0_30px_rgba(185,28,28,0.15)] ${
                    hoveredSkill === skill.name ? "scale-105 -translate-y-1" : ""
                  }`}>
                    
                    {/* Animated Background Gradient */}
                    <motion.div
                      className="absolute inset-0 rounded-xl bg-gradient-to-r from-red-700/0 via-red-700/5 to-red-700/0"
                      animate={{
                        x: ["-100%", "200%"],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear",
                        delay: index * 0.2,
                      }}
                    />

                    {/* Icon and Name */}
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{skill.icon}</span>
                        <h4 className="text-lg font-semibold text-white">{skill.name}</h4>
                      </div>
                      
                      {/* Expertise Indicator - Red Dot */}
                      <motion.div
                        animate={{
                          scale: hoveredSkill === skill.name ? [1, 1.2, 1] : 1,
                        }}
                        transition={{ duration: 0.3 }}
                        className="w-2 h-2 bg-red-700 rounded-full"
                      />
                    </div>

                    {/* Description */}
                    <p className="text-sm text-zinc-400 mb-3">
                      {skill.description}
                    </p>

                    {/* Skill Level Indicator - Visual Bar without percentage */}
                    <div className="relative h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                        className="absolute h-full bg-gradient-to-r from-red-700 to-red-700 rounded-full"
                      >
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                          animate={{
                            x: ["-100%", "100%"],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "linear",
                            repeatDelay: 1,
                          }}
                        />
                      </motion.div>
                    </div>

                    {/* Hover Tooltip */}
                    <AnimatePresence>
                      {hoveredSkill === skill.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute -bottom-8 left-0 right-0 flex justify-center"
                        >
                          <div className="bg-zinc-900 border border-red-700/30 rounded-full px-3 py-1 text-xs text-red-700 shadow-lg">
                            {skill.name}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { label: "Languages", value: "4", icon: <Code2 className="w-5 h-5" /> },
            { label: "Frameworks", value: "8", icon: <Layers className="w-5 h-5" /> },
            { label: "Tools", value: "5", icon: <Wrench className="w-5 h-5" /> },
            { label: "Total Skills", value: "17", icon: <Sparkles className="w-5 h-5" /> }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-4 text-center group cursor-pointer"
            >
              <div className="text-red-700 mb-2 flex justify-center group-hover:rotate-12 transition-transform">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-zinc-500">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}