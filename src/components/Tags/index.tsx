import { type GetProps, Stack, View, styled } from 'tamagui'

import { Typography } from '@/components/Typography'
import { TAG_TYPOGRAPHY, type TagProps } from '@/constants/tag'
import { customPalettes } from '@/theme/customPalettes'

const TagContainer = styled(Stack, {
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  variants: {
    type: {
      text: {
        maxWidth: 49,
        maxHeight: 33,
        backgroundColor: customPalettes.gray[100]
      },
      dot: {
        width: 'auto',
        height: 'auto',
        flexDirection: 'row',
        paddingVertical: 10,
        paddingHorizontal: 16,
        gap: 8,
        borderRadius: 8
      }
    },
    status: {
      big: {
        paddingVertical: 8,
        paddingHorizontal: 12,
        gap: 10,
        borderRadius: 8
      },
      sml: {
        maxWidth: 37,
        maxHeight: 31,
        paddingVertical: 7,
        paddingHorizontal: 8,
        gap: 4,
        borderRadius: 4
      },
      true: {
        backgroundColor: customPalettes.blue[50]
      },
      false: {
        backgroundColor: customPalettes.snow[50]
      }
    }
  } as const
})
export type TagContainerProps = GetProps<typeof TagContainer>

export const Tag = ({ type, status, children, handlePress }: TagProps) => {
  const fontVariables = TAG_TYPOGRAPHY[`${status}`]
  const onPress = handlePress ?? (() => {})
  return (
    <TagContainer type={type} status={status} onPress={() => onPress()}>
      {type === 'dot' && <View backgroundColor={fontVariables.color} width={8} height={8} borderRadius={8} />}
      <Typography fontSize={fontVariables.fontSize} type={fontVariables.type} textColor={fontVariables.color}>
        {children}
      </Typography>
    </TagContainer>
  )
}
