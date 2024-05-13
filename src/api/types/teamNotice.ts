export interface teamNotice {
  id: number
  content: string
}

export interface teamNoticeResponse {
  dataList: teamNotice[]
  //totalCount:number
}
