import { Pressable } from 'react-native'
import Animated, { Easing, useAnimatedStyle, useSharedValue, withDelay, withTiming } from 'react-native-reanimated'
import { useRecoilState } from 'recoil'

import { calendarState } from '@/recoil/atom'
import Month from '@assets/Svgs/Month.svg'
import Week from '@assets/Svgs/Week.svg'
import { customPalettes } from '@theme/customPalettes'

export const CalendarSwitch = () => {
  const [isWeek, setIsWeek] = useRecoilState(calendarState)
  const offset = useSharedValue(isWeek ? 0 : 46)
  const animatedStyle = useAnimatedStyle(() => ({ transform: [{ translateX: offset.value }] }))

  const togglePress = () => {
    setTimeout(() => {
      setIsWeek(!isWeek)
    }, 100)
    offset.value = withDelay(
      0,
      withTiming(!isWeek ? 0 : 46, {
        duration: 350,
        easing: Easing.inOut(Easing.ease)
      })
    )
  }
  return (
    <Pressable
      onPress={togglePress}
      style={{
        display: 'flex',
        flexDirection: 'row',
        width: 99,
        height: 33,
        flexShrink: 0,
        borderRadius: 100,
        padding: 4,
        backgroundColor: customPalettes.gray[50],
        alignItems: 'center',
        justifyContent: 'space-between'
      }}
    >
      <Animated.View
        style={[
          {
            display: 'flex',
            width: 44,
            height: 25,
            paddingHorizontal: 16,
            paddingVertical: 4,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
            backgroundColor: customPalettes.snow[50],
            zIndex: 1
          },
          animatedStyle
        ]}
      />
      <Animated.View
        style={{
          display: 'flex',
          position: 'absolute',
          left: 4,
          width: 44,
          height: 25,
          paddingHorizontal: 16,
          paddingVertical: 4,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 10,
          zIndex: 2
        }}
      >
        <Week color={isWeek ? customPalettes.gray[700] : customPalettes.gray[300]} />
      </Animated.View>
      <Animated.View
        style={{
          display: 'flex',
          width: 44,
          height: 25,
          paddingHorizontal: 16,
          paddingVertical: 4,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 10,
          zIndex: 2
        }}
      >
        <Month color={!isWeek ? customPalettes.gray[700] : customPalettes.gray[300]} />
      </Animated.View>
    </Pressable>
  )
}
