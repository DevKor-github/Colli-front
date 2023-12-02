import React from 'react'
import { View } from 'tamagui'

import DayTag from '@/components/Tags/DayTag'
import { Typography } from '@/components/Typography'
import { customPalettes } from '@/theme/customPalettes'

interface DueDateProps {
  content: string
  dueDate: string
}
export const DueDate = ({ content, dueDate }: DueDateProps) => {
  return (
    <View
      display="flex"
      gap={8}
      paddingHorizontal={8}
      flexDirection="row"
      paddingVertical={5}
      alignItems="center"
      alignSelf="stretch"
      height={44}
      backgroundColor={customPalettes.snow[50]}
      borderRadius={100}
      borderColor={customPalettes.blue[100]}
      borderWidth={1}
    >
      <DayTag>D-{dueDate}</DayTag>
      <View flexDirection="row">
        <Typography type="B" fontSize={14} textColor={customPalettes.gray[700]}>
          {content}
        </Typography>
        <Typography type="B" fontSize={14} textColor={customPalettes.gray[300]}>
          가 {dueDate}일 남았어요!
        </Typography>
      </View>
    </View>
  )
}
