/** @type {import('tailwindcss').Config} */
export default {
    theme: {
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
    },
    plugins: [],
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}', // Add this if using App Router
    ], // Ensure this scans your files; adjust paths if needed
}