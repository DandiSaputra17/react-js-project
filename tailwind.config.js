/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        indigoDye: "#094074",
        lapisLazuli: "#3c6997",
        vividSBlue: "#5adbff",
        mustard: "#ffdd4a",
        princetonOrange: "#fe9000",
        chiliRed: "#E23D28",
        gray900: "#18191F",
      },
    },
  },
  plugins: [],
};
