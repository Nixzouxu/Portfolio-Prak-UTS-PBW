import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logoNxz from '../assets/logo-nxz.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-[#050A0E]/90 backdrop-blur-xl border-b border-[rgba(0,255,231,0.1)]' : 'bg-transparent'
      }`}
    >
      <div className="container-custom flex items-center justify-between py-5 px-6">
        {/* Logo Image */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={() => scrollTo('home')}
          className="flex items-center justify-center overflow-hidden rounded-md"
        >
          
          <img src={logoNxz} alt="Nxozu Logo" className="h-10 w-auto object-contain" />
        </motion.button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <motion.button
              key={link}
              whileHover={{ color: '#00FFE7', y: -2 }}
              onClick={() => scrollTo(link.toLowerCase())}
              className="section-label text-[rgba(226,235,240,0.5)] transition-all duration-200"
            >
              {link}
            </motion.button>
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => scrollTo('contact')}
          className="hidden md:block btn-primary text-xs"
        >
          Get in Touch
        </motion.button>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
        >
          <span className={`block w-6 h-0.5 bg-[#00FFE7] transition-all ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-[#00FFE7] transition-all ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-[#00FFE7] transition-all ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#050A0E]/95 backdrop-blur-xl border-b border-[rgba(0,255,231,0.1)] px-6 pb-6"
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07 }}
                onClick={() => scrollTo(link.toLowerCase())}
                className="block w-full text-left py-3 section-label text-[rgba(226,235,240,0.5)] hover:text-[#00FFE7] transition-colors border-b border-[rgba(0,255,231,0.06)]"
              >
                {link}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
