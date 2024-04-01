import { ScrollView } from 'react-native'
import { Separator, View } from 'tamagui'

import AppBarWithNav from '@/components/AppBar/AppBarWithNav'
import { SafeArea } from '@/components/SafeArea'
import TaskSection from '@/screens/TaskScreen/Task'
import ProgressSection from '@/screens/TaskScreen/Task/ProgressSection'
import SpecificTask from '@/screens/TaskScreen/Task/SpecificTask'
import { customPalettes } from '@/theme/customPalettes'
import { useGoBack } from '@/util/useGoBack'

const TaskScreen = () => {
  const [, handleNavigation] = useGoBack()
  return (
    <SafeArea>
      <AppBarWithNav handleNavigation={handleNavigation} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginTop: 16 }}
        scrollEventThrottle={0}
        decelerationRate="fast"
      >
        <TaskSection />
        <Separator bw={2} borderColor={customPalettes.gray[50]} />
        <ProgressSection />
        <Separator bw={2} borderColor={customPalettes.gray[50]} />
        <SpecificTask />
      </ScrollView>
    </SafeArea>
  )
}

export default TaskScreen
