import { ScrollView } from 'react-native'
import { View } from 'tamagui'

import { AppBar } from '@/components/AppBar'
import { SafeArea } from '@/components/SafeArea'
import { Typography } from '@/components/Typography'
import TaskSection from '@/screens/TaskScreen/Task'
import SpecificTask from '@/screens/TaskScreen/Task/SpecificTask'
import TaskProgress from '@/screens/TaskScreen/Task/TaskProgress'
import { customPalettes } from '@/theme/customPalettes'
import GoBack from '@assets/Svgs/GoBack.svg'
import { useNavigation } from '@react-navigation/native'

const TaskScreen = () => {
  const navigation = useNavigation()
  const handleNavigation = () => {
    navigation.goBack()
  }
  return (
    <SafeArea>
      <AppBar>
        <AppBar.Section type="left" onPress={handleNavigation}>
          <GoBack />
        </AppBar.Section>
        <AppBar.Center>
          <Typography type="B" fontSize={16} textColor={customPalettes.gray[900]}>
            태스크 상세
          </Typography>
        </AppBar.Center>
        <AppBar.Section type="right" />
      </AppBar>
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
        <TaskProgress />
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
