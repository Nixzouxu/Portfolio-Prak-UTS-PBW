import { useEffect, useRef } from 'react';

const PARTICLE_COUNT = 80;
const MAX_DISTANCE   = 140;
const PARTICLE_SPEED = 0.4;
const COLORS = ['#00FFE7', '#00A8A0', '#7C3AED', '#A78BFA'];

function random(min, max) {
  return Math.random() * (max - min) + min;
}

export default function ParticleBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx    = canvas.getContext('2d');
    let animId;
    let W, H;
    let particles = [];

    // ── resize ────────────────────────────────────────────────
    const resize = () => {
      W = canvas.width  = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // ── mouse pos (untuk interactive repel) ──────────────────
    let mouse = { x: -9999, y: -9999 };
    const onMouseMove = (e) => { mouse.x = e.clientX; mouse.y = e.clientY; };
    window.addEventListener('mousemove', onMouseMove);

    // ── buat partikel ─────────────────────────────────────────
    const createParticles = () => {
      particles = Array.from({ length: PARTICLE_COUNT }, () => ({
        x:    random(0, W),
        y:    random(0, H),
        vx:   random(-PARTICLE_SPEED, PARTICLE_SPEED),
        vy:   random(-PARTICLE_SPEED, PARTICLE_SPEED),
        r:    random(1, 2.5),
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        alpha: random(0.3, 0.9),
      }));
    };
    createParticles();

    // ── draw loop ─────────────────────────────────────────────
    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      // update posisi
      particles.forEach(p => {
        // repel from mouse
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 100) {
          p.vx += (dx / dist) * 0.3;
          p.vy += (dy / dist) * 0.3;
        }

        // speed limit
        const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        if (speed > 1.5) { p.vx *= 0.95; p.vy *= 0.95; }

        p.x += p.vx;
        p.y += p.vy;

        // wrap edges
        if (p.x < 0) p.x = W;
        if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H;
        if (p.y > H) p.y = 0;
      });

      // gambar garis antar partikel
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i], b = particles[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_DISTANCE) {
            const opacity = (1 - dist / MAX_DISTANCE) * 0.35;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0,255,231,${opacity})`;
            ctx.lineWidth   = 0.6;
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // gambar titik partikel
      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color + Math.floor(p.alpha * 255).toString(16).padStart(2, '0');
        ctx.fill();

        // glow kecil
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 2.5, 0, Math.PI * 2);
        const glow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 2.5);
        glow.addColorStop(0, p.color + '33');
        glow.addColorStop(1, 'transparent');
        ctx.fillStyle = glow;
        ctx.fill();
      });

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0, left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
        opacity: 0.6,
      }}
    />
  );
}