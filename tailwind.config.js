/** @type {import('tailwindcss').Config} */
export const content = [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
];
export const theme = {
    extend: {
        keyframes: {
            'border-spin': {
                '100%': {
                    transform: 'rotate(-360deg)',
                },
            },
        },
        animation: {
            'border-spin': 'border-spin 7s linear infinite',
        },
    },
};
export const plugins = [];