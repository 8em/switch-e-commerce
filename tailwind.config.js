/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      sm: '13px',
      '2xl': '48px'
    },
    extend: {
      fontFamily: {
        'eUkraine-medium': ['eUkraine-medium', 'sans-serif'],
        'eUkraine-regular': ['eUkraine-regular', 'sans-serif']
      }
    }
  },
  plugins: []
}
