/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./layouts/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            keyframes: {
                slowSpin: {
                    to: {
                        transform: 'rotate(360deg)'
                    }
                }
            },
            animation: {
                slowSpin: 'slowSpin 30s linear infinite'
            },
            boxShadow: {
                custom: '0 25px 50px -19px rgb(0 0 0 / 0.6)'
            }
        }
    },
    plugins: []
};
