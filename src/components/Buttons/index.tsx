import { Stack, styled } from 'tamagui'

import { Typography } from '@components/Typography'
import { BUTTON_TEXT_COLOR, type ButtonProps } from '@constants/button'
import { customPalettes } from '@theme/customPalettes'

const CustomButton = styled(Stack, {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  pressStyle: {
    opacity: 0.6
  },
  gap: 8,
  borderRadius: 10,
  padding: 12,
  variants: {
    color: {
      primary: {
        backgroundColor: customPalettes.blue[500]
      },
      secondary: {
        backgroundColor: customPalettes.blue[50]
      },
      gray: {
        backgroundColor: customPalettes.gray[100]
      },
      text: {
        backgroundColor: customPalettes.blue[50]
      },
      kakao: {
        backgroundColor: customPalettes.kakao[50]
      }
    },
    size: {
      sml: {
        width: 57,
        height: 'auto',
        display: 'inline-flex',
        paddingVertical: 14,
        paddingHorizontal: 16
      },
      mid: {
        width: 165,
        height: 'auto',
        padding: 16
      },
      big: {
        width: 342,
        height: 'auto',
        paddingVertical: 14,
        paddingHorizontal: 16
      }
    }
  } as const
})

export const Button = ({ color, size, children, handlePress }: ButtonProps) => {
  const fontSize = size === 'sml' ? 14 : 16
  const type = 'M'
  const textColor = BUTTON_TEXT_COLOR[color]
  return (
    <CustomButton color={color} size={size} onPress={handlePress}>
      <Typography fontSize={fontSize} type={type} textColor={textColor}>
        {children}
      </Typography>
    </CustomButton>
  )
}
