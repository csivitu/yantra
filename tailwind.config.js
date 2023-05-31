/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                spaceGrotesk: ['Space Grotesk'],
            },
            backgroundColor: {
                transparent: 'transparent',
            },
            backgroundImage: {
                'gradient-bg': "url('/background.svg')",
            },
        },
        plugins: [],
    },
};
