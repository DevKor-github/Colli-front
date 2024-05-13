import type { ImageSourcePropType } from 'react-native'

export interface teamName {
  id: number
  name: string
  teamMember: number
  imgSrc: ImageSourcePropType
}

export interface teamNameResponse {
  dataList: teamName[]
  //totalCount:number
}
