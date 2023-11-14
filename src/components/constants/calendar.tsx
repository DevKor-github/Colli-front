import { useState } from 'react'

export const WEEK_HEADER = ['일', '월', '화', '수', '목', '금', '토']

export const getCurrentMontStartDay = (currentMonth: Date) => {
  return new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay()
}
export const getCurrentMonthStartDate = (currentMonth: Date) => {
  return new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1)
}

export const getCurrentMonthEndDate = (currentMonth: Date) => {
  return new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0)
}
export const getCalendar = () => {
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date())
  //info currentMonthStartDay: currentMonth의 시작 요일 -> prev Month 마지막 날짜 수 파악
  const currentMonthStartDay = getCurrentMontStartDay(currentMonth)
  const currentMonthEndDate = getCurrentMonthEndDate(currentMonth)
  const prevMonthEndDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 0)
  const nextMonthStartDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1)

  const days: Date[] = Array.from({ length: currentMonthStartDay }, (_, i) => {
    return new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, prevMonthEndDate.getDate() - i)
  }).reverse()
  days.push(
    ...Array.from(
      { length: currentMonthEndDate.getDate() },
      (_, i) => new Date(currentMonth.getFullYear(), currentMonth.getMonth(), i + 1)
    )
  )
  const remainingDays = 7 - (days.length % 7)
  if (remainingDays < 7) {
    days.push(
      ...Array.from(
        { length: remainingDays },
        (_, i) => new Date(nextMonthStartDate.getFullYear(), nextMonthStartDate.getMonth(), i + 1)
      )
    )
  }
  return days
}
