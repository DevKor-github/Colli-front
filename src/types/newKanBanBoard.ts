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

export interface TaskSortBottomProps {
  handleClose: () => Promise<boolean>
  open: boolean
  onSortSelect: (category: string) => void
}

export interface TaskFilterBottomProps {
  handleClose: () => Promise<boolean>
  open: boolean
  onFilterSelect: (sortedCategory: number[], sortedMember: number[]) => void
}
