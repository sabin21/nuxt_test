module.exports = {
  content: [    
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",    
  ],
  theme: {
    fontFamily: {
      'sans': ['system-ui', 'Roboto', 'Noto Sans KR']
    },
    letterSpacing: {
      '1': '0em',
      '2': '0.025em',
      '3': '0.05em',
      '4': '0.1em',
    },
    extend: {},
  },
  plugins: [],
}
