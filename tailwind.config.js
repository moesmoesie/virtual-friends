/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    screens: {
      sm: "768px",
      md: "1024px",
      lg: "1440px",
    },

    extend: {
      width: {
        sidebar: "10px",
      },

      fontFamily: {
        sans: ["var(--font-dm-sans)"],
        mono: ["var(--font-dm-mono)"],
      },
    },

    container: {
      center: true,
      screens: {},
      padding: {
        DEFAULT: "1.5rem",
        sm: "2rem",
        md: "3rem",
        lg: "4rem",
      },
    },
  },
  plugins: [],
};
