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
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colors: {
                "primary": {
                    DEFAULT: '#0086a3', // Primary color
                    '50': 'rgba(0, 134, 163, 0.05)',
                    '100': 'rgba(0, 134, 163, 0.1)',
                    '200': 'rgba(0, 134, 163, 0.2)',
                    '300': 'rgba(0, 134, 163, 0.3)',
                    '400': 'rgba(0, 134, 163, 0.4)',
                    '500': 'rgba(0, 134, 163, 0.5)',
                    '600': 'rgba(0, 134, 163, 0.6)',
                    '700': 'rgba(0, 134, 163, 0.7)',
                    '800': 'rgba(0, 134, 163, 0.8)',
                    '900': 'rgba(0, 134, 163, 0.9)',
                }
            }
        },
    },
    plugins: [],
};
export default config;
