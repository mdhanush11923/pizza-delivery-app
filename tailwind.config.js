import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      purple: "#3f3cbb",
      midnight: "#121063",
      metal: "#565584",
      limefrost: "#B4E380",
      veggreen: "#C3FF93",
      lemonburst: "#FFFF80",
      myhouseblue: "#4C5D65",
      peachblossom: "#fadfa1",
      reddanger: "#FF204E",
      charcoalgray: "#424242",
    },
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  darkMode: "class",
  darkMode: "class",
 plugins: [nextui()],
};
