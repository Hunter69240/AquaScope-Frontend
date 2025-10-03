/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, rgba(213, 242, 251, 1) 0%, rgba(247, 248, 255, 1) 100%)',
      },
    },
  },
  plugins: [],
}
