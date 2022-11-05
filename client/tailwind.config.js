const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  corePlugins: {
    container: false,
  },
  theme: {
    screens: {
      'xs': { 'min': '400px' },
      ...defaultTheme.screens,
    },
    borderColor: {
      gray: '#2c2c40',
    },
    colors: {
      primary: "#f7b733",
      primaryLight: '',
      primaryDark: '',
      secondary: "#3273fa",
      secondaryLight: '',
      secondaryDark: '',
      link: "#08A6FF",
      text: "#a0a5aa",
      textAction: '#cddcfe',
      special: '#7687AD',
      black: 'black',
      white: "white",
      whiteDarker: '#d5d5d5',
      whiteDarkest: '',
      grey: 'grey',
      success: '#41a153',
      error: '#ff4e50',
    },
    backgroundColor: {
      primary: '#070720',
      primaryLight: '',
      primaryDark: '#06061b',
      secondary: '#17172e',
      secondaryExtraLight: '#4b4e68',
      secondaryLight: '#31334a',
      secondaryDark: '',
      secondaryAction: '#25254B',
      coloredPrimary: '#f7b733',
      coloredPrimaryLight: '',
      coloredPrimaryInactive: '#ffcf5d',
      coloredPrimaryDark: '#ffa500',
      coloredSecondary: '#3273fa',
      coloredSecondaryLight: '',
      coloredSecondaryDark: '',
      success: '#41a153',
      error: '#ff4e50',
      black: '#000000',
      whiteDark: '#000000',
      white: '#ffffff',
      discord: '#7289da',
      discordDark: '#697eca',
      skype: '#00aff0',
      skypeDark: '#009bd3',
      hr: '#5f5f7b',
    },
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
      barlow: ["Barlow", "sans-serif"],
      openSans: ["Open Sans", "sans-serif"],
    },
    // EXTEND
    extend: {
      brightness: {
        85: '.85',
      },
      animation: {
        goBack: 'goBack 1s infinite ease-in-out alternate',
      },
      keyframes: {
        goBack: {
          'from': { transform: 'translateX(0px)' },
          'to': { transform: 'translateX(-3px)' }
        }
      },
      flex: {
        '1.5': '1.5 1.5 0%',
        '2': '2 2 0%',
        '2.5': '2.5 2.5 0%',
        '3': '3 3 0%',
      },
      maxWidth: {
        'ultima': '1920px'
      },
      maxHeight: {
        'almost': '94vh'
      },
      letterSpacing: {
        'widest2xl': '0.2rem',
        'widest3xl': '0.3rem',
      },
      lineHeight: {
        'h1': '3rem'
      },
      fontSize: {
        'sm-base': '0.940rem',
        '1.5xl': '1.37rem',
        'h1': '2rem',
        'sectionTitle': '2rem',
      },
      borderRadius: {
        'main': '3px',
      },
      width: {
        '4/7': '55%',
      },
    },
  },
  variants: {
    extend: {
      translate: ['group-hover']
    },
  },
  plugins: [],
}
