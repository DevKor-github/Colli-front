import { type ButtonProps, View, styled } from 'tamagui'

import { Typography } from '@/components/Typography'
import { BUTTON_TEXT_COLOR } from '@/constants/button'
import { customPalettes } from '@/theme/customPalettes'

const ButtonWrapper = styled(View, {
  display: 'inline-flex',
  height: 50,
  paddingHorizontal: 16,
  paddingVertical: 10,
  justifyContent: 'center',
  alignItems: 'center',
  flexGrow: 1,
  flexBasis: 0,
  borderRadius: 8,
  variants: {
    type: {
      dark: {
        backgroundColor: customPalettes.wf[100]
      },
      light: {
        backgroundColor: customPalettes.wf[120]
      },
      gray: {
        backgroundColor: customPalettes.gray[100]
      }
    }
  }
})

interface CustomButtonProps extends ButtonProps {
  type: 'dark' | 'light' | 'gray'
  handlePress: () => void
}
const Button = ({ type, handlePress, ...prop }: CustomButtonProps) => {
  return (
    // <Pressable onPress={handlePress}>
    <ButtonWrapper type={type} {...prop} onPress={handlePress}>
      <Typography type="M" fontSize={16} textColor={BUTTON_TEXT_COLOR[type]}>
        {prop.children}
      </Typography>
    </ButtonWrapper>
    // </Pressable>
  )
}

export default Button
