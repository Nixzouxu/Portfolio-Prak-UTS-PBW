// TerminalIntro.jsx
// Taruh di: src/components/TerminalIntro.jsx
//
// Di App.jsx, wrap seluruh konten:
//
// import TerminalIntro from './components/TerminalIntro'
// import { useState } from 'react'
//
// function App() {
//   const [done, setDone] = useState(false)
//   if (!done) return <TerminalIntro onDone={() => setDone(true)} />
//   return ( ...isi portfolio kamu... )
// }

import { useEffect, useState } from 'react';

const LINES = [
  { text: 'NXOZU OS v2.0 — initializing...', delay: 0,    color: '#00FFE7' },
  { text: '> checking system...', delay: 500,  color: '#A78BFA' },
  { text: '> loading modules: [react] [tailwind] [framer]', delay: 1000, color: '#A78BFA' },
  { text: '> fetching portfolio data...', delay: 1600, color: '#A78BFA' },
  { text: '██████████████████████ 100%', delay: 2200, color: '#00FFE7', isBar: true },
  { text: '> mounting components... OK', delay: 2900, color: '#4ADE80' },
  { text: '> establishing connection... OK', delay: 3300, color: '#4ADE80' },
  { text: '> all systems nominal.', delay: 3700, color: '#4ADE80' },
  { text: '', delay: 4100, color: '' },
  { text: '  Welcome to the portfolio of Muhammad Hafidz', delay: 4200, color: '#00FFE7' },
  { text: '  aka NXOZU ✦', delay: 4600, color: '#FFD700' },
];

// Animasi progress bar
function ProgressBar({ active }) {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    if (active) {
      let w = 0;
      const iv = setInterval(() => {
        w += 2;
        setWidth(w);
        if (w >= 100) clearInterval(iv);
      }, 12);
      return () => clearInterval(iv);
    }
  }, [active]);

  return (
    <div className="flex items-center gap-3 mt-1">
      <div className="flex-1 h-1.5 bg-[rgba(0,255,231,0.1)] rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all"
          style={{
            width: `${width}%`,
            background: 'linear-gradient(90deg, #00FFE7, #7C3AED)',
            boxShadow: '0 0 8px rgba(0,255,231,0.6)',
          }}
        />
      </div>
      <span className="text-[#00FFE7] font-mono text-xs w-8">{width}%</span>
    </div>
  );
}

// Typing text effect
function TypedLine({ text, color, isBar, onDone }) {
  const [shown, setShown] = useState('');
  const [barActive, setBarActive] = useState(false);

  useEffect(() => {
    if (!text) { onDone?.(); return; }
    if (isBar) { setBarActive(true); setTimeout(onDone, 800); return; }

    let i = 0;
    const iv = setInterval(() => {
      setShown(text.slice(0, i + 1));
      i++;
      if (i >= text.length) { clearInterval(iv); onDone?.(); }
    }, 18);
    return () => clearInterval(iv);
  }, []);

  if (isBar) return <ProgressBar active={barActive} />;
  return (
    <p className="font-mono text-sm leading-relaxed" style={{ color }}>
      {shown}
      <span className="animate-pulse">▌</span>
    </p>
  );
}

export default function TerminalIntro({ onDone }) {
  const [visibleLines, setVisibleLines] = useState([]);
  const [lineIndex, setLineIndex]       = useState(0);
  const [exiting, setExiting]           = useState(false);
  const [skipAnim, setSkipAnim]         = useState(false);

  // Mulai render baris satu per satu
  useEffect(() => {
    if (skipAnim) {
      setVisibleLines(LINES.map(l => ({ ...l, done: true })));
      setTimeout(() => { setExiting(true); setTimeout(onDone, 600); }, 800);
      return;
    }

    const timers = LINES.map((line, i) =>
      setTimeout(() => {
        setVisibleLines(prev => [...prev, { ...line, id: i }]);
        setLineIndex(i);
      }, line.delay)
    );

    // Setelah semua selesai, exit
    const totalDelay = LINES[LINES.length - 1].delay + 1800;
    const exitTimer = setTimeout(() => {
      setExiting(true);
      setTimeout(onDone, 700);
    }, totalDelay);

    return () => {
      timers.forEach(clearTimeout);
      clearTimeout(exitTimer);
    };
  }, [skipAnim]);

  return (
    <div
      style={{
        position: 'fixed', inset: 0, zIndex: 99999,
        background: '#050A0E',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        opacity: exiting ? 0 : 1,
        transition: 'opacity 0.7s ease',
      }}
    >
      {/* Scanline overlay */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,231,0.015) 2px, rgba(0,255,231,0.015) 4px)',
      }} />

      <div className="w-full max-w-2xl mx-4">
        {/* Terminal window */}
        <div style={{
          border: '1px solid rgba(0,255,231,0.25)',
          borderRadius: '12px',
          overflow: 'hidden',
          boxShadow: '0 0 60px rgba(0,255,231,0.08), 0 0 120px rgba(124,58,237,0.05)',
        }}>
          {/* Title bar */}
          <div style={{
            background: 'rgba(0,255,231,0.05)',
            borderBottom: '1px solid rgba(0,255,231,0.15)',
            padding: '10px 16px',
            display: 'flex', alignItems: 'center', gap: 8,
          }}>
            <div style={{ width:12, height:12, borderRadius:'50%', background:'#FF5F57' }} />
            <div style={{ width:12, height:12, borderRadius:'50%', background:'#FFBD2E' }} />
            <div style={{ width:12, height:12, borderRadius:'50%', background:'#28CA41' }} />
            <span style={{ marginLeft: 12, color: 'rgba(226,235,240,0.4)', fontSize: 12, fontFamily: 'monospace' }}>
              nxozu@portfolio ~ /boot
            </span>
          </div>

          {/* Terminal body */}
          <div style={{
            background: 'rgba(5,10,14,0.95)',
            padding: '24px',
            minHeight: '320px',
          }}>
            <div className="space-y-1">
              {visibleLines.map((line, i) => (
                <TypedLine
                  key={i}
                  text={line.text}
                  color={line.color}
                  isBar={line.isBar}
                  onDone={undefined}
                />
              ))}
            </div>

            {/* Blinking cursor setelah semua */}
            {visibleLines.length === LINES.length && (
              <p className="font-mono text-sm text-[#00FFE7] mt-2 animate-pulse">
                &gt; _
              </p>
            )}
          </div>
        </div>

        {/* Skip button */}
        <div className="text-center mt-4">
          <button
            type="button"
            onClick={() => setSkipAnim(true)}
            className="text-xs font-mono text-[rgba(226,235,240,0.3)] hover:text-[#00FFE7] transition-colors"
          >
            [ press to skip ]
          </button>
        </div>
      </div>
    </div>
  );
}