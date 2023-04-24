/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark': {
          '50': '#f7f7f7',
          '100': '#e3e3e3',
          '200': '#c8c8c8',
          '300': '#a4a4a4',
          '400': '#808080',
          '500': '#666666',
          '600': '#515151',
          '700': '#434343',
          '800': '#383838',
          '900': '#313131',
          '950': '#1a1a1a',
      },
      
      'light': {
        '50': '#ffffff',
        '100': '#efefef',
        '200': '#dcdcdc',
        '300': '#bdbdbd',
        '400': '#989898',
        '500': '#7c7c7c',
        '600': '#656565',
        '700': '#525252',
        '800': '#464646',
        '900': '#3d3d3d',
        '950': '#292929',
    },
    'brand': {
      '50': '#edfaff',
      '100': '#d6f2ff',
      '200': '#b5eaff',
      '300': '#83dfff',
      '400': '#48cbff',
      '500': '#1eacff',
      '600': '#068eff',
      '700': '#007aff',
      '800': '#085dc5',
      '900': '#0d519b',
      '950': '#0e315d',
  },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily:{
        dmsans: ['DM Sans'],
        dmmono: ['DM Mono'],
      },
    },
  },
  plugins: [],
}
