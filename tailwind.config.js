/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                jacquard: ['var(--font-jacquard)'],
                raleway_e_light: ['var(--font-raleway-e-light)'],
                raleway_e_light_italic: ['var(--font-raleway-e-light-italic)'],
                raleway_bold: ['var(--font-raleway-bold)'],
            },
        },
    },
    plugins: [],
}