import { useState } from 'react'
import { ScrollView } from 'react-native'
import Animated, {
  Easing,
  scrollTo,
  useAnimatedRef,
  useDerivedValue,
  useSharedValue,
  withTiming
} from 'react-native-reanimated'
import { View } from 'tamagui'

import { ProgressBar } from '@/components/KanbanBoard/ProgressBar'
import { ProgressButton } from '@/components/KanbanBoard/ProgressButton'
import { StatusSection } from '@/components/KanbanBoard/StatusSection'
import { TaskCard } from '@/components/KanbanBoard/TaskCard'
import { Typography } from '@/components/Typography'
import { TEAM_TASKS } from '@/mocks/data/teamTask'
import { customPalettes } from '@/theme/customPalettes'
import type { KanBanStatus } from '@/types/kanBanBoard'

const INITIAL_SECTION = '전체'
const AnimatedScrollView = Animated.createAnimatedComponent(ScrollView)
export const TeamTask = () => {
  const aref = useAnimatedRef()
  const scroll = useSharedValue(0)
  const offsetX = useSharedValue(0)
  const [currentSection, setCurrentSection] = useState('전체')
  const [status, setStatus] = useState<KanBanStatus>('todo')
  const [teamTasks, setTeamTasks] = useState(TEAM_TASKS)
  const handleProjectChange = (section: string) => {
    setCurrentSection(section)
    if (section === INITIAL_SECTION) {
      scroll.value = 0
      offsetX.value = withTiming(0, { duration: 300 })
    } else {
      const projectIndex = teamTasks.findIndex(task => task.sectionId === section)
      scroll.value = projectIndex * 10
      offsetX.value = withTiming((projectIndex + 1) * 62, { duration: 300, easing: Easing.bezier(0.42, 0, 0, 0.94) })
    }
  }
  const handleStatusChange = (status: KanBanStatus) => {
    setStatus(status)
  }
  useDerivedValue(() => {
    scrollTo(aref, scroll.value, 0, true)
  })
  return (
    <View display="flex" flexDirection="column" mt={8} mb={60}>
      <View display="flex" paddingHorizontal={20} backgroundColor={customPalettes.snow[50]} paddingVertical={16}>
        <Typography type="B" fontSize={17} textColor={customPalettes.gray[700]}>
          Task
        </Typography>
      </View>
      <AnimatedScrollView
        ref={aref}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          display: 'flex',
          paddingHorizontal: 20,
          paddingTop: 4,
          paddingBottom: 8,
          gap: 20,
          alignItems: 'center',
          backgroundColor: customPalettes.snow[50]
        }}
      >
        <ProgressButton
          isPressed={currentSection === INITIAL_SECTION}
          content="전체"
          handlePress={() => handleProjectChange(INITIAL_SECTION)}
        />
        {teamTasks.map((task, index) => (
          <ProgressButton
            key={index}
            isPressed={currentSection === task.sectionId}
            content={task.sectionId}
            handlePress={() => handleProjectChange(task.sectionId)}
          />
        ))}
      </AnimatedScrollView>
      <ProgressBar offset={offsetX} />
      <StatusSection status={status} handlePress={handleStatusChange} />
      <View h={8} backgroundColor={customPalettes.gray[50]} />
      <View paddingHorizontal={20} paddingVertical={4} flexDirection="row" gap={8} flexWrap="wrap">
        <TaskCard status="todo" />
        <TaskCard status="inProgress" />
        <TaskCard status="done" />
      </View>
    </View>
  )
}
