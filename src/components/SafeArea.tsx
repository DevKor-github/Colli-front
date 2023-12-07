import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { View } from 'tamagui'

import { customPalettes } from '@theme/customPalettes'

export const SafeArea = ({ children, team }: { children: React.ReactNode; team?: boolean }) => {
  const insets = useSafeAreaInsets()
  return (
    <View
      flex={1}
      paddingTop={insets.top}
      paddingLeft={insets.left}
      paddingRight={insets.right}
      backgroundColor={team ? customPalettes.snow[50] : customPalettes.gray[50]}
    >
      {children}
    </View>
  )
}
