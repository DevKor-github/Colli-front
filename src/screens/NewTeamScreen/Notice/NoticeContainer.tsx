import { ScrollView } from 'react-native'
import { customPalettes } from '@/theme/customPalettes'
import { Notice } from '@/screens/NewTeamScreen/Notice/Notice'

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
        gap: 10,
        alignSelf: 'stretch',
      }}
    >
      <Notice noticeText="공지가 적히는 배너입니다. 공지가 적히는 배너입니다." />
      <Notice noticeText="공지가 적히는 배너입니다. 공지가 적히는 배너입니다." />
    </ScrollView>
  )
}

export default NoticeContainer
