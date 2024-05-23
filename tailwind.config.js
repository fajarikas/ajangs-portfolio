/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: "#2BCF7E"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        "be-vietnam": ["Be Vietnam Pro", "sans-serif"]
      },
    },
  },
  plugins: [],
}

