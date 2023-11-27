import type React from 'react'
import type { GestureResponderEvent } from 'react-native'

import { customPalettes } from '@/theme/customPalettes'

type variant = 'default' | 'add'
export interface ProjectProps {
  type: variant
  children: React.ReactNode
  handlePress: (event: GestureResponderEvent) => void
}
export interface CircleProps {
  children: React.ReactNode
  //handlePress: (event: GestureResponderEvent) => void
}

export interface ProjectAddProps {
  children: React.ReactNode
  handlePress: (event: GestureResponderEvent) => void
}
