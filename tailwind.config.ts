import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            animation: {
                shimmer: "shimmer 4s infinite",
                slidein: "slidein 0.5s forwards",
                slideout: 'slideout 0.5s ease-out forwards',

            },
            keyframes: {
                shimmer: {
                    "0%, 100%": {
                        "background-position": "calc(-100% - var(--shimmer-width)) 0",
                    },
                    "50%": {
                        "background-position": "calc(100% + var(--shimmer-width)) 0",
                    },
                },
                slidein: {
                    "0%": {
                        "transform": "translateX(-100%)"
                    },
                    "100%": {
                        "transform": "translateX(0)"
                    }
                },
                slideout: {
                    '0%': {
                        "transform": 'translateX(0)'
                    },
                    '100%': {
                        'transform': 'translateX(100%)'
                    },
                },
            },
            backgroundImage: {
                "parallax" : 'url("../public/contactUs.jpg")',
                "parallaxBio": 'url("../public/bioware_about.jpg")'
            },
            colors: {
                "primary": {
                    DEFAULT: '#0086a3', // Primary color
                    '50': 'hsl(190, 57%, 97%)',
                    '100': 'hsl(190, 57%, 90%)',
                    '200': 'hsl(190, 57%, 80%)',
                    '300': 'hsl(190, 57%, 70%)',
                    '400': 'hsl(190, 57%, 60%)',
                    '500': 'hsl(190, 57%, 50%)', // Same as DEFAULT but without alpha
                    '600': 'hsl(190, 57%, 40%)',
                    '700': 'hsl(190, 57%, 30%)',
                    '800': 'hsl(190, 57%, 20%)',
                    '900': 'hsl(190, 57%, 10%)',
                },
                "primary2": '#238352',
            }
        },
    },
    plugins: [],
};
export default config;
