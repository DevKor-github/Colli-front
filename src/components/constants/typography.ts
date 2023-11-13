// info 12, 14: 17(lineHeight), 16: 19(lineHeight)

type font = 'R' | 'M' | 'B'
export interface TypographyProps {
  children: React.ReactNode
  fontSize: number
  type: font
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
