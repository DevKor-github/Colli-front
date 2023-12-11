import { atom } from 'recoil'

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
