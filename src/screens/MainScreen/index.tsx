import { ScrollView } from 'react-native'
import { useRecoilValue } from 'recoil'

import { NavigationButton } from '@/components/Buttons/NavigationButton'
import { HeaderContainer } from '@/components/HeaderContainer'
import { currentNavigationState } from '@/recoil/atom'
import { DueDateContainer } from '@/screens/MainScreen/DueDateContainer'
import { ProjectSection } from '@/screens/MainScreen/ProjectSection'
import { ScheduleSection } from '@/screens/MainScreen/ScheduleSection'
import { TaskSection } from '@/screens/MainScreen/TaskSection'
import { AppBar } from '@/screens/MainScreen/TopBar'
import { customPalettes } from '@/theme/customPalettes'
import { Calendar } from '@components/Calendar'
import { SafeArea } from '@components/SafeArea'

export const Main = () => {
  const currentNavigation = useRecoilValue(currentNavigationState)
  return (
    <SafeArea>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ backgroundColor: customPalettes.gray[50] }}
        scrollEventThrottle={0}
        decelerationRate="fast"
      >
        <HeaderContainer>
          <AppBar />
          <DueDateContainer />
        </HeaderContainer>
        {currentNavigation !== 'project' && <Calendar />}
        {currentNavigation === 'task' && <TaskSection />}
        {currentNavigation === 'schedule' && <ScheduleSection />}
        {currentNavigation === 'project' && <ProjectSection />}
      </ScrollView>
      <NavigationButton />
    </SafeArea>
  )
}
