/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:
      {
        sans:["joystix", "sans"]
      },
      keyframes: {
        'moving-background': {
          'from': {
            'background-position': '0 0',
          },
          'to': {
            'background-position': '-10000px 0',
          },
        },
      },
      animation:
      {
        'moving-background':'moving-background 250s linear infinite'
      }
    },
  },
  plugins: [],
}