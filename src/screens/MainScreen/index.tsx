import { ScrollView } from 'react-native'

import { HeaderContainer } from '@/components/HeaderContainer'
import { DueDateContainer } from '@/screens/MainScreen/DueDateContainer'
import { TaskSection } from '@/screens/MainScreen/TaskSection'
import { TopBar } from '@/screens/MainScreen/TopBar'
import { customPalettes } from '@/theme/customPalettes'
// import { NavigationButton } from '@/components/Buttons/NavigationButton'
import { Calendar } from '@components/Calendar'
import { SafeArea } from '@components/SafeArea'

export const Home = () => {
  return (
    <SafeArea>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ backgroundColor: customPalettes.gray[50] }}
        scrollEventThrottle={0}
        decelerationRate="fast"
      >
        <HeaderContainer>
          <TopBar />
          <DueDateContainer />
        </HeaderContainer>
        <Calendar />
        <TaskSection />
      </ScrollView>
    </SafeArea>
  )
}
