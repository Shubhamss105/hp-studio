
import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-40 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/5 blur-3xl rounded-full" />
            <span className="text-[10px] uppercase tracking-[0.4em] text-gray-500 mb-6 block">Our Ethos</span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 leading-tight">
              Crafting visual <br /> 
              <span className="italic">excellence</span> for the modern era.
            </h2>
            <p className="text-gray-400 text-lg font-light leading-relaxed mb-8">
              Based in the heart of the creative industry, Vision Agency specializes in high-quality 
              photography and videography focused on storytelling, branding, and creative excellence.
            </p>
            <p className="text-gray-400 text-lg font-light leading-relaxed">
              Our team of award-winning cinematographers and photographers collaborate with 
              global brands to bring bold ideas to life with a timeless aesthetic.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <img 
                src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=800" 
                alt="Studio setup" 
                className="w-full h-64 object-cover grayscale rounded-sm hover:grayscale-0 transition-all duration-700"
              />
              <img 
                src="https://images.unsplash.com/photo-1512418490979-92798ccc1380?auto=format&fit=crop&q=80&w=800" 
                alt="Camera lens" 
                className="w-full h-80 object-cover grayscale rounded-sm hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="space-y-4 pt-12">
              <img 
                src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800" 
                alt="Production" 
                className="w-full h-80 object-cover grayscale rounded-sm hover:grayscale-0 transition-all duration-700"
              />
              <img 
                src="https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80&w=800" 
                alt="Filming" 
                className="w-full h-64 object-cover grayscale rounded-sm hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
