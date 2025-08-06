/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
   extend: {
  fontFamily: {
    playfair: ['"Playfair Display"', 'serif'],
    poppins: ['Poppins', 'sans-serif'],
  },
  keyframes: {
    fadeUp: {
      '0%': { opacity: '0', transform: 'translateY(20px)' },
      '100%': { opacity: '1', transform: 'translateY(0)' },
    },
    typewriter: {
      from: { width: '0' },
      to: { width: '100%' },
    },
    blink: {
      '0%, 100%': { opacity: '0' },
      '50%': { opacity: '1' },
    },
    hideCursor: {
      to: { opacity: '0' },
    },
    slideIn: {
      from: { transform: 'translate(-50%, 50%)', opacity: '0' },
      to: { transform: 'translate(0, 0)', opacity: '1' },
    },
    colorShift: {
      '0%, 100%': { color: '#d28c57' },
      '50%': { color: '#a67b5b' },
    },
  },
  animation: {
    'fade-up': 'fadeUp 1.5s ease forwards',
    typewriter: 'typewriter 3s steps(40, end) forwards',
    blink: 'blink 0.7s steps(2, start) infinite',
    'hide-cursor': 'hideCursor 0s 3.1s forwards',
    'slide-in': 'slideIn 1s ease-out forwards',
    'color-shift': 'colorShift 3s ease-in-out infinite',
  },
},

  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: ["dark"],
  },
};
