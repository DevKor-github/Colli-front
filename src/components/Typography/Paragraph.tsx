import { Text } from 'tamagui'

import { TYPOGRAPHY_WEIGHT, type TypographyProps, getLineHeight } from '@/constants/typography'

export const Paragraph = ({
  children,
  fontSize,
  type,
  textColor,
  textDecorationLine,
  ellipse,
  flexGrow,
  flexBasis,
  alignSelf,
  numberOfLines
}: TypographyProps) => {
  const lineHeight = getLineHeight(fontSize)

  return (
    <Text
      fontFamily={`$${type}`}
      fontSize={fontSize}
      color={textColor}
      fontWeight={TYPOGRAPHY_WEIGHT[type]}
      lineHeight={lineHeight === 0 ? undefined : lineHeight}
      textDecorationLine={textDecorationLine}
      ellipse={ellipse}
      flexGrow={flexGrow}
      flexBasis={flexBasis}
      alignSelf={alignSelf}
      numberOfLines={numberOfLines}
    >
      {children}
    </Text>
  )
}
