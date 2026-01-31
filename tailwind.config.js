module.exports = {
    // Use 'class' mode but we'll never add the dark class
    // This prevents Tailwind from using prefers-color-scheme
    darkMode: 'class',

    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./Components/**/*.{js,ts,jsx,tsx}", // Added capital C version
    ],

    theme: {
        extend: {},
    },

    plugins: [],

    // Important: Force all utilities to have higher specificity
    important: true,
};
