// tailwind.config.js
module.exports = {
    content: [
      "./node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}",
      "./app/**/*.{js,ts,jsx,tsx}",   // or "./src/**/*.{js,ts,jsx,tsx}" depending on your folder structure
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    presets: [require("@relume_io/relume-tailwind")],
    plugins: [require("tailwind-scrollbar-hide")],
  };
  