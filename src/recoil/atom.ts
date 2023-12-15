import { atom } from 'recoil'

import { TEAM_TASKS } from '@/mocks/data/teamTask'
import type { BottomNavigtionState } from '@/types/bottomNavigation'
import type { MemberCardProps } from '@/types/memberCard'

export const currentNavigationState = atom<BottomNavigtionState>({
  key: 'currentNavigationState',
  default: 'task'
})

export const calendarState = atom({
  key: 'calendarState',
  default: false
})

export const searchedMember = atom({
  key: 'searchedMember',
  default: [] as MemberCardProps[]
})

export const defaultTeamTask = atom({
  key: 'defaultTeamTask',
  default: TEAM_TASKS
})
