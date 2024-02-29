import React from 'react'
import { Circle, View } from 'tamagui'

import { BoardContainer } from '@/components/Board/BoardContainer'
import BoardHeader from '@/components/Board/BoardHeader'
import { Typography } from '@/components/Typography'
import { customPalettes } from '@/theme/customPalettes'

import Icon from 'react-native-vector-icons/MaterialIcons'

interface ScheduleBoardProps {
  date: Date
  place: string
  team: string
}
const ScheduleBoard = ({ date, place, team }: ScheduleBoardProps) => {
  const formattedDate = date.toLocaleString('ko-KR', {
    month: 'long', // 월을 긴 형식으로 (예: February)
    day: 'numeric', // 날짜를 숫자로
    hour: 'numeric', // 시간을 숫자로
    hour12: false // 12시간 형식 사용
  })
  return (
    <BoardContainer size="short">
      <View
        display="flex"
        alignItems="flex-start"
        gap={4}
        flexGrow={1}
        flexShrink={0}
        flexBasis={0}
        alignSelf="stretch"
      >
        <BoardHeader headerContent="다가오는 일정을 확인해보세요" />
        <View display="flex" flexGrow={1} flexShrink={0} flexBasis={0} alignSelf="stretch">
          <Typography type="M" fontSize={17} textColor={customPalettes.gray[700]}>
            {formattedDate}
          </Typography>
        </View>
      </View>
      <View display="flex" flexDirection="row" justifyContent="space-between" alignItems="flex-end" alignSelf="stretch">
        <View display="flex" alignItems="flex-start" gap={4} flexGrow={1} flexShrink={0} flexBasis={0}>
          <View display="flex" flexDirection="row" alignItems="center" gap={4}>
            <Icon name="place" size={14} color={customPalettes.gray[200]} />
            <Typography type="R" fontSize={12} textColor={customPalettes.gray[700]}>
              {place}
            </Typography>
          </View>
          <View
            display="inline-flex"
            paddingVertical={4}
            paddingHorizontal={8}
            alignItems="center"
            gap={10}
            borderRadius={8}
            backgroundColor={customPalettes.wf[50]}
          >
            <Typography type="R" fontSize={12} textColor={customPalettes.wf[100]}>
              {team}
            </Typography>
          </View>
        </View>
        <Circle size={23} backgroundColor={customPalettes.wf[100]} opacity={0.7} />
      </View>
    </BoardContainer>
  )
}

export default ScheduleBoard
