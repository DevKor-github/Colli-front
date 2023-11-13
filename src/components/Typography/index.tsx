import { Text } from 'tamagui'

import { TYPOGRAPHY_WEIGHT, type TypographyProps } from '../constants/typography'

export const Typography = ({ children, fontSize, type, textColor }: TypographyProps) => {
  const lineHeight = fontSize === (12 | 14) ? 17 : 19
  return (
    <Text
      fontFamily={`$${type}`}
      fontSize={fontSize}
      color={textColor}
      fontWeight={TYPOGRAPHY_WEIGHT[type]}
      lineHeight={lineHeight}
    >
      {children}
    </Text>
  )
}
