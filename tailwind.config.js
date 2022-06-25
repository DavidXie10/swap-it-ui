module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        './src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'
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
    plugins: [
        require('tw-elements/dist/plugin')
    ]
}