import React from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { Play } from "lucide-react";

const Hero = () => {
  const { scrollY } = useScroll();
  const shouldReduceMotion = useReducedMotion();

  const y1 = shouldReduceMotion
    ? 0
    : useTransform(scrollY, [0, 1000], [0, 200]);

  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      
      {/* Background Layer with Parallax */}
      <motion.div
        style={{ y: y1 }}
        className="absolute inset-0 z-0"
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/70 via-black/50 to-black" />

        {/* Video background */}
        <video
          className="w-full h-[120%] object-cover grayscale opacity-50"
          src="/video.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          aria-hidden="true"
        />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-20 max-w-5xl mx-auto px-6 text-center"
      >
        {/* Subheading */}
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="inline-block mb-6 text-[10px] md:text-xs uppercase tracking-[0.6em] text-white/50"
        >
          Cinematic Film & Photography
        </motion.span>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif font-bold tracking-tight leading-[1.05]
                     text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-8"
        >
          Capturing <br />
          <span className="italic font-normal">Stories</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.8 }}
          className="max-w-2xl mx-auto text-white/65 text-sm sm:text-base md:text-lg
                     font-light leading-relaxed mb-12"
        >
          We are a premium visual studio crafting documentary films, commercials,
          music videos, and brand narratives with cinematic depth and timeless
          aesthetics.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a
            href="#portfolio"
            className="group flex items-center gap-3 px-8 py-4
                       bg-white text-black text-[11px] uppercase tracking-[0.3em]
                       font-semibold rounded-full transition-all hover:bg-gray-200"
          >
            View Work
            <Play size={14} className="fill-current" />
          </a>

          <a
            href="#contact"
            className="px-8 py-4 text-[11px] uppercase tracking-[0.3em]
                       font-semibold rounded-full border border-white/30
                       text-white transition-colors hover:border-white"
          >
            Book a Shoot
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2
                   flex flex-col items-center gap-3 opacity-30"
      >
        <span className="text-[9px] uppercase tracking-[0.4em] rotate-90">
          Scroll
        </span>
        <div className="w-px h-14 bg-gradient-to-b from-white to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
