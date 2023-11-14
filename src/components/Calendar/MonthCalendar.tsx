import { YStack } from 'tamagui'

import { WeekCalendar } from './WeekCalendar'

interface MonthCalendarProps {
  month: Date[]
}
export const MonthCalendar = ({ month }: MonthCalendarProps) => {
  const weekCalendar = month.reduce((acc: Date[][], day, i) => {
    if (i % 7 === 0) acc.push([day])
    else acc[acc.length - 1].push(day)
    return acc
  }, [])
  return (
    <YStack display="inline-flex" alignItems="center">
      {weekCalendar.map((week, i) => (
        <WeekCalendar key={i} week={week} />
      ))}
    </YStack>
  )
}
