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

export interface TaskCardProps {
  id: number
  category: string
  title: string
  dueDate: Date
  status: TapBarStatus
  assignee: string
  imgSrc: ImageSourcePropType
}

type SortState = 'sort' | 'imminent' | 'added' | 'category' | 'assignee'

export interface SortConfigProps {
  label: string
  state: SortState
}

export const sortConfig: SortConfigProps[] = [
  { label: '정렬', state: 'sort' },
  { label: '추가된순으로', state: 'added' },
  { label: '임박한순으로', state: 'imminent' }
  /*{ label: '카테고리별로', state: 'category' },
  { label: '담당자별로', state: 'assignee' }*/
]

type CategoryState = 'category' | 'sprintA' | 'sprintB' | 'sprintC'

export interface CategoryConfigProps {
  label: string
  state: CategoryState
}

export const categoryConfig: CategoryConfigProps[] = [
  { label: '카테고리', state: 'category' },
  { label: '스프린트 A', state: 'sprintA' },
  { label: '스프린트 B', state: 'sprintB' },
  { label: '스프린트 C', state: 'sprintC' }
]

export interface TaskSortBottomProps {
  onSortSelect: (sortedCategory: SortConfigProps) => void
}

export interface TaskFilterBottomProps {
  handleClose: () => Promise<boolean>
  open: boolean
  onFilterSelect: (sortedSort: SortConfigProps, sortedCategory: number[], sortedMember: number[]) => void
}
