/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        Blue: "hsl(246, 80%, 60%)",
        LightRed_work: "hsl(15, 100%, 70%)",
        SoftBlue_play: "hsl(195, 74%, 62%)",
        LightRed_study: "hsl(348, 100%, 68%)",
        LimeGreen_exercise: "hsl(145, 58%, 55%)",
        Violet_social: "hsl(264, 64%, 52%)",
        SoftOrange_selfcare: "hsl(43, 84%, 65%)",

        // Neutral
        VeryDarkBlue: "hsl(226, 43%, 10%)",
        DarkBlue: "hsl(235, 46%, 20%)",
        DesaturatedBlue: "hsl(235, 45%, 61%)",
        PaleBlue: "hsl(236, 100%, 87%)",
      },
      backgroundImage: {
        "icon-play": 'url("~/assets/img/icon-play.svg")',
        "icon-work": 'url("~/assets/img/icon-work.svg")',
        "icon-study": 'url("~/assets/img/icon-study.svg")',
        "icon-exercise": 'url("~/assets/img/icon-exercise.svg")',
        "icon-self-care": 'url("~/assets/img/icon-self-care.svg")',
        "icon-social": 'url("~/assets/img/icon-social.svg")',
      },
    },
  },
  plugins: [],
  mode: "jit",
  purge: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
};
