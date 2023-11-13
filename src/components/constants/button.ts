import type { GestureResponderEvent } from 'react-native'

import { customPalettes } from '@/theme/customPalettes'

type buttonColor = 'primary' | 'secondary' | 'gray' | 'text'
type buttonSize = 'sml' | 'mid' | 'big'
export interface ButtonProps {
  color: buttonColor
  size: buttonSize
  children: React.ReactNode
  handlePress: (event: GestureResponderEvent) => void
}
export const BUTTON_TEXT_COLOR = {
  primary: customPalettes.blue[50],
  secondary: customPalettes.blue[500],
  gray: customPalettes.gray[500],
  text: customPalettes.gray[400]
}
