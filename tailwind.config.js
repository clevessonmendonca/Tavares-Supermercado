/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "radial-tavares":
          "radial-gradient(50% 50% at 50% 50%, #03A8E8 0%, #0054FF 100%)",
        "offers-background": "url('/images/offers.png')",
        "background": "url('/logo-background.png')",
        "work-with-us": "url('/images/tavares-work.png')",
      },
      colors: {
        "primary": "#0947C1",
        "secondary": "#FEF402",
      },
    },
  },
  plugins: [],
};
