/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./!(build|dist|.*)/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        gainsboro: "#d9d9d9",
        royalblue: { "100": "#326cdb", "200": "#0d52d6" },
        darkslateblue: "#0f3a8d",
        darkgray: { "100": "#afafaf", "200": "#b6a7a7" },
        dimgray: { "100": "#6b6b6b", "200": "#704d4d", "300": "#493939" },
        red: "#f81414",
        darkslategray: { "100": "#3a4754", "200": "#3a4653", "300": "#333" },
        mistyrose: "#efe1e1",
        silver: "#c4c4c4",
        gray: "rgba(0, 0, 0, 0.37)",
        whitesmoke: { "100": "#f6f2f2", "200": "#f3f3f3", "300": "#eee" },
        indianred: "#c76c6c",
        steelblue: "#637daf",
        gold: "#fed430",
      },
      fontFamily: { inter: "Inter", roboto: "Roboto" },
      borderRadius: { xl: "20px", "3xs": "10px", "8xs": "5px" },
    },
    fontSize: {
      sm: "14px",
      lg: "18px",
      base: "16px",
      "3xl": "22px",
      "3xs": "10px",
      xl: "20px",
      "4xl": "23px",
    },
  },
  corePlugins: { preflight: false },
};
