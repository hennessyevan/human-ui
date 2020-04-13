import { Box, GlobalStyles, HumanTheme } from '../'
import React from 'react'
import { ThemeProvider, useColorMode } from 'theme-ui'

export default {
  title: 'Box',
}

export const basic = () => (
  <ThemeProvider theme={HumanTheme}>
    <GlobalStyles />
    <Box backgroundColor="red" padding={[1, 10]}>
      test
    </Box>
    <ThemeButton />
  </ThemeProvider>
)

const ThemeButton = () => {
  const [colorMode, setColorMode] = useColorMode()
  return (
    <button onClick={() => setColorMode(colorMode === 'light' ? 'dark' : 'light')}>Toggle</button>
  )
}
