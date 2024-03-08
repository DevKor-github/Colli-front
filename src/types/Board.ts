export type Board = 'short' | 'long'

export interface BoardContainerProps {
  size: Board
  children: React.ReactNode
  onPress: () => void
}
