
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 md:py-56 bg-black relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="relative border border-white/10 p-12 md:p-32 text-center rounded-2xl overflow-hidden group">
          {/* Subtle moving background glow */}
          <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-white/5 blur-[120px] rounded-full pointer-events-none group-hover:translate-x-1/2 transition-transform duration-[3s] ease-in-out" />
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="text-[10px] uppercase tracking-[0.8em] text-white/40 mb-10 block">
              Inquire Now
            </span>
            
            <h2 className="text-huge font-serif font-bold mb-16 tracking-tighter leading-none">
              Let’s Create <br /> <span className="italic font-normal">History.</span>
            </h2>

            <div className="flex flex-col md:flex-row gap-12 justify-center items-center mb-20">
              <a 
                href="mailto:contact@visionagency.com"
                className="text-2xl md:text-5xl font-light hover:text-white/60 transition-colors border-b border-white/10 hover:border-white/40 pb-4 flex items-center gap-4 group/link"
              >
                contact@vision.com
                <ArrowRight className="opacity-0 group-hover/link:opacity-100 group-hover/link:translate-x-2 transition-all duration-300" />
              </a>
              <span className="hidden md:block text-white/10 text-4xl font-light">|</span>
              <a 
                href="tel:+919953802909"
                className="text-2xl md:text-5xl font-light hover:text-white/60 transition-colors border-b border-white/10 hover:border-white/40 pb-4 flex items-center gap-4 group/link"
              >
                +91 99538 02909
                <ArrowRight className="opacity-0 group-hover/link:opacity-100 group-hover/link:translate-x-2 transition-all duration-300" />
              </a>
            </div>

            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-20 py-8 bg-white text-black text-[14px] uppercase tracking-[0.5em] font-extrabold hover:bg-gray-100 transition-all rounded-full shadow-[0_0_50px_rgba(255,255,255,0.1)]"
            >
              Initiate Project
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
