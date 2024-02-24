import { View } from 'tamagui'

import { Typography } from '@/components/Typography'
import { customPalettes } from '@/theme/customPalettes'

export const Notice = ({ noticeText }: { noticeText: string }) => {
  return (
    <View pt={12} backgroundColor={customPalettes.snow[50]}>
      <View
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        gap={10}
        paddingHorizontal={20}
        alignSelf="stretch"
      >
        <View
          display="flex"
          flexDirection="row"
          alignItems="center"
          gap={8}
          alignSelf="stretch"
          paddingHorizontal={20}
          paddingVertical={10}
          borderRadius={100}
          borderWidth={1}
          borderColor={customPalettes.blue[400]}
          backgroundColor={customPalettes.blue[50]}
        >
          <Typography type="R" fontSize={12} textColor={customPalettes.blue[500]}>
            공지
          </Typography>
          <Typography type="R" fontSize={14} textColor={customPalettes.blue[700]}>
            {noticeText}
          </Typography>
        </View>
      </View>
    </View>
  )
}
