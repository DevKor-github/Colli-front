import { useEffect, useReducer, useRef, useState } from 'react'
import { ScrollView, TurboModuleRegistry } from 'react-native'
import { Pressable } from 'react-native'
import Animated, {
  Easing,
  scrollTo,
  useAnimatedRef,
  useDerivedValue,
  useSharedValue,
  withTiming
} from 'react-native-reanimated'
import { View } from 'tamagui'

import FilterTag from '@/components/Tags/FilterTag'
import { progressConfig } from '@/constants/progress'
import type { ProgressConfigProps } from '@/constants/progress'
import { TEAM_TASKS } from '@/mocks/data/newTeamTask'
import { TEAM_MEMBER } from '@/mocks/data/teamMember'
import { TapBar } from '@/screens/NewTeamScreen/TeamTask/TapBar'
import { TapButton } from '@/screens/NewTeamScreen/TeamTask/TapButton'
import { TaskCard } from '@/screens/NewTeamScreen/TeamTask/TaskCard'
import { TaskFilterBottom } from '@/screens/NewTeamScreen/TeamTask/TaskFilterBottom'
import { categoryConfig } from '@/types/newKanBanBoard'
import type { SortConfigProps } from '@/types/newKanBanBoard'
import { useNavigation } from '@react-navigation/native'

type State = {
  icon: boolean
  filter: boolean
}

type Action = {
  type: 'Icon' | 'Filter'
}

const INITIAL_FILTER = '필터'
const INITIAL_SORT = '정렬'
export const TeamTask = () => {
  const navigation = useNavigation()
  const [filterOpen, setFilterOpen] = useState(false)
  const handleFilterClose = async () => {
    setFilterOpen(false)
    return true
  }

  const filterReducer = (state: State, action: Action) => {
    switch (action.type) {
      case 'Icon':
        return { ...state, icon: !state.icon }
      case 'Filter':
        return { ...state, filter: true }
      default:
        return state
    }
  }

  const [tags, dispatch] = useReducer(filterReducer, {
    icon: false,
    filter: false
  })

  const handleFilterChange = (newFilter: 'Icon' | 'Filter') => {
    dispatch({ type: newFilter })
  }

  const [currentStatus, setCurrentStatus] = useState<ProgressConfigProps>({ label: 'In progress', state: 'inProgress' })
  const [teamTasks, setTeamTasks] = useState(TEAM_TASKS)
  const offsetX = useSharedValue(0)
  const handleTaskChange = (newCategory: ProgressConfigProps) => {
    setCurrentStatus(newCategory)
    if (newCategory.state === 'inProgress') {
      offsetX.value = withTiming(0, { duration: 300 })
    } else if (newCategory.state === 'todo') {
      offsetX.value = withTiming(-128, { duration: 300, easing: Easing.bezier(0.42, 0, 0, 0.94) })
    } else {
      offsetX.value = withTiming(128, { duration: 300, easing: Easing.bezier(0.42, 0, 0, 0.94) })
    }
  }

  const [filter, setFilter] = useState(INITIAL_FILTER)
  const handleFilterSelect = (sortedSort: SortConfigProps, sortedCategory: number[], sortedMember: number[]) => {
    const categoryList = categoryConfig.map(category => category.label)
    const memberList = TEAM_MEMBER.map(member => member.name)
    const selectedCategoryList = sortedCategory.map(index => categoryList[index])
    const selectedMemberList = sortedMember.map(index => memberList[index])
    const selectedSort = sortedSort.label
    const newFilter = selectedCategoryList.concat(selectedMemberList)
    /*if (newFilter.length === 0) {
      setFilter(INITIAL_FILTER)
      tags.filter = false
    } else if (newFilter.length === 1) {
      setFilter(newFilter[0])
      tags.filter = true
    } else {
      setFilter(`${newFilter[0]} 외 ${newFilter.length - 1}개`)
      tags.filter = true
    }*/
    if (selectedSort === '정렬') {
      setFilter(INITIAL_FILTER)
      tags.filter = false
    } else {
      setFilter(selectedSort)
      tags.filter = true
    }
  }

  return (
    <View>
      <View
        display="flex"
        flexDirection="row"
        paddingHorizontal={16}
        paddingTop={16}
        paddingBottom={8}
        gap={8}
        alignSelf="stretch"
        backgroundColor={'#ffffff'}
        height={64}
      >
        <FilterTag
          tagType="icon"
          isPressed={tags.icon}
          handlePress={() => {
            handleFilterChange('Icon')
            navigation.navigate('NewTeam')
          }}
        />
        <FilterTag
          tagType="text"
          isPressed={tags.filter}
          handlePress={() => {
            handleFilterChange('Filter')
            setFilterOpen(!filterOpen)
          }}
        >
          {filter}
        </FilterTag>
        <TaskFilterBottom open={filterOpen} handleClose={handleFilterClose} onFilterSelect={handleFilterSelect} />
      </View>
      <View
        display="flex"
        paddingVertical={8}
        paddingHorizontal={0}
        flexDirection="column"
        alignItems="flex-start"
        gap={8}
        alignSelf="stretch"
        backgroundColor="#ffffff"
      >
        <View
          flexDirection="row"
          display="flex"
          paddingVertical={0}
          paddingHorizontal={20}
          justifyContent="space-between"
          alignItems="center"
          alignSelf="stretch"
        >
          {progressConfig.map(item => (
            <TapButton
              key={item.state}
              isPressed={currentStatus.label === item.label}
              content={item.label}
              handlePress={() => {
                handleTaskChange(item)
              }}
            />
          ))}
        </View>
        <TapBar offset={offsetX} />
      </View>
      <View
        backgroundColor={'#ffffff'}
        display="flex"
        paddingTop={20}
        paddingHorizontal={16}
        paddingBottom={0}
        flexDirection="column"
        alignItems="center"
        gap={8}
        alignSelf="stretch"
      >
        <View
          flexDirection="row"
          display="flex"
          justifyContent="flex-start"
          alignItems="center"
          gap={8}
          alignSelf="stretch"
          flexWrap="wrap"
        >
          {teamTasks
            .filter(task => task.status === currentStatus.label)
            ?.map((status, i) => (
              <TaskCard
                key={i}
                id={status.id}
                category={status.category}
                title={status.title}
                dueDate={status.dueDate}
                status={status.status}
                assignee={status.assignee}
                imgSrc={status.imgSrc}
              />
            ))}
        </View>
      </View>
    </View>
  )
}
