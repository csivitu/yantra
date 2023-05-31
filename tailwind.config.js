/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            backgroundColor: {
                transparent: 'transparent',
                glassmorphic: 'rgba(255, 255, 255, 0.8)', // Example glassmorphic transparent color
            },
            backgroundImage: {
                'gradient-bg': "url('/background.svg')",
            },
        },
    },
    plugins: [],
};
