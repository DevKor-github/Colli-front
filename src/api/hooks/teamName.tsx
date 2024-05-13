import axios from 'axios'

import type { teamNameResponse } from '@/api/types/teamName'
import { TEAMNAME_RES_MOCK } from '@/mocks/data/teamName-mock'
import { useQuery } from '@tanstack/react-query'

const getTeamName = async () => {
  //const response = await axios.get('http://localhost:3000/user/notice/latest')
  //return response.data
  return TEAMNAME_RES_MOCK
}

export const useGetTeamName = () => {
  return useQuery<teamNameResponse>({ queryKey: ['teamName'], queryFn: getTeamName })
}
