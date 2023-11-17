import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { View } from 'tamagui'

import { customPalettes } from '@theme/customPalettes'

export const SafeArea = ({ children }: { children: React.ReactNode }) => {
  const insets = useSafeAreaInsets()
  return (
    <View
      flex={1}
      paddingTop={insets.top}
      paddingLeft={insets.left}
      paddingRight={insets.right}
      backgroundColor={customPalettes.gray[50]}
    >
      {children}
    </View>
  )
}
