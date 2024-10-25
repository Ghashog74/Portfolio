/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [
    require('tailwind-hamburgers'),
  ],
  darkMode: 'class',
  content: ["./*.{html,js}"],
  theme: {
    fontFamily: {
      'Poppins': ['Poppins', 'sans-serif'],
      'Afacad-flux': ['Afacad Flux', 'sans-serif'],
    },
    extend: {
      colors: {
        'text': 'var(--text)',
        'background': 'var(--background)',
        'primary': 'var(--primary)',
        'secondary': 'var(--secondary)',
        'accent': 'var(--accent)',
        'linkedin': 'var(--linkedin)',
       },
       backgroundImage: {
        'background-noise': "url('/img/nnnoise.svg')",

      },       
    },
  },
  plugins: [],
}
