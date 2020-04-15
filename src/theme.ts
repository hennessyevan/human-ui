export type ColorModes = 'auto' | 'light' | 'dark' | 'accessible_light' | 'accessible_dark'

export type ColorKeys = {
  blue: string
  green: string
  indigo: string
  orange: string
  pink: string
  purple: string
  red: string
  teal: string
  yellow: string
  text: string
  background: string
  gray: string
  grays: string[]
}

export type HumanThemeType = {
  initialColorModeName?: ColorModes
  useColorSchemeMediaQuery?: boolean

  colors: Partial<ColorKeys> & {
    modes: {
      [key: string]: ColorKeys
    }
  }

  fonts: {
    text: string
    display: string
    small: string
    medium: string
    large: string
    mono: string
  }

  fontSizes: Array<number | string>
  radii: Array<number | string>
  space: Array<number | string>
  sizes: Array<number | string>
}

export const humanTheme: HumanThemeType = {
  initialColorModeName: 'light',
  useColorSchemeMediaQuery: true,

  colors: {
    modes: {
      light: {
        blue: 'rgb(0,122,255)',
        green: 'rgb(52,199,89)',
        indigo: 'rgb(88,86,214)',
        orange: 'rgb(255,149,0)',
        pink: 'rgb(255,45,85)',
        purple: 'rgb(175,82,222)',
        red: 'rgb(255,59,48)',
        teal: 'rgb(90,200,250)',
        yellow: 'rgb(255,204,0)',
        text: 'rgb(51,51,51)',
        background: 'rgb(255,255,255)',
        gray: 'rgb(142,142,147)',
        grays: [
          'rgb(142,142,147)',
          'rgb(174,174,178)',
          'rgb(199,199,204)',
          'rgb(229,229,234)',
          'rgb(242,242,247)',
        ],
      },
      accessible_light: {
        blue: 'rgb(0,64,221)',
        green: 'rgb(36,138,61)',
        indigo: 'rgb(54,52,163)',
        orange: 'rgb(201,52,0)',
        pink: 'rgb(211,15,69)',
        purple: 'rgb(137,68,171)',
        red: 'rgb(215,0,21)',
        teal: 'rgb(0,113,164)',
        yellow: 'rgb(178,80,0)',
        text: 'rgb(51,51,51)',
        background: 'rgb(255,255,255)',
        gray: 'rgb(108,108,112)',
        grays: [
          'rgb(108,108,112)',
          'rgb(142,142,147)',
          'rgb(174,174,178)',
          'rgb(188,188,192)',
          'rgb(216,216,220)',
          'rgb(235,235,240)',
        ],
      },
      dark: {
        blue: 'rgb(10,132,255)',
        green: 'rgb(48,209,88)',
        indigo: 'rgb(94,92,230)',
        orange: 'rgb(255,159,10)',
        pink: 'rgb(255,55,95)',
        purple: 'rgb(191,90,242)',
        red: 'rgb(255,69,58)',
        teal: 'rgb(100,210,255)',
        yellow: 'rgb(255,214,10)',
        text: 'rgb(255,255,255)',
        background: 'rgb(0, 0, 0)',
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
      accessible_dark: {
        blue: 'rgb(64,156,255)',
        green: 'rgb(48,219,91)',
        indigo: 'rgb(125,122,255)',
        orange: 'rgb(255,179,64)',
        pink: 'rgb(255,100,130)',
        purple: 'rgb(218,143,255)',
        red: 'rgb(255,105,97)',
        teal: 'rgb(112,215,255)',
        yellow: 'rgb(255,212,38)',
        text: 'rgb(255,255,255)',
        background: 'rgb(34, 34, 34)',
        gray: 'rgb(142,142,147)',
        grays: [
          'rgb(174,174,178)',
          'rgb(124,124,128)',
          'rgb(84,84,86)',
          'rgb(68,68,70)',
          'rgb(54,54,56)',
          'rgb(36,36,38)',
        ],
      },
    },
  },

  fonts: {
    text: `"SF UI Text", -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif, "Apple Color Emoji"`,
    display: `"SF UI Display", -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif, "Apple Color Emoji"`,
    small: `"NewYork-Small", -apple-system-ui-serif, ui-serif`,
    medium: `"NewYork-Medium", -apple-system-ui-serif, ui-serif`,
    large: `"NewYork-Large", -apple-system-ui-serif, ui-serif`,
    mono: `"SF Mono", "Monaco", "Inconsolata", "Fira Mono", "Droid Sans Mono", "Source Code Pro", monospace`,
  },

  fontSizes: [11, 12, 13, 15, 16, 17, 17, 20, 22, 28, 34],

  radii: ['0', '3px', '5px', '10px'],

  space: ['0', '5px', '10px', '15px', '20px', '25px', '35px', '45px', '65px', '80px'],
  sizes: ['0', '5px', '10px', '15px', '20px', '25px', '35px', '45px', '65px', '80px'],
}

humanTheme.colors = { ...humanTheme.colors.modes.light, modes: humanTheme.colors.modes }
