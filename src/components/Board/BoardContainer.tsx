import { Stack, styled } from 'tamagui'

import { customPalettes } from '@/theme/customPalettes'
import { type BoardContainerProps } from '@/types/Board'

export const CustomBoard = styled(Stack, {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: 12,
  pressStyle: {
    opacity: 0.6
  },
  borderRadius: 16,
  padding: 12,
  backgroundColor: customPalettes.snow[50],
  variants: {
    size: {
      short: {
        height: 122,
        alignSelf: 'stretch'
      },
      long: {
        height: 254,
        flexGrow: 1,
        flexShrink: 0,
        flexBasis: 0
      }
    }
  } as const
})

export const BoardContainer = ({ size, children, onPress }: BoardContainerProps) => {
  return (
    <CustomBoard size={size} onPress={onPress}>
      {children}
    </CustomBoard>
  )
}
