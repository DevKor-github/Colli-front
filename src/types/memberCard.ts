import type { ImageSourcePropType } from 'react-native'

export interface MemberCardProps {
  id: number
  name: string
  department: string
  email: string
  division: string
  imgSrc: ImageSourcePropType
}
