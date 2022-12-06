/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["'Roboto Slab'", "serif"]
      }
    },
    borderRadius: {
      "50": "50%",
      full: '9999px',
    },
  },
  plugins: [],
};
