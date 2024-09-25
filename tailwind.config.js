/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './<custom-folder>/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'primary-bold': ['Roboto-bold'],
        'primary-semibold': ['Roboto-SemiBold'],
        'primary-regular': ['Roboto-Regular'],
        'primary-light': ['Roboto-Light'],
        'secondary-bold': ['Ubuntu-Bold'],
        'secondary-light': ['Ubuntu-Light'],
        'secondary-regular': ['Ubuntu-Regular'],
      },
    },
  },
  plugins: [],
};
