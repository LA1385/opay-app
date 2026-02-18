/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                opay: {
                    main: '#00B875', // Brand Green
                    bg: '#FFFFFF', // Light background
                    app: '#F5F5F5', // Light grey background
                    headings: '#1A1A1A', // Dark text
                    subtext: '#666666', // medium grey text
                    icon: '#333333', // dark grey text
                    iconbg: '#E8F9F4', // light mintgreen
                    notification: '#FF4B4B', // red 
                    promotagbg: '#FF6B35', // light red
                    gift: '#FFC107', // yellow
                    activehome: '#00A878', // light yellow
                    savebg: '#D4F5EB', //palemint
                    inactive: '#AAAAAA' //grey

                }
            }
        },
    },
    plugins: [],
}
