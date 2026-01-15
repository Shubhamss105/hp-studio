
import React from 'react';
import { motion } from 'framer-motion';
import { Film, Video, Tv, Music, Briefcase, Printer, Globe, Layout, Megaphone } from 'lucide-react';

const services = [
  { name: 'Documentary Films', icon: Film, desc: 'Telling real stories with cinematic depth and empathy.' },
  { name: 'Animation Films', icon: Video, desc: 'Bringing imagination to life through stunning visuals.' },
  { name: 'TV Commercials', icon: Tv, desc: 'High-impact advertising for broadcast and social platforms.' },
  { name: 'Music Videos', icon: Music, desc: 'Visualizing sound with creative flair and rhythm.' },
  { name: 'Corporate Films', icon: Briefcase, desc: 'Professional branding narratives for modern enterprises.' },
  { name: 'Print & Design', icon: Printer, desc: 'Tactile marketing assets with minimal, luxury aesthetics.' },
  { name: 'Digital Marketing', icon: Globe, desc: 'Strategic growth for brands in the digital ecosystem.' },
  { name: 'Website Designing', icon: Layout, desc: 'High-performance digital experiences and interfaces.' },
  { name: 'Influencer Marketing', icon: Megaphone, desc: 'Connecting brands with influential voices globally.' }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[10px] uppercase tracking-[0.5em] text-gray-500 mb-4 block"
          >
            Capabilities
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif font-bold"
          >
            What we <span className="italic">provide</span>.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-10 bg-black border border-white/5 hover:border-white/20 transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <service.icon size={80} />
              </div>
              <service.icon className="text-white mb-6 group-hover:scale-110 transition-transform duration-500" size={32} strokeWidth={1.5} />
              <h3 className="text-xl font-bold mb-4 tracking-tight">{service.name}</h3>
              <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                {service.desc}
              </p>
              <div className="mt-8 flex items-center gap-2 text-[10px] uppercase tracking-widest text-white/50 group-hover:text-white transition-colors">
                Explore Service <div className="w-8 h-[1px] bg-white/20 group-hover:bg-white transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
