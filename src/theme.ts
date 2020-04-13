import { Theme } from 'theme-ui'

export const HumanTheme: Theme = {
  initialColorModeName: 'light',

  colors: {
    blue: 'rgb(0,122,255)',
    green: 'rgb(52,199,89)',
    purple: 'rgb(88,86,214)',
    orange: 'rgb(255,149,0)',
    red: 'rgb(255,59,48)',
    teal: 'rgb(90,200,250)',
    yellow: 'rgb(255,204,0)',
    text: 'rgb(51,51,51)',
    muted: 'rgb(111,111,111)',
    background: 'rgb(255,255,255)',
    gray: 'rgb(142,142,147)',
    grays: [
      'rgb(44,44,46)',
      'rgb(72,72,74)',
      'rgb(142,142,147)',
      'rgb(174,174,178)',
      'rgb(210,210,214)',
      'rgb(235,235,240)',
    ],
    modes: {
      dark: {
        background: 'rgb(34, 34, 34)',
        blue: 'rgb(10,132,255)',
        green: 'rgb(48,209,88)',
        purple: 'rgb(94,92,230)',
        orange: 'rgb(255,159,10)',
        red: 'rgb(255,69,58)',
        teal: 'rgb(100,210,255)',
        yellow: 'rgb(255,214,10)',
        text: 'rgb(229,229,234)',
        muted: 'rgb(192,192,197)',
        gray: 'rgb(142,142,147)',
        grays: [
          'rgb(142,142,147)',
          'rgb(99,99,102)',
          'rgb(72,72,74)',
          'rgb(58,58,60)',
          'rgb(44,44,46)',
          'rgb(28,28,30)',
        ],
      },
    },
  },

  fonts: {
    ui: `"SF UI Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
    text: `"SF UI Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
    mono: `"SF Mono", "Monaco", "Inconsolata", "Fira Mono", "Droid Sans Mono", "Source Code Pro", monospace`,
  },

  fontSizes: [10, 12, 14, 16, 20, 24],

  space: ['0', '5px', '10px', '15px', '20px', '25px', '35px', '45px', '65px', '80px'],
  sizes: ['0', '5px', '10px', '15px', '20px', '25px', '35px', '45px', '65px', '80px'],
}
