import React from 'react';
import { Navbar, Footer } from './components/layout';
import { Hero, About } from './sections/HeroAbout';
import { TechStack, Experience } from './sections/StackExperience';
import { Projects, Contact } from './sections/ProjectsContact';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
