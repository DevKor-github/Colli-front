import { ScrollView } from 'react-native'
import { View } from 'tamagui'

import { TeamCard } from '@/components/TeamCard'
import { Typography } from '@/components/Typography'
import { TEAM_NAME } from '@/mocks/data/teamName'
import DashBoard from '@/screens/LandingScreen/DashBoard'
import NoticeContainer from '@/screens/LandingScreen/NoticeContainer'
import { AppBar } from '@/screens/MainScreen/TopBar'
import { customPalettes } from '@/theme/customPalettes'
import { SafeArea } from '@components/SafeArea'

const LandingScreen = () => {
  return (
    <SafeArea>
      <AppBar />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ backgroundColor: customPalettes.gray[50] }}
        scrollEventThrottle={0}
        decelerationRate="fast"
      >
        <NoticeContainer />
        <DashBoard />
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
