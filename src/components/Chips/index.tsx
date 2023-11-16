import { Stack, styled } from 'tamagui'

import { customPalettes } from '@/theme/customPalettes'

import { Typography } from '../Typography'
import { CHIP_TEXT_COLOR, type ChipProps } from '../constants/chip'

const CustomChip = styled(Stack, {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 8,
  borderRadius: 100,
  variants: {
    color: {
      gray: {
        backgroundColor: customPalettes.gray[600]
      },
      team: {
        backgroundColor: customPalettes.blue[50]
      },
      circle: {
        backgroundColor: customPalettes.blue[500]
      },
      line: {
        backgroundColor: customPalettes.blue[200]
      }
    },
    size: {
      short: {
        width: 70,
        height: 39,
        display: 'inline-flex',
        paddingVertical: 10,
        paddingHorizontal: 14
      },
      long: {
        width: 86,
        height: 39,
        display: 'inline-flex',
        paddingVertical: 10,
        paddingHorizontal: 14,
        border: 1
      }
    }
  } as const
})

export const Chip = ({ color, size, children }: ChipProps) => {
  const fontSize = 16
  const type = 'B'
  const textColor = CHIP_TEXT_COLOR[color]
  return (
    <CustomChip color={color} size={size}>
      <Typography fontSize={fontSize} type={type} textColor={textColor}>
        {children}
      </Typography>
    </CustomChip>
  )
}
