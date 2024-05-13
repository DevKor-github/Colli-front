import type { ImageSourcePropType } from 'react-native'

export interface teamMember {
  id: number
  name: string
  department: string
  email: string
  division: string
  imgSrc: ImageSourcePropType
}

export interface teamMemberResponse {
  dataList: teamMember[]
  //totalCount:number
}
