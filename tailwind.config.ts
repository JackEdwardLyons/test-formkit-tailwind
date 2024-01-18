// tailwind.config.js for Nuxt users
const formKitTailwind = require("@formkit/themes/tailwindcss");

export default {
  // add the formkit.config.js file
  content: ["./src/**/*.{html,vue,js}", "./formkit.config.ts"],
  plugins: [formKitTailwind],
  theme: {
    extend: {
      colors: {
        "racq-navy": "#003478",
        "racq-blue": "#0864bc",
        "racq-light-blue": "#4985c4",
        "racq-sky-blue": "#5390cb",
        "racq-lavender": "#6e82c6",
        "racq-teal": "#74bfb8",
        "racq-cyan": "#10addd",
        "racq-pale-blue": "#e6ecf0",
        "racq-pale-grey": "#e9eef0",
        "racq-pale-blue-border": "#d8e0e5",
        "racq-navy-30p": "#b2c2d6", // RACQ Navy at 30% opacity on top of white
        "racq-navy-hover": "#006eff",
        "racq-navy-active": "#00295e",
        "racq-true-white": "#ffffff",
        "racq-white": "#d8e0e5",
        "racq-yellow-active": "#e98300",
        "racq-yellow-hover": "#eec22b",
        "racq-blue-grey": "#4b5869",
        // Green Gradient

        // Red Gradient
        "racq-error-red": "#d82900",
        "racq-pink": "#de78c2",

        // Yellow Gradient
        "racq-warning-orange": "#ff9200",
        "racq-yellow": "#ffe600",
        "racq-bright-yellow": "#fff500",
        "racq-cool-grey": "#445163",

        // Curated transparency (built-in transparency creates issues on Safari)
        "racq-transparent": "rgba(255, 255, 255, 0)",
        "light-grey": "#e5e5e5",
        "dark-grey-text": "#444",
        "paragraph-color": "#444",

        "racq-grey-background": "#ebf0f1",
        "racq-button-color": "#004aab",

        white: "#ffffff",
        "curtain-color": "rgba(255, 255, 255, 0.5)",

        // forms error fields
        "formfield-error-color": "#d41b1b",
        "formfield-error-background": "#fddbdb",
        "formfield-error-message-color": "#c43c4d",
        "formfield-error-border-color": "#0c0b0b",

        "racq-white-background": "#f0f3f5",
        "racq-blue-border-color": "#0f4080",
        "racq-dark-grey": "#333333",
        "racq-light-grey": "#8f989d",
        "racq-black-border": "#00000029",
        "racq-background-note": "#fdfbe7",
        "racq-border-note": "#ffe60d",
        "racq-blue-background": "#d5e2eb",
        "racq-blue-border": "#a6c1d4",
      },
    },
  },
};
