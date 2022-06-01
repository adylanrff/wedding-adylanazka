module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      'title': ['Dancing Script'],
      'body': ['Fraunces']
    },
    extend: {
      colors: {
        'background': '#E4D3CF',
        'title': '#B67162',
        'body': '#464646'
      }
    },
  },
  plugins: [],
}
