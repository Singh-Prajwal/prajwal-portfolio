import type { Config } from 'tailwindcss'

const config: Config = {
    // This is the CRITICAL part for dark mode to work.
    darkMode: 'class',

    // Tell Tailwind where to look for class names.
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],

    // This is where we define all our custom styles and animations.
    theme: {
        extend: {
            keyframes: {
                pulse: {
                    '0%, 100%': { opacity: '1', transform: 'scale(1)' },
                    '50%': { opacity: '.8', transform: 'scale(1.05)' },
                },
            },
            animation: {
                pulse: 'pulse 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
        },
    },

    plugins: [],
}

export default config