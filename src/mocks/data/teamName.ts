import type { TeamCardProps } from '@/types/teamCard'

export const TEAM_NAME: TeamCardProps[] = [
  {
    id: 0,
    name: '팀명은 한 줄까지',
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
    name: '팀명은 한 줄까지 노출되어야만',
    teamMember: 7,
    imgSrc: require('@assets/Images/dummyTeam1.png')
  },
  {
    id: 3,
    name: '팀명은 한 줄까지 노출되어야만 하는데',
    teamMember: 11,
    imgSrc: require('@assets/Images/dummyTeam1.png')
  }
]
