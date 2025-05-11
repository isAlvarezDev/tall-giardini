/** @type {import('tailwindcss').Config} */

export default {
    content: [
        "./src/**/*.{astro,html,js,jsx,ts,tsx,vue}", // Rutas donde buscarás clases de Tailwind
    ],
    theme: {
        extend: {
            animation: {
        shine: "shine 1.5s ease-in-out infinite",
      },
      keyframes: {
        shine: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(300%)" },
        },
      },
        },
    },
    plugins: [],
};
