import { customPalettes } from '@/theme/customPalettes'

export const getScheduleContentColor = (state: 'previous' | 'current' | 'post') => {
  if (state === 'previous') {
    return { mainTextColor: customPalettes.gray[300], subTextColor: customPalettes.gray[200] }
  }
  if (state === 'current') {
    return { mainTextColor: customPalettes.blue[900], subTextColor: customPalettes.blue[300] }
  } else {
    return { mainTextColor: customPalettes.gray[900], subTextColor: customPalettes.gray[300] }
  }
}

export const getTimeText = (startAt: Date, endAt: Date) => {
  const startAtHour = startAt.getHours()
  const startAtMinute = startAt.getMinutes().toString().padStart(2, '0')
  const endAtHour = endAt.getHours()
  const endAtMinute = endAt.getMinutes().toString().padStart(2, '0')
  const startAtTime = startAtHour < 12 ? '오전' : '오후'
  const endAtTime = endAtHour < 12 ? '오전' : '오후'
  return `${startAtTime} ${startAtHour > 12 ? `${startAtHour - 12}` : startAtHour}:${startAtMinute} - ${endAtTime} ${
    endAtHour > 12 ? `${endAtHour - 12}` : endAtHour
  }:${endAtMinute}`
}
