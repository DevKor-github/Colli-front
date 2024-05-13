import type { taskFilterCategory, taskFilterCategoryResponse } from '@/api/types/taskFilterCategory'

export const FILTERCATEGORY_LIST_MOCK: taskFilterCategory[] = [
  {
    id: 0,
    label: '카테고리',
    state: 'category'
  },
  {
    id: 1,
    label: '스프린트 A',
    state: 'sprintA'
  },
  {
    id: 2,
    label: '스프린트 B',
    state: 'sprintB'
  },
  {
    id: 3,
    label: '스프린트 C',
    state: 'sprintC'
  }
]

export const FILTERCATEGORY_RES_MOCK: taskFilterCategoryResponse = {
  dataList: FILTERCATEGORY_LIST_MOCK
}
