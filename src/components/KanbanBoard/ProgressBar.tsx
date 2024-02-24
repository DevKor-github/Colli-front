import Animated, { type SharedValue } from 'react-native-reanimated'
import { View } from 'tamagui'

import { customPalettes } from '@/theme/customPalettes'

export const ProgressBar = ({ offset }: { offset: SharedValue<number> }) => {
  return (
    <View display="flex" height={2} width="100%" paddingLeft={15} backgroundColor={customPalettes.gray[50]}>
      <Animated.View
        style={{
          width: 53,
          height: 2,
          borderRadius: 10,
          backgroundColor: customPalettes.gray[500],
          transform: [{ translateX: offset }]
        }}
      />
    </View>
  )
}
