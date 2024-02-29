import React from 'react'
import { Circle, View } from 'tamagui'

import { BoardContainer } from '@/components/Board/BoardContainer'
import BoardHeader from '@/components/Board/BoardHeader'
import { Typography } from '@/components/Typography'
import { customPalettes } from '@/theme/customPalettes'

interface PushNotiBoardProps {
  noticeNumber: number
}
export const PushNotiBoard = ({ noticeNumber }: PushNotiBoardProps) => {
  return (
    <BoardContainer size="short">
      <View
        display="flex"
        alignItems="flex-start"
        gap={4}
        flexGrow={1}
        flexShrink={0}
        flexBasis={0}
        alignSelf="stretch"
      >
        <BoardHeader headerContent="콕 찌르기가 왔어요!" />
        <Typography type="M" fontSize={17} textColor={customPalettes.gray[900]}>
          잘하고 있어요!
        </Typography>
      </View>
      <View display="flex" flexDirection="row" justifyContent="space-between" alignItems="flex-end" alignSelf="stretch">
        <View
          display="inline-flex"
          paddingVertical={4}
          paddingHorizontal={8}
          alignItems="center"
          gap={10}
          borderRadius={8}
          backgroundColor={customPalettes.wf[50]}
        >
          <Typography type="R" fontSize={12} textColor={customPalettes.wf[100]}>
            {noticeNumber}개
          </Typography>
        </View>
        <Circle size={23} backgroundColor={customPalettes.wf[100]} opacity={0.7} />
      </View>
    </BoardContainer>
  )
}
