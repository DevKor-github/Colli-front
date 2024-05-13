import type { teamNotice, teamNoticeResponse } from '@/api/types/teamNotice'

export const TEAMNOTICE_LIST_MOCK: teamNotice[] = [
  {
    id: 0,
    content: '공지가 적히는 배너입니다. 공지가 적히는 칸입니다.'
  },
  {
    id: 1,
    content: '공지공지공지공지.'
  },
  {
    id: 2,
    content: '마감하세요옵.'
  }
]

export const TEAMNOTICE_RES_MOCK: teamNoticeResponse = {
  dataList: TEAMNOTICE_LIST_MOCK
}
