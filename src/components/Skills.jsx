import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  SiC, SiGo, SiPython, SiJavascript, SiMysql,
  SiReact, SiVuedotjs, SiVite, SiNextdotjs, SiExpress,
  SiNestjs, SiScikitlearn, SiTensorflow, SiPostgresql,
  SiMongodb, SiFlutter, SiDart, SiFirebase, SiLaravel,
  SiFigma, SiGit, SiGithub, SiPostman, SiIntellijidea,
  SiNeovim,
  SiCinema4D, SiBlender, SiAdobeaftereffects, SiAdobeaudition,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { VscVscode } from 'react-icons/vsc';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const programmingLangs = [
    { name: 'C', icon: SiC, color: '#A8B9CC' },
    { name: 'Golang', icon: SiGo, color: '#00ADD8' },
    { name: 'Java', icon: FaJava, color: '#f89820' },
    { name: 'Python', icon: SiPython, color: '#3776AB' },
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    { name: 'SQL', icon: SiMysql, color: '#4479A1' },
  ];

  const techStack = [
    { name: 'React', icon: SiReact, color: '#61DAFB' },
    { name: 'Vue', icon: SiVuedotjs, color: '#4FC08D' },
    { name: 'Vite', icon: SiVite, color: '#646CFF' },
    { name: 'Next.js', icon: SiNextdotjs, color: '#FFFFFF' },
    { name: 'Express.js', icon: SiExpress, color: '#FFFFFF' },
    { name: 'Nest.js', icon: SiNestjs, color: '#E0234E' },
    { name: 'Scikit-Learn', icon: SiScikitlearn, color: '#F7931E' },
    { name: 'TensorFlow', icon: SiTensorflow, color: '#FF6F00' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    { name: 'Flutter', icon: SiFlutter, color: '#02569B' },
    { name: 'Dart', icon: SiDart, color: '#0175C2' },
    { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
    { name: 'Laravel', icon: SiLaravel, color: '#FF2D20' },
  ];

  const devTools = [
    { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
    { name: 'Git', icon: SiGit, color: '#F05032' },
    { name: 'GitHub', icon: SiGithub, color: '#E6EDF3' },
    { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
    { name: 'IntelliJ', icon: SiIntellijidea, color: '#FF318C' },
    { name: 'VS Code', icon: VscVscode, color: '#007ACC' },
    { name: 'Neovim', icon: SiNeovim, color: '#57A143' },
    { name: 'Cinema 4D', icon: SiCinema4D, color: '#011A6A' },
    { name: 'Blender', icon: SiBlender, color: '#F5792A' },
    { name: 'After Effects', icon: SiAdobeaftereffects, color: '#9999FF' },
    { name: 'Audition', icon: SiAdobeaudition, color: '#9999FF' },
  ];


  const softSkills = [
    'Cross-Functional Communication',
    'Designer–Developer Handoff',
    'Analytical Thinking',
    'Time Management',
    'Problem Solving',
    'Usability Testing',
    'User Research',
  ];

  const IconGrid = ({ title, items, cols = 'grid-cols-3 sm:grid-cols-4 md:grid-cols-6', delay = 0 }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="mb-12"
    >
      <div className="flex items-center gap-4 mb-6">
        <p className="section-label">{title}</p>
        <div className="flex-1 h-px bg-gradient-to-r from-[rgba(0,255,231,0.3)] to-transparent" />
      </div>
      <div className={`grid ${cols} gap-3`}>
        {items.map((item, i) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: delay + 0.05 + i * 0.04 }}
            whileHover={{ scale: 1.05 }}
            className="skill-icon-card rounded-sm"
          >
            <item.icon size={36} style={{ color: item.color, filter: `drop-shadow(0 0 8px ${item.color}60)` }} />
            <span className="text-[10px] font-mono text-[rgba(226,235,240,0.5)] text-center leading-tight">
              {item.name}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

  return (
    <section id="skills" className="relative bg-[#050A0E]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(0,255,231,0.2)] to-transparent" />

      <div className="container-custom" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="section-label mb-3">[ 02 ] — Skills</p>
          <h2 className="text-4xl md:text-6xl font-display font-bold">
            Skills &amp; <span className="gradient-text">Technologies</span>
          </h2>
          <div className="cyan-divider mt-4" />
        </motion.div>

        {/* Grids */}
        <IconGrid title="Programming Languages" items={programmingLangs} cols="grid-cols-3 sm:grid-cols-4 md:grid-cols-6" delay={0.1} />
        <IconGrid title="Tech Stack" items={techStack} cols="grid-cols-3 sm:grid-cols-4 md:grid-cols-7" delay={0.2} />
        <IconGrid title="Design & Dev Tools" items={devTools} cols="grid-cols-3 sm:grid-cols-4 md:grid-cols-7" delay={0.3} />

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <p className="section-label">Soft Skills</p>
            <div className="flex-1 h-px bg-gradient-to-r from-[rgba(0,255,231,0.3)] to-transparent" />
          </div>
          <div className="flex flex-wrap gap-3">
            {softSkills.map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.45 + i * 0.06 }}
                whileHover={{ scale: 1.05 }}
                className="tech-badge"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(0,255,231,0.2)] to-transparent" />
    </section>
  );
};

export default Skills;