type variant = 'gray' | 'team'

export interface ChipProps {
  chipVariant: variant
  initialStatus: boolean
  children: React.ReactNode
  onPress: () => void
}
