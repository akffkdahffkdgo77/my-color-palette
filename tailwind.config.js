/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            keyframes: {
                spin: {
                    to: {
                        transform: 'rotate(360deg)'
                    }
                }
            },
            animation: {
                spin: 'spin 30s linear infinite'
            },
            boxShadow: {
                custom: '0 25px 50px -19px rgb(0 0 0 / 0.6)'
            }
        }
    },
    plugins: []
};
