/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './<custom directory>/**/*.{js,jsx,ts,tsx}',
    './screens/**/*.{js,jsx,ts,tsx}',
    './screens/login.js',
    './components/**/*.{js,jsx,ts,tsx}',
    './components/<custom directory>/**/*.{js,jsx,ts,tsx}',
    './components/CustomListItem.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
