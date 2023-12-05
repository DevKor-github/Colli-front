import React, { useEffect, useState } from 'react'
import { View } from 'tamagui'

import { Typography } from '@/components/Typography'
import { getScheduleContentColor, getTimeText } from '@/constants/schedule'
import { customPalettes } from '@/theme/customPalettes'
import type { ScheduleProps } from '@/types/schedule'

interface ScheduleComponentProps {
  schedule: ScheduleProps
  isStart?: boolean
  isEnd?: boolean
}
export const Schedule = ({ schedule, isStart, isEnd }: ScheduleComponentProps) => {
  const startHour = schedule.startAt?.getHours().toString().padStart(2, '0')
  const startMinute = schedule.startAt?.getMinutes().toString().padStart(2, '0')
  const endHour = schedule.endAt?.getHours().toString().padStart(2, '0')
  const endMinute = schedule.endAt?.getMinutes().toString().padStart(2, '0')
  const [currentTime, setCurrentTime] = useState(new Date())
  const currentHour = currentTime.getHours().toString().padStart(2, '0')
  const currentMinute = currentTime.getMinutes().toString().padStart(2, '0')
  const currentEventHandler = () => {
    if (endHour < currentHour || (endHour == currentHour && endMinute < currentMinute)) {
      return 'previous'
    }
    if (startHour > currentHour || (startHour == currentHour && startMinute > currentMinute)) {
      return 'post'
    }
    return 'current'
  }
  const { mainTextColor, subTextColor } = getScheduleContentColor(currentEventHandler())
  const scheuleTime = getTimeText(schedule.startAt, schedule.endAt)
  useEffect(() => {
    setCurrentTime(new Date())
  }, [])
  return (
    <View
      display="flex"
      flexDirection="row"
      paddingHorizontal={20}
      alignItems="center"
      gap={16}
      //   alignSelf="stretch"
      //   borderWidth={1}
    >
      <View display="flex" flexDirection="row" gap={7} flex={1}>
        <View>
          <View
            width={1}
            height={16.5}
            backgroundColor={isStart ? customPalettes.snow[50] : customPalettes.gray[200]}
            alignSelf="center"
          />
          <View width={9} height={9} borderRadius={4.5} backgroundColor={customPalettes.blue[500]} alignSelf="center" />
          <View
            width={1}
            height={44.5}
            backgroundColor={isEnd ? customPalettes.snow[50] : customPalettes.gray[200]}
            alignSelf="center"
          />
        </View>
        <View mt={12}>
          <Typography type="M" fontSize={12} textColor={customPalettes.gray[400]}>
            {startHour}:{startMinute}
          </Typography>
        </View>
      </View>
      <View
        display="flex"
        padding={12}
        flexDirection="column"
        alignItems="flex-start"
        gap={4}
        // borderWidth={1}
        // alignSelf="stretch"
        justifyContent="center"
        backgroundColor={currentEventHandler() === 'current' ? customPalettes.blue[50] : 'transparent'}
        br={8}
        // width="100%"
        flex={5}
      >
        <Typography
          type="M"
          fontSize={16}
          textColor={mainTextColor}
          textDecorationLine={currentEventHandler() === 'previous' ? 'line-through' : 'none'}
        >
          {schedule.content}
        </Typography>
        <Typography
          type="M"
          fontSize={12}
          textColor={subTextColor}
          textDecorationLine={currentEventHandler() === 'previous' ? 'line-through' : 'none'}
        >
          {scheuleTime} | {schedule.location}
        </Typography>
      </View>
    </View>
  )
}
