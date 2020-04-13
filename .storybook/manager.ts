import { addons } from '@storybook/addons'
import { create } from '@storybook/theming/create'

addons.setConfig({
  readme: {
    codeTheme: 'github',
  },
  options: {
    theme: create({
      base: 'light',
      brandTitle: 'Human UI',
      brandImage: '/Logo.png',
      textColor: 'rgb(51,51,51)',
    }),
  },
})
