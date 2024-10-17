/** @type {import('tailwindcss').Config} */
module.exports = {
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
       },
       backgroundImage: {
        'background-dark': "url('/img/Background-dark.png')",
        'background-light': "url('/img/Background-light.png')",
      },       
    },
  },
  plugins: [],
}