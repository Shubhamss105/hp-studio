
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X } from 'lucide-react';

const works = [
  { id: 1, title: 'Nocturnal City', category: 'Cinematography', image: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&q=80&w=1200' },
  { id: 2, title: 'The Architect', category: 'Documentary', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200' },
  { id: 3, title: 'Silence of Dawn', category: 'Music Video', image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=1200' },
  { id: 4, title: 'Modern Flux', category: 'Commercial', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200' },
  { id: 5, title: 'Inner Vision', category: 'Branding', image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200' },
  { id: 6, title: 'Future Frame', category: 'Digital Arts', image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200' }
];

const Portfolio: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<typeof works[0] | null>(null);

  return (
    <section id="portfolio" className="py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <div>
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-[10px] uppercase tracking-[0.5em] text-white/40 mb-4 block"
            >
              Selected Works
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-5xl md:text-7xl font-serif font-bold tracking-tighter"
            >
              Latest <span className="italic">Vision</span>.
            </motion.h2>
          </div>
          <div className="h-[1px] flex-grow bg-white/10 hidden md:block mx-12 mb-6" />
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="max-w-xs text-white/40 text-xs uppercase tracking-widest leading-loose text-right hidden md:block"
          >
            Award-winning cinematography and professional photography for bold innovators.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1px bg-white/5 border border-white/5">
          {works.map((work) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden aspect-[3/4] bg-[#0a0a0a]"
              onClick={() => setSelectedImage(work)}
            >
              <img 
                src={work.image} 
                alt={work.title} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out opacity-60 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-between translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center text-white backdrop-blur-sm">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-white/50 mb-2 block">{work.category}</span>
                  <h3 className="text-2xl font-serif font-bold text-white tracking-tight">{work.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-16 py-6 border border-white/10 hover:border-white hover:bg-white hover:text-black transition-all text-[12px] uppercase tracking-[0.4em] font-bold rounded-full"
          >
            Browse Full Archive
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/98 flex items-center justify-center p-4 md:p-12 cursor-default"
          >
            <motion.button 
              whileHover={{ rotate: 90 }}
              className="absolute top-8 right-8 text-white p-4 z-[110]"
              onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
            >
              <X size={48} strokeWidth={1} />
            </motion.button>

            <div className="w-full max-w-6xl flex flex-col items-center">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full aspect-video overflow-hidden rounded-sm mb-12"
              >
                <img 
                  src={selectedImage.image} 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-center"
              >
                <span className="text-xs uppercase tracking-[0.6em] text-white/40 mb-4 block">
                  {selectedImage.category}
                </span>
                <h2 className="text-4xl md:text-6xl font-serif font-bold tracking-tighter">
                  {selectedImage.title}
                </h2>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
