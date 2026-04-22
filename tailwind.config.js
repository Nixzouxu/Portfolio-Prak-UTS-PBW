/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyan: {
          glow: '#00FFE7',
          DEFAULT: '#00D4C8',
          dark: '#00A8A0',
          light: '#80FFF3',
          dim: '#00FFE720',
        },
        dark: {
          DEFAULT: '#050A0E',
          lighter: '#0A1628',
          card: '#071020',
          border: '#0D2137',
        }
      },
      fontFamily: {
        display: ['Syne', 'system-ui', 'sans-serif'],
        body: ['DM Sans', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'glow-sm': '0 0 10px rgba(0, 255, 231, 0.3)',
        'glow': '0 0 25px rgba(0, 255, 231, 0.4)',
        'glow-lg': '0 0 50px rgba(0, 255, 231, 0.5)',
        'glow-xl': '0 0 80px rgba(0, 255, 231, 0.6)',
        'inner-glow': 'inset 0 0 30px rgba(0, 255, 231, 0.1)',
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(rgba(0,255,231,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,231,0.03) 1px, transparent 1px)',
        'radial-glow': 'radial-gradient(ellipse at center, rgba(0,255,231,0.15) 0%, transparent 70%)',
      },
      backgroundSize: {
        'grid': '60px 60px',
      },
      animation: {
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'scan': 'scan 3s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'flicker': 'flicker 4s linear infinite',
        'border-spin': 'borderSpin 4s linear infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '1', filter: 'brightness(1)' },
          '50%': { opacity: '0.8', filter: 'brightness(1.4)' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        flicker: {
          '0%, 100%': { opacity: '1' },
          '33%': { opacity: '0.85' },
          '66%': { opacity: '0.95' },
        },
        borderSpin: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
      },
    },
  },
  plugins: [],
}
