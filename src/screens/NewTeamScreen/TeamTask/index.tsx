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

import { useGetTaskFilterCategory } from '@/api/hooks/taskFilterCategory'
import { useGetTeamMember } from '@/api/hooks/teamMember'
import { useGetTeamTask } from '@/api/hooks/teamTask'
import FilterTag from '@/components/Tags/FilterTag'
import { progressConfig } from '@/constants/progress'
import type { ProgressConfigProps } from '@/constants/progress'
import { TapBar } from '@/screens/NewTeamScreen/TeamTask/TapBar'
import { TapButton } from '@/screens/NewTeamScreen/TeamTask/TapButton'
import { TaskCard } from '@/screens/NewTeamScreen/TeamTask/TaskCard'
import { TaskFilterBottom } from '@/screens/NewTeamScreen/TeamTask/TaskFilterBottom'
import { TaskSortBottom } from '@/screens/NewTeamScreen/TeamTask/TaskSortBottom'
import TaskAssignee from '@/screens/TaskScreen/Task/TaskAssignee'
import type { SortConfigProps } from '@/types/newKanBanBoard'
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
  const resTask = useGetTeamTask().data
  const resCategory = useGetTaskFilterCategory().data
  const resMember = useGetTeamMember().data
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

  const [currentStatus, setCurrentStatus] = useState<ProgressConfigProps>({ label: 'In progress', state: 'inProgress' })
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

  const INITIAL_TEAMTASK = resTask?.dataList
  const changedTasks = [...(INITIAL_TEAMTASK ?? [])]
  const [filteredTasks, setFilteredTasks] = useState(changedTasks)
  const [sortedTasks, setSortedTasks] = useState(filteredTasks)
  const [filter, setFilter] = useState(INITIAL_FILTER)
  const [sort, setSort] = useState(INITIAL_SORT)
  const handleFilterSelect = (sortedCategory: number[], sortedMember: number[]) => {
    const categoryList = resCategory?.dataList.map(category => category.label) ?? []
    const categoryStatusList = resCategory?.dataList.map(category => category.state) ?? []
    const memberList = resMember?.dataList.map(member => member.name) ?? []
    const selectedCategoryList = sortedCategory.map(index => categoryList[index])
    const selectedCategoryStatusList = sortedCategory.map(index => categoryStatusList[index])
    const selectedMemberList = sortedMember.map(index => memberList[index])
    const newFilter = selectedCategoryList.concat(selectedMemberList)
    const newFilteredTasks =
      INITIAL_TEAMTASK?.filter(task => {
        const selectedCategory =
          selectedCategoryStatusList.length === 0 || selectedCategoryStatusList.includes(task.categoryState)
        const selectedMember = selectedMemberList.length === 0 || selectedMemberList.includes(task.assignee)
        return selectedCategory && selectedMember
      }) ?? []
    setFilteredTasks(newFilteredTasks)
    setSortedTasks(filteredTasks)

    if (newFilter.length === 0) {
      setFilteredTasks(changedTasks)
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

  const handleSortSelect = (sortedSort: SortConfigProps) => {
    const selectedSort = sortedSort.label
    if (selectedSort === '정렬') {
      setSortedTasks(filteredTasks)
      setSort(INITIAL_SORT)
      tags.sort = false
    } else {
      setSort(selectedSort)
      tags.sort = true
      if (selectedSort === '임박한순으로') {
        const newSortedTasks = [...filteredTasks]?.sort(
          (a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime()
        )
        setSortedTasks(newSortedTasks)
      } else {
        setSortedTasks(filteredTasks)
      }
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
        <TaskSortBottom open={sortOpen} handleClose={handleSortClose} onSortSelect={handleSortSelect} />
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
          {sortedTasks
            ?.filter(task => task.status === currentStatus.label)
            ?.map((status, i) => (
              <TaskCard
                key={i}
                id={status.id}
                category={status.category}
                categoryState={status.categoryState}
                title={status.title}
                dueDate={status.dueDate}
                status={status.status}
                assignee={status.assignee}
                imgSrc={status.imgSrc}
              />
            ))}
          {sortedTasks?.filter && sortedTasks.filter.length % 2 !== 0 && (
            <View br={3.5} minWidth={165} flexGrow={1} flexShrink={0} flexBasis={0} />
          )}
        </View>
      </View>
    </View>
  )
}
