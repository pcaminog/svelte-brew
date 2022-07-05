/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
    colors: {
      pri: "#B7D3F2",
      sec: "#F4AFAB",
      ter: "#EFDAD7",
      cuar: "#603813",
      quin: '#A9A9A9',
    },
    fontFamily: {
      mono: ["monospace"],
    },
  },
  plugins: []
};
