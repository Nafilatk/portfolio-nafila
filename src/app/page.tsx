import Interface from '@/app/components/UserInterface';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Hero from './components/Hero';

export default function Home() {
  return (
    <main className="relative w-full bg-black min-h-screen text-white">
 
      <Interface />
      <Hero/>      
           <About />

      <Projects />
      <Contact />
    </main>
  );
}