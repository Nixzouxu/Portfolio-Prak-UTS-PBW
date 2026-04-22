// MusicPlayer.jsx
// Taruh di: src/components/MusicPlayer.jsx
// Import di App.jsx: import MusicPlayer from './components/MusicPlayer'
// Taruh <MusicPlayer /> di dalam div utama App (floating, tidak ganggu layout)
//
// POSISI: pojok KIRI BAWAH (terpisah dari Dark/White toggle di kanan atas)
//
// PENTING: Taruh file mp3 dan cover di folder public/:
//   public/music/Facedown.mp3
//   public/music/PHASES.mp3
//   public/music/The_Walls.mp3
//   public/covers/cover1.jpeg   (Facedown)
//   public/covers/cover2.jpeg   (PHASES)
//   public/covers/cover3.jpeg   (The Walls)

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TRACKS = [
  {
    title:  'Facedown',
    artist: 'Chase Atlantic',
    src:    '/music/Facedown.mp3',
    cover:  '/covers/cover1.jpeg',
    color:  '#00FFE7',
  },
  {
    title:  'PHASES',
    artist: 'Chase Atlantic',
    src:    '/music/PHASES.mp3',
    cover:  '/covers/cover2.jpeg',
    color:  '#A855F7',
  },
  {
    title:  'The Walls',
    artist: 'Chase Atlantic',
    src:    '/music/The_Walls.mp3',
    cover:  '/covers/cover3.jpeg',
    color:  '#EF4444',
  },
];

