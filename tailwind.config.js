/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'merriweather': ['Merriweather'], // Replace 'MyCustomFont' with your actual font name
        'plexserif': ['IBM Plex Serif']
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}

