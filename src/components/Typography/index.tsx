import { Text } from 'tamagui'

import { TYPOGRAPHY_WEIGHT, type TypographyProps, getLineHeight } from '@/components/constants/typography'

export const Typography = ({ children, fontSize, type, textColor }: TypographyProps) => {
  const lineHeight = getLineHeight(fontSize)
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
