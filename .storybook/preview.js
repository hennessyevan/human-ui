import React from 'react'
import { addDecorator } from '@storybook/react'
import { withContexts } from '@storybook/addon-contexts/react'
import { ThemeProvider, HumanTheme, useColorMode } from '../dist'

const StorybookProvider = ({ theme }) => {
  return (
    <ThemeProvider theme={HumanTheme}>
      <Toggle theme={theme} />
    </ThemeProvider>
  )
}

const Toggle = ({ theme }) => {
  const {} = useColorMode(theme)
  return null
}

addDecorator(
  withContexts([
    {
      icon: 'chroma', // a icon displayed in the Storybook toolbar to control contextual props
      title: 'Themes', // an unique name of a contextual environment
      components: [StorybookProvider],
      params: [
        { name: 'Light Theme', props: { theme: 'light' }, default: true },
        { name: 'Dark Theme', props: { theme: 'dark' } },
      ],
    },
  ]),
)
