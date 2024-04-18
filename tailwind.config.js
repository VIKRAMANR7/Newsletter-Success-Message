/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      mobile: { min: "375px", max: "767px" },
    },
    extend: {
      colors: {
        white: "hsl(0, 0%, 100%)",
        tomato: "hsl(4, 100%, 67%)",
        "tomato-light": "hsl(4, 100%, 95%)",
        grey: "hsl(231, 7%, 60%)",
        "charcoal-grey": "hsl(235, 18%, 26%)",
        "dark-slate-grey": "hsl(234, 29%, 20%)",
      },
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
      },
      backgroundImage: {
        "illustration-desktop":
          "url('/src/assets/images/illustration-sign-up-desktop.svg')",
        "illustration-mobile":
          "url('/src/assets/images/illustration-sign-up-mobile.svg')",
        "icon-success": "url('/src/assets/images/icon-success.svg')",
        "icon-list": "url('/src/assets/images/icon-list.svg')",
      },
    },
  },

  plugins: [],
};
