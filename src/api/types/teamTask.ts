import type { ImageSourcePropType } from 'react-native'

export type TapBarStatus = 'To do' | 'In progress' | 'Done'
export type CategoryState = 'category' | 'sprintA' | 'sprintB' | 'sprintC'

export interface teamTask {
  id: number
  status: TapBarStatus
  category: string
  categoryState: CategoryState
  title: string
  dueDate: Date
  assignee: string
  imgSrc: ImageSourcePropType
}

export interface teamTaskResponse {
  dataList: teamTask[]
  //totalCount:number
}
