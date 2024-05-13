import type { teamName, teamNameResponse } from '@/api/types/teamName'

export const TEAMNAME_LIST_MOCK: teamName[] = [
  {
    id: 0,
    name: 'colli2024',
    teamMember: 6,
    imgSrc: require('@assets/Images/dummyTeam1.png')
  },
  {
    id: 1,
    name: '팀명은 한 줄까지 노출되며 넘으면 점처리 됩니다',
    teamMember: 5,
    imgSrc: require('@assets/Images/dummyTeam1.png')
  },
  {
    id: 2,
    name: '팀명은 한 줄까지 노출되며 넘으면 점처리 됩니다',
    teamMember: 7,
    imgSrc: require('@assets/Images/dummyTeam1.png')
  },
  {
    id: 3,
    name: '팀명은 한 줄까지 노출되며 넘으면 점처리 됩니다',
    teamMember: 11,
    imgSrc: require('@assets/Images/dummyTeam1.png')
  }
]

export const TEAMNAME_RES_MOCK: teamNameResponse = {
  dataList: TEAMNAME_LIST_MOCK
}
