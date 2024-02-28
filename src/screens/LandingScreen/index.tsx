import { ScrollView } from 'react-native'
import { useRecoilValue } from 'recoil'
import { Sheet, View } from 'tamagui'

import { Chip } from '@/components/Chips'
import { TeamCard } from '@/components/TeamCard'
import { Typography } from '@/components/Typography'
import { TEAM_NAME } from '@/mocks/data/teamName'
import { customPalettes } from '@/theme/customPalettes'
import { SafeArea } from '@components/SafeArea'

const LandingScreen = () => {
  return (
    <SafeArea>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ backgroundColor: customPalettes.gray[50] }}
        scrollEventThrottle={0}
        decelerationRate="fast"
      >
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
              style={{ width: 83, height: 32 }}
              borderRadius={100}
              backgroundColor={customPalettes.blue[200]}
              pressStyle={{ opacity: 0.15 }}
            ></View>
          </View>
          <View display="flex" flexDirection="column" alignItems="flex-start" gap={8} alignSelf="stretch">
            {TEAM_NAME.map(member => (
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
      </ScrollView>
    </SafeArea>
  )
}
export default LandingScreen
