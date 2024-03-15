import { ScrollView } from 'react-native'
import { View } from 'tamagui'

import Fab from '@/assets/Svgs/fab.svg'
import { TEAM_NAME } from '@/mocks/data/teamName'
import DashBoard from '@/screens/LandingScreen/DashBoard'
import NoticeContainer from '@/screens/NewTeamScreen/Notice/NoticeContainer'
import MemberListContainer from '@/screens/NewTeamScreen/MemberList/MemberListContainer'
import { Notice } from '@/screens/NewTeamScreen/Notice/Notice'
import { TeamTask } from '@/screens/NewTeamScreen/TeamTask/index'
import { AppBar } from '@/screens/NewTeamScreen/TopBar'
import { customPalettes } from '@/theme/customPalettes'
import { SafeArea } from '@components/SafeArea'

const NewTeamScreen = () => {
  return (
    <SafeArea>
      <AppBar />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ backgroundColor: '#ffffff' }}
        scrollEventThrottle={0}
        decelerationRate="fast"
      >
        <Notice noticeText="공지가 적히는 배너입니다. 공지가 적히는 칸입니다." />
        <MemberListContainer />
        <TeamTask />
      </ScrollView>

      <View
        display="flex"
        position="absolute"
        bottom={48}
        width={48}
        height={48}
        right={16}
        justifyContent="center"
        alignItems="center"
        gap={10}
        flexShrink={0}
        borderRadius={1000}
        backgroundColor={customPalettes.wf[100]}
        onPress={() => {}}
      >
        <Fab />
      </View>
    </SafeArea>
  )
}
export default NewTeamScreen
