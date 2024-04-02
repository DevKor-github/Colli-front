export interface notice {
  noticeId: number
  teamId: number
  teamName: string
  title: string
  content: string
  createdAt: Date
  updateAt: Date
  deletedAt: Date
}

export interface noticeResponse {
  dataList: notice[]
  totalCount: number
}
