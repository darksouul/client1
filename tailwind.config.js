module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./src/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        quicksand: ["Quicksand", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        "psy-dark-white": "#F5F5F5",
        "psy-blue": "#00A7EE",
        "psy-gray": "#596380",
        "psy-bg-dark": "#050E2B",
        "psy-bg-light": "#0A1841",
        "psy-icon-dark-blue": "#616C94",
      },
      borderOpacity: {
        15: "0.15",
      },
    },
    plugins: [],
  },
};
