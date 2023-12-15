import type { TaskCardProps } from '@/types/kanBanBoard'

export const TEAM_CATEGORY = [
  {
    id: 0,
    name: '기획'
  },
  {
    id: 1,
    name: '디자인'
  },
  {
    id: 2,
    name: '프론트'
  },
  {
    id: 3,
    name: '백엔드'
  },
  {
    id: 4,
    name: '발표'
  }
]

interface reminderDateProps {
  [index: number]: string
}
export const REMINDER_DATE: reminderDateProps = {
  0: '없음',
  1: '30분 전',
  2: '1시간 전',
  3: '1일 전',
  4: '2일 전',
  5: '1주 전'
}

export const TEAM_TASKS: TaskCardProps[] = [
  {
    id: 0,
    status: 'todo',
    category: '기획',
    title: '기획 구체화하기',
    dueDate: new Date('2023-12-28T08:00:00'),
    reminderDate: 3,
    notes:
      '자유롭게 메모를 작성할 수 있는 영역입니다. 본 서브텍스트박스를 터치하면 키보드가 시트가 호출되며 텍스트를 편집할 수 있습니다.',
    assignee: '차승민'
  },
  {
    id: 1,
    status: 'todo',
    category: '기획',
    title: 'PPT 준비하기',
    dueDate: new Date('2023-12-20T12:00:00'),
    reminderDate: 3,
    notes:
      '자유롭게 메모를 작성할 수 있는 영역입니다. 본 서브텍스트박스를 터치하면 키보드가 시트가 호출되며 텍스트를 편집할 수 있습니다.',
    assignee: '차승민'
  },
  {
    id: 2,
    status: 'todo',
    category: '디자인',
    title: '디자인 구체화하기',
    dueDate: new Date('2023-12-21T00:00:00'),
    reminderDate: 3,
    notes:
      '자유롭게 메모를 작성할 수 있는 영역입니다. 본 서브텍스트박스를 터치하면 키보드가 시트가 호출되며 텍스트를 편집할 수 있습니다.',
    assignee: '이유라'
  },
  {
    id: 3,
    status: 'todo',
    category: '디자인',
    title: 'PPT 준비하기',
    dueDate: new Date('2023-12-21T00:00:00'),
    reminderDate: 3,
    notes:
      '자유롭게 메모를 작성할 수 있는 영역입니다. 본 서브텍스트박스를 터치하면 키보드가 시트가 호출되며 텍스트를 편집할 수 있습니다.',
    assignee: '김하람'
  },
  {
    id: 4,
    status: 'todo',
    category: '프론트',
    title: '개발 구체화하기',
    dueDate: new Date('2023-12-21T00:00:00'),
    reminderDate: 3,
    notes:
      '자유롭게 메모를 작성할 수 있는 영역입니다. 본 서브텍스트박스를 터치하면 키보드가 시트가 호출되며 텍스트를 편집할 수 있습니다.',
    assignee: '차승민'
  },
  {
    id: 5,
    status: 'todo',
    category: '프론트',
    title: 'PPT 준비하기',
    dueDate: new Date('2023-12-21T00:00:00'),
    reminderDate: 3,
    notes:
      '자유롭게 메모를 작성할 수 있는 영역입니다. 본 서브텍스트박스를 터치하면 키보드가 시트가 호출되며 텍스트를 편집할 수 있습니다.',
    assignee: '차승민'
  },

  {
    id: 6,
    status: 'inProgress',
    category: '기획',
    title: '보고서 작성하기',
    dueDate: new Date('2023-12-20T00:00:00'),
    reminderDate: 3,
    notes:
      '자유롭게 메모를 작성할 수 있는 영역입니다. 본 서브텍스트박스를 터치하면 키보드가 시트가 호출되며 텍스트를 편집할 수 있습니다.',
    assignee: '차승민'
  },
  {
    id: 7,
    status: 'inProgress',
    category: '디자인',
    title: '보고서 작성하기',
    dueDate: new Date('2023-12-20T00:00:00'),
    reminderDate: 3,
    notes:
      '자유롭게 메모를 작성할 수 있는 영역입니다. 본 서브텍스트박스를 터치하면 키보드가 시트가 호출되며 텍스트를 편집할 수 있습니다.',
    assignee: '차승민'
  },
  {
    id: 8,
    status: 'inProgress',
    category: '프론트',
    title: '보고서 작성하기',
    dueDate: new Date('2023-12-20T00:00:00'),
    reminderDate: 3,
    notes:
      '자유롭게 메모를 작성할 수 있는 영역입니다. 본 서브텍스트박스를 터치하면 키보드가 시트가 호출되며 텍스트를 편집할 수 있습니다.',
    assignee: '차승민'
  },

  {
    id: 9,
    status: 'done',
    category: '프론트',
    title: '초기 화면 구축',
    dueDate: new Date('2023-12-15T00:00:00'),
    reminderDate: 3,
    notes:
      '자유롭게 메모를 작성할 수 있는 영역입니다. 본 서브텍스트박스를 터치하면 키보드가 시트가 호출되며 텍스트를 편집할 수 있습니다.',
    assignee: '차승민'
  }

  // {
  //   category: '백엔드',
  //   todo: ['개발 구체화하기', 'PPT 준비하기'],
  //   inProgress: ['보고서 작성하기'],
  //   done: ['측량 실험하기']
  // },
  // {
  //   category: '발표',
  //   todo: ['발표 구체화하기', 'PPT 준비하기'],
  //   inProgress: ['보고서 작성하기'],
  //   done: ['측량 실험하기']
  // }
]
