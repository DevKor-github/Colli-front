import type { ScheduleProps } from '@/types/schedule'

export const SCHEDULES: ScheduleProps[] = [
  {
    startAt: new Date('2023-12-05T09:10:00'),
    endAt: new Date('2023-12-05T13:00:00'),
    content: '뎁코 MT 준비하기',
    location: '와플앨리'
  },
  {
    startAt: new Date('2023-12-05T12:20:00'),
    endAt: new Date('2023-12-05T14:20:00'),
    content: '뎁코 MT 출발하기',
    location: '대성리역'
  },
  {
    startAt: new Date('2023-12-05T14:20:00'),
    endAt: new Date('2023-12-05T15:37:00'),
    content: '뎁코 MT 짐 정리하기',
    location: '대성리역'
  },
  {
    startAt: new Date('2023-12-05T15:45:00'),
    endAt: new Date('2023-12-05T22:00:00'),
    content: '술 깨기',
    location: '집'
  }
]
