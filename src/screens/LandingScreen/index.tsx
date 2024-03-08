import { ScrollView } from 'react-native'

import { AppBar, AppBarSection } from '@/components/AppBar'
import DashBoard from '@/screens/LandingScreen/DashBoard'
import NoticeContainer from '@/screens/LandingScreen/Notice'
import TeamList from '@/screens/LandingScreen/Team'
import { customPalettes } from '@/theme/customPalettes'
import Bell from '@assets/Svgs/Bell.svg'
import MainScreenLogo from '@assets/Svgs/COLLI/MainScreenLogo.svg'
import Menu from '@assets/Svgs/Menu.svg'
import { SafeArea } from '@components/SafeArea'

const LandingScreen = () => {
  return (
    <SafeArea>
      <AppBar>
        <AppBar.Section type="left">
          <Menu />
        </AppBar.Section>
        <AppBar.Center>
          <MainScreenLogo />
        </AppBar.Center>
        <AppBar.Section type="right">
          <Bell />
        </AppBar.Section>
      </AppBar>
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
