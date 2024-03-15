import { useReducer, useRef, useState } from 'react'
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

import { NewTask } from '@/components/NewTask'
import FilterTag from '@/components/Tags/FilterTag'
import type { TagContainerProps } from '@/components/Tags/FilterTag'
import { Task } from '@/components/Task'
import { TEAM_TASKS } from '@/mocks/data/newTeamTask'
import { TEAM_MEMBER } from '@/mocks/data/teamMember'
import { TapBar } from '@/screens/NewTeamScreen/TeamTask/TapBar'
import { TapButton } from '@/screens/NewTeamScreen/TeamTask/TapButton'
import { TaskFilterBottom } from '@/screens/NewTeamScreen/TeamTask/TaskFilterBottom'
import { TaskSortBottom } from '@/screens/NewTeamScreen/TeamTask/TaskSortBottom'
import { useNavigation } from '@react-navigation/native'

type State = {
  icon: boolean
  filter: boolean
  sort: boolean
}

type Action = {
  type: 'Icon' | 'Filter' | 'Sort'
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
  const [sortOpen, setSortOpen] = useState(false)
  const handleSortClose = async () => {
    setSortOpen(false)
    return true
  }
  const filterReducer = (state: State, action: Action) => {
    switch (action.type) {
      case 'Icon':
        return { ...state, icon: !state.icon }
      case 'Filter':
        return { ...state, filter: true }
      case 'Sort':
        return { ...state, sort: true }
      default:
        return state
    }
  }

  const [tags, dispatch] = useReducer(filterReducer, {
    icon: false,
    filter: false,
    sort: false
  })

  const handleFilterChange = (newFilter: 'Icon' | 'Filter' | 'Sort') => {
    dispatch({ type: newFilter })
  }

  const [currentStatus, setCurrentStatus] = useState('In progress')
  const [teamTasks, setTeamTasks] = useState(TEAM_TASKS)
  const offsetX = useSharedValue(0)
  const handleTaskChange = (newCategory: string) => {
    setCurrentStatus(newCategory)
    if (newCategory === 'In progress') {
      offsetX.value = withTiming(0, { duration: 300 })
    } else if (newCategory === 'To do') {
      offsetX.value = withTiming(-128, { duration: 300, easing: Easing.bezier(0.42, 0, 0, 0.94) })
    } else {
      offsetX.value = withTiming(128, { duration: 300, easing: Easing.bezier(0.42, 0, 0, 0.94) })
    }
  }
  const [sort, setSort] = useState(INITIAL_SORT)
  const handleSortSelect = (sortedCategory: string) => {
    const newSort = sortedCategory
    if (newSort === INITIAL_SORT) {
      tags.sort = false
    } else {
      tags.sort = true
    }
    setSort(newSort)
  }

  const [filter, setFilter] = useState(INITIAL_FILTER)
  const handleFilterSelect = (sortedCategory: number[], sortedMember: number[]) => {
    const categoryList = ['스프린트 A', '스프린트 B', '스프린트 C']
    const memberList = TEAM_MEMBER.map(member => member.name)
    const selectedCategoryList = sortedCategory.map(index => categoryList[index])
    const selectedMemberList = sortedMember.map(index => memberList[index])

    const newFilter = selectedCategoryList.concat(selectedMemberList)
    if (newFilter.length === 0) {
      setFilter(INITIAL_FILTER)
      tags.filter = false
    } else if (newFilter.length === 1) {
      setFilter(newFilter[0])
      tags.filter = true
    } else {
      setFilter(`${newFilter[0]} 외 ${newFilter.length - 1}개`)
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
        <FilterTag
          tagType="text"
          isPressed={tags.sort}
          handlePress={() => {
            handleFilterChange('Sort')
            setSortOpen(!sortOpen)
          }}
        >
          {sort}
        </FilterTag>
        <TaskSortBottom
          open={sortOpen}
          handleClose={handleSortClose}
          onSortSelect={
            handleSortSelect
          } /* 여기서 sortOpen 부분이 지금 이상한데 태그가 선택된 상태에서 또 TaskSortBottom을 열려면 두번 눌러야해.. 아마 지금 true false 해주는 로직이 꼬인 것 같은데.. 뭐지.. */
        />
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
          <TapButton
            isPressed={currentStatus === 'To do'}
            content="To do"
            handlePress={() => {
              handleTaskChange('To do')
            }}
          />
          <TapButton
            isPressed={currentStatus === 'In progress'}
            content="In progress"
            handlePress={() => {
              handleTaskChange('In progress')
            }}
          />
          <TapButton
            isPressed={currentStatus === 'Done'}
            content="Done"
            handlePress={() => {
              handleTaskChange('Done')
            }}
          />
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
            .filter(task => task.status === currentStatus)
            ?.map((status, i) => (
              <NewTask
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
