import { useEffect, useRef, useState } from 'react';

const TRAIL_LENGTH = 12;

export default function CustomCursor() {
  const dotRef   = useRef(null);
  const ringRef  = useRef(null);
  const trailRef = useRef([]);
  const posRef   = useRef({ x: -100, y: -100 });
  const [clicking, setClicking] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    // Sembunyikan cursor default
    document.body.style.cursor = 'none';

    // Buat trail dots
    const trails = Array.from({ length: TRAIL_LENGTH }, (_, i) => {
      const el = document.createElement('div');
      el.style.cssText = `
        position: fixed;
        width: ${6 - i * 0.35}px;
        height: ${6 - i * 0.35}px;
        border-radius: 50%;
        background: rgba(0,255,231,${0.5 - i * 0.04});
        pointer-events: none;
        z-index: 9998;
        transform: translate(-50%,-50%);
        transition: none;
        mix-blend-mode: screen;
      `;
      document.body.appendChild(el);
      return { el, x: -100, y: -100 };
    });
    trailRef.current = trails;

    let animId;
    let ringX = -100, ringY = -100;

    const move = (e) => {
      posRef.current = { x: e.clientX, y: e.clientY };

      // dot ikut langsung
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX + 'px';
        dotRef.current.style.top  = e.clientY + 'px';
      }

      // cek hover di atas elemen interaktif
      const target = e.target;
      const isInteractive = target.closest('a,button,input,textarea,[role="button"]');
      setHovering(!!isInteractive);
    };

    const animate = () => {
      const { x, y } = posRef.current;

      // ring mengikuti dengan smooth lag
      ringX += (x - ringX) * 0.12;
      ringY += (y - ringY) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.left = ringX + 'px';
        ringRef.current.style.top  = ringY + 'px';
      }

      // trail: setiap elemen ikut elemen sebelumnya
      let prevX = x, prevY = y;
      trailRef.current.forEach((t, i) => {
        const lag = 0.35 - i * 0.02;
        t.x += (prevX - t.x) * Math.max(lag, 0.05);
        t.y += (prevY - t.y) * Math.max(lag, 0.05);
        t.el.style.left = t.x + 'px';
        t.el.style.top  = t.y + 'px';
        prevX = t.x;
        prevY = t.y;
      });

      animId = requestAnimationFrame(animate);
    };
    animate();

    window.addEventListener('mousemove', move);
    window.addEventListener('mousedown', () => setClicking(true));
    window.addEventListener('mouseup',   () => setClicking(false));

    return () => {
      document.body.style.cursor = '';
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', move);
      trailRef.current.forEach(t => t.el.remove());
    };
  }, []);

  return (
    <>
      {/* Dot utama */}
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          width:  clicking ? '6px' : hovering ? '10px' : '8px',
          height: clicking ? '6px' : hovering ? '10px' : '8px',
          background: '#00FFE7',
          borderRadius: '50%',
          transform: 'translate(-50%,-50%)',
          pointerEvents: 'none',
          zIndex: 9999,
          boxShadow: '0 0 8px #00FFE7, 0 0 20px rgba(0,255,231,0.5)',
          transition: 'width 0.15s, height 0.15s, background 0.15s',
          mixBlendMode: 'screen',
        }}
      />

      {/* Ring luar */}
      <div
        ref={ringRef}
        style={{
          position: 'fixed',
          width:  hovering ? '44px' : clicking ? '22px' : '32px',
          height: hovering ? '44px' : clicking ? '22px' : '32px',
          border: `1.5px solid rgba(0,255,231,${hovering ? 0.8 : 0.4})`,
          borderRadius: '50%',
          transform: 'translate(-50%,-50%)',
          pointerEvents: 'none',
          zIndex: 9998,
          transition: 'width 0.2s, height 0.2s, border-color 0.2s',
          boxShadow: hovering ? '0 0 12px rgba(0,255,231,0.3)' : 'none',
        }}
      />
    </>
  );
}