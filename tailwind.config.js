/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,svelte}',
    './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
};
