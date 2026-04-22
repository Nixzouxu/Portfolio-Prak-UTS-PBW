// Projects3Tab.jsx
// Taruh di: src/components/Projects3Tab.jsx
//
// STRUKTUR FILE di public/:
//   public/videos/chainsaw.mp4
//   public/videos/wumian.mp4
//   public/music/PHASES.mp3
//   public/music/The_Walls.mp3
//   public/music/Facedown.mp3
//   public/covers/cover1.jpeg  ← Facedown
//   public/covers/cover2.jpeg  ← PHASES
//   public/covers/cover3.jpeg  ← The Walls

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { SiFigma } from 'react-icons/si';
import { HiChevronRight } from 'react-icons/hi';
import { BsCodeSlash, BsCpu, BsPaletteFill } from 'react-icons/bs';

// ── DATA PROJECTS ASLI ───────────────────────────────────────────
const PROJECTS = [
  {
    id: 1,
    category: 'software',
    categoryLabel: 'Software Engineering',
    title: 'NuansaAroma',
    subtitle: 'E-Commerce Simulation',
    description:
      "A functional desktop marketplace application built with Java GUI, demonstrating strong OOP principles. Applied UX Laws (Jacob's Law) to replicate familiar e-commerce navigation patterns, reducing user cognitive load.",
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
    description:
      'A Machine Learning model that detects language from text using Multinomial Naïve Bayes. Trained on 22 languages with 1000 samples each — achieving 95.3% accuracy through CountVectorizer and word-frequency classification.',
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
    description:
      'End-to-end UX design for a digital platform transforming household waste into micro-income. Applied Think-Aloud Protocol and 5-Second Tests to validate the Eco-Prosperity design system achieving 80%+ navigation success.',
    tags: ['Figma', 'UX Research', 'Prototyping', 'Design System'],
    figma: 'https://www.figma.com/design/dCHybADwWU59o1mf0pli3S/SISA-?node-id=0-1&t=rIE57LvYa0FUoHPD-1',
    accent: '#00B4A0',
    number: '03',
    highlights: [
      'High-Fidelity Prototype',
      'AI "Snap & Go" Feature',
      '80%+ Navigation Success',
      'Think-Aloud Testing',
    ],
  },
];

const CATEGORIES = [
  { id: 'all',      label: 'All Projects' },
  { id: 'software', label: 'Software Engineering' },
  { id: 'aiml',     label: 'AI / ML' },
  { id: 'uiux',     label: 'UI / UX Design' },
];

const CATEGORY_ICONS = {
  software: BsCodeSlash,
  aiml:     BsCpu,
  uiux:     BsPaletteFill,
};

// ── DATA SONGS ───────────────────────────────────────────────────
const SONGS = [
  {
    title:  'Facedown',
    artist: 'Chase Atlantic',
    album:  'Chase Atlantic (2015)',
    src:    '/music/Facedown.mp3',
    cover:  '/covers/cover1.jpeg',
    color:  '#00FFE7',
  },
  {
    title:  'PHASES',
    artist: 'Chase Atlantic',
    album:  'PHASES (2017)',
    src:    '/music/PHASES.mp3',
    cover:  '/covers/cover2.jpeg',
    color:  '#A855F7',
  },
  {
    title:  'The Walls',
    artist: 'Chase Atlantic',
    album:  'Chase Atlantic (2015)',
    src:    '/music/The_Walls.mp3',
    cover:  '/covers/cover3.jpeg',
    color:  '#EF4444',
  },
];

// ── DATA VIDEOS ──────────────────────────────────────────────────
const VIDEOS = [
  {
    title: 'Chainsaw Man Edit',
    desc:  'Aesthetic Chainsaw Man edit — 4K / 1080p',
    src:   '/videos/chainsaw.mp4',
    tags:  ['After Effect', '4K', 'Blender'],
    color: '#00FFE7',
  },
  {
    title: 'If There Is A God — Wumian Edit',
    desc:  'Cinematic Wumian edit — 1080p HD',
    src:   '/videos/wumian.mp4',
    tags:  ['After Effect', 'Live2d', 'Cinema4d'],
    color: '#A855F7',
  },
  {
    title: 'True Colors — Naruto Edit',
    desc:  'Collab With nin9x — 1080p HD',
    src:   '/videos/naruto.mp4',
    tags:  ['After Effect', 'Blender', 'Element3d', 'SVP'],
    color: '#A855F7',
  }
];

