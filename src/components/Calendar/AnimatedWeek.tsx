import { useEffect } from 'react'
import Animated, { Easing, FadeInDown, useSharedValue, withTiming } from 'react-native-reanimated'
import { XStack } from 'tamagui'

import { DayContainer } from '@components/Calendar/DayContainer'

interface WeekCalendarProps {
  week: Date[]
}
// const AnimatedStack = Animated.createAnimatedComponent(View)
export const AnimatedWeek = ({ week }: WeekCalendarProps) => {
  const animatedHeight = useSharedValue(300)
  useEffect(() => {
    animatedHeight.value = withTiming(86, { duration: 300, easing: Easing.ease })
  }, [])
  return (
    <Animated.View
      style={{
        display: 'flex',
        width: '100%',
        height: animatedHeight,
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingHorizontal: 8,
        paddingVertical: 16,
        justifyContent: 'space-around',
        alignItems: 'flex-start'
      }}
      //   display="flex"
      //   width="100%"
      //   height={height.value}
      //   paddingHorizontal={8}
      //   paddingVertical={16}
      //   justifyContent="space-around"
      //   alignItems="flex-start"
      //   entering={FadeInDown.duration(300).easing(Easing.ease)}
    >
      {week.map(day => (
        <DayContainer key={day.toString()} day={day} />
      ))}
    </Animated.View>
  )
}
