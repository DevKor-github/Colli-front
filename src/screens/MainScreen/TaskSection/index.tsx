import React from 'react'
import { ScrollView } from 'react-native'
import { View } from 'tamagui'

import { SectionIndicator } from '@/components/SectionIndicator'
import { Task } from '@/components/Task'
import { customPalettes } from '@/theme/customPalettes'

export const TaskSection = () => {
  const TEST_PROJECTS = ['뎁코', '현대', '연구실', '외주']
  const SECTION_INDICATION = '콜리가 한번에 정리해 드릴게요.'
  const TEST_TASKS = [
    '주요 페이지 1장 이상 만들기',
    '주요 페이지 2장 이상 만들기',
    '주요 페이지 3장 이상 만들기',
    '주요 페이지 4장 이상 만들기',
    '주요 페이지 5장 이상 만들기',
    '주요 페이지 6장 이상 만들기'
  ]
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
      {TEST_TASKS.map((task, i) => (
        <Task key={i} checked={true} taskContent={task} />
      ))}
    </View>
  )
}

TaskSection
