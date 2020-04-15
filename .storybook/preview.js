import React from 'react'
import { addDecorator } from '@storybook/react'
import { HumanProvider } from '../src'

addDecorator(storyFn => <HumanProvider>{storyFn()}</HumanProvider>)
