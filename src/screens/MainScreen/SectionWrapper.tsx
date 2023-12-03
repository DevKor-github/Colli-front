import React from 'react'
import { View } from 'tamagui'

import { customPalettes } from '@/theme/customPalettes'

export const SectionWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <View
      mt={16}
      display="flex"
      justifyContent="flex-end"
      alignItems="flex-start"
      backgroundColor={customPalettes.snow[50]}
    >
      {children}
    </View>
  )
}
