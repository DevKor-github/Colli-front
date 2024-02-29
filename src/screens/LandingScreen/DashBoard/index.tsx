import React from 'react'
import { View } from 'tamagui'

import { PushNotiBoard } from '@/screens/LandingScreen/DashBoard/PushNotiBoard'
import ScheduleBoard from '@/screens/LandingScreen/DashBoard/ScheduleBoard'
import TaskBoard from '@/screens/LandingScreen/DashBoard/TaskBoard'

const DashBoard = () => {
  return (
    <View
      display="flex"
      flexDirection="row"
      padding={16}
      justifyContent="center"
      alignItems="center"
      gap={12}
      alignSelf="stretch"
    >
      <View display="flex" alignItems="flex-start" flexGrow={1} flexShrink={0} flexBasis={0}>
        <TaskBoard taskContent="각 부서 페이지 추가로 만들기" dueDate={new Date('2024-03-04')} team="team_colli" />
      </View>
      <View display="flex" alignItems="flex-start" flexGrow={1} flexShrink={0} flexBasis={0} gap={12}>
        <ScheduleBoard date={new Date()} place="이공캠 와플앨리" team="team_colli" />
        <PushNotiBoard noticeNumber={4} />
      </View>
    </View>
  )
}

export default DashBoard
