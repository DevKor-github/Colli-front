import { useEffect, useState } from 'react'
import { Pressable } from 'react-native'
import { Input, View } from 'tamagui'

import { TEAM_MEMBER } from '@/mocks/data/teamMember'
import { customPalettes } from '@/theme/customPalettes'
import LeftArrow from '@assets/Svgs/LeftArrow.svg'
import { useNavigation } from '@react-navigation/native'

export const SearchHeader = () => {
  const navigation = useNavigation()
  const [searchKey, setSearchKey] = useState('')
  const filteredKey = TEAM_MEMBER.filter(member => member.name.includes(searchKey))
  const [, setMember] = useState('')
  // useEffect(() => setMember(filteredKey), [searchKey])
  return (
    <View
      display="flex"
      flexDirection="row"
      justifyContent="center"
      paddingRight={20}
      backgroundColor={customPalettes.snow[50]}
      borderBottomWidth={1}
      borderBlockColor={customPalettes.gray[100]}
    >
      <Pressable
        style={{
          display: 'flex',
          width: 44,
          height: 44,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 10,
          gap: 10
        }}
        onPress={() => navigation.goBack()}
      >
        <LeftArrow />
      </Pressable>
      <View display="flex" flexDirection="column" justifyContent="center" alignSelf="stretch" flexGrow={1}>
        <Input
          placeholder="팀원을 검색해보세요"
          placeholderTextColor={customPalettes.gray[300]}
          backgroundColor={customPalettes.snow[50]}
          borderWidth={0}
          value={searchKey}
          onChangeText={setSearchKey}
          // onSubmitEditing={() => setMember(filteredKey)}
        />
      </View>
    </View>
  )
}
