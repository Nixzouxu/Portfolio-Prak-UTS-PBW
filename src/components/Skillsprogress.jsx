

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const SKILLS = [
  // Programming
  { category: 'Programming', name: 'JavaScript',  level: 70, color: '#F7DF1E' },
  { category: 'Programming', name: 'HTML & CSS',  level: 85, color: '#E44D26' },
  { category: 'Programming', name: 'React',        level: 65, color: '#61DAFB' },
  { category: 'Programming', name: 'PHP',          level: 55, color: '#8892BF' },
  // Design / Creative
  { category: 'Creative',    name: 'Video Editing',level: 80, color: '#00FFE7' },
  { category: 'Creative',    name: '3D Animation', level: 75, color: '#A78BFA' },
  { category: 'Creative',    name: 'Music',         level: 70, color: '#FF6B9D' },
  // Tools
  { category: 'Tools',       name: 'Git & GitHub', level: 65, color: '#F05032' },
  { category: 'Tools',       name: 'Figma',         level: 60, color: '#F24E1E' },
  { category: 'Tools',       name: 'Vite',          level: 70, color: '#646CFF' },
];

const CATEGORIES = ['Programming', 'Creative', 'Tools'];

function getLevelLabel(level) {
  if (level >= 85) return 'Expert';
  if (level >= 70) return 'Advanced';
  if (level >= 55) return 'Intermediate';
  return 'Beginner';
}

function SkillBar({ skill, inView }) {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    if (inView && !animated) {
      const t = setTimeout(() => setAnimated(true), 100);
      return () => clearTimeout(t);
    }
  }, [inView]);

  return (
    <div className="group">
      <div className="flex justify-between items-center mb-1.5">
        <span className="font-mono text-sm text-[rgba(226,235,240,0.8)] group-hover:text-white transition-colors">
          {skill.name}
        </span>
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono" style={{ color: skill.color }}>
            {getLevelLabel(skill.level)}
          </span>
          <span className="text-xs font-mono text-[rgba(226,235,240,0.4)]">
            {skill.level}%
          </span>
        </div>
      </div>

      {/* Track */}
      <div className="relative h-1.5 bg-[rgba(255,255,255,0.05)] rounded-full overflow-hidden">
        {/* Fill */}
        <div
          className="absolute left-0 top-0 h-full rounded-full transition-all duration-1000 ease-out"
          style={{
            width: animated ? `${skill.level}%` : '0%',
            background: `linear-gradient(90deg, ${skill.color}99, ${skill.color})`,
            boxShadow: `0 0 8px ${skill.color}66`,
            transitionDelay: '0.1s',
          }}
        />
        {/* Shimmer */}
        {animated && (
          <div
            className="absolute top-0 h-full w-16 rounded-full"
            style={{
              left: `${skill.level - 10}%`,
              background: `linear-gradient(90deg, transparent, ${skill.color}88, transparent)`,
              animation: 'shimmer 1.5s ease-out forwards',
            }}
          />
        )}
      </div>
    </div>
  );
}

export default function SkillsProgress() {
  const [activeCategory, setActiveCategory] = useState('Programming');
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  // IntersectionObserver untuk trigger animasi saat di-scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const filtered = SKILLS.filter(s => s.category === activeCategory);

  return (
    <section ref={sectionRef} id="skills-progress" className="relative z-10 py-20 px-6">
      <style>{`
        @keyframes shimmer {
          from { opacity: 1; transform: translateX(0); }
          to   { opacity: 0; transform: translateX(60px); }
        }
      `}</style>

      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-display font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="cyan-divider mx-auto mb-4" />
          <p className="text-[rgba(226,235,240,0.5)] text-sm">
            Kemampuan yang terus berkembang
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex gap-2 justify-center mb-10">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              type="button"
              onClick={() => { setActiveCategory(cat); setInView(false); setTimeout(() => setInView(true), 50); }}
              className={`relative z-10 px-4 py-2 rounded-lg text-xs font-mono transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-[rgba(0,255,231,0.12)] border border-[rgba(0,255,231,0.5)] text-[#00FFE7]'
                  : 'bg-[rgba(7,16,32,0.6)] border border-[rgba(0,255,231,0.1)] text-[rgba(226,235,240,0.4)] hover:border-[rgba(0,255,231,0.3)]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skill bars */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="glow-card rounded-xl p-8 space-y-6"
        >
          {filtered.map((skill, i) => (
            <SkillBar key={skill.name} skill={skill} inView={inView} />
          ))}
        </motion.div>

        {/* Overall stat */}
        <div className="grid grid-cols-3 gap-4 mt-8">
          {[
            { label: 'Languages', value: '4+' },
            { label: 'Projects',  value: '10+' },
            { label: 'Experience', value: '2yr' },
          ].map(stat => (
            <div key={stat.label} className="glow-card rounded-xl p-4 text-center">
              <p className="text-2xl font-mono font-bold text-[#00FFE7]">{stat.value}</p>
              <p className="text-xs text-[rgba(226,235,240,0.4)] mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}