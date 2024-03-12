import { type GetProps, Stack, styled } from 'tamagui';



import Ellipse from '@/assets/Svgs/Ellipse.svg';
import { Typography } from '@/components/Typography';
import { customPalettes } from '@/theme/customPalettes';
import { type SelectedButtonProps } from '@/types/button';


const RadioCheckedButtonContainer = styled(Stack, {
  display: 'flex',
  width: 24,
  height: 24,
  padding: 5,
  justifyContent: 'center',
  alignItems: 'center',
  gap: 10,
  flexShrink: 0,
  borderRadius: 100,
    borderStyle: 'solid',
  backgroundColor: '#FFFFFF',
  variants: {
    status: {
      true: {
        borderWidth: 2,
        borderColor: customPalettes.wf[100],
      },
      false: {
        borderWidth: 1,
        borderColor: '#C1C5FF',
      }
    }
  } as const
})
export type RadioSelectedButtonContainerProps = GetProps<typeof RadioCheckedButtonContainer>

export const RadioCheckedButton = ({ status, handlePress }: SelectedButtonProps) => {
  const onPress = handlePress ?? (() => {})
  return (
    <RadioCheckedButtonContainer status={status} onPress={() => onPress()}>
      {status && <Ellipse />}
    </RadioCheckedButtonContainer>
  )
}