/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FFFFFF',
          100: '#FDFBF7',
          200: '#F5F0E6',
          300: '#EAE1D0',
          400: '#DACBB5',
        },
        noir: {
          DEFAULT: '#050505',
          card: '#0D0D0D',
          border: '#1A1A1A',
          muted: '#2A2A2A',
        },
        gold: {
          light: '#F3E5AB',
          DEFAULT: '#D4AF37',
          dark: '#AA7C11',
          bronze: '#8C6D23',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Cormorant Garamond', 'serif'],
        sans: ['Poppins', 'Inter', 'sans-serif'],
      },
      letterSpacing: {
        widest: '.25em',
        ultra: '.45em',
      }
    },
  },
  plugins: [],
};
