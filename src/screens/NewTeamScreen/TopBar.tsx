import { View } from 'tamagui'

import Date from '@/assets/Svgs/Date.svg'
import Dots_y from '@/assets/Svgs/Dots_y.svg'
import DownOne from '@/assets/Svgs/DownOne.svg'
import { Typography } from '@/components/Typography'
import RoundArrowBack from '@assets/Svgs/RoundArrowBack.svg'
import { useNavigation } from '@react-navigation/native'

export const AppBar = () => {
  const navigation = useNavigation()
  return (
    <View display="flex" flexDirection="row" height={48} paddingHorizontal={16} flexShrink={0} alignItems="center">
      <View
        flexDirection="row"
        display="flex"
        paddingVertical={8}
        alignItems="center"
        gap={5}
        alignSelf="stretch"
        flexGrow={1}
        flexShrink={0}
        flexBasis={0}
        height={48}
        onPress={() => {
          navigation.goBack()
        }}
      >
        <RoundArrowBack />
      </View>
      <View
        flexDirection="row"
        display="flex"
        paddingVertical={16}
        alignItems="center"
        justifyContent="space-between"
        width={84}
        height={48}
      >
        <Typography type="B" fontSize={16} textColor={'#000000'} lineHeight={22}>
          colli2024
        </Typography>
        <DownOne />
      </View>
      <View
        flexDirection="row"
        display="flex"
        padding={8}
        justifyContent="flex-end"
        alignItems="center"
        gap={24}
        flexGrow={1}
        flexShrink={0}
        flexBasis={0}
        alignSelf="stretch"
        height={48}
      >
        <Date />
        <Dots_y />
      </View>
    </View>
  )
}
