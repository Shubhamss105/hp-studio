
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Play } from 'lucide-react';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Layer with Parallax */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black z-10" />
        <img 
          src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=2000" 
          alt="Cinematic Vision Background" 
          className="w-full h-[120%] object-cover grayscale opacity-50"
        />
      </motion.div>

      <motion.div 
        style={{ opacity }}
        className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="mb-8"
        >
          <span className="text-[10px] md:text-xs uppercase tracking-[0.8em] text-white/50 border-b border-white/20 pb-2">
            Professional Film & Frame
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-huge font-serif font-bold leading-[0.9] mb-12 tracking-tighter"
        >
          Capturing <br /> 
          <span className="italic font-normal">Stories.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 2.2 }}
          className="max-w-2xl mx-auto text-white/60 text-base md:text-xl mb-14 font-light leading-relaxed px-4"
        >
          We are a premium agency dedicated to visual excellence. We provide professional film and photoshoot services capturing stunning visuals for world-class brands.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.5 }}
          className="flex flex-col sm:flex-row gap-8 justify-center items-center"
        >
          <a 
            href="#portfolio"
            className="group flex items-center gap-4 px-10 py-5 bg-white text-black font-bold text-[12px] uppercase tracking-[0.3em] hover:bg-gray-200 transition-all rounded-full overflow-hidden relative"
          >
            <span className="relative z-10">View Our Work</span>
            <Play size={14} className="fill-current relative z-10" />
            <motion.div className="absolute inset-0 bg-black/5 -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
          </a>
          <a 
            href="#contact"
            className="px-10 py-5 border border-white/20 hover:border-white text-white font-bold text-[12px] uppercase tracking-[0.3em] transition-all rounded-full"
          >
            Book a Shoot
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30"
      >
        <span className="text-[9px] uppercase tracking-[0.4em] rotate-90">Explore</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
