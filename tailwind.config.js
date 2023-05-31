/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                spaceGrotesk: ['Space Grotesk'],
                bronson: ['Bronson'],
                ibmMono: ['IBM Plex Mono'],
            },
            backgroundColor: {
                transparent: 'transparent',
            },
            backgroundImage: {
                // 'gradient-bg': "url('/background.svg')",
                'grid-bg': 'url(/grid.svg)',
            },
        },
        plugins: [require('@tailwindcss/line-clamp')],
    },
};
