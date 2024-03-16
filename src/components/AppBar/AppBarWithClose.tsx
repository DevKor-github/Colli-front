import { AppBar } from '@/components/AppBar'
import { Typography } from '@/components/Typography'
import { customPalettes } from '@/theme/customPalettes'
import type { AppBarProps } from '@/types/AppBar'
import Close from '@assets/Svgs/Close.svg'

const AppBarWithClose = ({ handleNavigation }: AppBarProps) => {
  return (
    <AppBar>
      <AppBar.Section type="left">
        <AppBar.IconWrapper type="left" onPress={handleNavigation}>
          <Close />
        </AppBar.IconWrapper>
      </AppBar.Section>
      <AppBar.Center>
        <Typography type="B" fontSize={16} textColor={customPalettes.gray[950]}>
          댓글
        </Typography>
      </AppBar.Center>
      <AppBar.Section type="right" />
    </AppBar>
  )
}

export default AppBarWithClose
