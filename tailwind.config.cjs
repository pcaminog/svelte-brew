/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
    colors: {
      pri: "#B7D3F2",
      sec: "#F4AFAB",
      blanco: "#FFFFFF",
      negro: "#000000",
      gris: '#EEEEEE',
    },
    fontFamily: {
      mono: ["monospace"],
    },
  },
  plugins: []
};
