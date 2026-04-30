/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        rajdhani: ['Rajdhani', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        shadow: {
          black:   '#050008',
          dark:    '#0a000f',
          deep:    '#0d0018',
          purple:  '#1a0030',
          mid:     '#2d0050',
          accent:  '#6b21a8',
          violet:  '#7c3aed',
          neon:    '#a855f7',
          blue:    '#3b82f6',
          neonBlue:'#60a5fa',
          glow:    '#c084fc',
        },
      },
      animation: {
        'float':      'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'shimmer':    'shimmer 2.5s linear infinite',
        'scan':       'scan 4s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-14px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%':      { opacity: '1',   transform: 'scale(1.04)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        scan: {
          '0%':   { top: '0%'   },
          '100%': { top: '100%' },
        },
      },
      backgroundImage: {
        'dungeon': "radial-gradient(ellipse at top, #1a003080 0%, #050008 70%)",
      },
      boxShadow: {
        'neon':      '0 0 12px rgba(168,85,247,0.6), 0 0 28px rgba(168,85,247,0.25)',
        'neon-blue': '0 0 12px rgba(96,165,250,0.6), 0 0 28px rgba(96,165,250,0.25)',
        'neon-lg':   '0 0 20px rgba(168,85,247,0.8), 0 0 50px rgba(168,85,247,0.3)',
        'glass':     '0 8px 32px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.05)',
        'card':      '0 4px 24px rgba(0,0,0,0.5), 0 0 0 1px rgba(168,85,247,0.15)',
        'card-hover':'0 8px 40px rgba(0,0,0,0.7), 0 0 30px rgba(168,85,247,0.35), 0 0 0 1px rgba(168,85,247,0.4)',
      },
    },
  },
  plugins: [],
}
