import { XStack, YStack } from 'tamagui'

import { CalendarSwitch } from '@components/Calendar/CalendarSwitch'
import { WeekHeader } from '@components/Calendar/WeekHeader'
import { Typography } from '@components/Typography'
import { customPalettes } from '@theme/customPalettes'

export const CalendarHeader = () => {
  const today = new Date()
  const year = today.getFullYear()
  const month = today.getMonth() + 1
  const date = today.getDate()
  return (
    <YStack>
      <XStack flex={1} height={65} justifyContent="space-between" alignItems="center" paddingHorizontal={20}>
        <Typography fontSize={17} type="B" textColor={customPalettes.gray[700]}>
          {year}. {month}. {date}
        </Typography>
        <CalendarSwitch />
      </XStack>
      <WeekHeader />
    </YStack>
  )
}
