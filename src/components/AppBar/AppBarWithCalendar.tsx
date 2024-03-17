import { View } from 'tamagui'

import LeftArrow from '@/assets/Svgs/LeftArrow.svg'
import ToggleDown from '@/assets/Svgs/ToggleDown.svg'
import { AppBar } from '@/components/AppBar'
import { Typography } from '@/components/Typography'
import { customPalettes } from '@/theme/customPalettes'
import type { AppBarWithCalendarProps } from '@/types/AppBar'
import CalendarIcon from '@assets/Svgs/CalendarIcon.svg'
import DotsVertical from '@assets/Svgs/DotsVertical.svg'

const AppBarWithCalendar = ({ teamName, handleNavigation }: AppBarWithCalendarProps) => {
  return (
    <View backgroundColor={customPalettes.gray[50]}>
      <AppBar>
        <AppBar.Section type="left">
          <AppBar.IconWrapper type="left" onPress={handleNavigation}>
            <LeftArrow />
          </AppBar.IconWrapper>
        </AppBar.Section>
        <AppBar.Center>
          <Typography type="B" fontSize={16} textColor={customPalettes.gray[950]}>
            {teamName}
          </Typography>
          <ToggleDown />
        </AppBar.Center>
        <AppBar.Section type="right">
          <AppBar.IconWrapper type="right">
            <CalendarIcon />
          </AppBar.IconWrapper>
          <AppBar.IconWrapper type="right">
            <DotsVertical />
          </AppBar.IconWrapper>
        </AppBar.Section>
      </AppBar>
    </View>
  )
}

export default AppBarWithCalendar
