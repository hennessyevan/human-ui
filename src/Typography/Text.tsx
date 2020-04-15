import { SystemStyleObject, CSSObject } from '@styled-system/css'
import { typography } from 'styled-system'
import styled from 'styled-components'
import { sx, variant } from '../utils'
import { HumanThemeType } from 'theme'
import { sizingDictionary } from './sizingDictionary'

export type Text = {
  style?:
    | 'LargeTitle'
    | 'Title1'
    | 'Title2'
    | 'Title3'
    | 'Headline'
    | 'Body'
    | 'Callout'
    | 'Subhead'
    | 'Footnote'
    | 'Caption1'
    | 'Caption2'
  size?: 'xSmall' | 'Small' | 'Medium' | 'Large' | 'xLarge' | 'xxLarge' | 'xxxLarge'
  fontFamily?: keyof HumanThemeType['fonts']
  sx?: SystemStyleObject
}

export const Text = styled('span')<Text>(
  {
    fontWeight: 'normal',
  },

  typography,

  ({ fontFamily = 'text', theme }) =>
    variant({
      prop: 'style',
      variants: {
        LargeTitle: {
          fontSize: 10,
          fontWeight: 700,
          fontFamily: sizingDictionary({ fontFamily, theme, size: 10 }),
        },
        Title1: {
          fontSize: 9,
          fontWeight: 600,
          fontFamily: sizingDictionary({ fontFamily, theme, size: 9 }),
        },
        Title2: {
          fontSize: 8,
          fontWeight: 600,
          fontFamily: sizingDictionary({ fontFamily, theme, size: 8 }),
        },
        Title3: {
          fontSize: 7,
          fontWeight: 500,
          fontFamily: sizingDictionary({ fontFamily, theme, size: 7 }),
        },
        Headline: {
          fontSize: 6,
          fontWeight: 600,
          fontFamily: sizingDictionary({ fontFamily, theme, size: 6 }),
        },
        Body: {
          fontSize: 5,
          fontFamily: sizingDictionary({ fontFamily, theme, size: 5 }),
        },
        Callout: {
          fontSize: 4,
          fontFamily: sizingDictionary({ fontFamily, theme, size: 4 }),
        },
        Subhead: {
          fontSize: 3,
          fontFamily: sizingDictionary({ fontFamily, theme, size: 3 }),
        },
        Footnote: {
          fontSize: 2,
          fontFamily: sizingDictionary({ fontFamily, theme, size: 2 }),
        },
        Caption1: {
          fontSize: 1,
          fontFamily: sizingDictionary({ fontFamily, theme, size: 1 }),
        },
        Caption2: {
          fontSize: 0,
          fontFamily: sizingDictionary({ fontFamily, theme, size: 0 }),
        },
      },
    }),
  sx,
)

Text.defaultProps = {
  size: 'Medium',
  style: 'Body',
}
