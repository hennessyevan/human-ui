import { createParser, get } from '@styled-system/core'
import css, { SystemStyleObject } from '@styled-system/css'

type VariantConfig = {
  /**
   * object of theme-aware variant styles with user-defined shape
   */
  variants: {
    [key: string]: SystemStyleObject
  }
  /**
   * @default variant
   * custom prop name for variant
   */
  prop?: string
  /**
   * optional theme key for adding variants to the theme object
   */
  scale?: string
}

export const variant = ({ scale, prop = 'variant', variants = {} }: VariantConfig) => {
  let sx: any
  if (Object.keys(variants).length) {
    sx = (value: string, scale: string, props: any) =>
      css(get(scale, value, null as any))(props.theme)
  } else {
    sx = (value: string, scale: string) => get(scale, value, null as any)
  }
  sx.scale = scale
  sx.defaults = variants
  const config = {
    [prop]: sx,
  }
  const parser = createParser(config)
  return parser
}
