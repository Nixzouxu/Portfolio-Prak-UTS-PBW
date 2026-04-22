import { useEffect, useState } from 'react';

const SECRET = 'nxozu';

// Partikel burst saat easter egg aktif
function Burst({ x, y }) {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    angle: (i / 20) * 360,
    dist:  60 + Math.random() * 80,
    color: ['#00FFE7','#A78BFA','#FFD700','#FF6B9D'][Math.floor(Math.random()*4)],
    size:  2 + Math.random() * 4,
  }));

  return (
    <div style={{ position: 'fixed', left: x, top: y, zIndex: 99998, pointerEvents: 'none' }}>
      {particles.map((p, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            width: p.size, height: p.size,
            borderRadius: '50%',
            background: p.color,
            boxShadow: `0 0 6px ${p.color}`,
            transform: `rotate(${p.angle}deg) translateX(${p.dist}px)`,
            animation: 'burst 0.8s ease-out forwards',
          }}
        />
      ))}
    </div>
  );
}

export default function EasterEgg() {
  const [typed, setTyped]   = useState('');
  const [active, setActive] = useState(false);
  const [bursts, setBursts] = useState([]);

  useEffect(() => {
    const onKey = (e) => {
      const next = (typed + e.key).slice(-SECRET.length);
      setTyped(next);
      if (next === SECRET) {
        setActive(true);
        // Buat beberapa burst di posisi random
        setBursts(Array.from({ length: 8 }, () => ({
          id:   Math.random(),
          x:    Math.random() * window.innerWidth,
          y:    Math.random() * window.innerHeight,
        })));
        setTimeout(() => { setActive(false); setBursts([]); }, 4000);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [typed]);

  if (!active) return null;

  return (
    <>
      <style>{`
        @keyframes burst {
          0%   { opacity:1; transform: rotate(var(--a)) translateX(0); }
          100% { opacity:0; transform: rotate(var(--a)) translateX(var(--d)); }
        }
        @keyframes eggFadeIn {
          from { opacity:0; transform:translate(-50%,-50%) scale(0.7); }
          to   { opacity:1; transform:translate(-50%,-50%) scale(1); }
        }
        @keyframes eggFadeOut {
          from { opacity:1; }
          to   { opacity:0; }
        }
        @keyframes glitch {
          0%,100% { clip-path: inset(0 0 100% 0); transform: skewX(0deg); }
          10%     { clip-path: inset(10% 0 60% 0); transform: skewX(-5deg); }
          30%     { clip-path: inset(40% 0 20% 0); transform: skewX(3deg); }
          60%     { clip-path: inset(70% 0 5% 0);  transform: skewX(-2deg); }
          80%     { clip-path: inset(20% 0 50% 0); transform: skewX(4deg); }
        }
      `}</style>

      {/* Burst particles */}
      {bursts.map(b => <Burst key={b.id} x={b.x} y={b.y} />)}

      {/* Flash overlay */}
      <div style={{
        position: 'fixed', inset: 0, zIndex: 99997,
        background: 'rgba(0,255,231,0.05)',
        pointerEvents: 'none',
        animation: 'eggFadeOut 3s ease forwards 1s',
      }} />

      {/* Secret message card */}
      <div style={{
        position: 'fixed',
        top: '50%', left: '50%',
        transform: 'translate(-50%,-50%)',
        zIndex: 99999,
        animation: 'eggFadeIn 0.4s cubic-bezier(0.34,1.56,0.64,1) forwards',
        pointerEvents: 'none',
      }}>
        <div style={{
          background: 'rgba(5,10,14,0.95)',
          border: '1px solid rgba(0,255,231,0.4)',
          borderRadius: 16,
          padding: '40px 48px',
          textAlign: 'center',
          boxShadow: '0 0 60px rgba(0,255,231,0.2), 0 0 120px rgba(124,58,237,0.15)',
          maxWidth: 400,
        }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>✦</div>
          <p style={{
            fontFamily: 'monospace', fontSize: 11,
            color: 'rgba(0,255,231,0.6)',
            letterSpacing: '0.2em', textTransform: 'uppercase',
            marginBottom: 8,
          }}>
            — secret unlocked —
          </p>
          <h2 style={{
            fontFamily: 'monospace',
            fontSize: 28, fontWeight: 700,
            color: '#00FFE7',
            marginBottom: 8,
            textShadow: '0 0 20px rgba(0,255,231,0.8)',
          }}>
            NXOZU
          </h2>
          <p style={{
            fontFamily: 'monospace', fontSize: 13,
            color: 'rgba(226,235,240,0.6)',
            lineHeight: 1.6,
          }}>
            You found the easter egg.<br />
            <span style={{ color: '#FFD700' }}>Muhammad Hafidz</span> thanks you<br />
            for exploring every corner. 🌙
          </p>
          <p style={{
            fontFamily: 'monospace', fontSize: 10,
            color: 'rgba(226,235,240,0.25)',
            marginTop: 20,
          }}>
            typed: n → x → o → z → u ✓
          </p>
        </div>
      </div>
    </>
  );
}