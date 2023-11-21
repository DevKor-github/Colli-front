import { useState } from 'react'
import { YStack } from 'tamagui'

import { customPalettes } from '@/theme/customPalettes'
import { CalendarHeader } from '@components/Calendar/CalendarHeader'
import { MonthCalendar } from '@components/Calendar/MonthCalendar'
import { WeekCalendar } from '@components/Calendar/WeekCalendar'
import { getCalendar, getCurrentMontStartDay } from '@constants/calendar'

/* 
info
CalendarWrapper /CalendarHeader/ MonthCalendar | WeekCalendar/
info 
CalendarWrapper state: week ? month -> CalendarHeader -> (MonthCalendar | WeekCalendar)
*/
export const Calendar = () => {
  const today = new Date()
  const todayDate = today.getDate()
  const todayDay = today.getDay()
  const weekStartIndex = todayDate + getCurrentMontStartDay(today) - todayDay - 1
  const calendar = getCalendar()
  const [isWeek, setIsWeek] = useState(false)
  const weekCalendar = calendar.slice(weekStartIndex, weekStartIndex + 7)
  const renderCalendarBody = () => {
    return isWeek ? <WeekCalendar week={weekCalendar} /> : <MonthCalendar month={calendar} />
  }
  return (
    <YStack backgroundColor={customPalettes.snow[50]}>
      <CalendarHeader isWeek={isWeek} setIsWeek={setIsWeek} />
      {renderCalendarBody()}
    </YStack>
  )
}
