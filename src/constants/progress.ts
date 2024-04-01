type ProgressState = 'todo' | 'inProgress' | 'done'

export interface ProgressConfigProps {
  label: string
  state: ProgressState
}

export const progressConfig: ProgressConfigProps[] = [
  { label: 'To do', state: 'todo' },
  { label: 'In progress', state: 'inProgress' },
  { label: 'Done', state: 'done' }
]
