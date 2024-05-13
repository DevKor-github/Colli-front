import { ScrollView } from 'react-native'
import { View } from 'tamagui'

import { useGetTeamName } from '@/api/hooks/teamName'
import { useGetTeamNotice } from '@/api/hooks/teamNotice'
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
  const resNotice = useGetTeamNotice().data
  const resTeamName = useGetTeamName().data

  return (
    <SafeArea>
      <AppBarWithCalendar teamName={resTeamName?.dataList?.[0]?.name || ''} handleNavigation={handleNavigation} />
      <ScrollView showsVerticalScrollIndicator={false} scrollEventThrottle={0} decelerationRate="fast">
        <View display="flex" paddingHorizontal="10%" backgroundColor={customPalettes.gray[50]}>
          {resNotice?.dataList?.[0] ? (
            <Notice key={resNotice.dataList[0].id} notice={resNotice.dataList[0].content} />
          ) : null}
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
