import { XStack, YStack } from 'tamagui'

import { Typography } from '@/components/Typography'
import { customPalettes } from '@/theme/customPalettes'

import { CalendarSwitch } from './CalendarSwitch'
import { WeekHeader } from './WeekHeader'

interface CalendarHeaderProps {
  isWeek: boolean
  setIsWeek: React.Dispatch<React.SetStateAction<boolean>>
}
export const CalendarHeader = ({ isWeek, setIsWeek }: CalendarHeaderProps) => {
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
        <CalendarSwitch isWeek={isWeek} handlePress={() => setIsWeek(!isWeek)} />
      </XStack>
      <WeekHeader />
    </YStack>
  )
}
