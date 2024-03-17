import { AppBar } from '@/components/AppBar'
import { Typography } from '@/components/Typography'
import { customPalettes } from '@/theme/customPalettes'
import type { AppBarProps } from '@/types/AppBar'
import LeftArrow from '@assets/Svgs/LeftArrow.svg'

const AppBarWithNav = ({ handleNavigation }: AppBarProps) => {
  return (
    <AppBar>
      <AppBar.Section type="left">
        <AppBar.IconWrapper type="left" onPress={handleNavigation}>
          <LeftArrow />
        </AppBar.IconWrapper>
      </AppBar.Section>
      <AppBar.Center>
        <Typography type="B" fontSize={16} textColor={customPalettes.gray[900]}>
          태스크 상세
        </Typography>
      </AppBar.Center>
      <AppBar.Section type="right" />
    </AppBar>
  )
}

export default AppBarWithNav
