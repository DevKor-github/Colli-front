import { View } from 'tamagui'

import { Typography } from '@/components/Typography'
import { customPalettes } from '@/theme/customPalettes'

const Notice = ({ notice }: { notice: string }) => {
  return (
    <View
      display="flex"
      flexDirection="row"
      width={314}
      height={50}
      alignItems="center"
      paddingHorizontal={12}
      paddingVertical={10}
      gap={8}
      borderRadius={25}
      backgroundColor={customPalettes.snow[50]}
      borderWidth={1}
      borderColor={'rgba(178, 183, 255, 0.80)'}
    >
      <View width={30} height={30} borderRadius={15} backgroundColor={customPalettes.wf[50]} />
      <View width={252}>
        <Typography type="R" fontSize={16} textColor={customPalettes.gray[700]} numberOfLines={1} ellipse>
          {notice}
        </Typography>
      </View>
    </View>
  )
}

export default Notice
