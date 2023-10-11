// /** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        // small mobile phone
        xs: "320px",
        // large mobile phone
        sm: "640px",
        // tablets
        md: "768px",
        // laptops
        lg: "1024px",
        xl: "1280px",
        // mid laptop
        "2xl": "1536px",
        // large screens
        "3xl": "2560px",
        "4xl": "5000px",
      },
    },
  },
  plugins: [],
};
