"use client";
import Hero from "./components/Hero";
import ScrollVelocity from "./components/ScrollVelocity";
import About from "./components/About";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import ProjectCard from "./components/Projects";
import ProjectsSection from "./components/projectdata";

export default function Portfolio() {
  return (
    <>
      <Hero />
      <ScrollVelocity />
      <About />
      <Skills/>
      <ProjectsSection/>                      
      <Contact />
    </>
  );
}