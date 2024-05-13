import axios from 'axios'

import type { taskFilterCategoryResponse } from '@/api/types/taskFilterCategory'
import { FILTERCATEGORY_RES_MOCK } from '@/mocks/data/taskFilterCategory-mock'
import { useQuery } from '@tanstack/react-query'

const getTaskFilterCategory = async () => {
  //const response = await axios.get('http://localhost:3000/user/notice/latest')
  //return response.data
  return FILTERCATEGORY_RES_MOCK
}

export const useGetTaskFilterCategory = () => {
  return useQuery<taskFilterCategoryResponse>({ queryKey: ['taskFilterCategory'], queryFn: getTaskFilterCategory })
}
