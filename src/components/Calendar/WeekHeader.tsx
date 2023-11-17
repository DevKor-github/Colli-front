import { View, XStack } from 'tamagui'

import { Typography } from '@components/Typography'
import { WEEK_HEADER } from '@constants/calendar'
import { customPalettes } from '@theme/customPalettes'

export const WeekHeader = () => {
  const handleHeaderColor = (day: string) => {
    if (day === '일') return customPalettes.rose[600]
    else if (day === '토') return customPalettes.blue[500]
    return customPalettes.gray[700]
  }
  return (
    <XStack flex={1} width="100%" alignSelf="center" justifyContent="space-around" padding={8} gap={1}>
      {WEEK_HEADER.map(day => (
        <View key={day} width={50} height={22} paddingHorizontal={18} justifyContent="center">
          <Typography fontSize={14} type="M" textColor={handleHeaderColor(day)}>
            {day}
          </Typography>
        </View>
      ))}
    </XStack>
  )
}
