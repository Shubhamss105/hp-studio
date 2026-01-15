
import React from 'react';
import { Instagram, Twitter, Linkedin, Facebook, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t border-white/5 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-1">
            <a href="#" className="text-2xl font-serif font-bold tracking-tighter uppercase mb-6 block">
              Vision<span className="text-gray-500">Agency</span>
            </a>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              Excellence in visual storytelling since 2018. Based in India, working globally.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-500 hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors"><Facebook size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.4em] text-white font-bold mb-8">Studio</h4>
            <address className="not-italic text-gray-500 text-sm leading-loose">
              2nd Floor, Omaxe World Street,<br />
              Sector 23, Sector 79,<br />
              Faridabad, Haryana – 121004
            </address>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.4em] text-white font-bold mb-8">Quick Links</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#about" className="hover:text-white transition-colors">Our Story</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Showcase</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Inquiries</a></li>
            </ul>
          </div>

          <div className="flex flex-col items-end justify-between">
            <button 
              onClick={scrollToTop}
              className="p-4 border border-white/10 hover:border-white transition-all rounded-full"
            >
              <ArrowUp size={20} />
            </button>
            <div className="text-right">
              <p className="text-[10px] uppercase tracking-widest text-gray-700">
                &copy; 2024 Vision Cinematic Agency. <br /> All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
