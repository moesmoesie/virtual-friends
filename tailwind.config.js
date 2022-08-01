const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./lib/blocks/**/*.{html,js,ts,tsx}",
    "./lib/pages/**/*.{html,js,ts,tsx}",
    "./lib/components/**/*.{html,js,ts,tsx}",
    "./pages/**/*.{html,js,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      display: ["Inter"],
      body: ["Roboto"],
    },
    screens: {
      touch: { raw: "(hover:none)" },
      small: "450px",
      medium: "768px",
      large: "1280px",
    },
    colors: {
      white: "#ffffff",
      black: "#000000",
      transparent: "transparent",
      "grey-900": "#101010",
      "grey-800": "#2c2c2c",
      "grey-700": "#484848",
      "grey-600": "#646464",
      "grey-500": "#808080",
      "grey-400": "#9a9a9a",
      "grey-300": "#b3b3b3",
      "grey-200": "#cccccc",
      "grey-100": "#e6e6e6",
      "grey-050": "#f3f3f3",
      "mint-500": "#a3f7b5",
      "teal-500": "#40c9a2",
      "nyanza-500": "#e5f9e0",
      "voilet-900": "#321054",
      "voilet-800": "#441672",
      "voilet-700": "#561c8f",
      "voilet-600": "#6822ad",
      "voilet-500": "#7a28cb",
      "voilet-400": "#893ad8",
      "voilet-300": "#9953dd",
      "voilet-200": "#a86de2",
      "voilet-100": "#b786e7",
      "voilet-050": "#bf93ea",
      "purple-navy-900": "#121021",
      "purple-navy-800": "#1e1936",
      "purple-navy-700": "#29234a",
      "purple-navy-600": "#352d5f",
      "purple-navy-500": "#403774",
      "purple-navy-400": "#4a3f85",
      "purple-navy-300": "#534797",
      "purple-navy-200": "#5d50a8",
      "purple-navy-100": "#6b5eb3",
      "purple-navy-050": "#7367b7",
      "dark-purple-800": "#0b0b0f",
      "dark-purple-700": "#121118",
      "dark-purple-600": "#201d2a",
      "dark-purple-500": "#2e2a3c",
      "dark-purple-400": "#39354b",
      "dark-purple-300": "#453f5a",
      "dark-purple-200": "#504a69",
      "dark-purple-100": "#564f71",
    },
    backgroundImage: {
      "gradient-1":
        "linear-gradient(293.54deg, #9D4BF4 13.32%, #1BB17B 83.07%)",
      "gradient-2": "linear-gradient(180deg, #43EDBD 0%, #1BB17B 100%)",
      "gradient-purple": "linear-gradient(180deg, #A93BFF 0%, #7B2ACC 100%)",
      "gradient-glass":
        "linear-gradient(141.24deg, rgba(146, 124, 255, 0.142) 1.69%, rgba(64, 201, 162, 0) 100%)",
    },
  },

  plugins: [
    plugin(function ({ addVariant }) {
      addVariant(
        "supports-backdrop-filter",
        "@supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none))"
      );
    }),
  ],
};