// ════════════════════════════════════════════════════════════════
// FLIP CARD (Projects)
// ════════════════════════════════════════════════════════════════
const FlipCard = ({ project, i, categoryIcon: CategoryIcon }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      className="w-full sm:w-[320px] md:w-[340px] h-[500px]"
      style={{ perspective: '1000px' }}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        className="relative w-full h-full"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* ── Back (default face) ── */}
        <div
          className="absolute inset-0"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div
            className="glow-card rounded-2xl w-full h-full flex flex-col items-center justify-center relative overflow-hidden"
            style={{ border: `1px solid ${project.accent}22` }}
          >
            <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-[rgba(0,255,231,0.4)]" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-[rgba(0,255,231,0.4)]" />

            <motion.div
              animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="mb-6"
            >
              {CategoryIcon && <CategoryIcon size={110} className="text-[rgba(0,255,231,0.15)]" />}
            </motion.div>

            <p className="section-label text-[rgba(0,255,231,0.6)] mb-2">{project.categoryLabel}</p>
            <p className="font-mono text-[10px] text-[rgba(226,235,240,0.3)] tracking-widest">HOVER TO VIEW PROJECT</p>

            <div className="absolute top-4 right-4">
              <span className="font-mono text-[10px] text-[rgba(0,255,231,0.4)] tracking-widest">{project.number}</span>
            </div>

            <motion.div
              animate={{ opacity: [0, 0.3, 0], scale: [0.8, 1.2, 0.8] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,255,231,0.08)_0%,transparent_70%)] pointer-events-none"
            />
          </div>
        </div>

        {/* ── Front (flip face) ── */}
        <div
          className="absolute inset-0"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <div
            className="glow-card rounded-2xl w-full h-full relative"
            style={{ border: `1px solid ${project.accent}33` }}
          >
            <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-[rgba(0,255,231,0.6)]" />
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-[rgba(0,255,231,0.6)]" />

            <div className="p-6 h-full flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[10px] text-[rgba(0,255,231,0.4)] tracking-widest">{project.number}</span>
                <span className="tech-badge text-[10px]">{project.categoryLabel}</span>
              </div>

              <h3 className="text-2xl font-display font-bold mb-1 text-glow">{project.title}</h3>
              <p className="text-[rgba(0,255,231,0.6)] font-mono text-xs mb-4 tracking-wide">{project.subtitle}</p>

              <p className="text-[rgba(226,235,240,0.5)] text-sm leading-relaxed mb-4 flex-shrink-0">
                {project.description}
              </p>

              <div className="mb-4 space-y-1.5 flex-shrink-0">
                {project.highlights.map((h) => (
                  <div key={h} className="flex items-center gap-2 text-xs text-[rgba(226,235,240,0.4)]">
                    <HiChevronRight size={12} className="text-[rgba(0,255,231,0.5)] flex-shrink-0" />
                    <span className="truncate">{h}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 mb-4 flex-shrink-0">
                {project.tags.slice(0, 4).map((tag) => (
                  <span key={tag} className="tech-badge text-[10px]">{tag}</span>
                ))}
              </div>

              <div className="flex gap-3 pt-4 border-t border-[rgba(0,255,231,0.08)] mt-auto">
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

// ════════════════════════════════════════════════════════════════
// SONG CARD — mini music player + cover art + progress bar
// ════════════════════════════════════════════════════════════════
function SongCard({ song }) {
  const audioRef  = useRef(null);
  const [playing,  setPlaying]  = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const onTime = () => setProgress(audio.currentTime);
    const onLoad = () => setDuration(audio.duration);
    const onEnd  = () => setPlaying(false);
    audio.addEventListener('timeupdate', onTime);
    audio.addEventListener('loadedmetadata', onLoad);
    audio.addEventListener('ended', onEnd);
    return () => {
      audio.removeEventListener('timeupdate', onTime);
      audio.removeEventListener('loadedmetadata', onLoad);
      audio.removeEventListener('ended', onEnd);
    };
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) { audio.pause(); setPlaying(false); }
    else { audio.play(); setPlaying(true); }
  };

  const seek = (e) => {
    const audio = audioRef.current;
    if (!audio || !duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    audio.currentTime = ((e.clientX - rect.left) / rect.width) * duration;
  };

  const fmt = (s) => {
    if (isNaN(s)) return '0:00';
    return `${Math.floor(s / 60)}:${Math.floor(s % 60).toString().padStart(2, '0')}`;
  };

  return (
    <motion.div
      layout
      whileHover={{ y: -4 }}
      className="glow-card rounded-2xl overflow-hidden"
      style={{ border: `1px solid ${song.color}33` }}
    >
      <audio ref={audioRef} src={song.src} preload="metadata" />

      {/* Cover art */}
      <div style={{ position: 'relative', paddingBottom: '100%', overflow: 'hidden' }}>
        <img
          src={song.cover}
          alt={song.title}
          style={{
            position: 'absolute', inset: 0, width: '100%', height: '100%',
            objectFit: 'cover',
            filter: playing ? 'brightness(0.7)' : 'brightness(0.85)',
            transition: 'filter 0.3s',
            animation: playing ? 'subtlePulse 2s ease-in-out infinite' : 'none',
          }}
        />

        {/* Play overlay on hover */}
        <button
          type="button"
          onClick={toggle}
          className="absolute inset-0 flex items-center justify-center transition-all duration-300"
          style={{
            opacity: 0,
            background: 'rgba(0,0,0,0.3)',
          }}
          onMouseEnter={e => { e.currentTarget.style.opacity = '1'; }}
          onMouseLeave={e => { if (!playing) e.currentTarget.style.opacity = '0'; }}
        >
          <div style={{
            width: 56, height: 56, borderRadius: '50%',
            background: `${song.color}cc`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 20,
            boxShadow: `0 0 20px ${song.color}88`,
          }}>
            {playing ? '⏸' : '▶'}
          </div>
        </button>

        {/* Equalizer animation when playing */}
        {playing && (
          <div className="absolute bottom-3 right-3 flex gap-0.5 items-end h-5">
            {[1, 2, 3, 4].map(b => (
              <div key={b} style={{
                width: 3, borderRadius: 2,
                background: song.color,
                animation: `eq${b % 3 + 1} ${0.4 + b * 0.1}s ease-in-out infinite alternate`,
                height: `${6 + b * 3}px`,
              }} />
            ))}
          </div>
        )}
      </div>

      {/* Info + controls */}
      <div className="p-4">
        <h3 className="font-mono font-bold text-white text-sm">{song.title}</h3>
        <p className="font-mono text-xs mt-0.5" style={{ color: song.color }}>{song.artist}</p>
        <p className="font-mono text-[10px] text-[rgba(226,235,240,0.3)] mb-3">{song.album}</p>

        {/* Progress bar */}
        <div
          className="h-1 rounded-full bg-[rgba(255,255,255,0.08)] cursor-pointer mb-1"
          onClick={seek}
        >
          <div
            className="h-full rounded-full"
            style={{
              width: duration ? `${(progress / duration) * 100}%` : '0%',
              background: song.color,
              transition: 'width 0.1s linear',
              boxShadow: `0 0 6px ${song.color}88`,
            }}
          />
        </div>
        <div className="flex justify-between text-[10px] font-mono text-[rgba(226,235,240,0.3)] mb-3">
          <span>{fmt(progress)}</span>
          <span>{fmt(duration)}</span>
        </div>

        {/* Play/Pause button */}
        <button
          type="button"
          onClick={toggle}
          className="relative z-10 w-full py-2 rounded-lg text-xs font-mono font-bold transition-all"
          style={{
            background: playing ? 'rgba(255,255,255,0.06)' : `${song.color}22`,
            border: `1px solid ${song.color}44`,
            color: playing ? 'rgba(226,235,240,0.8)' : song.color,
          }}
        >
          {playing ? '⏸  Pause' : '▶  Play'}
        </button>
      </div>
    </motion.div>
  );
}

// ════════════════════════════════════════════════════════════════
// VIDEO CARD — cyan background + play button
// ════════════════════════════════════════════════════════════════
function VideoCard({ video }) {
  const videoRef  = useRef(null);
  const [playing,  setPlaying]  = useState(false);
  const [hovering, setHovering] = useState(false);

  const toggle = () => {
    const v = videoRef.current;
    if (!v) return;
    if (playing) { v.pause(); setPlaying(false); }
    else { v.play(); setPlaying(true); }
  };

  return (
    <motion.div
      layout
      whileHover={{ y: -4 }}
      className="glow-card rounded-2xl overflow-hidden"
      style={{ border: `1px solid ${video.color}44` }}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      {/* Video area */}
      <div style={{ position: 'relative', paddingBottom: '56.25%' }}>
        {/* Cyan gradient background shown when not playing */}
        {!playing && (
          <div
            style={{
              position: 'absolute', inset: 0,
              background: `linear-gradient(135deg, rgba(0,255,231,0.15) 0%, rgba(0,180,160,0.25) 50%, rgba(0,100,120,0.3) 100%)`,
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer',
            }}
            onClick={toggle}
          >
            {/* Animated glow ring */}
            <motion.div
              animate={{ scale: hovering ? [1, 1.15, 1] : 1 }}
              transition={{ duration: 0.8, repeat: hovering ? Infinity : 0 }}
              style={{
                width: 72, height: 72, borderRadius: '50%',
                background: `rgba(0,255,231,0.15)`,
                border: `2px solid ${video.color}88`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: `0 0 30px ${video.color}44, 0 0 60px ${video.color}22`,
              }}
            >
              <div style={{
                width: 52, height: 52, borderRadius: '50%',
                background: `${video.color}33`,
                border: `1.5px solid ${video.color}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 22, color: video.color,
              }}>
                ▶
              </div>
            </motion.div>

            <p style={{
              marginTop: 14,
              fontSize: 11, fontFamily: 'monospace',
              color: `${video.color}cc`,
              letterSpacing: '0.1em',
            }}>
              CLICK TO PLAY
            </p>

            {/* Decorative grid lines */}
            <div style={{
              position: 'absolute', inset: 0, pointerEvents: 'none',
              backgroundImage: `
                linear-gradient(rgba(0,255,231,0.04) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0,255,231,0.04) 1px, transparent 1px)
              `,
              backgroundSize: '30px 30px',
            }} />

            {/* Corner accents */}
            <div style={{ position:'absolute', top:10, left:10, width:20, height:20, borderTop:`1.5px solid ${video.color}88`, borderLeft:`1.5px solid ${video.color}88` }} />
            <div style={{ position:'absolute', top:10, right:10, width:20, height:20, borderTop:`1.5px solid ${video.color}88`, borderRight:`1.5px solid ${video.color}88` }} />
            <div style={{ position:'absolute', bottom:10, left:10, width:20, height:20, borderBottom:`1.5px solid ${video.color}88`, borderLeft:`1.5px solid ${video.color}88` }} />
            <div style={{ position:'absolute', bottom:10, right:10, width:20, height:20, borderBottom:`1.5px solid ${video.color}88`, borderRight:`1.5px solid ${video.color}88` }} />
          </div>
        )}

        {/* Actual video element */}
        <video
          ref={videoRef}
          src={video.src}
          preload="metadata"
          playsInline
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
            objectFit: 'cover',
            display: playing ? 'block' : 'none',
          }}
          onEnded={() => setPlaying(false)}
        />

        {/* Pause overlay when playing + hovering */}
        {playing && hovering && (
          <div
            className="absolute inset-0 flex items-center justify-center cursor-pointer"
            style={{ background: 'rgba(0,0,0,0.25)' }}
            onClick={toggle}
          >
            <div style={{
              width: 52, height: 52, borderRadius: '50%',
              background: 'rgba(0,0,0,0.6)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 18, color: 'white',
              border: '1.5px solid rgba(255,255,255,0.3)',
            }}>
              ⏸
            </div>
          </div>
        )}

        {/* HD badge */}
        <div style={{
          position: 'absolute', top: 10, right: 10,
          background: `${video.color}22`,
          border: `1px solid ${video.color}66`,
          borderRadius: 4,
          padding: '2px 8px',
          fontSize: 10, fontFamily: 'monospace',
          color: video.color,
          display: playing ? 'block' : 'none',
        }}>
          HD
        </div>
      </div>

      {/* Info */}
      <div className="p-4">
        <h3 className="font-mono font-bold text-white text-sm mb-1">{video.title}</h3>
        <p className="text-[rgba(226,235,240,0.5)] text-xs mb-3">{video.desc}</p>
        <div className="flex flex-wrap gap-1">
          {video.tags.map(tag => (
            <span key={tag} style={{
              fontSize: 10, fontFamily: 'monospace',
              padding: '2px 8px', borderRadius: 4,
              background: `${video.color}11`,
              border: `1px solid ${video.color}33`,
              color: video.color,
            }}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// ════════════════════════════════════════════════════════════════
// MAIN COMPONENT
// ════════════════════════════════════════════════════════════════
const TABS = [
  { id: 'projects', label: 'Projects', icon: '💻', count: PROJECTS.length },
  { id: 'songs',    label: 'Fav-Songs',    icon: '🎵', count: SONGS.length },
  { id: 'videos',   label: '3D Video', icon: '🎬', count: VIDEOS.length },
];

export default function Projects3Tab() {
  const [active,         setActive]         = useState('projects');
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = activeCategory === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="relative z-10 py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="section-label mb-3">[ 03 ] — Projects</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            My <span className="gradient-text">Work</span>
          </h2>
          <div className="cyan-divider mx-auto mb-4" />
          <p className="text-[rgba(226,235,240,0.5)] text-sm">
            Projects · Music · Creative Videos
          </p>
        </div>

        {/* Main Tab switcher */}
        <div className="flex justify-center gap-2 mb-10">
          {TABS.map(tab => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActive(tab.id)}
              className={`relative z-10 flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-mono transition-all duration-200 ${
                active === tab.id
                  ? 'bg-[rgba(0,255,231,0.12)] border border-[rgba(0,255,231,0.5)] text-[#00FFE7]'
                  : 'bg-[rgba(7,16,32,0.6)] border border-[rgba(0,255,231,0.1)] text-[rgba(226,235,240,0.4)] hover:border-[rgba(0,255,231,0.3)] hover:text-[rgba(226,235,240,0.7)]'
              }`}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
              <span style={{
                fontSize: 10,
                padding: '1px 6px', borderRadius: 10,
                background: active === tab.id ? 'rgba(0,255,231,0.2)' : 'rgba(255,255,255,0.08)',
                color: active === tab.id ? '#00FFE7' : 'rgba(226,235,240,0.4)',
              }}>
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
          >

            {/* ── Projects Tab ── */}
            {active === 'projects' && (
              <>
                {/* Category filter */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-wrap justify-center gap-2 mb-10"
                >
                  {CATEGORIES.map(cat => (
                    <button
                      key={cat.id}
                      type="button"
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

                {/* Project cards */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeCategory}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-wrap justify-center gap-6"
                  >
                    {filteredProjects.map((project, i) => (
                      <FlipCard
                        key={project.id}
                        project={project}
                        i={i}
                        categoryIcon={CATEGORY_ICONS[project.category]}
                      />
                    ))}
                  </motion.div>
                </AnimatePresence>

                {/* GitHub CTA */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="mt-16 text-center"
                >
                  <p className="text-[rgba(226,235,240,0.35)] font-mono text-xs mb-4 tracking-widest">— MORE ON GITHUB —</p>
                  <a
                    href="https://github.com/Nixzouxu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    <FaGithub size={14} />
                    Visit My GitHub
                  </a>
                </motion.div>
              </>
            )}

            {/* ── Songs Tab ── */}
            {active === 'songs' && (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {SONGS.map((s, i) => (
                  <motion.div
                    key={s.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <SongCard song={s} />
                  </motion.div>
                ))}
              </div>
            )}

            {/* ── Videos Tab ── */}
            {active === 'videos' && (
              <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
                {VIDEOS.map((v, i) => (
                  <motion.div
                    key={v.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <VideoCard video={v} />
                  </motion.div>
                ))}
              </div>
            )}

          </motion.div>
        </AnimatePresence>
      </div>

      <style>{`
        @keyframes subtlePulse {
          0%, 100% { transform: scale(1); }
          50%       { transform: scale(1.02); }
        }
        @keyframes eq1 { from { height: 6px;  } to { height: 16px; } }
        @keyframes eq2 { from { height: 10px; } to { height: 20px; } }
        @keyframes eq3 { from { height: 4px;  } to { height: 14px; } }
      `}</style>
    </section>
  );
}