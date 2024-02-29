import { type GetProps, Stack, styled } from 'tamagui'

import { Typography } from '@/components/Typography'
import { type TagProps } from '@/constants/tag'
import { customPalettes } from '@/theme/customPalettes'

const TagContainer = styled(Stack, {
  display: 'inline-flex',
  // flexGrow: 1,
  paddingVertical: 4,
  paddingHorizontal: 8,
  alignItems: 'center',
  gap: 10,
  borderRadius: 8,
  variants: {
    color: {
      light: {
        backgroundColor: customPalettes.wf[50]
      },
      dark: {
        backgroundColor: customPalettes.wf[100]
      }
    }
  } as const
})
export type TagContainerProps = GetProps<typeof TagContainer>

export const Tag = ({ color, children, handlePress }: TagProps) => {
  const onPress = handlePress ?? (() => {})
  const textColor = color === 'light' ? customPalettes.wf[100] : customPalettes.wf[50]
  return (
    <TagContainer color={color} onPress={() => onPress()}>
      <Typography type="R" fontSize={12} textColor={textColor}>
        {children}
      </Typography>
    </TagContainer>
  )
}
