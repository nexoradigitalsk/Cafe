/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFBF7',
          100: '#F8F4EC',
          200: '#EFE8DC',
          300: '#E2D6C3',
          400: '#D1C0A5',
        },
        espresso: {
          700: '#432E22',
          800: '#2C1D15',
          900: '#1C120C',
          950: '#120B07',
        },
        charcoal: {
          800: '#282421',
          900: '#1C1917',
          950: '#121110',
        },
        caramel: {
          300: '#E5C483',
          400: '#D5AD60',
          500: '#C59A45',
          600: '#A97D30',
          700: '#865E1E',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(28, 18, 12, 0.05), 0 2px 6px -1px rgba(28, 18, 12, 0.03)',
        'soft-lg': '0 12px 30px -4px rgba(28, 18, 12, 0.08), 0 4px 12px -2px rgba(28, 18, 12, 0.04)',
        'soft-xl': '0 20px 40px -6px rgba(28, 18, 12, 0.12), 0 8px 16px -4px rgba(28, 18, 12, 0.06)',
        'dark-soft': '0 12px 30px -4px rgba(0, 0, 0, 0.4)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
