import type { teamTask, teamTaskResponse } from '@/api/types/teamTask'

export const TEAMTASKS_CATEGORY = ['스프린트 A', '스프린트 B', '스프린트 C']

export const TEAMTASK_LIST_MOCK: teamTask[] = [
  {
    id: 0,
    status: 'To do',
    category: 'Sprint C',
    categoryState: 'sprintC',
    title: '태스크의 이름을 적는 곳입니다. 최대 세 줄까지 가능하며 넘으면 점처리 됩니다.',
    dueDate: new Date('2024-6-28T08:00:00'),
    assignee: '차승민',
    imgSrc: require('@assets/Images/min.jpg')
  },
  {
    id: 1,
    status: 'To do',
    category: 'Sprint A',
    categoryState: 'sprintA',
    title: '태스크의 이름을 적는 곳입니다. 최대 세 줄까지 가능하며 넘으면 점처리 됩니다.',
    dueDate: new Date('2024-6-20T12:00:00'),
    assignee: '차승민',
    imgSrc: require('@assets/Images/min.jpg')
  },
  {
    id: 2,
    status: 'To do',
    category: 'Sprint A',
    categoryState: 'sprintA',
    title: '태스크의 이름을 적는 곳입니다. 최대 세 줄까지 가능하며 넘으면 점처리 됩니다.',
    dueDate: new Date('2024-6-21T00:00:00'),
    assignee: '이유라',
    imgSrc: require('@assets/Images/yura.jpeg')
  },
  {
    id: 3,
    status: 'To do',
    category: 'Sprint C',
    categoryState: 'sprintC',
    title: '태스크의 이름을 적는 곳입니다. 최대 세 줄까지 가능하며 넘으면 점처리 됩니다.',
    dueDate: new Date('2024-6-21T00:00:00'),
    assignee: '김하람',
    imgSrc: require('@assets/Images/haram.jpeg')
  },
  {
    id: 4,
    status: 'In progress',
    category: 'Sprint B',
    categoryState: 'sprintB',
    title: '태스크의 이름을 적는 곳입니다. 최대 세 줄까지 가능하며 넘으면 점처리 됩니다.',
    dueDate: new Date('2024-6-21T00:00:00'),
    assignee: '차승민',
    imgSrc: require('@assets/Images/min.jpg')
  },
  {
    id: 5,
    status: 'To do',
    category: 'Sprint B',
    categoryState: 'sprintB',
    title: '태스크의 이름을 적는 곳입니다. 최대 세 줄까지 가능하며 넘으면 점처리 됩니다.',
    dueDate: new Date('2024-6-21T00:00:00'),
    assignee: '권서은',
    imgSrc: require('@assets/Images/seoeun.jpg')
  },
  {
    id: 6,
    status: 'In progress',
    category: 'Sprint C',
    categoryState: 'sprintC',
    title: '태스크의 이름을 적는 곳입니다. 최대 세 줄까지 가능하며 넘으면 점처리 됩니다.',
    dueDate: new Date('2024-6-20T00:00:00'),
    assignee: '유승은',
    imgSrc: require('@assets/Images/seungeun.jpeg')
  },
  {
    id: 7,
    status: 'Done',
    category: 'Sprint C',
    categoryState: 'sprintC',
    title: '태스크의 이름을 적는 곳입니다. 최대 세 줄까지 가능하며 넘으면 점처리 됩니다.',
    dueDate: new Date('2024-6-20T00:00:00'),
    assignee: '차승민',
    imgSrc: require('@assets/Images/min.jpg')
  },
  {
    id: 8,
    status: 'Done',
    category: 'Sprint A',
    categoryState: 'sprintA',
    title: '태스크의 이름을 적는 곳입니다. 최대 세 줄까지 가능하며 넘으면 점처리 됩니다.',
    dueDate: new Date('2024-6-20T00:00:00'),
    assignee: '유승은',
    imgSrc: require('@assets/Images/seungeun.jpeg')
  },

  {
    id: 9,
    status: 'Done',
    category: 'Sprint A',
    categoryState: 'sprintA',
    title: '태스크의 이름을 적는 곳입니다. 최대 세 줄까지 가능하며 넘으면 점처리 됩니다.',
    dueDate: new Date('2024-6-15T00:00:00'),
    assignee: '차승민',
    imgSrc: require('@assets/Images/min.jpg')
  },
  {
    id: 10,
    status: 'In progress',
    category: 'Sprint C',
    categoryState: 'sprintC',
    title: '태스크의 이름을 적는 곳입니다. 최대 세 줄까지 가능하며 넘으면 점처리 됩니다.',
    dueDate: new Date('2024-6-21T00:00:00'),
    assignee: '김하람',
    imgSrc: require('@assets/Images/haram.jpeg')
  },
  {
    id: 203,
    status: 'Done',
    category: 'Sprint B',
    categoryState: 'sprintB',
    title: '태스크의 이름을 적는 곳입니다. 최대 세 줄까지 가능하며 넘으면 점처리 됩니다.',
    dueDate: new Date('2024-6-21T00:00:00'),
    assignee: '권서은',
    imgSrc: require('@assets/Images/seoeun.jpg')
  }
]

export const TEAMTASK_RES_MOCK: teamTaskResponse = {
  dataList: TEAMTASK_LIST_MOCK
}
