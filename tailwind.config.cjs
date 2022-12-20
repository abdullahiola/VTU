/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      'sm': ['14px', {
        fontWeight: '500',
      }],
      'base': ['16px', {
        // lineHeight: '29px',
        fontWeight: '500',
      }],
      'xl': ['24px', {
        lineHeight: '29px',
        fontWeight: '600',
      }],
      '2xl': ['28px', {
        lineHeight: '34px',
        fontWeight: '700',
      }],
      '3xl': ['32px', {
        lineHeight: '38px',
        fontWeight: '700',
      }],
      '4xl': ['40px', {
        lineHeight: '48px',
        fontWeight: '700',
      }],
      '5xl': ['48px', {
        lineHeight: '58px',
        fontWeight: '700',
      }],
      '6xl': ['56px', {
        lineHeight: '67px',
        fontWeight: '700',
      }],
    },
    colors: {
      green: {
        DEFAULT: '#00C297',
        100: '#D7F4E4',
        200: '#CCF3EA',
        300: '#80E0CB',
        400: '#7ADAA6',
        500: '#2BCCA8',
        600: '#00C297',
        700: '#008165'
      },
      purple: {
        DEFAULT: '#974CC7',
        100: '#EADBF4',
        200: '#CBA5E3',
        300: '#A86AD0',
        400: '#974CC7',
      },
      brown: {
        DEFAULT: '#C78D24',
        100: '#F4E8D3',
        200: '#E3C691',
        300: '#D0A049',
        400: '#C78D24',
      },
      gray: {
        100: '#D0D0D0',
        200: '#B1B1B1',
        300: '#8A8A8A',
        400: '#666666',
        500: '#646464',
      },
      dark: {
        DEFAULT: '#161616',
        100: '#3D3D3D',
        200: '#1C1B1F',
        300: '#161616',
      },
      red: {
        DEFAULT: "#E41616",
        400: "#F62E2E",
      },
      white: "#FCFCFC",
      accent: "#F4E8D3"
      // ...
    },
    extend: {
      keyframes: {
        zoom: {
          '0%': {transform: 'scale(0)'},
          '10%': {transform: 'scale(0.1)'},
          '20%': {transform: 'scale(0.2)'},
          '30%': {transform: 'scale(0.3)'},
          '40%': {transform: 'scale(0.4)'},
          '50%': {transform: 'scale(0.5)'},
          '60%': {transform: 'scale(0.6)'},
          '70%': {transform: 'scale(0.7)'},
          '80%': {transform: 'scale(0.8)'},
          '90%': {transform: 'scale(0.9)'},
          '100%': {transform: 'scale(1)'},
        },
        loading: {
          '0%': {
            transform: 'scale(1)' //1: 1
          },
          '25%': {
            transform: 'scale(1.2)' //4: 1.5
          },
          '50%': {
            transform: 'scale(1.25)', //5: 1.75
          },
          '75%': {
            transform: 'scale(1.05)', //2: 1.1
            background: 'rgb(107 114 128 / 0.85)',
        },
          '100%': {
            transform: 'scale(1.1)', //3: 1.15
            background: 'rgb(107 114 128 / 0.85)',
          },
        }
      },
      animation: {
        spin: 'spin 1.25s infinite ease-in-out',
        zoom: 'zoom 200ms 1 ease-in-out',
        loading: 'loading 2s infinite ease',
      }
    },
  },
  plugins: [],
}
