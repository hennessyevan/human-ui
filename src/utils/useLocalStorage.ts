import { useState, useEffect } from 'react'
import { isClient } from './isClient'

export function useLocalStorage<T>(
  key: string,
  initialValue?: T,
): [T, React.Dispatch<React.SetStateAction<T>>] {
  if (!isClient) {
    return [initialValue as T, () => {}]
  }

  const [state, setState] = useState<T>(() => {
    try {
      const localStorageValue = localStorage.getItem(key)
      if (localStorageValue !== null) {
        return JSON.parse(localStorageValue)
      } else {
        initialValue && localStorage.setItem(key, JSON.stringify(initialValue))
        return initialValue
      }
    } catch {
      // If user is in private mode or has storage restriction
      // localStorage can throw. JSON.parse and JSON.stringify
      // can throw, too.
      return initialValue
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(state))
    } catch {
      // If user is in private mode or has storage restriction
      // localStorage can throw. Also JSON.stringify can throw.
    }
  }, [state])

  return [state, setState]
}
