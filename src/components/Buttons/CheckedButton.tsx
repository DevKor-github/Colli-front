import { type GetProps, Stack, styled } from 'tamagui'

import Vector from '@/assets/Svgs/Vector.svg'
import { Typography } from '@/components/Typography'
import { customPalettes } from '@/theme/customPalettes'
import { type SelectedButtonProps } from '@/types/button'

const CheckedButtonContainer = styled(Stack, {
  display: 'flex',
  width: 24,
  height: 24,
  justifyContent: 'center',
  alignItems: 'center',
  gap: 10,
  flexShrink: 0,
  borderRadius: 4,
  borderWidth: 1,
  borderStyle: 'solid',
  variants: {
    status: {
      true: {
        borderColor: customPalettes.wf[100],
        backgroundColor: customPalettes.wf[100]
      },
      false: {
        borderColor: '#C1C5FF',
        backgroundColor: '#FFFFFF'
      }
    }
  } as const
})
export type SelectedButtonContainerProps = GetProps<typeof CheckedButtonContainer>

export const CheckedButton = ({ status, handlePress }: SelectedButtonProps) => {
  const onPress = handlePress ?? (() => {})
  return (
    <CheckedButtonContainer status={status} onPress={() => onPress()}>
      {status && <Vector />}
    </CheckedButtonContainer>
  )
}
