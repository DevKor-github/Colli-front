import { SafeArea } from '@/components/SafeArea'
import DashBoard from '@/screens/LandingScreen/DashBoard'
import NoticeContainer from '@/screens/LandingScreen/NoticeContainer'
import { AppBar } from '@/screens/MainScreen/TopBar'

const LandingScreen = () => {
  return (
    <SafeArea>
      <AppBar />
      <NoticeContainer />
      <DashBoard />
    </SafeArea>
  )
}

export default LandingScreen
