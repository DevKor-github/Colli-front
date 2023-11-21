import { ScrollView } from 'react-native'
import { View, YStack } from 'tamagui'

import { Tag } from '@/components/Tags'
import DayTag from '@/components/Tags/DayTag'
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
          <View display="flex" flexDirection="row" justifyContent="space-around">
            <Tag type="dot" status="on">
              텍스트
            </Tag>
            <Tag type="dot" status="off">
              텍스트
            </Tag>
            <Tag type="text" status="big">
              태그
            </Tag>
            <Tag type="text" status="sml">
              태그
            </Tag>
            <DayTag>D-3</DayTag>
          </View>
        </YStack>
      </ScrollView>
    </SafeArea>
  )
}
