import React from 'react'
import { ScrollView } from 'react-native'
import { View } from 'tamagui'

import { SectionIndicator } from '@/components/SectionIndicator'
import { customPalettes } from '@/theme/customPalettes'

export const TaskSection = () => {
  const TEST_PROJECTS = ['뎁코', '현대', '연구실', '외주']
  const SECTION_INDICATION = '콜리가 한번에 정리해 드릴게요.'
  return (
    <View
      mt={16}
      display="flex"
      justifyContent="flex-end"
      alignItems="flex-start"
      backgroundColor={customPalettes.snow[50]}
    >
      <View paddingHorizontal={20} paddingVertical={16}>
        <SectionIndicator text={SECTION_INDICATION} />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        horizontal={true}
        style={{ paddingLeft: 20 }}
        //   style={{ backgroundColor: customPalettes.gray[50] }}
        //   scrollEventThrottle={0}
        //   decelerationRate="fast">
      ></ScrollView>
    </View>
  )
}

TaskSection
