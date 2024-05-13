import axios from 'axios'

import type { teamMemberResponse } from '@/api/types/teamMember'
import { TEAMMEMBER_RES_MOCK } from '@/mocks/data/teamMember-mock'
import { useQuery } from '@tanstack/react-query'

const getTeamMember = async () => {
  //const response = await axios.get('http://localhost:3000/user/notice/latest')
  //return response.data
  return TEAMMEMBER_RES_MOCK
}

export const useGetTeamMember = () => {
  return useQuery<teamMemberResponse>({ queryKey: ['teamMember'], queryFn: getTeamMember })
}
