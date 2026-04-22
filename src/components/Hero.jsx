import { motion } from 'framer-motion';
import { FaGithub, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { HiArrowDown } from 'react-icons/hi';

const Hero = () => {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/Nixzouxu', label: 'GitHub' },
    { icon: FaInstagram, href: 'https://www.instagram.com/nxuzn.ae/', label: 'Instagram' },
    { icon: FaEnvelope, href: 'mailto:M.hafidz9999@gmail.com', label: 'Email' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid">
      {/* Scan line */}
      <div className="scan-line" />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-[rgba(0,255,231,0.04)] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[rgba(0,180,160,0.06)] blur-[100px] pointer-events-none" />

      {/* Corner decoration */}
      <div className="absolute top-24 left-8 w-24 h-24 border-t border-l border-[rgba(0,255,231,0.3)] pointer-events-none" />
      <div className="absolute bottom-12 right-8 w-24 h-24 border-b border-r border-[rgba(0,255,231,0.3)] pointer-events-none" />

      <div className="container-custom relative z-10 px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-3 mb-10"
          >
            <div className="w-2 h-2 rounded-full bg-[#00FFE7] animate-pulse shadow-[0_0_8px_rgba(0,255,231,0.8)]" />
            <span className="section-label text-[rgba(226,235,240,0.5)]">Available for Projects</span>
            <div className="w-12 h-px bg-gradient-to-r from-[#00FFE7] to-transparent" />
          </motion.div>

          {/* Main headline */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <p className="section-label mb-4 text-[rgba(226,235,240,0.4)]">[ 00 ] — INTRODUCTION</p>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold leading-none mb-4">
              Hey, I'm{' '}
              <span className="gradient-text text-flicker">Nxozu</span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <div className="h-px w-12 bg-[rgba(0,255,231,0.4)]" />
            <h2 className="text-lg md:text-xl font-mono text-[rgba(226,235,240,0.6)] tracking-widest uppercase">
              Aspiring AI/ML Engineer &amp; SOC Analyst
            </h2>
            <div className="h-px w-12 bg-[rgba(0,255,231,0.4)]" />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-[rgba(226,235,240,0.65)] max-w-2xl mx-auto mb-12 text-base leading-relaxed"
          >
            Enthusiastic Computer Science student specializing in Software Development. Currently building mobile & web applications while expanding knowledge in AI/ML and Cybersecurity to pursue my career vision.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <button onClick={() => scrollTo('projects')} className="btn-primary">
              <span>View My Work</span>
              <HiArrowDown size={14} />
            </button>
            <button onClick={() => scrollTo('contact')} className="btn-secondary">
              Get in Touch
            </button>
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="flex items-center justify-center gap-6"
          >
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4, color: '#00FFE7' }}
                className="text-[rgba(226,235,240,0.24)] transition-all duration-200 hover:drop-shadow-[0_0_8px_rgba(0,255,231,0.8)]"
                title={label}
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="section-label text-[rgba(226,235,240,0.3)] text-[10px]">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-12 bg-gradient-to-b from-[#00FFE7] to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
