import 'styled-components'
import { HumanThemeType } from '../theme'

declare module 'styled-components' {
  export interface DefaultTheme extends HumanThemeType {}
}
