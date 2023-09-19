/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        indianred: "#eb5757",
        skyblue: "#9dd0ed",
        dimgray: "#4f4f4f",
        lavender: {
          "100": "#f9e0fd",
          "200": "#eedcff",
        },
        lightsteelblue: "#cfcef9",
        lightgoldenrodyellow: "#cbf1c2",
        paleturquoise: "#afebdb",
        blanchedalmond: "#f9e9c3",
        navajowhite: "#fdcfa4",
        aliceblue: "#e5f1ff",
        whitesmoke: "#f9f9f9",
        "gray-3": "#828282",
        gray: "#262626",
        darkslategray: "#333",
        dodgerblue: "#2f80ed",
        papayawhip: "#fceed3",
        goldenrod: "#e5a443",
        darkorchid: "#9b51e0",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
        lato: "Lato",
      },
      borderRadius: {
        "8xs": "5px",
      },
    },
    fontSize: {
      sm: "14px",
      base: "16px",
      xs: "12px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
