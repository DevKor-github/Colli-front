import { AppBar } from '@/components/AppBar'
import Bell from '@assets/Svgs/Bell.svg'
import MainScreenLogo from '@assets/Svgs/COLLI/MainScreenLogo.svg'
import Menu from '@assets/Svgs/Menu.svg'

const AppBarMain = () => {
  return (
    <AppBar>
      <AppBar.Section type="left">
        <AppBar.IconWrapper type="left">
          <Menu />
        </AppBar.IconWrapper>
      </AppBar.Section>
      <AppBar.Center>
        <MainScreenLogo />
      </AppBar.Center>
      <AppBar.Section type="right">
        <AppBar.IconWrapper type="right">
          <Bell />
        </AppBar.IconWrapper>
      </AppBar.Section>
    </AppBar>
  )
}

export default AppBarMain
