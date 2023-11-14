import { ScrollView } from 'react-native'
import { YStack } from 'tamagui'

// import { NavigationButton } from '@/components/Buttons/NavigationButton'
import { Calendar } from '@/components/Calendar'
import { SafeArea } from '@/components/SafeArea'

const BACKGROUND_COLOR = '#fff'
export const Home = () => {
  return (
    <SafeArea>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ backgroundColor: BACKGROUND_COLOR }}
        scrollEventThrottle={0}
        decelerationRate="fast"
      >
        <YStack space>
          <Calendar />
          {/* <NavigationButton /> */}
        </YStack>
      </ScrollView>
    </SafeArea>
  )
}
