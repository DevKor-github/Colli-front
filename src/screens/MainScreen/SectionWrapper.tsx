import React from 'react'
import Animated, { SlideInLeft, SlideOutLeft } from 'react-native-reanimated'

import { customPalettes } from '@/theme/customPalettes'

export const SectionWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <Animated.View
      style={{
        marginTop: 16,
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        backgroundColor: customPalettes.snow[50]
      }}
      entering={SlideInLeft}
      exiting={SlideOutLeft}
    >
      {children}
    </Animated.View>
  )
}
