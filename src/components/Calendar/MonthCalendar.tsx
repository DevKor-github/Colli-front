import Animated, { FadeInUp } from 'react-native-reanimated'
import { YStack } from 'tamagui'

import { WeekCalendar } from '@components/Calendar/WeekCalendar'

interface MonthCalendarProps {
  month: Date[]
}

const AnimatedStack = Animated.createAnimatedComponent(YStack)
export const MonthCalendar = ({ month }: MonthCalendarProps) => {
  const weekCalendar = month.reduce((acc: Date[][], day, i) => {
    if (i % 7 === 0) acc.push([day])
    else acc[acc.length - 1].push(day)
    return acc
  }, [])
  return (
    <AnimatedStack display="inline-flex" alignItems="center" entering={FadeInUp}>
      {weekCalendar.map((week, i) => (
        <WeekCalendar key={i} week={week} />
      ))}
    </AnimatedStack>
  )
}
