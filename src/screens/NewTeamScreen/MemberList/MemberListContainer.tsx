import { ScrollView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { View } from 'tamagui'

import { TEAM_MEMBER } from '@/mocks/data/teamMember'
import MemberList from '@/screens/NewTeamScreen/MemberList/MemberList'
import { customPalettes } from '@/theme/customPalettes'

const MemberListContainer = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{ maxHeight: 88 }}
      contentContainerStyle={{
        display: 'flex',
        flexDirection: 'row',
        paddingHorizontal: 16,
        paddingVertical: 12,
        gap: 8,
        alignSelf: 'stretch',
        backgroundColor: customPalettes.gray[50],
      }}
    >
      <View width={64} height={64} borderRadius={100} backgroundColor={'#979797'} />
      {TEAM_MEMBER.map(member => (
        <MemberList
          id={member.id}
          key={member.id}
          name={member.name}
          department={member.department}
          email={member.email}
          division={member.division}
          imgSrc={member.imgSrc}
        />
      ))}
    </ScrollView>
  )
}

export default MemberListContainer
