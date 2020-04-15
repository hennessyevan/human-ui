import { SystemStyleObject } from '@styled-system/css'
import styled from 'styled-components'
import { sx } from '../utils/sx'

export type Box = {
  sx?: SystemStyleObject
}

export const Box = styled('div')<Box>(sx)
