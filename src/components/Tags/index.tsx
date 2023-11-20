import { type GetProps, Stack, styled } from 'tamagui'

import { Typography } from '@/components/Typography'
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
        paddingVertical: 10,
        paddingHorizontal: 16,
        gap: 8,
        borderRadius: 8
      },
      day: {
        maxWidth: 43,
        maxHeight: 33,
        backgroundColor: customPalettes.blue[500],
        paddingVertical: 8,
        paddingHorizontal: 10,
        gap: 10,
        borderRadius: 100
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

interface TagProps {
  type: 'text' | 'dot' | 'day'
  status?: 'big' | 'sml' | true | false
  children: React.ReactNode
}

export const Tag = ({ type, status, children }: TagProps) => {
  return (
    <TagContainer type={type} status={status}>
      <Typography fontSize={14} type="B" textColor={customPalettes.blue[50]}>
        {children}
      </Typography>
    </TagContainer>
  )
}
