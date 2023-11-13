import { Calendar, LocaleConfig } from 'react-native-calendars'
import { Text, XStack } from 'tamagui'

import Icon from 'react-native-vector-icons/Feather'

LocaleConfig.locales['kr'] = {
  monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
  monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
  dayNames: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'],
  dayNamesShort: ['일', '월', '화', '수', '목', '금', '토']
}

LocaleConfig.defaultLocale = 'kr'

export const CustomCalendar = () => {
  const CalendarHeader = (date: XDate) => {
    const today = date.toString('yyyy년 MM월')
    return (
      <XStack justifyContent="space-between" width="100%" alignItems="center">
        <Text fontFamily="$M" fontSize={17} lineHeight={21}>
          {today}
        </Text>
        <Icon name="more-horizontal" size={24} color="black" />
      </XStack>
    )
  }
  return (
    <Calendar
      style={{
        paddingLeft: 0,
        paddingRight: 0
      }}
      theme={{
        'stylesheet.calendar.header': {
          dayTextAtIndex0: {
            color: 'red'
          },
          dayTextAtIndex6: {
            color: 'blue'
          }
        }
      }}
      hideArrows={true}
      renderHeader={date => date && CalendarHeader(date)}
    />
  )
}
