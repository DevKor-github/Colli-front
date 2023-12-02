import React from 'react'
import { View } from 'tamagui'

import { DueDate } from '@/screens/MainScreen/DuDate'

export const DueDateContainer = () => {
  const TEST_CONTENT = '모델링 80% 끝내기'
  const TEST_DUEDATE = '2'
  return (
    <View display="flex" paddingHorizontal={20} paddingVertical={16}>
      <DueDate content={TEST_CONTENT} dueDate={TEST_DUEDATE} />
    </View>
  )
}

DueDateContainer
