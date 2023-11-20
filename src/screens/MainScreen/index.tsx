import { ScrollView } from 'react-native'
import { YStack } from 'tamagui'

import { Tag } from '@/components/Tags'
// import { NavigationButton } from '@/components/Buttons/NavigationButton'
import { Calendar } from '@components/Calendar'
import { SafeArea } from '@components/SafeArea'

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
          <Tag type="day">D-1</Tag>
        </YStack>
      </ScrollView>
    </SafeArea>
  )
}
