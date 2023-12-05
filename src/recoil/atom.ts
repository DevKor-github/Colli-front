import { atom } from 'recoil'

import type { BottomNavigtionState } from '@/types/bottomNavigation'

export const currentNavigationState = atom<BottomNavigtionState>({
  key: 'currentNavigationState',
  default: 'task'
})

export const calendarState = atom({
  key: 'calendarState',
  default: false
})
