import { useEffect } from 'react'
import { useLocalStorage } from './useLocalStorage'
import { useMedia } from './useMedia'

const HUMAN_UI_COLOR_MODE = 'human-ui-color-mode'

export function useColorMode(initialMode?: string) {
  const [colorMode, setColorMode] = useLocalStorage(HUMAN_UI_COLOR_MODE, initialMode)
  const prefersDark = useMedia('(prefers-color-scheme: dark)', false)
  // No browser support for this currently. https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-contrast
  const prefersAccessible = useMedia('(prefers-contrast: high)', false)

  useEffect(() => {
    if (initialMode === 'auto') {
      setColorMode(`${prefersAccessible ? 'accessible_' : ''}${prefersDark ? 'dark' : 'light'}`)
    }
  }, [colorMode, prefersDark, prefersAccessible])

  return [colorMode, setColorMode]
}
