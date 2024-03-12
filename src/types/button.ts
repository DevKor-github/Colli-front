import type { ReactElement } from 'react';
import type { GestureResponderEvent } from 'react-native';
import type { StackProps } from 'tamagui';


type buttonColor = 'primary' | 'secondary' | 'gray' | 'text' | 'kakao'
type buttonSize = 'sml' | 'mid' | 'big'
export interface ButtonProps extends StackProps {
  color: buttonColor
  size: buttonSize
  children: React.ReactNode
  handlePress: (event: GestureResponderEvent) => void
}

export interface IconButtonProps extends ButtonProps {
  icon: ReactElement
}

export interface SelectedButtonProps {
  status: boolean
  handlePress?: () => void
}