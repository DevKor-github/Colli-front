import { ScrollView } from 'react-native'
import { YStack } from 'tamagui'

import { Button } from '@/components/Buttons'
import { NavigationButton } from '@/components/Buttons/NavigationButton'
import { SafeArea } from '@/components/SafeArea'

const BACKGROUND_COLOR = '#fff'
export const Home = () => {
  return (
    <SafeArea>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ backgroundColor: BACKGROUND_COLOR, paddingHorizontal: 16 }}
        scrollEventThrottle={0}
        decelerationRate="fast"
      >
        <YStack space>
          <Button color="primary" size="big" handlePress={() => {}}>
            버튼
          </Button>
          <Button color="secondary" size="big" handlePress={() => {}}>
            버튼
          </Button>
          <Button color="primary" size="mid" handlePress={() => {}}>
            버튼
          </Button>
          <Button color="primary" size="sml" handlePress={() => {}}>
            버튼
          </Button>
          <Button color="gray" size="sml" handlePress={() => {}}>
            버튼
          </Button>
          <NavigationButton />
        </YStack>
      </ScrollView>
    </SafeArea>
  )
}
