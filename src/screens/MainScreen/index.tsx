import { ScrollView } from 'react-native'
import { XStack, YStack } from 'tamagui'

import { Button } from '@/components/Buttons'
import { NavigationButton } from '@/components/Buttons/NavigationButton'
import { Chip } from '@/components/Chips'
import { Project } from '@/components/Projects'
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

          <Chip chipVariant="team" status={false} onPress={() => {}}>
            텍스트
          </Chip>
          <Chip chipVariant="team" status={true} onPress={() => {}}>
            텍스트
          </Chip>
          <Chip chipVariant="gray" status={false} onPress={() => {}}>
            텍스트
          </Chip>
          <Chip chipVariant="gray" status={true} onPress={() => {}}>
            텍스트어쩔티비
          </Chip>
          <Project type="default" handlePress={() => {}}></Project>
          <Project type="add" handlePress={() => {}}></Project>
        </YStack>
      </ScrollView>
    </SafeArea>
  )
}
