/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      Animation: {
        scroll: "scroll 20s linear infinite",
      },

      screens: {
        deb: "1000px",
        deb1: "1400px",
      },
      height: {
        "80vh": "80vh",
      },
      width: {
        "90vw": "90vw",
      },
    },
  },
  plugins: [],
};
