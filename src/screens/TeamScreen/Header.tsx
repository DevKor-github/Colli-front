import { Pressable } from 'react-native'
import { View } from 'tamagui'

import { Typography } from '@/components/Typography'
import { customPalettes } from '@/theme/customPalettes'
import LeftArrow from '@assets/Svgs/LeftArrow.svg'
import CalendarIcon from '@assets/Svgs/calendar.svg'
import Member from '@assets/Svgs/members.svg'
import Setting from '@assets/Svgs/setting.svg'
import { useNavigation } from '@react-navigation/native'

export const Header = () => {
  const navigation = useNavigation()
  return (
    <View
      display="flex"
      flexDirection="row"
      justifyContent="center"
      paddingRight={20}
      backgroundColor={customPalettes.snow[50]}
    >
      <Pressable
        style={{
          display: 'flex',
          width: 44,
          height: 44,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 10,
          gap: 10
        }}
        onPress={() => navigation.goBack()}
      >
        <LeftArrow />
      </Pressable>
      <View display="flex" flexDirection="column" justifyContent="center" alignSelf="stretch" flexGrow={1}>
        <Typography type="M" textColor={customPalettes.gray[700]} fontSize={17}>
          뎁코
        </Typography>
      </View>
      <View display="flex" flexDirection="row" justifyContent="center" alignItems="center" gap={8}>
        <Pressable onPress={() => navigation.navigate('TeamMember')}>
          <Member />
        </Pressable>
        <Pressable>
          <CalendarIcon />
        </Pressable>
        <Pressable>
          <Setting />
        </Pressable>
      </View>
    </View>
  )
}
