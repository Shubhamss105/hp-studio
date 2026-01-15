
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import WhyChooseUs from './components/WhyChooseUs';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Custom cursor logic
    const cursor = document.getElementById('custom-cursor');
    const moveCursor = (e: MouseEvent) => {
      if (cursor) {
        cursor.style.transform = `translate3d(${e.clientX - 10}px, ${e.clientY - 10}px, 0)`;
      }
    };

    const handleMouseEnter = () => {
      if (cursor) cursor.style.transform += ' scale(2.5)';
    };
    const handleMouseLeave = () => {
      if (cursor) cursor.style.transform = cursor.style.transform.replace(' scale(2.5)', '');
    };

    window.addEventListener('mousemove', moveCursor);

    // Initial load simulation
    const timer = setTimeout(() => setIsLoaded(true), 1500);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    const interactiveElements = document.querySelectorAll('button, a, .group');
    const cursor = document.getElementById('custom-cursor');
    
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', () => cursor?.classList.add('scale-[2.5]'));
      el.addEventListener('mouseleave', () => cursor?.classList.remove('scale-[2.5]'));
    });
  }, [isLoaded]);

  return (
    <div className="bg-black text-white selection:bg-white selection:text-black">
      <div className="grain" />
      
      <AnimatePresence>
        {!isLoaded && (
          <motion.div 
            key="loader"
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
            exit={{ opacity: 0, transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } }}
          >
            <div className="flex flex-col items-center overflow-hidden">
              <motion.div
                initial={{ y: 50 }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="text-2xl md:text-4xl font-serif font-bold tracking-tighter uppercase"
              >
                Vision Agency
              </motion.div>
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.2, delay: 0.3 }}
                className="h-[1px] bg-white mt-4"
              />
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="text-[10px] uppercase tracking-[0.6em] font-light mt-2"
              >
                Crafting Excellence
              </motion.span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <WhyChooseUs />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;
