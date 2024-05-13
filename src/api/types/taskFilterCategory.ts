import { ImageSourcePropType } from 'react-native'

export type CategoryState = 'category' | 'sprintA' | 'sprintB' | 'sprintC'

export interface taskFilterCategory {
  id: number
  label: string
  state: CategoryState
}

export interface taskFilterCategoryResponse {
  dataList: taskFilterCategory[]
  //totalCount:number
}
