import React from 'react'
import { Circle, View } from 'tamagui'

import { BoardContainer } from '@/components/Board/BoardContainer'
import BoardHeader from '@/components/Board/BoardHeader'
import { Typography } from '@/components/Typography'
import { customPalettes } from '@/theme/customPalettes'

interface TaskBoardProps {
  taskContent: string
  dueDate: Date
  team: string
}
const TaskBoard = ({ taskContent, dueDate, team }: TaskBoardProps) => {
  const today = new Date()
  const leftDate = dueDate.getTime() - today.getTime()
  const dayDifference = Math.floor(leftDate / (1000 * 3600 * 24))
  return (
    <BoardContainer size="long">
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
          <View
            display="inline-flex"
            flexGrow={1}
            paddingVertical={4}
            paddingHorizontal={8}
            alignItems="center"
            gap={10}
            borderRadius={8}
            backgroundColor={customPalettes.wf[50]}
          >
            <Typography type="R" fontSize={12} textColor={customPalettes.wf[100]}>
              {`D-${dayDifference}`}
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

export default TaskBoard
