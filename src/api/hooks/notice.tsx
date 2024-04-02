import axios from 'axios'

import type { noticeResponse } from '@/api/types/notice'
import { NOTICE_RES_MOCK } from '@/mocks/data/notice-mock'
import { useQuery } from '@tanstack/react-query'

const getNotice = async () => {
  //const response = await axios.get('http://localhost:3000/user/notice/latest')
  //return response.data
  return NOTICE_RES_MOCK
}

export const useGetNotice = () => {
  return useQuery<noticeResponse>({ queryKey: ['notice'], queryFn: getNotice })
}
