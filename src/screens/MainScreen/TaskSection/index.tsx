import { useState } from 'react'
import { ScrollView } from 'react-native'
import Animated, { scrollTo, useAnimatedRef, useDerivedValue, useSharedValue } from 'react-native-reanimated'
import { View } from 'tamagui'

import { Chip } from '@/components/Chips'
import { SectionIndicator } from '@/components/SectionIndicator'
import { Task } from '@/components/Task'
import { TASKS } from '@/mocks/data/tasks'
import { SectionWrapper } from '@/screens/MainScreen/SectionWrapper'

const AnimatedScrollView = Animated.createAnimatedComponent(ScrollView)
const INITIAL_PROJECT = '전체'
const SECTION_INDICATION = '콜리가 한번에 정리해 드릴게요.'

export const TaskSection = () => {
  const [currentProject, setCurrentProject] = useState(INITIAL_PROJECT)
  const [tasks, setTasks] = useState(TASKS)
  const aref = useAnimatedRef()
  const scroll = useSharedValue(0)

  const handleProjectChange = (project: string) => {
    setCurrentProject(project)
    if (project === INITIAL_PROJECT) {
      scroll.value = 0
    } else {
      const projectIndex = tasks.findIndex(task => task.teamId === project)
      scroll.value = projectIndex * 120
    }
  }

  const handleCheck = (project: string, currentTask: string) => {
    const projectIndex = tasks.findIndex(task => task.teamId === project)
    const taskIndex = tasks[projectIndex].tasks.findIndex(task => task.title === currentTask)
    const newTasks = [...tasks]
    newTasks[projectIndex].tasks[taskIndex].checked = !newTasks[projectIndex].tasks[taskIndex].checked
    setTasks(newTasks)
  }
  useDerivedValue(() => {
    scrollTo(aref, scroll.value, 0, true)
  })

  return (
    <SectionWrapper>
      <View paddingHorizontal={20} paddingVertical={16}>
        <SectionIndicator text={SECTION_INDICATION} />
      </View>
      <AnimatedScrollView
        ref={aref}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        contentContainerStyle={{ display: 'flex', flexDirection: 'row', paddingLeft: 20, gap: 8 }}
      >
        <Chip
          chipVariant="gray"
          initialStatus={currentProject === '전체'}
          onPress={() => handleProjectChange(INITIAL_PROJECT)}
        >
          전체
        </Chip>
        {tasks.map((project, i) => (
          <Chip
            key={i}
            chipVariant="team"
            initialStatus={currentProject === project.teamId}
            onPress={() => handleProjectChange(project.teamId)}
          >
            {project.teamId}
          </Chip>
        ))}
      </AnimatedScrollView>
      {currentProject === '전체'
        ? tasks.map(team =>
            team.tasks.map((task, j) => (
              <Task
                key={j}
                checked={task.checked}
                taskContent={task.title}
                handlePress={() => handleCheck(team.teamId, task.title)}
              />
            ))
          )
        : tasks
            .find(task => task.teamId === currentProject)
            ?.tasks.map((task, i) => (
              <Task
                key={i}
                checked={task.checked}
                taskContent={task.title}
                handlePress={() => handleCheck(currentProject, task.title)}
              />
            ))}
    </SectionWrapper>
  )
}

TaskSection
