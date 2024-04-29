/** @type {import('tailwindcss').Config} */
const daisyui = require('daisyui');
module.exports = {
  content: ["./src/components/chat/*.{html,js,jsx}"],

  theme: {
    extend: {
      colors: {
        // Add custom colors if needed
        primary: "#00c5ff",
        secondary: "#0000ff",
        accent: "#00d0ff",
        neutral: "#1a0800",
        base100: "#fffdfb",
        info: "#16b2ff",
        success: "#15d000",
        warning: "#ffb400",
        error: "#ff85a5",
      },
      // Extend other theme settings as needed
    },
  },
  // Remove the daisyui plugin if not using it
  plugins: [require("daisyui")],
};
