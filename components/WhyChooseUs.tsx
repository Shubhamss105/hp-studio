
import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Camera, Users, Target } from 'lucide-react';

const stats = [
  { icon: Camera, title: 'Pro Equipment', desc: 'RED cameras, Arri lighting, and top-tier optics.' },
  { icon: Target, title: 'Creative Direction', desc: 'Expert visionaries to guide your brand narrative.' },
  { icon: Zap, title: 'Cinematic Storytelling', desc: 'Crafting visuals that evoke deep emotional response.' },
  { icon: Users, title: 'Full Production', desc: 'From script to screen, we handle every detail.' }
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-24 md:py-40 bg-black relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-full bg-[radial-gradient(circle,rgba(255,255,255,0.03)_0%,rgba(0,0,0,1)_70%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <span className="text-[10px] uppercase tracking-[0.5em] text-gray-500 mb-4 block">The Difference</span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-10">
              Why brands <br /><span className="italic">choose us</span>.
            </h2>
            <p className="text-gray-400 text-lg font-light leading-relaxed mb-12">
              We operate at the intersection of technology and art. Our workflow is designed to 
              minimize friction and maximize creative output, ensuring your vision is 
              realized without compromise.
            </p>
            <div className="flex gap-12">
              <div>
                <h4 className="text-5xl font-serif font-bold mb-2">150+</h4>
                <p className="text-[10px] uppercase tracking-widest text-gray-500">Films Produced</p>
              </div>
              <div>
                <h4 className="text-5xl font-serif font-bold mb-2">12</h4>
                <p className="text-[10px] uppercase tracking-widest text-gray-500">Global Awards</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="p-8 border border-white/10 hover:bg-white/5 transition-colors"
              >
                <stat.icon className="text-white mb-6" size={32} strokeWidth={1} />
                <h3 className="text-xl font-bold mb-4 tracking-tight">{stat.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{stat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
