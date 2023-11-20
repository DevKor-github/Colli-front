import { View } from 'react-native'
import { Stack, styled } from 'tamagui'

import { customPalettes } from '@/theme/customPalettes'

import { Typography } from '../Typography'
import { CHIP_TEXT_COLOR, type ChipProps } from '../constants/chip'

const CustomChip = styled(Stack, {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 100,
  variants: {
    color: {
      graytrue: {
        width: 79,
        height: 39,
        display: 'inline-flex',
        paddingVertical: 10,
        paddingHorizontal: 14,
        gapHorizontal: 10,
        backgroundColor: customPalettes.gray[600]
      },
      teamtrue: {
        flexDirection: 'row',
        width: 86,
        height: 39,
        display: 'inline-flex',
        paddingVertical: 10,
        paddingHorizontal: 14,
        gapHorizontal: 8,
        backgroundColor: customPalettes.blue[50],
        borderColor: customPalettes.blue[200],
        borderStyle: 'solid',
        borderWidth: 1
      },
      grayfalse: {
        width: 79,
        height: 39,
        display: 'inline-flex',
        paddingVertical: 10,
        paddingHorizontal: 14,
        gapHorizontal: 10,
        backgroundColor: customPalettes.snow[50],
        borderColor: customPalettes.gray[200],
        borderStyle: 'solid',
        borderWidth: 1
      },
      teamfalse: {
        flexDirection: 'row',
        width: 86,
        height: 39,
        display: 'inline-flex',
        paddingVertical: 10,
        paddingHorizontal: 14,
        gapHorizontal: 8,
        backgroundColor: customPalettes.snow[50],
        borderColor: customPalettes.gray[200],
        borderStyle: 'solid',
        borderWidth: 1
      }
    }
  } as const
})

const CircleTrue = styled(View, {
  width: 8,
  height: 8,
  borderRadius: 10,
  backgroundColor: customPalettes.blue[500],
  marginRight: 5
})

const CircleFalse = styled(View, {
  width: 8,
  height: 8,
  borderRadius: 10,
  backgroundColor: customPalettes.blue[200],
  marginRight: 5
})

export const Chip = ({ color, children }: ChipProps) => {
  const fontSize = 16
  const type = 'B'
  const textColor = CHIP_TEXT_COLOR[color]
  return (
    <CustomChip color={color}>
      {color === 'teamtrue' && <CircleTrue />}
      {color === 'teamfalse' && <CircleFalse />}
      <Typography fontSize={fontSize} type={type} textColor={textColor}>
        {children}
      </Typography>
    </CustomChip>
  )
}
