import { ScrollView } from 'react-native'

import Notice from '@/screens/LandingScreen/Notice'

const NoticeContainer = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{ maxHeight: 70 }}
      contentContainerStyle={{
        display: 'flex',
        flexDirection: 'row',
        paddingHorizontal: 16,
        paddingVertical: 10,
        gap: 8
      }}
    >
      <Notice notice="공지가 적히는 배너입니다. 공지가 적히는 배너입니다." />
      <Notice notice="공지가 적히는 배너입니다. 공지가 적히는 배너입니다." />
    </ScrollView>
  )
}

export default NoticeContainer
