import { HumanThemeType } from 'theme'

export function sizingDictionary({
  theme,
  size,
  fontFamily,
}: {
  theme: HumanThemeType
  size: string | number
  fontFamily: keyof HumanThemeType['fonts']
}): keyof HumanThemeType['fonts'] {
  size = typeof size === 'number' ? size : parseInt(size.split('px')[0])
  size = theme.fontSizes[size]

  if (['text', 'display'].includes(fontFamily)) {
    if (size < 20) return 'text'
    else return 'display'
  }

  if (['small', 'medium', 'large'].includes(fontFamily)) {
    if (size < 20) return 'small'
    else if (size > 20 && size < 35) return 'medium'
    else return 'large'
  }

  if (['mono'].includes(fontFamily)) return 'mono'

  return 'text'
}
