import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle(({ theme }) => ({
  '*': {
    boxSizing: 'border-box',
    backgroundColor: theme.colors.background,
    color: theme.colors.text,
    fontFamily: theme.fonts.text,
    fontSize: theme.fontSizes[6],
  },
}))
