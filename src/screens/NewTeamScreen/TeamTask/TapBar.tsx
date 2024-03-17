import Animated, { type SharedValue } from 'react-native-reanimated'
import { View } from 'tamagui'

export const TapBar = ({ offset }: { offset: SharedValue<number> }) => {

  return (
    <View
      display="flex"
      height={1}
      width="100%"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      gap={10}
      alignSelf="stretch"
      backgroundColor={'#B2B2B2'}
    >
      <Animated.View
        style={{
          width: 128,
          height: 1,
          flexShrink: 0,
          backgroundColor: '#000000',
          transform: [{ translateX: offset }]
        }}
      />
    </View>
  )
}
