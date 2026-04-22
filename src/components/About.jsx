import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const biodata = [
    { label: 'Full Name', value: 'Muhammad Hafidz' },
    { label: 'Nickname', value: 'Nxozu' },
    { label: 'Date of Birth', value: 'Sesuai KTP' },
    { label: 'Hobby', value: 'Making 3D Things' },
    { label: 'Goal', value: 'AI/ML Engineer & SOC Analyst' },
    { label: 'Status', value: 'CS Student' },
  ];

  const interests = [
    'Artificial Intelligence',
    'Machine Learning',
    'Cybersecurity / SOC',
    'Mobile Development',
    'Web Development',
    '3D Design',
  ];

  const fadeUp = (delay = 0) => ({
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
  });

  return (
    <section id="about" className="relative bg-[#071020]">
      {/* Top border glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(0,255,231,0.4)] to-transparent" />

      <div className="container-custom" ref={ref}>
        {/* Header */}
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="mb-16"
        >
          <p className="section-label mb-3">[ 01 ] — About</p>
          <h2 className="text-4xl md:text-6xl font-display font-bold">
            Who Am <span className="gradient-text">I?</span>
          </h2>
          <div className="cyan-divider mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — Bio text */}
          <motion.div
            variants={fadeUp(0.15)}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="space-y-6"
          >
            <p className="text-[rgba(226,235,240,0.65)] leading-relaxed text-lg">
              I'm a Computer Science student with a strong passion for technology and innovation.
              Currently building my foundation in software development while exploring the exciting
              intersection of <span className="text-[#00FFE7]">AI/ML</span> and{' '}
              <span className="text-[#00FFE7]">Cybersecurity</span>.
            </p>
            <p className="text-[rgba(226,235,240,0.65)] leading-relaxed">
              When I'm not coding, you'll find me creating 3D models where art meets technology.
              I believe the best digital products come from combining strong technical skills
              with thoughtful design and user empathy and Also i like to teach some people
              about the things that i learn from internet.
            </p>
            <p className="text-[rgba(226,235,240,0.65)] leading-relaxed">
              My journey is just getting started, and I'm excited to grow into a professional
              who can bridge the gap between intelligent systems and secure infrastructure.
            </p>

            {/* Interests */} 
            <div className="pt-4">
              <p className="section-label mb-4">Interests</p>
              <div className="flex flex-wrap gap-2">
                {interests.map((item, i) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.3 + i * 0.07 }}
                    className="tech-badge"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — Biodata card */}
          <motion.div
            variants={fadeUp(0.25)}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <div className="glow-card rounded-sm p-8 relative">
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#00FFE7]" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#00FFE7]" />

              <p className="section-label mb-6">Biodata</p>

              <div className="space-y-5">
                {biodata.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.35 + i * 0.08 }}
                    className="flex items-start justify-between gap-4 pb-4 border-b border-[rgba(0,255,231,0.08)] last:border-0 last:pb-0"
                  >
                    <span className="text-[rgba(226,235,240,0.35)] font-mono text-xs uppercase tracking-widest shrink-0">
                      {item.label}
                    </span>
                    <span className="text-[rgba(226,235,240,0.85)] text-sm font-semibold text-right">
                      {item.value}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Status indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.9 }}
                className="mt-6 pt-6 border-t border-[rgba(0,255,231,0.1)] flex items-center gap-3"
              >
                <div className="w-2 h-2 rounded-full bg-[#00FFE7] animate-pulse shadow-[0_0_8px_rgba(0,255,231,0.8)]" />
                <span className="text-[rgba(0,255,231,0.7)] text-xs font-mono tracking-widest uppercase">
                  Currently Building & Learning
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(0,255,231,0.15)] to-transparent" />
    </section>
  );
};

export default About;
