import type { ImageSourcePropType } from 'react-native'

export interface TapButtonProps {
  isPressed: boolean
  handlePress: () => void
  content: string
}

export type TapBarStatus = 'To do' | 'In progress' | 'Done'

export interface TapBarStatusSectionProps {
  status: TapBarStatus
  handlePress: (status: TapBarStatus) => void
}

type SortState = 'sort' | 'imminent' | 'added'

export interface SortConfigProps {
  label: string
  state: SortState
}

export const sortConfig: SortConfigProps[] = [
  { label: '정렬', state: 'sort' },
  { label: '추가된순으로', state: 'added' },
  { label: '임박한순으로', state: 'imminent' }
]

export interface TaskSortBottomProps {
  handleClose: () => Promise<boolean>
  open: boolean
  onSortSelect: (sortedCategory: SortConfigProps) => void
}

export interface TaskFilterBottomProps {
  handleClose: () => Promise<boolean>
  open: boolean
  onFilterSelect: (sortedCategory: number[], sortedMember: number[]) => void
}
