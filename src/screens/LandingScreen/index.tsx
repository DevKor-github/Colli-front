import { ScrollView } from 'react-native'

import AppBarMain from '@/components/AppBar/AppBarMain'
import DashBoard from '@/screens/LandingScreen/DashBoard'
import NoticeContainer from '@/screens/LandingScreen/NoticeContainer'
import TeamList from '@/screens/LandingScreen/Team'
import { customPalettes } from '@/theme/customPalettes'
import { SafeArea } from '@components/SafeArea'

const LandingScreen = () => {
  return (
    <SafeArea>
      <AppBarMain />
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
