import type { notice, noticeResponse } from '@/api/types/notice'

const NOTICE_LIST_MOCK: notice[] = [
  {
    noticeId: 0,
    teamId: 888,
    teamName: 'colli',
    title: '타이틀',
    content: '중간 발표 4.26(금) 까지',
    createdAt: new Date('2024-01-01'),
    updateAt: new Date('2024-03-01'),
    deletedAt: new Date('2024-01-01')
  },
  {
    noticeId: 1,
    teamId: 288,
    teamName: 'colli',
    title: '타이틀',
    content: '운영체제 과제 #1 마감일 4.11(목) 까지 해야합니다.',
    createdAt: new Date('2024-01-01'),
    updateAt: new Date('2024-03-01'),
    deletedAt: new Date('2024-01-01')
  }
]

export const NOTICE_RES_MOCK: noticeResponse = {
  dataList: NOTICE_LIST_MOCK,
  totalCount: NOTICE_LIST_MOCK.length
}
