import { ScrollView } from 'react-native'
import { Text } from 'tamagui'

import { SafeArea } from '@/components/SafeArea'
import { customPalettes } from '@/theme/customPalettes'

export const Home = () => {
  return (
    <SafeArea>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ backgroundColor: customPalettes.g[0], paddingHorizontal: 16 }}
        scrollEventThrottle={0}
        decelerationRate="fast"
        snapToOffsets={[300]}
      >
        <Text>테스트</Text>
      </ScrollView>
    </SafeArea>
  )
}
