/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./assets/src/**/*.{html,js}"],
    theme: {
        extend: {
            fontFamily: {
                "roboto": ["Roboto", "sans-serif"],
            },
            fontWeight: {
                "custom-thin": 100,
                "custom-light": 300,
                "custom-regular": 400,
                "custom-medium": 500,
            },
            colors:{
                "heading": "#202538",
                "custom-purple": "#886176",
            },
            backgroundColor:{
                "custom-button": "#886176"
            }
        },
    },
    plugins: [],
}