// info 12, 14: 17(lineHeight), 16: 19(lineHeight)
import type { TextProps } from 'tamagui'

export type fontVariant = 'R' | 'M' | 'B'
export interface TypographyProps extends TextProps {
  children: React.ReactNode
  fontSize: number
  type: fontVariant
  textColor: string
}
type weight = '400' | '600' | '700'
interface TypographyWeight {
  R: weight
  M: weight
  B: weight
}

export const TYPOGRAPHY_WEIGHT: TypographyWeight = {
  R: '400',
  M: '600',
  B: '700'
}

export const getLineHeight = (fontSize: number): number => {
  switch (fontSize) {
    case 12:
    case 14:
      return 17
    case 16:
      return 19
    case 17:
      return 21
    case 18:
      return 40
    default:
      return 0
  }
}
