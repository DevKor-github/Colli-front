import { View } from 'tamagui'

import { useGetTeamName } from '@/api/hooks/teamName'
import { Typography } from '@/components/Typography'
import { TEAM_NAME } from '@/mocks/data/teamName'
import { TeamCard } from '@/screens/LandingScreen/Team/TeamCard'
import { customPalettes } from '@/theme/customPalettes'

const TeamList = () => {
  const resTeamName = useGetTeamName().data
  return (
    <View padding={16} gap={12} flexDirection="column" alignItems="center" alignSelf="stretch">
      <View
        display="flex"
        flexDirection="row"
        backgroundColor={customPalettes.gray[50]}
        justifyContent="space-between"
        alignItems="center"
        alignSelf="stretch"
      >
        <Typography type="B" fontSize={20} textColor={customPalettes.gray[500]}>
          참여중인 팀
        </Typography>
        <View
          style={{ width: 83, height: 32, opacity: 0.15 }}
          borderRadius={100}
          backgroundColor={customPalettes.wf[100]}
          pressStyle={{ opacity: 0.15 }}
        ></View>
      </View>
      <View display="flex" flexDirection="column" alignItems="flex-start" gap={8} alignSelf="stretch">
        {resTeamName?.dataList.map(member => (
          <TeamCard
            id={member.id}
            key={member.id}
            name={member.name}
            teamMember={member.teamMember}
            imgSrc={member.imgSrc}
          />
        ))}
      </View>
    </View>
  )
}

export default TeamList
