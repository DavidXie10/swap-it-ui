module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        screens: {
            'sm': '412px',
            // => @media (min-width: 576px) { ... }
            'md': '768px',      
            // => @media (min-width: 768px) { ... }
            'lg': '1024px',
            // => @media (min-width: 1024px) { ... }
        },
        extend: {},
    },
    plugins: [],
}
