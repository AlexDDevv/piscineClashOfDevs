import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                "bgBeige": "rgba(var(--bgBeige))",
                "bgBlack": "rgba(var(--bgBlack))",
                "bgWhite": "rgba(var(--bgWhite))",
                "blueLight": "rgba(var(--blueLight))",
                "blueDark": "rgba(var(--blueDark))",
                "greenLight": "rgba(var(--greenLight))",
                "greenMid": "rgba(var(--greenMid))",
                "greenDark": "rgba(var(--greenDark))",
                "mustardLight": "rgba(var(--mustardLight))",
                "mustardMid": "rgba(var(--mustardMid))",
                "mustardDark": "rgba(var(--mustardDark))",
                "orangeLight": "rgba(var(--orangeLight))",
                "orangeMid": "rgba(var(--orangeMid))",
                "orangeDark": "rgba(var(--orangeDark))",
                "pinkLight": "rgba(var(--pinkLight))",
                "pinkMid": "rgba(var(--pinkMid))",
                "pinkDark": "rgba(var(--pinkDark))",
                "purpleLight": "rgba(var(--purpleLight))",
                "purpleMid": "rgba(var(--purpleMid))",
                "purpleDark": "rgba(var(--purpleDark))",
            },
            fontFamily: {
                inter: ["Inter", "sans-serif"]
            }
        },
    },
    plugins: [],
};
export default config;
