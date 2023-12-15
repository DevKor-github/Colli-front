export interface ProgressButtonProps {
  isPressed: boolean
  handlePress: () => void
  content: string
}

export type KanBanStatus = 'todo' | 'inProgress' | 'done'

export interface KanBanStatusSectionProps {
  status: KanBanStatus
  handlePress: (status: KanBanStatus) => void
}

export interface TaskCardProps {
  id: number
  category: string
  title: string
  dueDate: Date
  reminderDate: number
  notes: string
  status: KanBanStatus
  assignee: string
}

export interface TaskDetailProps extends TaskCardProps {
  handleClose: () => Promise<boolean>
  open: boolean
}
