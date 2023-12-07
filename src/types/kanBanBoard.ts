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
