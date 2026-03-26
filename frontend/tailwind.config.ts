import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
        colors: {
            primary: "#2ECC71",
            lightGreen: "#A3E4D7",
        },
        },
    },
    plugins: [],
    };

export default config;