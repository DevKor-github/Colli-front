import React from 'react'
import { Circle, View } from 'tamagui'

import { BoardContainer } from '@/components/Board/BoardContainer'
import BoardHeader from '@/components/Board/BoardHeader'
import { Tag } from '@/components/Tags'
import { Typography } from '@/components/Typography'
import { customPalettes } from '@/theme/customPalettes'
import { useNavigation } from '@react-navigation/native'

interface TaskBoardProps {
  taskContent: string
  dueDate: Date
  team: string
}
const TaskBoard = ({ taskContent, dueDate, team }: TaskBoardProps) => {
  const today = new Date()
  const leftDate = dueDate.getTime() - today.getTime()
  const dayDifference = Math.floor(leftDate / (1000 * 3600 * 24))
  const navigation = useNavigation()
  const handleNavigation = () => {
    navigation.navigate('Task')
  }
  return (
    <BoardContainer size="long" onPress={handleNavigation}>
      <View
        display="flex"
        alignItems="flex-start"
        gap={4}
        flexGrow={1}
        flexShrink={0}
        flexBasis={0}
        alignSelf="stretch"
      >
        <BoardHeader headerContent="다가오는 과제를 확인해보세요" />
        <View display="flex" flexGrow={1} flexShrink={0} flexBasis={0} alignSelf="stretch">
          <Typography type="M" fontSize={17} textColor={customPalettes.gray[700]}>
            {taskContent}
          </Typography>
        </View>
      </View>
      <View display="flex" flexDirection="row" gap={54} justifyContent="flex-end" alignItems="flex-end">
        <View display="flex" gap={4} alignItems="flex-start">
          <Tag color="light">{`D-${dayDifference}`}</Tag>
          <Tag color="light">{team}</Tag>
        </View>
        <Circle size={23} backgroundColor={customPalettes.wf[100]} opacity={0.7} />
      </View>
    </BoardContainer>
  )
}

export default TaskBoard
