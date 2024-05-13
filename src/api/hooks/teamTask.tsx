import axios from 'axios'

import type { teamTaskResponse } from '@/api/types/teamTask'
import { TEAMTASK_RES_MOCK } from '@/mocks/data/teamTask-mock'
import { useQuery } from '@tanstack/react-query'

const getTeamTask = async () => {
  //const response = await axios.get('http://localhost:3000/user/notice/latest')
  //return response.data
  return TEAMTASK_RES_MOCK
}

export const useGetTeamTask = () => {
  return useQuery<teamTaskResponse>({ queryKey: ['teamTask'], queryFn: getTeamTask })
}
