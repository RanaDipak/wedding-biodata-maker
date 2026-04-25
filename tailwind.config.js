/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        script: ['"Great Vibes"', 'cursive'],
        devanagari: ['"Tiro Devanagari Hindi"', 'serif'],
      },
      colors: {
        saffron: '#FF9933',
        maroon: '#800020',
        gold: '#D4AF37',
        cream: '#FFF8E7',
      },
    },
  },
  plugins: [],
}
