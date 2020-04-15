import React from 'react'
import { humanTheme, Box, Text, HumanProvider } from '../src'

export default {
  title: 'Colors',
}

function Swatch({ color }: { color: string }) {
  return (
    <Box
      sx={{
        backgroundColor: color,
        height: '50px',
        width: '50px',
        borderRadius: 2,
        border: '1px solid rgba(100,100,100,0.5)',
      }}
    />
  )
}

export function systemColors() {
  return (
    <HumanProvider>
      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(250px, 1fr))', gap: 4 }}>
        {Object.entries(humanTheme.colors.modes).map(([name, colors]) => (
          <Box
            sx={{
              display: 'inline-flex',
              padding: 3,
              flexDirection: 'column',
              border: '1px solid',
              borderColor: 'grays.3',
              borderRadius: 3,
            }}
          >
            <Text style="LargeTitle" sx={{ textTransform: 'capitalize' }}>
              {name.replace('_', ' ')}
            </Text>

            {Object.keys(colors).map(color => {
              return (
                color !== 'modes' && (
                  <Box sx={{ display: 'flex', alignItems: 'center', paddingTop: 2 }}>
                    <Swatch color={humanTheme.colors.modes[name][color]} />
                    <Text sx={{ paddingLeft: 2, textTransform: 'capitalize' }}>{color}</Text>
                  </Box>
                )
              )
            })}
          </Box>
        ))}
      </Box>
    </HumanProvider>
  )
}
