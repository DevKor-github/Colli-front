import { View } from 'tamagui'

import { Typography } from '@/components/Typography'
import { customPalettes } from '@/theme/customPalettes'

export const Notice = ({ noticeText }: { noticeText: string }) => {
  return (
    <View
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      gap={10}
      paddingHorizontal={16}
      alignSelf="stretch"
      height={70}
      backgroundColor={customPalettes.gray[50]}
    >
      <View
        display="flex"
        flexDirection="row"
        alignItems="center"
        paddingHorizontal={12}
        paddingVertical={10}
        gap={8}
        borderRadius={25}
        backgroundColor={customPalettes.snow[50]}
        borderWidth={1}
        borderColor={'rgba(178, 183, 255, 0.80)'}
        height={50}
      >
        <View width={30} height={30} borderRadius={100} backgroundColor={'rgba(105, 115, 255, 0.10)'} />
        <View
          display="flex"
          height={22}
          flexDirection="column"
          justifyContent="center"
          flexGrow={1}
          flexShrink={0}
          flexBasis={0}
        >
          <Typography type="R" fontSize={16} textColor={'#3c3c3c'} numberOfLines={1} ellipse>
            {noticeText}
          </Typography>
        </View>
      </View>
    </View>
  )
}
