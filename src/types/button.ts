import type { GestureResponderEvent } from 'react-native'

type buttonColor = 'primary' | 'secondary' | 'gray' | 'text' | 'kakao'
type buttonSize = 'sml' | 'mid' | 'big'
export interface ButtonProps {
  color: buttonColor
  size: buttonSize
  children: React.ReactNode
  handlePress: (event: GestureResponderEvent) => void
}
