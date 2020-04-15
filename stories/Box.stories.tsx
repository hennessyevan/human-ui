import React from 'react'
import { Box } from '../src'

export default {
  title: 'Box',
}

export const basic = () => (
  <Box
    sx={{
      backgroundColor: 'red',
      width: '150px',
      height: '150px',
      padding: 2,
      color: 'white',
      borderRadius: 2,
    }}
  >
    Simple Box
  </Box>
)
