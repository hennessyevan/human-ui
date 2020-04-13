import { Global } from '@emotion/core'
import React from 'react'

export const GlobalStyles = () => (
  <Global
    styles={theme => ({
      '*': {
        boxSizing: 'border-box',
        fontFamily: theme.fonts.text,
        fontSize: theme.fontSizes[3],
      },
    })}
  />
)
