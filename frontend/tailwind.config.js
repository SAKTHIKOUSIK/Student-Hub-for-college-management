// // /** @type {import('tailwindcss').Config} */
// // module.exports = {
// //   content: [
// //     "./src/**/*.{js,jsx,ts,tsx}",
// //   ],
// //   theme: {
// //     extend: {},
// //   },
// //   plugins: [],
// // }

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",  // This ensures Tailwind applies its styles to all files in the 'src' folder.
//   ],
//   theme: {
//     extend: {
//       animation: {
//         fadeIn: 'fadeIn 2s ease-in-out',
//         slideIn: 'slideIn 1s ease-in-out',
//       },
//       keyframes: {
//         fadeIn: {                                         
//           '0%': { opacity: '0' },
//           '100%': { opacity: '1' },
//         },
//         slideIn: {
//           '0%': { transform: 'translateX(-100%)' },
//           '100%': { transform: 'translateX(0)' },
//         },
//       },
//     },
//   },
//   plugins: [],
// }



/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", 
    "./src/**/*.{js,jsx,ts,tsx}", // This ensures Tailwind applies its styles to all files in the 'src' folder.
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#f7ba34",
        secondary: "#69a79c",
        light: "#f7f7f7",
        dark: "#333333",
        dark2: "#999999",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      animation: {
        fadeIn: 'fadeIn 2s ease-in-out',
        slideIn: 'slideIn 1s ease-in-out',
      },
      keyframes: {
        fadeIn: {                                          // Keyframes for fadeIn animation
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {                                       // Keyframes for slideIn animation
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
};
