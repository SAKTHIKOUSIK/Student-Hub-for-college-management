// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",  // This ensures Tailwind applies its styles to all files in the 'src' folder.
  ],
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 2s ease-in-out',
        slideIn: 'slideIn 1s ease-in-out',
      },
      keyframes: {
        fadeIn: {                                         
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
