import { View } from 'tamagui'

import Bell from '@assets/Svgs/Bell.svg'
import MainScreenLogo from '@assets/Svgs/COLLI/MainScreenLogo.svg'
import Menu from '@assets/Svgs/Menu.svg'

export const TopBar = () => {
  return (
    <View
      display="flex"
      flexDirection="row"
      height={44}
      paddingHorizontal={20}
      justifyContent="space-between"
      alignItems="center"
    >
      <Menu />
      <MainScreenLogo />
      <Bell />
    </View>
  )
}

TopBar
