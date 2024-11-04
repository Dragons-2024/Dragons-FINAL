/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4A5FD9',
        secondary: '#1E2759',
        accent: '#7E8FF2',
        light: '#F2F2F2',
        dark: '#0D0D0D',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      }   
    },
  },
  plugins: [],
}