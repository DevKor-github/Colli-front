import { XStack } from 'tamagui'

import { DayContainer } from '@components/Calendar/DayContainer'

interface WeekCalendarProps {
  week: Date[]
}
export const WeekCalendar = ({ week }: WeekCalendarProps) => {
  return (
    <XStack
      display="flex"
      width="100%"
      paddingHorizontal={8}
      paddingVertical={16}
      justifyContent="space-around"
      alignItems="flex-start"
    >
      {week.map(day => (
        <DayContainer key={day.toString()} day={day} />
      ))}
    </XStack>
  )
}
