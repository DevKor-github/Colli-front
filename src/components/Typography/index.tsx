import { Text } from 'tamagui'

// import { Text } from 'react-native'
import { TYPOGRAPHY_WEIGHT, type TypographyProps, getLineHeight } from '@constants/typography'

export const Typography = ({
  children,
  fontSize,
  type,
  textColor,
  textDecorationLine,
  ellipse,
  numberOfLines
}: TypographyProps) => {
  const lineHeight = getLineHeight(fontSize)
  // const fontFmaily = type === 'M' ? 'Pretendard-Medium' : type === 'R' ? 'Pretendard-Regular' : 'Pretendard-Bold'
  return (
    <Text
      fontFamily={`$${type}`}
      fontSize={fontSize}
      color={textColor}
      fontWeight={TYPOGRAPHY_WEIGHT[type]}
      lineHeight={lineHeight === 0 ? undefined : lineHeight}
      textDecorationLine={textDecorationLine}
      ellipse={ellipse}
      numberOfLines={numberOfLines}
    >
      {children}
    </Text>
  )
}
