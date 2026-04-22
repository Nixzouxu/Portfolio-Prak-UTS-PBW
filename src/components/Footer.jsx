import { motion } from 'framer-motion';
import { FaGithub, FaInstagram, FaEnvelope } from 'react-icons/fa';
import logoNxz from '../assets/logo-nxz.png';
const Footer = () => {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="relative bg-[#071020] border-t border-[rgba(0,255,231,0.1)] py-10">
      <div className="container-custom px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand Logo */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => scrollTo('home')}
            className="flex items-center justify-center overflow-hidden rounded-md"
          >
            {/* Ukuran logo di footer biasanya sedikit lebih besar, jadi kita pakai h-12 */}
            <img src={logoNxz} alt="Nxozu Logo" className="h-12 w-auto object-contain" />
          </motion.button>

          {/* Copyright */}
          <p className="text-[rgba(226,235,240,0.25)] font-mono text-xs tracking-widest text-center">
            © {new Date().getFullYear()} NXOZU — Built with React & Tailwind CSS
          </p>

          {/* Nav links */}
          <div className="flex gap-6">
            {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className="font-mono text-[10px] tracking-widest uppercase text-[rgba(226,235,240,0.3)] hover:text-[#00FFE7] transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Bottom line with glow */}
        <div className="mt-8 h-px bg-gradient-to-r from-transparent via-[rgba(0,255,231,0.3)] to-transparent" />
        <p className="text-center font-mono text-[9px] text-[rgba(226,235,240,0.15)] tracking-widest mt-4 uppercase">
          Designed & Developed by Nxozu — 2026
        </p>
      </div>
    </footer>
  );
};

export default Footer;
