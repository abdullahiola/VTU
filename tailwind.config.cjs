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
        DEFAULT: '#37C779',
        100: '#D7F4E4',
        200: '#cffafe',
        300: '#a5f3fc',
        400: '#7ADAA6',
        500: '#67e8f9',
        600: '#37C779',
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
    extend: {},
  },
  plugins: [],
}
