import { ScrollView } from 'react-native'

import DashBoard from '@/screens/LandingScreen/DashBoard'
import NoticeContainer from '@/screens/LandingScreen/Notice/NoticeContainer'
import TeamList from '@/screens/LandingScreen/Team'
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
        <TeamList />
      </ScrollView>
    </SafeArea>
  )
}
export default LandingScreen
