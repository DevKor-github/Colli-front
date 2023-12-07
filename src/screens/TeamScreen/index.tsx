import { ScrollView } from 'react-native'

import { Calendar } from '@/components/Calendar'
import { SafeArea } from '@/components/SafeArea'
import { Header } from '@/screens/TeamScreen/Header'
import { Notice } from '@/screens/TeamScreen/Notice'
import { TeamTask } from '@/screens/TeamScreen/TeamTask'
import { customPalettes } from '@/theme/customPalettes'
import TeamCover from '@assets/Svgs/TeamCover.svg'
import { useNavigation } from '@react-navigation/native'

export const TeamScreen = () => {
  const navigation = useNavigation()
  return (
    <SafeArea team>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ backgroundColor: customPalettes.gray[50] }}
        scrollEventThrottle={0}
        decelerationRate="fast"
      >
        <Header />
        <TeamCover />
        <Notice noticeText="12월 21일 기말 발표 준비할 수 있다..." />
        <Calendar />
        <TeamTask />
      </ScrollView>
    </SafeArea>
  )
}
