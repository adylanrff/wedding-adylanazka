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
        'body': '#464646',
        'card': 'rgba(216, 172, 156, 0.5)',
      },
      flex: {
        '2': '2 2 0%',
        '3': '3 3 0%'
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    base: false,
    themes: [
      {
        default: {
          primary: "#B67162",
          secondary: "#999B84",
          accent: "#B67162",
          neutral: "#ffffff",
          "base-100": "#ffffff",

          "--btn-text-case": "capitalize", // set default text transform for buttons
        }
      }
    ]
  },
}
