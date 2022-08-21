const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        'Berkshire': ["Berkshire Swash", "cursive"],
        Manrope: ["Manrope", "sans-serif"],
      },
      backgroundImage: {
        "hero-pattern": "url('/img/hero-pattern.svg')",
        "head": "url('/image/Line Marker.svg')",
          },
          colors: {
            'orangeColor': '#FF5E19',
          },
    },
  },
};

// font-family: 'Berkshire Swash', 'cursive';
// font-family: 'Manrope', 'sans-serif';
