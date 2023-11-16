import type { GestureResponderEvent } from 'react-native'

import { customPalettes } from '@/theme/customPalettes'

type chipColor = 'gray' | 'team'
type chipSize = 'short' | 'long'
export interface ChipProps {
  color: chipColor
  size: chipSize
  children: React.ReactNode
  //handlePress: (event: GestureResponderEvent) => void
}
export const CHIP_TEXT_COLOR = {
  gray: '#ffffff',
  team: customPalettes.blue[500]
}
