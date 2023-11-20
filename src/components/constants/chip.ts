import type { GestureResponderEvent } from 'react-native'

import { customPalettes } from '@/theme/customPalettes'

type chipColor = 'graytrue' | 'teamtrue' | 'grayfalse' | 'teamfalse'
export interface ChipProps {
  color: chipColor
  children: React.ReactNode
  //handlePress: (event: GestureResponderEvent) => void
}
export const CHIP_TEXT_COLOR = {
  graytrue: customPalettes.snow[50],
  teamtrue: customPalettes.blue[500],
  grayfalse: customPalettes.gray[400],
  teamfalse: customPalettes.gray[400]
}
