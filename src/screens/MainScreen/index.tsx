import { ScrollView } from 'react-native'
import { YStack } from 'tamagui'

import { Button } from '@/components/Buttons'
import { NavigationButton } from '@/components/Buttons/NavigationButton'
import { Chip } from '@/components/Chips'
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
          <Chip color="gray" size="short">
            텍스트
          </Chip>
          <Chip color="team" size="long">
            텍스트
          </Chip>
        </YStack>
      </ScrollView>
    </SafeArea>
  )
}
