/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#FF5522', // Mission Orange
          sea: '#1A3545',    // Deep Sea
          blue: '#2A526A',   // Pacific Blue
          dust: '#F3F2EF',   // Dust
          tan: '#D0CBBF',    // Desert Tan
        }
      },
      fontFamily: {
        sans: ['Rubik', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
