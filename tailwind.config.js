/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: {
                    'strong-cyan': 'hsl(172, 67%, 45%)',
                },
                neutral: {
                    'very-dark-cyan': 'hsl(183, 100%, 15%)',
                    'dark-grayish-cyan': 'hsl(186, 14%, 43%)',
                    'grayish-cyan': 'hsl(184, 14%, 56%)',
                    'light-grayish-cyan': 'hsl(185, 41%, 84%)',
                    'very-light-grayish-cyan': 'hsl(189, 41%, 97%)',
                    white: 'hsl(0, 0%, 100%)',
                },
                disabled: 'hsl(182, 100%, 22%)',
                hover: 'hsl(173, 70%, 72%)',
            },
        },
    },
    plugins: [],
};
