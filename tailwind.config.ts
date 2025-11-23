/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-space)", "sans-serif"],
      },
      colors: {
        lipeti: {
          50: '#effbfe',
          100: '#cbf3fc',
          200: '#9ae8fa',
          300: '#5cd8f6',
          400: '#22c1ed', // Ciano Brilhante
          500: '#06a6d3',
          600: '#0688b4',
          700: '#0e6c92', // Azul Royal
          800: '#145876',
          900: '#154962',
          950: '#083145',
        },
        royal: {
          500: '#2563EB',
          600: '#1D4ED8',
          900: '#1e3a8a',
        },
        dark: {
          900: '#020617',
          800: '#0f172a',
          950: '#02040a',
        }
      },
      backgroundImage: {
        'hero-glow': 'conic-gradient(from 90deg at 50% 50%, #00000000 50%, #0ea5e9 100%)',
        'grid-pattern': "linear-gradient(to right, #1e293b 1px, transparent 1px), linear-gradient(to bottom, #1e293b 1px, transparent 1px)",
      }
    },
  },
  plugins: [],
}
