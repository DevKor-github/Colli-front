import { ScrollView } from 'react-native'
import { View } from 'tamagui'

import AppBarWithNav from '@/components/AppBar/AppBarWithNav'
import { SafeArea } from '@/components/SafeArea'
import TaskSection from '@/screens/TaskScreen/Task'
import ProgressSection from '@/screens/TaskScreen/Task/ProgressSection'
import SpecificTask from '@/screens/TaskScreen/Task/SpecificTask'
import { customPalettes } from '@/theme/customPalettes'
import { useNavigation } from '@react-navigation/native'

const TaskScreen = () => {
  const navigation = useNavigation()
  const handleNavigation = () => {
    navigation.goBack()
  }
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
        <View
          display="flex"
          height={4}
          paddingHorizontal={10}
          alignItems="flex-start"
          gap={10}
          backgroundColor={customPalettes.gray[50]}
        />
        <ProgressSection />
        <View
          display="flex"
          height={4}
          paddingHorizontal={10}
          alignItems="flex-start"
          gap={10}
          backgroundColor={customPalettes.gray[50]}
        />
        <SpecificTask />
      </ScrollView>
    </SafeArea>
  )
}

export default TaskScreen
