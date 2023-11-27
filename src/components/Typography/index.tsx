import { Text } from 'tamagui'

import { TYPOGRAPHY_WEIGHT, type TypographyProps, getLineHeight } from '@constants/typography'

export const Typography = ({ children, fontSize, type, textColor, textDecoration }: TypographyProps) => {
  const lineHeight = getLineHeight(fontSize)
  return (
    <Text
      fontFamily={`$${type}`}
      fontSize={fontSize}
      color={textColor}
      fontWeight={TYPOGRAPHY_WEIGHT[type]}
      lineHeight={lineHeight}
      textDecorationLine={textDecoration}
    >
      {children}
    </Text>
  )
}