function formatTime(s) {
  if (isNaN(s)) return '0:00';
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${sec.toString().padStart(2, '0')}`;
}

export default function MusicPlayer() {
  const [expanded, setExpanded] = useState(false);
  const [trackIdx, setTrackIdx] = useState(0);
  const [playing,  setPlaying]  = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume,   setVolume]   = useState(0.7);
  const audioRef = useRef(null);
  const track = TRACKS[trackIdx];

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const onTime = () => setProgress(audio.currentTime);
    const onLoad = () => setDuration(audio.duration);
    const onEnd  = () => next();
    audio.addEventListener('timeupdate', onTime);
    audio.addEventListener('loadedmetadata', onLoad);
    audio.addEventListener('ended', onEnd);
    return () => {
      audio.removeEventListener('timeupdate', onTime);
      audio.removeEventListener('loadedmetadata', onLoad);
      audio.removeEventListener('ended', onEnd);
    };
  }, [trackIdx]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = volume;
  }, [volume]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) audio.play().catch(() => setPlaying(false));
    else audio.pause();
  }, [playing, trackIdx]);

  const toggle = () => setPlaying(p => !p);
  const next   = () => { setTrackIdx(i => (i + 1) % TRACKS.length); setProgress(0); };
  const prev   = () => { setTrackIdx(i => (i - 1 + TRACKS.length) % TRACKS.length); setProgress(0); };

  const seek = (e) => {
    const audio = audioRef.current;
    if (!audio || !duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = (e.clientX - rect.left) / rect.width;
    audio.currentTime = ratio * duration;
  };

  const progressPct = duration ? (progress / duration) * 100 : 0;

  return (
    <>
      <audio ref={audioRef} src={track.src} preload="metadata" />

      {/* ── POSISI: KIRI BAWAH ── */}
      <div style={{ position: 'fixed', bottom: 24, left: 24, zIndex: 9990 }}>
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0,  scale: 1 }}
              exit={{    opacity: 0, y: 20, scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              style={{
                marginBottom: 12,
                background: 'rgba(5,10,14,0.96)',
                border: `1px solid ${track.color}44`,
                borderRadius: 20,
                padding: 20,
                width: 280,
                boxShadow: `0 20px 60px rgba(0,0,0,0.5), 0 0 30px ${track.color}22`,
                backdropFilter: 'blur(20px)',
              }}
            >
              {/* Cover + info */}
              <div className="flex gap-4 mb-4">
                <div style={{
                  width: 64, height: 64, borderRadius: 10, overflow: 'hidden',
                  border: `1px solid ${track.color}44`,
                  flexShrink: 0,
                  animation: playing ? 'spin 8s linear infinite' : 'none',
                }}>
                  <img src={track.cover} alt={track.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-mono font-bold text-white text-sm truncate">{track.title}</p>
                  <p className="font-mono text-xs truncate" style={{ color: track.color }}>{track.artist}</p>
                  <p className="font-mono text-[10px] text-[rgba(226,235,240,0.3)] mt-1">
                    {formatTime(progress)} / {formatTime(duration)}
                  </p>
                </div>
              </div>

              {/* Progress bar */}
              <div
                className="h-1 rounded-full bg-[rgba(255,255,255,0.08)] mb-4 cursor-pointer"
                onClick={seek}
              >
                <div
                  className="h-full rounded-full transition-all"
                  style={{
                    width: `${progressPct}%`,
                    background: `linear-gradient(90deg, ${track.color}88, ${track.color})`,
                    boxShadow: `0 0 8px ${track.color}66`,
                  }}
                />
              </div>

              {/* Controls */}
              <div className="flex items-center justify-between mb-4">
                <button type="button" onClick={prev} className="relative z-10 text-[rgba(226,235,240,0.5)] hover:text-white transition-colors text-lg">
                  ⏮
                </button>
                <button
                  type="button"
                  onClick={toggle}
                  className="relative z-10 w-10 h-10 rounded-full flex items-center justify-center text-black font-bold text-sm transition-all hover:scale-110"
                  style={{ background: `linear-gradient(135deg, ${track.color}, ${track.color}cc)` }}
                >
                  {playing ? '⏸' : '▶'}
                </button>
                <button type="button" onClick={next} className="relative z-10 text-[rgba(226,235,240,0.5)] hover:text-white transition-colors text-lg">
                  ⏭
                </button>
              </div>

              {/* Volume */}
              <div className="flex items-center gap-2">
                <span className="text-xs">🔈</span>
                <input
                  type="range"
                  min="0" max="1" step="0.05"
                  value={volume}
                  onChange={e => setVolume(Number(e.target.value))}
                  className="relative z-10 flex-1 h-1 appearance-none bg-[rgba(255,255,255,0.1)] rounded-full cursor-pointer"
                  style={{ accentColor: track.color }}
                />
                <span className="text-xs">🔊</span>
              </div>

              {/* Track list */}
              <div className="mt-4 border-t border-[rgba(255,255,255,0.06)] pt-4 space-y-2">
                {TRACKS.map((t, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => { setTrackIdx(i); setPlaying(true); }}
                    className={`relative z-10 w-full flex items-center gap-3 px-2 py-1.5 rounded-lg transition-all text-left ${
                      i === trackIdx ? 'bg-[rgba(255,255,255,0.08)]' : 'hover:bg-[rgba(255,255,255,0.04)]'
                    }`}
                  >
                    <img src={t.cover} alt={t.title} style={{ width: 28, height: 28, borderRadius: 6, objectFit: 'cover' }} />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-mono text-white truncate">{t.title}</p>
                      <p className="text-[10px] font-mono text-[rgba(226,235,240,0.4)] truncate">{t.artist}</p>
                    </div>
                    {i === trackIdx && playing && (
                      <div className="flex gap-0.5 items-end h-4">
                        {[1, 2, 3].map(b => (
                          <div key={b} style={{
                            width: 3, borderRadius: 2,
                            background: t.color,
                            animation: `eq${b} 0.6s ease-in-out infinite alternate`,
                            height: `${8 + b * 4}px`,
                          }} />
                        ))}
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Floating bubble ── */}
        <motion.button
          type="button"
          onClick={() => setExpanded(e => !e)}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          style={{
            width: 56, height: 56,
            borderRadius: '50%',
            background: `linear-gradient(135deg, ${track.color}33, rgba(5,10,14,0.9))`,
            border: `1.5px solid ${track.color}66`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: playing
              ? `0 0 20px ${track.color}44, 0 0 40px ${track.color}22`
              : '0 4px 20px rgba(0,0,0,0.4)',
            transition: 'box-shadow 0.3s',
            overflow: 'hidden',
          }}
        >
          {playing ? (
            <img src={track.cover} alt="" style={{
              width: '100%', height: '100%', objectFit: 'cover',
              animation: 'spin 8s linear infinite',
              borderRadius: '50%',
            }} />
          ) : (
            <span style={{ fontSize: 22 }}>🎵</span>
          )}
        </motion.button>
      </div>

      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes eq1  { from { height: 6px;  } to { height: 14px; } }
        @keyframes eq2  { from { height: 10px; } to { height: 18px; } }
        @keyframes eq3  { from { height: 4px;  } to { height: 12px; } }
      `}</style>
    </>
  );
}