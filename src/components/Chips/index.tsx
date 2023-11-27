import type { GetProps } from 'tamagui'
import { Stack, View, styled } from 'tamagui'

import { customPalettes } from '@/theme/customPalettes'

import { Typography } from '../Typography'
import { CHIP_TEXT_COLOR, type ChipProps } from '../constants/chip'

export const CustomChip = styled(Stack, {
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: 39,
  borderRadius: 100,
  paddingVertical: 10,
  paddingHorizontal: 14,
  variants: {
    gray: {
      true: {
        gap: 10,
        backgroundColor: customPalettes.gray[600]
      },
      false: {
        width: 80,
        gap: 10,
        backgroundColor: customPalettes.snow[50],
        borderColor: customPalettes.gray[200],
        borderStyle: 'solid',
        borderWidth: 1
      }
    },
    team: {
      true: {
        width: 80,
        flexDirection: 'row',
        gap: 8,
        backgroundColor: customPalettes.blue[50],
        borderColor: customPalettes.blue[200],
        borderStyle: 'solid',
        borderWidth: 1
      },
      false: {
        width: 80,
        flexDirection: 'row',
        gap: 8,
        backgroundColor: customPalettes.snow[50],
        borderColor: customPalettes.gray[200],
        borderStyle: 'solid',
        borderWidth: 1
      }
    }
  } as const
})

export type ChipWrapperProps = GetProps<typeof CustomChip>
const Circle = styled(View, {
  width: 8,
  height: 8,
  borderRadius: 10,
  backgroundColor: customPalettes.blue[500],
  gap: 8
})

export const Chip = ({ chipVariant, status, children }: ChipProps) => {
  const fontSize = 16
  const type = 'B'
  const textColor = chipVariant === 'gray' ? CHIP_TEXT_COLOR.gray[`${status}`] : CHIP_TEXT_COLOR.team[`${status}`]

  const ChipWrapper = ({ variant, children }: { variant: string; children: React.ReactNode }) => {
    if (variant === 'gray') {
      return (
        <CustomChip gray={status}>
          <Typography fontSize={fontSize} type={type} textColor={textColor}>
            {children}
          </Typography>
        </CustomChip>
      )
    } else {
      return (
        <CustomChip team={status}>
          <Circle backgroundColor={status ? customPalettes.blue[500] : customPalettes.blue[200]} />
          <Typography fontSize={fontSize} type={type} textColor={textColor}>
            {children}
          </Typography>
        </CustomChip>
      )
    }
  }
  return <ChipWrapper variant={chipVariant}>{children}</ChipWrapper>
}
