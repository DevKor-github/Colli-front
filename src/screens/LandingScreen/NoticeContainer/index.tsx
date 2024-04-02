import { ScrollView } from 'react-native'
import { useSafeAreaFrame } from 'react-native-safe-area-context'

import { useGetNotice } from '@/api/hooks/notice'
import { noticeResponse } from '@/api/types/notice'
import Notice from '@/components/Notice/Notice'

const NoticeContainer = () => {
  const screenWidth = useSafeAreaFrame().width
  const res = useGetNotice().data
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
      {res?.dataList.map(notice => (
        <Notice key={notice.noticeId} notice={notice.content} />
      ))}
    </ScrollView>
  )
}

export default NoticeContainer
