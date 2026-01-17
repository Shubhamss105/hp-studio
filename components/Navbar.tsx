import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Work", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/80 backdrop-blur-md py-4 border-b border-white/10"
          : "bg-transparent py-8"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a
          href="#"
          className="group flex items-center gap-3"
          aria-label="HP Studio Home"
        >
          <img
            src="/logo.PNG"
            alt="HP Studio logo"
            className="h-8 md:h-10 w-auto transition-opacity duration-300 group-hover:opacity-80"
          />
        </a>

        <div className="hidden md:flex gap-10 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[10px] uppercase tracking-[0.3em] font-semibold text-gray-400 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="px-6 py-2 border border-white text-[10px] uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300"
          >
            Book a Shoot
          </a>
        </div>

        {/* Mobile menu could go here, keeping it minimal as requested */}
        <div className="md:hidden">
          <button className="text-white">
            <div className="w-6 h-0.5 bg-white mb-1.5"></div>
            <div className="w-4 h-0.5 bg-white"></div>
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
