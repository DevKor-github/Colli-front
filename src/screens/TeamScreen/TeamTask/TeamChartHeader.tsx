import { View } from 'tamagui'

import { Typography } from '@/components/Typography'
import { customPalettes } from '@/theme/customPalettes'

export const TeamChartHeader = () => {
  return (
    <View display="flex" flexDirection="column" backgroundColor={customPalettes.snow[50]} mt={8}>
      <View display="flex" paddingHorizontal={20} paddingVertical={16}>
        <Typography type="B" fontSize={17} textColor={customPalettes.gray[700]}>
          Task
        </Typography>
      </View>
    </View>
  )
}
