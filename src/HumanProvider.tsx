import React, { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { useMedia } from './utils/useMedia'
import { GlobalStyles } from './globalStyles'
import { ColorModes, humanTheme } from './theme'

export type HumanProviderProps = {
  colorMode?: ColorModes
  children: ReactNode
}

export function HumanProvider({ children, colorMode = 'auto' }: HumanProviderProps) {
  const prefersDark = useMedia('(prefers-color-scheme: dark)')
  const theme = humanTheme

  if (colorMode !== 'light') {
    theme.colors = {
      ...theme.colors,
      ...theme.colors.modes[prefersDark ? 'dark' : 'light'],
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  )
}
