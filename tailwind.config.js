/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
       
        wiggle: 'wiggle 25s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}