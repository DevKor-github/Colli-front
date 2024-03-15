import { ScrollView } from 'react-native'
import { useSafeAreaFrame } from 'react-native-safe-area-context'

import Notice from '@/components/Notice/Notice'

const NoticeContainer = () => {
  const screenWidth = useSafeAreaFrame().width
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{ maxHeight: 70 }}
      contentContainerStyle={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: '10%',
        gap: 8
      }}
      snapToInterval={screenWidth * 0.8 + 12}
      decelerationRate="fast"
    >
      <Notice notice="공지가 적히는 배너입니다. 공지가 적히는 배너입니다." />
      <Notice notice="공지가 적히는 배너입니다. 공지가 적히는 배너입니다." />
      <Notice notice="공지가 적히는 배너입니다. 공지가 적히는 배너입니다." />
    </ScrollView>
  )
}

export default NoticeContainer
