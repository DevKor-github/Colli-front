import { useState } from 'react'
import { YStack } from 'tamagui'

import { getCalendar, getCurrentMontStartDay } from '@/components/constants/calendar'

import { CalendarHeader } from './CalendarHeader'
import { MonthCalendar } from './MonthCalendar'
import { WeekCalendar } from './WeekCalendar'

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
    <YStack>
      <CalendarHeader isWeek={isWeek} setIsWeek={setIsWeek} />
      {renderCalendarBody()}
    </YStack>
  )
}
