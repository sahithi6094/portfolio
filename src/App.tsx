/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useSpring } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Footer from './components/Footer';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen selection:bg-primary selection:text-white">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[60] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main>
        <Hero />
        
        {/* Sub-hero stats or bio */}
        <section id="about" className="py-20 px-6 border-y" style={{ borderColor: 'var(--border-color)' }}>
          <div className="max-w-7xl mx-auto grid md:grid-cols-[1.5fr_1fr] gap-12 items-center">
             <div>
                <h2 className="text-3xl font-display font-medium leading-tight mb-6 italic" style={{ color: 'var(--text-main)' }}>
                  "I transform complex data into scannable, actionable insights that drive business growth and user engagement."
                </h2>
                <div className="flex gap-12">
                   <div>
                      <p className="text-4xl font-display font-bold text-primary">2.3+</p>
                      <p className="text-xs font-bold uppercase tracking-widest mt-2" style={{ color: 'var(--text-muted)' }}>Years of Exp</p>
                   </div>
                   <div>
                      <p className="text-4xl font-display font-bold text-primary">6</p>
                      <p className="text-xs font-bold uppercase tracking-widest mt-2" style={{ color: 'var(--text-muted)' }}>Projects Done</p>
                   </div>
                </div>
             </div>
             <div className="p-10 rounded-[3rem] border" style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-color)' }}>
                <p className="text-sm font-semibold leading-relaxed italic" style={{ color: 'var(--text-main)' }}>
                  Currently focused on building high-performance Dashboards and Software Applications using Power BI, Power Apps, and Angular.
                </p>
             </div>
          </div>
        </section>

        <Skills />
        <Experience />
        <Projects />
        <Education />
      </main>

      <Footer />
      
      {/* Scroll to Top Hint visually handled by navbar and clean layout */}
    </div>
  );
}

