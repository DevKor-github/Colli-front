import { View, XStack, YStack } from 'tamagui'

import { Typography } from '@components/Typography'
import { getCurrentMonthEndDate, getCurrentMonthStartDate } from '@constants/calendar'
import { customPalettes } from '@theme/customPalettes'

interface DayContainerProps {
  day: Date
}
export const DayContainer = ({ day }: DayContainerProps) => {
  const today = new Date()
  const currentMonthStartDate = getCurrentMonthStartDate(today)
  const currentMonthEndDate = getCurrentMonthEndDate(today)

  const handleDayTextColor = () => {
    if (day.getDate() === today.getDate()) return customPalettes.snow[50]
    if (day.getDay() === 0) return customPalettes.rose[600]
    else if (day.getDay() === 6) return customPalettes.blue[500]
    else return customPalettes.gray[700]
  }

  const handleTodayColor = () => {
    if (day.getDate() === today.getDate()) return customPalettes.blue[500]
    return 'transparent'
  }
  const handleOpacity = () => {
    if (day < currentMonthStartDate || day > currentMonthEndDate) return 0.3
    else return 1
  }
  return (
    <YStack display="flex" width={50} gap={8} alignItems="center" opacity={handleOpacity()}>
      <View
        display="flex"
        width={24}
        height={24}
        borderRadius={10}
        justifyContent="center"
        alignItems="center"
        gap={10}
        backgroundColor={handleTodayColor()}
      >
        <Typography fontSize={14} type="M" textColor={handleDayTextColor()}>
          {day.getDate()}
        </Typography>
      </View>
      <XStack display="flex" width="100%" justifyContent="center" gap={4} paddingHorizontal={8}>
        <View width={6} height={6} borderRadius={3} backgroundColor={customPalettes.blue[300]} />
        <View width={6} height={6} borderRadius={3} backgroundColor={customPalettes.blue[300]} />
        <View width={6} height={6} borderRadius={3} backgroundColor={customPalettes.blue[300]} />
      </XStack>
    </YStack>
  )
}
