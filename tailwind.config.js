/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0d0d0d',
        wine: {
          900: '#2a0a12',
          800: '#3d0f1c',
          700: '#5a1626',
          600: '#7a1f33',
          500: '#9c2a44',
        },
        ember: {
          700: '#7a2e1a',
          600: '#9c3d22',
          500: '#b84a2a',
        },
        cream: '#e8dcc4',
        aged: '#c9bfa3',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
