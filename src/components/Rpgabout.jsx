// RPGAbout.jsx
// Taruh di: src/components/RPGAbout.jsx
// Import di App.jsx: import RPGAbout from './components/RPGAbout'
//
// GANTI foto profile:
// Taruh foto kamu di public/avatar.jpg
// Lalu update AVATAR_URL di bawah

const AVATAR_URL = '/avatar.jpg'; // ← ganti dengan path foto kamu

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

// ── Stats kartu RPG ──────────────────────────────────────────────
const STATS = [
  { label: 'STR', full: 'Strength',    value: 72, desc: 'Problem Solving', color: '#FF6B6B' },
  { label: 'DEX', full: 'Dexterity',   value: 85, desc: 'Code Speed',      color: '#4ECDC4' },
  { label: 'INT', full: 'Intelligence',value: 80, desc: 'Logic & Algo',    color: '#A78BFA' },
  { label: 'CHA', full: 'Charisma',    value: 75, desc: 'UI/UX Design',    color: '#FFD700' },
  { label: 'WIS', full: 'Wisdom',      value: 70, desc: 'System Design',   color: '#00FFE7' },
  { label: 'LCK', full: 'Luck',        value: 99, desc: 'Born to create',  color: '#FF6B9D' },
];

const CLASSES = ['Full-Stack Dev', 'Creative Coder', 'Visual Artist'];
const BADGES  = ['⚔️ Coder', '🎨 Designer', '🎵 Musician', '🎬 Editor', '✦ NXOZU'];

// ── Data dari About.jsx ──────────────────────────────────────────
const BIODATA = [
  { label: 'Full Name',     value: 'Muhammad Hafidz' },
  { label: 'Nickname',      value: 'Nxozu' },
  { label: 'Date of Birth', value: 'Sesuai KTP' },
  { label: 'Hobby',         value: 'Making 3D Things' },
  { label: 'Goal',          value: 'AI/ML Engineer & SOC Analyst' },
  { label: 'Status',        value: 'CS Student' },
];

const INTERESTS = [
  'Artificial Intelligence',
  'Machine Learning',
  'Cybersecurity / SOC',
  'Mobile Development',
  'Web Development',
  '3D Design',
];

