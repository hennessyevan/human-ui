import React from 'react'
import { Text, Box } from '../src'

export default {
  title: 'Typography',
}

export const text = () => {
  return (
    <Box>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        {([
          'LargeTitle',
          'Title1',
          'Title2',
          'Title3',
          'Headline',
          'Body',
          'Callout',
          'Subhead',
          'Footnote',
          'Caption1',
          'Caption2',
        ] as Text['style'][]).map(style => (
          <Text fontFamily="small" style={style}>
            {style}
          </Text>
        ))}
      </Box>
    </Box>
  )
}
