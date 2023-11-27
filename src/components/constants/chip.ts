import type { GestureResponderEvent } from 'react-native'
import type { GetProps } from 'tamagui'

import type { CustomChip } from '@/components/Chips/index'
import { customPalettes } from '@/theme/customPalettes'

type variant = 'gray' | 'team'
export interface ChipProps {
  chipVariant: variant
  status: boolean
  children: React.ReactNode
  onPress: () => void
}
export const CHIP_TEXT_COLOR = {
  gray: {
    true: customPalettes.snow[50],
    false: customPalettes.gray[400]
  },
  team: {
    true: customPalettes.blue[500],
    false: customPalettes.gray[400]
  }
}

export type ChipWrapperProps = GetProps<typeof CustomChip>