// ── StatBar ──────────────────────────────────────────────────────
function StatBar({ stat }) {
  return (
    <div className="flex items-center gap-2 text-xs">
      <span className="font-mono w-8 font-bold" style={{ color: stat.color }}>
        {stat.label}
      </span>
      <div className="flex-1 h-1 bg-[rgba(255,255,255,0.06)] rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-700 ease-out"
          style={{
            width: `${stat.value}%`,
            background: stat.color,
            boxShadow: `0 0 6px ${stat.color}88`,
          }}
        />
      </div>
      <span className="font-mono text-[rgba(226,235,240,0.4)] w-6 text-right">
        {stat.value}
      </span>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════
// MAIN COMPONENT
// ════════════════════════════════════════════════════════════════
export default function RPGAbout() {
  const ref      = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const [cardFlipped, setCardFlipped] = useState(false);
  const [hovering,    setHovering]    = useState(false);
  const [classIdx,    setClassIdx]    = useState(0);
  const intervalRef = useRef(null);

  const handleMouseEnter = () => {
    setHovering(true);
    intervalRef.current = setInterval(
      () => setClassIdx(i => (i + 1) % CLASSES.length),
      2000
    );
  };
  const handleMouseLeave = () => {
    setHovering(false);
    clearInterval(intervalRef.current);
  };

  const fadeUp = (delay = 0) => ({
    hidden:  { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
  });

  return (
    <section id="about" className="relative bg-[#071020]">
      {/* Top border glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(0,255,231,0.4)] to-transparent" />

      <div className="container-custom" ref={ref}>

        {/* ── Header (dari About.jsx) ── */}
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

        {/* ── Row 1: Bio Text + Biodata Card (dari About.jsx) ── */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">

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
            <p className="text-[rgba(226,235,240,0.5)] leading-relaxed">
              When I'm not coding, you'll find me creating 3D models where art meets technology.
              I believe the best digital products come from combining strong technical skills
              with thoughtful design and user empathy — and I also enjoy teaching others
              the things I learn from the internet.
            </p>
            <p className="text-[rgba(226,235,240,0.4)] leading-relaxed">
              My journey is just getting started, and I'm excited to grow into a professional
              who can bridge the gap between intelligent systems and secure infrastructure.
            </p>

            {/* Interests */}
            <div className="pt-4">
              <p className="section-label mb-4">Interests</p>
              <div className="flex flex-wrap gap-2">
                {INTERESTS.map((item, i) => (
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
                {BIODATA.map((item, i) => (
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

        {/* ── Divider ── */}
        <div className="h-px bg-gradient-to-r from-transparent via-[rgba(0,255,231,0.2)] to-transparent mb-20" />

        {/* ── Row 2: RPG Card + Info Grid (dari RPGAbout.jsx) ── */}
        <motion.div
          variants={fadeUp(0.1)}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center mb-12"
        >
          <h3 className="text-2xl font-display font-bold">
            Character <span className="gradient-text">Card</span>
          </h3>
          <div className="cyan-divider mx-auto mt-3 mb-2" />
          <p className="text-[rgba(226,235,240,0.3)] text-xs font-mono">
            💡 Hover kartu RPG untuk efek 3D · Tap untuk flip
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* ── RPG Card ── */}
          <div className="flex justify-center">
            <div
              style={{ perspective: '1000px', width: 280, height: 390 }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={() => setCardFlipped(f => !f)}
              className="cursor-pointer"
            >
              <motion.div
                animate={{ rotateY: cardFlipped ? 180 : hovering ? 8 : 0, rotateX: hovering ? -5 : 0 }}
                transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                style={{ width: '100%', height: '100%', position: 'relative', transformStyle: 'preserve-3d' }}
              >
                {/* ── Front ── */}
                <div style={{
                  position: 'absolute', inset: 0, backfaceVisibility: 'hidden',
                  background: 'linear-gradient(135deg, rgba(7,16,32,0.95) 0%, rgba(20,10,40,0.95) 100%)',
                  border: '1px solid rgba(0,255,231,0.3)',
                  borderRadius: 16,
                  boxShadow: hovering
                    ? '0 20px 60px rgba(0,255,231,0.2), 0 0 40px rgba(124,58,237,0.15)'
                    : '0 8px 32px rgba(0,0,0,0.4)',
                  padding: 24,
                  display: 'flex', flexDirection: 'column', gap: 12,
                  transition: 'box-shadow 0.3s',
                }}>
                  {/* Card header */}
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-[10px] font-mono text-[rgba(0,255,231,0.6)] tracking-widest uppercase">
                        Character Card
                      </p>
                      <h3 className="font-mono font-bold text-white text-lg leading-tight">
                        Muhammad Hafidz
                      </h3>
                      <p className="text-xs font-mono" style={{ color: '#00FFE7' }}>
                        LV. 20 · {CLASSES[classIdx]}
                      </p>
                    </div>
                    <div className="text-2xl">⚡</div>
                  </div>

                  {/* Avatar */}
                  <div style={{
                    width: '100%', height: 140,
                    borderRadius: 10,
                    overflow: 'hidden',
                    border: '1px solid rgba(0,255,231,0.2)',
                    background: 'rgba(0,255,231,0.05)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <img
                      src={AVATAR_URL}
                      alt="Muhammad Hafidz"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      onError={e => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div style={{
                      display: 'none', width: '100%', height: '100%',
                      alignItems: 'center', justifyContent: 'center',
                      fontSize: 48, background: 'rgba(0,255,231,0.05)',
                    }}>
                      👤
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="space-y-1.5">
                    {STATS.map(s => (
                      <StatBar key={s.label} stat={s} />
                    ))}
                  </div>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-1">
                    {BADGES.map(b => (
                      <span key={b} style={{
                        fontSize: 9, fontFamily: 'monospace',
                        padding: '2px 6px', borderRadius: 4,
                        background: 'rgba(0,255,231,0.08)',
                        border: '1px solid rgba(0,255,231,0.2)',
                        color: 'rgba(226,235,240,0.6)',
                      }}>
                        {b}
                      </span>
                    ))}
                  </div>

                  <p className="text-center text-[9px] font-mono text-[rgba(226,235,240,0.2)]">
                    tap to flip
                  </p>
                </div>

                {/* ── Back ── */}
                <div style={{
                  position: 'absolute', inset: 0, backfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)',
                  background: 'linear-gradient(135deg, rgba(20,10,40,0.98) 0%, rgba(7,16,32,0.98) 100%)',
                  border: '1px solid rgba(167,139,250,0.4)',
                  borderRadius: 16,
                  padding: 24,
                  display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 16,
                }}>
                  <p className="text-[10px] font-mono text-[rgba(167,139,250,0.6)] tracking-widest uppercase text-center">
                    — Lore —
                  </p>
                  <p className="font-mono text-xs text-[rgba(226,235,240,0.7)] leading-relaxed text-center">
                    "A developer who codes by day,<br />
                    edits videos by night,<br />
                    and dreams in 3D."
                  </p>
                  <div className="border-t border-[rgba(167,139,250,0.2)] pt-4 space-y-2">
                    {[
                      { k: 'Class',     v: 'Full-Stack Dev' },
                      { k: 'Guild',     v: 'Kurang Tw' },
                      { k: 'Weapon',    v: 'VS Code + Figma' },
                      { k: 'Specialty', v: 'React · PHP · 3D' },
                    ].map(item => (
                      <div key={item.k} className="flex justify-between text-xs font-mono">
                        <span className="text-[rgba(167,139,250,0.6)]">{item.k}</span>
                        <span className="text-[rgba(226,235,240,0.8)]">{item.v}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-center text-[9px] font-mono text-[rgba(226,235,240,0.2)]">
                    tap to flip back
                  </p>
                </div>

              </motion.div>
            </div>
          </div>

          {/* ── Info Grid (dari RPGAbout.jsx) ── */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-display font-bold text-white mb-3">
                Halo, aku <span className="gradient-text">Hafidz</span> 👋
              </h3>
              <p className="text-[rgba(226,235,240,0.6)] leading-relaxed text-sm">
                Mahasiswa Informatika yang passionate di dunia web development,
                video editing, dan desain 3D. Aku percaya teknologi dan seni
                bisa berjalan beriringan dan itulah yang selalu aku coba wujudkan.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: '🎓', label: 'Education', val: 'Informatika — USK' },
                { icon: '📍', label: 'Location',  val: 'Banda Aceh, ID' },
                { icon: '💻', label: 'Focus',     val: 'Web + Creative' },
                { icon: '🎯', label: 'Goal',      val: 'AI/ML Engineer & SOC Analyst' },
              ].map(item => (
                <div key={item.label} className="glow-card rounded-xl p-4">
                  <p className="text-lg mb-1">{item.icon}</p>
                  <p className="text-[10px] font-mono text-[rgba(0,255,231,0.6)] uppercase tracking-wider">
                    {item.label}
                  </p>
                  <p className="text-sm font-mono text-[rgba(226,235,240,0.8)] mt-0.5 leading-snug">
                    {item.val}
                  </p>
                </div>
              ))}
            </div>

            {/* Interests dari About.jsx */}
            <div className="pt-2">
              <p className="section-label mb-4">Interests</p>
              <div className="flex flex-wrap gap-2">
                {INTERESTS.map((item, i) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.4 + i * 0.06 }}
                    className="tech-badge"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(0,255,231,0.15)] to-transparent" />
    </section>
  );
}