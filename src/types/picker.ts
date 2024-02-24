export interface PickerProps {
  month: number
  date: number
  ampm: number
  hour: number
  minute: number
  handleChange: (target: string, value: number) => void
}
