import type { GestureResponderEvent } from 'react-native'
import Animated, { SlideInRight, SlideOutRight } from 'react-native-reanimated'
import { View } from 'tamagui'

import { Project } from '@/components/Projects'
import { SectionIndicator } from '@/components/SectionIndicator'
import { useNavigation } from '@react-navigation/native'

export const ProjectSection = () => {
  const navigation = useNavigation()
  const handleNavigate = (e: GestureResponderEvent) => {
    navigation.navigate('Team')
  }
  return (
    <Animated.View
      style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
      entering={SlideInRight}
      exiting={SlideOutRight}
    >
      <View display="flex" justifyContent="center" alignItems="flex-start" paddingHorizontal={20} paddingVertical={8}>
        <SectionIndicator text={'유라님은 총 4개의 팀에 속해있어요.'} />
      </View>
      <View
        display="flex"
        flexDirection="row"
        alignItems="flex-start"
        width="100%"
        gap={8}
        paddingHorizontal={20}
        paddingVertical={4}
        flexWrap="wrap"
        justifyContent="space-between"
      >
        <Project type="default" handlePress={handleNavigate} />
        <Project type="default" />
        <Project type="default" />
        <Project type="default" />
        <Project type="add" />
      </View>
    </Animated.View>
  )
}
