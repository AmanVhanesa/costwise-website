/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f4f5',
          100: '#dce4e7',
          200: '#b8c9cf',
          300: '#94aeb7',
          400: '#70939f',
          500: '#4c7887',
          600: '#3d606c',
          700: '#2e4851',
          800: '#1f3036',
          900: '#112931',
        },
      },
      fontFamily: {
        sans: ['Mazzard Soft', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 