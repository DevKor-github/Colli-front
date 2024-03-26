import type { ImageSourcePropType } from 'react-native'

export interface CommentProps {
  avatar: ImageSourcePropType
  name: string
  date: Date
  text: string
}
