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
          <XStack space={8}>
            <Chip chipVariant="gray" initialStatus={false} onPress={() => {}}>
              전체
            </Chip>
            <Chip chipVariant="team" initialStatus={false} onPress={() => {}}>
              뎁코
            </Chip>
            <Chip chipVariant="team" initialStatus={false} onPress={() => {}}>
              연구실
            </Chip>
            <Chip chipVariant="team" initialStatus={false} onPress={() => {}}>
              어쩔티비저쩔티비
            </Chip>
          </XStack>
          <Project type="default"></Project>
          <Project type="add"></Project>
        </YStack>
      </ScrollView>
    </SafeArea>
  )
}
