import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { SiFigma } from 'react-icons/si';
import { HiChevronRight } from 'react-icons/hi';
import { BsCodeSlash, BsCpu, BsPaletteFill } from 'react-icons/bs';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'software', label: 'Software Engineering' },
    { id: 'aiml', label: 'AI / ML' },
    { id: 'uiux', label: 'UI / UX Design' },
  ];

  const categoryIcons = {
    software: BsCodeSlash,
    aiml: BsCpu,
    uiux: BsPaletteFill,
  };

  const projects = [
    {
      id: 1,
      category: 'software',
      categoryLabel: 'Software Engineering',
      title: 'NuansaAroma',
      subtitle: 'E-Commerce Simulation',
      description: 'A functional desktop marketplace application built with Java GUI, demonstrating strong OOP principles. Applied UX Laws (Jacob\'s Law) to replicate familiar e-commerce navigation patterns, reducing user cognitive load.',
      tags: ['Java', 'GUI', 'OOP', 'UX Laws'],
      github: 'https://github.com/Nixzouxu/NuansaAroma',
      accent: '#00FFE7',
      number: '01',
      highlights: ['Java GUI Desktop App', 'OOP Architecture', 'Database Integration', 'Checkout Flow'],
    },
    {
      id: 2,
      category: 'aiml',
      categoryLabel: 'AI / ML',
      title: 'Language Detector',
      subtitle: 'Multinomial Naïve Bayes',
      description: 'A Machine Learning model that detects language from text using Multinomial Naïve Bayes. Trained on 22 languages with 1000 samples each — achieving 95.3% accuracy through CountVectorizer and word-frequency classification.',
      tags: ['Python', 'Scikit-Learn', 'NLP', 'Naïve Bayes'],
      github: 'https://github.com/Nixzouxu/Language-Detector',
      accent: '#00D4C8',
      number: '02',
      highlights: ['95.3% Accuracy', '22 Languages', 'CountVectorizer', 'Text Classification'],
    },
    {
      id: 3,
      category: 'uiux',
      categoryLabel: 'UI / UX Design',
      title: 'SISA+',
      subtitle: 'Inclusive Digital Platform',
      description: 'End-to-end UX design for a digital platform transforming household waste into micro-income. Applied Think-Aloud Protocol and 5-Second Tests to validate the Eco-Prosperity design system achieving 80%+ navigation success.',
      tags: ['Figma', 'UX Research', 'Prototyping', 'Design System'],
      figma: 'https://www.figma.com/design/dCHybADwWU59o1mf0pli3S/SISA-?node-id=0-1&t=rIE57LvYa0FUoHPD-1',
      accent: '#00B4A0',
      number: '03',
      highlights: ['High-Fidelity Prototype', 'AI "Snap & Go" Feature', '80%+ Navigation Success', 'Think-Aloud Testing'],
    },
  ];

  const filtered = activeCategory === 'all'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="relative bg-[#071020]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(0,255,231,0.3)] to-transparent" />

      <div className="container-custom" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="section-label mb-3">[ 03 ] — Projects</p>
          <h2 className="text-4xl md:text-6xl font-display font-bold">
            My <span className="gradient-text">Projects</span>
          </h2>
          <div className="cyan-divider mt-4 mb-4 mx-auto" />
          <p className="text-[rgba(226,235,240,0.45)] max-w-xl mx-auto">
            A collection of work spanning software engineering, machine learning, and UI/UX design.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15 }}
          className="flex flex-wrap justify-center gap-2 mb-14"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 font-mono text-xs tracking-widest uppercase transition-all duration-300 border ${
                activeCategory === cat.id
                  ? 'border-[#00FFE7] text-[#00FFE7] bg-[rgba(0,255,231,0.08)] shadow-[0_0_15px_rgba(0,255,231,0.2)]'
                  : 'border-[rgba(0,255,231,0.15)] text-[rgba(226,235,240,0.4)] hover:border-[rgba(0,255,231,0.4)] hover:text-[rgba(0,255,231,0.8)]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid - CENTERED */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto"
          >
            {filtered.map((project, i) => (
              <FlipCard key={project.id} project={project} i={i} isInView={isInView} categoryIcon={categoryIcons[project.category]} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-[rgba(226,235,240,0.35)] font-mono text-xs mb-4 tracking-widest">— MORE ON GITHUB —</p>
          <a href="https://github.com/Nixzouxu" target="_blank" rel="noopener noreferrer" className="btn-primary">
            <FaGithub size={14} />
            Visit My GitHub
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(0,255,231,0.2)] to-transparent" />
    </section>
  );
};

const FlipCard = ({ project, i, isInView, categoryIcon: CategoryIcon }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardHover = (entering) => {
    setIsFlipped(entering);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
      onMouseEnter={() => handleCardHover(true)}
      onMouseLeave={() => handleCardHover(false)}
      className="w-full sm:w-[340px] md:w-[360px] h-[520px]"
      style={{ perspective: '1000px' }}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        className="relative w-full h-full"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* BACK SIDE - Logo kategori */}
        <div
          className="absolute inset-0 backface-hidden"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="glow-card rounded-sm w-full h-full flex flex-col items-center justify-center relative overflow-hidden group">
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-[rgba(0,255,231,0.4)] transition-colors" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-[rgba(0,255,231,0.4)] transition-colors" />

            {/* Category icon - BIG */}
            <motion.div
              animate={{ 
                scale: [1, 1.05, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              className="mb-6"
            >
              <CategoryIcon size={120} className="text-[rgba(0,255,231,0.15)]" />
            </motion.div>

            {/* Category label */}
            <p className="section-label text-[rgba(0,255,231,0.6)] mb-2">{project.categoryLabel}</p>
            <p className="font-mono text-[10px] text-[rgba(226,235,240,0.3)] tracking-widest">HOVER TO VIEW PROJECT</p>

            {/* Number badge */}
            <div className="absolute top-4 right-4">
              <span className="font-mono text-[10px] text-[rgba(0,255,231,0.4)] tracking-widest">{project.number}</span>
            </div>

            {/* Animated glow effect */}
            <motion.div
              animate={{
                opacity: [0, 0.3, 0],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,255,231,0.08)_0%,transparent_70%)] pointer-events-none"
            />
          </div>
        </div>

        {/* FRONT SIDE - Project details */}
        <div
          className="absolute inset-0 backface-hidden"
          style={{ 
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          }}
        >
          <div className="glow-card rounded-sm w-full h-full relative group">
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-[rgba(0,255,231,0.6)]" />
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-[rgba(0,255,231,0.6)]" />

            <div className="p-6 h-full flex flex-col">
              {/* Number + category */}
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[10px] text-[rgba(0,255,231,0.4)] tracking-widest">{project.number}</span>
                <span className="tech-badge text-[10px]">{project.categoryLabel}</span>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-display font-bold mb-1 text-glow">
                {project.title}
              </h3>
              <p className="text-[rgba(0,255,231,0.6)] font-mono text-xs mb-4 tracking-wide">{project.subtitle}</p>

              {/* Description */}
              <p className="text-[rgba(226,235,240,0.5)] text-sm leading-relaxed mb-4 flex-shrink-0">
                {project.description}
              </p>

              {/* Highlights */}
              <div className="mb-4 space-y-1.5 flex-shrink-0">
                {project.highlights.map((h) => (
                  <div key={h} className="flex items-center gap-2 text-xs text-[rgba(226,235,240,0.4)]">
                    <HiChevronRight size={12} className="text-[rgba(0,255,231,0.5)] flex-shrink-0" />
                    <span className="truncate">{h}</span>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4 flex-shrink-0">
                {project.tags.slice(0, 4).map((tag) => (
                  <span key={tag} className="tech-badge text-[10px]">{tag}</span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-3 pt-4 border-t border-[rgba(0,255,231,0.08)] mt-auto" style={{ pointerEvents: 'auto' }}>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary text-xs py-2 px-4 hover:scale-105 transition-transform"
                    style={{ pointerEvents: 'auto' }}
                  >
                    <FaGithub size={12} />
                    <span>GitHub</span>
                  </a>
                )}
                {project.figma && (
                  <a
                    href={project.figma}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary text-xs py-2 px-4 hover:scale-105 transition-transform"
                    style={{ pointerEvents: 'auto' }}
                  >
                    <SiFigma size={12} />
                    <span>Figma</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Projects;