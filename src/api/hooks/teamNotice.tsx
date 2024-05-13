import axios from 'axios'

import type { teamNoticeResponse } from '@/api/types/teamNotice'
import { TEAMNOTICE_RES_MOCK } from '@/mocks/data/teamNotice-mock'
import { useQuery } from '@tanstack/react-query'

const getTeamNotice = async () => {
  //const response = await axios.get('http://localhost:3000/user/notice/latest')
  //return response.data
  return TEAMNOTICE_RES_MOCK
}

export const useGetTeamNotice = () => {
  return useQuery<teamNoticeResponse>({ queryKey: ['teamNotice'], queryFn: getTeamNotice })
}
