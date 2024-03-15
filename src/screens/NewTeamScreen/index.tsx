import { ScrollView } from 'react-native'
import { View } from 'tamagui'

import Fab from '@/assets/Svgs/fab.svg'
import AppBarWithCalendar from '@/components/AppBar/AppBarWithCalendar'
import Notice from '@/components/Notice/Notice'
import MemberListContainer from '@/screens/NewTeamScreen/MemberList/MemberListContainer'
import { TeamTask } from '@/screens/NewTeamScreen/TeamTask/index'
import { customPalettes } from '@/theme/customPalettes'
import { SafeArea } from '@components/SafeArea'
import { useNavigation } from '@react-navigation/native'

const NewTeamScreen = () => {
  const navigation = useNavigation()
  const handleNavigation = () => {
    navigation.goBack()
  }
  return (
    <SafeArea>
      <AppBarWithCalendar teamName="colli2024" handleNavigation={handleNavigation} />
      <ScrollView showsVerticalScrollIndicator={false} scrollEventThrottle={0} decelerationRate="fast">
        <View display="flex" paddingHorizontal="10%">
          <Notice notice="공지가 적히는 배너입니다. 공지가 적히는 칸입니다." />
        </View>
        <MemberListContainer />
        <TeamTask />
      </ScrollView>

      <View
        display="flex"
        position="absolute"
        bottom={48}
        width={48}
        height={48}
        right={16}
        justifyContent="center"
        alignItems="center"
        gap={10}
        flexShrink={0}
        borderRadius={1000}
        backgroundColor={customPalettes.wf[100]}
        onPress={() => {}}
      >
        <Fab />
      </View>
    </SafeArea>
  )
}
export default NewTeamScreen
