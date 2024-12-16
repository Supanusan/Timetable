/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        blink: {
          '0%, 100%': { transform: 'scale(1.1)' },
          '50%': { transform: 'scale(1)' },
        },
      },
      animation: {
        'blink-animation': 'blink 1s infinite',
      },
    },
  },
  plugins: [],
};
