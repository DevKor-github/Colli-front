import { Pressable } from 'react-native'
import Animated, {
  Easing,
  useAnimatedProps,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming
} from 'react-native-reanimated'
import { Path, Svg } from 'react-native-svg'
import { useRecoilState } from 'recoil'

import { calendarState } from '@/recoil/atom'
import { customPalettes } from '@theme/customPalettes'

const AnimatedPath = Animated.createAnimatedComponent(Path)
export const CalendarSwitch = () => {
  const [isWeek, setIsWeek] = useRecoilState(calendarState)
  const offset = useSharedValue(isWeek ? 0 : 46)
  const animatedStyle = useAnimatedStyle(() => ({ transform: [{ translateX: offset.value }] }))
  const weekColor = useSharedValue(isWeek ? customPalettes.gray[700] : customPalettes.gray[300])
  const monthColor = useSharedValue(!isWeek ? customPalettes.gray[700] : customPalettes.gray[300])
  const togglePress = () => {
    setTimeout(() => {
      setIsWeek(!isWeek)
    }, 0)
    offset.value = withDelay(
      200,
      withTiming(!isWeek ? 0 : 46, {
        duration: 300,
        easing: Easing.bezier(0.42, 0, 0, 0.94)
      })
    )
    weekColor.value = withTiming(!isWeek ? customPalettes.gray[700] : customPalettes.gray[300], { duration: 400 })
    monthColor.value = withTiming(isWeek ? customPalettes.gray[700] : customPalettes.gray[300], { duration: 400 })
  }
  const animatedWeekPathProps = useAnimatedProps(() => ({
    fill: weekColor.value
  }))
  const animatedMonthPathProps = useAnimatedProps(() => ({
    fill: monthColor.value
  }))

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
        <Svg width={11} height={11} viewBox="0 0 11 11" fill="none">
          <AnimatedPath
            animatedProps={animatedWeekPathProps}
            d="M10.6367 7.19727C10.6367 7.60286 10.5592 7.98568 10.4043 8.3457C10.2539 8.70117 10.0443 9.01335 9.77539 9.28223C9.51107 9.54655 9.19889 9.75618 8.83887 9.91113C8.4834 10.0615 8.10286 10.1367 7.69727 10.1367C7.33268 10.1367 6.98177 10.0729 6.64453 9.94531C6.31185 9.81771 6.01107 9.63086 5.74219 9.38477C5.47331 9.63086 5.17025 9.81771 4.83301 9.94531C4.49577 10.0729 4.14486 10.1367 3.78027 10.1367C3.37467 10.1367 2.99186 10.0615 2.63184 9.91113C2.27637 9.75618 1.96419 9.54655 1.69531 9.28223C1.43099 9.01335 1.22135 8.70117 1.06641 8.3457C0.916016 7.98568 0.84082 7.60286 0.84082 7.19727V0.197266H2.80273V7.19727C2.80273 7.33398 2.8278 7.46387 2.87793 7.58691C2.92806 7.7054 2.99642 7.81022 3.08301 7.90137C3.17415 7.98796 3.27897 8.05632 3.39746 8.10645C3.51595 8.15658 3.64355 8.18164 3.78027 8.18164C3.91699 8.18164 4.0446 8.15658 4.16309 8.10645C4.28158 8.05632 4.38411 7.98796 4.4707 7.90137C4.56185 7.81022 4.63249 7.7054 4.68262 7.58691C4.73275 7.46387 4.75781 7.33398 4.75781 7.19727V0.197266H6.71973V7.19727C6.71973 7.33398 6.74479 7.46387 6.79492 7.58691C6.84505 7.7054 6.91341 7.81022 7 7.90137C7.09115 7.98796 7.19596 8.05632 7.31445 8.10645C7.43294 8.15658 7.56055 8.18164 7.69727 8.18164C7.83398 8.18164 7.96159 8.15658 8.08008 8.10645C8.19857 8.05632 8.30111 7.98796 8.3877 7.90137C8.47884 7.81022 8.54948 7.7054 8.59961 7.58691C8.6543 7.46387 8.68164 7.33398 8.68164 7.19727V0.197266H10.6367V7.19727Z"
          />
        </Svg>
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
        <Svg width={11} height={10} viewBox="0 0 11 10" fill="none">
          <AnimatedPath
            animatedProps={animatedMonthPathProps}
            d="M10.6367 10H8.68164V3C8.68164 2.86328 8.6543 2.73568 8.59961 2.61719C8.54948 2.4987 8.47884 2.39616 8.3877 2.30957C8.30111 2.21842 8.19857 2.14779 8.08008 2.09766C7.96159 2.04753 7.83398 2.02246 7.69727 2.02246C7.56055 2.02246 7.43294 2.04753 7.31445 2.09766C7.19596 2.14779 7.09115 2.21842 7 2.30957C6.91341 2.39616 6.84505 2.4987 6.79492 2.61719C6.74479 2.73568 6.71973 2.86328 6.71973 3V10H4.75781V3C4.75781 2.86328 4.73275 2.73568 4.68262 2.61719C4.63249 2.4987 4.56185 2.39616 4.4707 2.30957C4.38411 2.21842 4.28158 2.14779 4.16309 2.09766C4.0446 2.04753 3.91699 2.02246 3.78027 2.02246C3.64355 2.02246 3.51595 2.04753 3.39746 2.09766C3.27897 2.14779 3.17415 2.21842 3.08301 2.30957C2.99642 2.39616 2.92806 2.4987 2.87793 2.61719C2.8278 2.73568 2.80273 2.86328 2.80273 3V10H0.84082V3C0.84082 2.5944 0.916016 2.21387 1.06641 1.8584C1.22135 1.49837 1.43099 1.1862 1.69531 0.921875C1.96419 0.652995 2.27637 0.443359 2.63184 0.292969C2.99186 0.138021 3.37467 0.0605469 3.78027 0.0605469C4.14486 0.0605469 4.49577 0.126628 4.83301 0.258789C5.17025 0.386393 5.47331 0.573242 5.74219 0.819336C6.01107 0.573242 6.31185 0.386393 6.64453 0.258789C6.98177 0.126628 7.33268 0.0605469 7.69727 0.0605469C8.10286 0.0605469 8.4834 0.138021 8.83887 0.292969C9.19889 0.443359 9.51107 0.652995 9.77539 0.921875C10.0443 1.1862 10.2539 1.49837 10.4043 1.8584C10.5592 2.21387 10.6367 2.5944 10.6367 3V10Z"
          />
        </Svg>
      </Animated.View>
    </Pressable>
  )
}
