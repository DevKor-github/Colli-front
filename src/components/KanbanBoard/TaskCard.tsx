import React from 'react'
import { Pressable } from 'react-native'
import { Avatar, View } from 'tamagui'

import { Typography } from '@/components/Typography'
import { customPalettes } from '@/theme/customPalettes'
import type { KanBanStatus } from '@/types/kanBanBoard'

export const TaskCard = ({ status }: { status: KanBanStatus }) => {
  return (
    <View
      display="flex"
      flexDirection="column"
      alignItems="center"
      padding={16}
      gap={20}
      flexGrow={1}
      borderRadius={8}
      backgroundColor={customPalettes.snow[50]}
      maxWidth={171}
      //   height={191}
    >
      <View display="flex" flexDirection="row" justifyContent="space-between" alignItems="center" alignSelf="stretch">
        <Pressable
          style={{
            width: 28,
            height: 28,
            borderRadius: 100,
            borderWidth: status === 'todo' ? 1.5 : 2.5,
            borderColor: customPalettes.blue[400],
            opacity: status !== 'done' ? 0.7 : 1,
            borderStyle: status === 'todo' ? 'dashed' : 'solid',
            backgroundColor: status === 'done' ? customPalettes.blue[400] : customPalettes.snow[50]
          }}
        />
        <View
          display="flex"
          paddingHorizontal={8}
          paddingVertical={7}
          alignItems="center"
          justifyContent="center"
          gap={4}
          borderRadius={4}
          backgroundColor={customPalettes.blue[50]}
        >
          <Typography type="M" fontSize={12} textColor={customPalettes.blue[400]}>
            디자인
          </Typography>
        </View>
      </View>
      <View alignSelf="stretch">
        <Typography
          type="M"
          fontSize={16}
          textColor={status === 'done' ? customPalettes.gray[300] : customPalettes.gray[800]}
          textDecorationLine={status === 'done' ? 'line-through' : 'none'}
        >
          각 부서 소개 페이지 추가로 만들기
        </Typography>
      </View>
      <View display="flex" alignItems="center" gap={4} alignSelf="stretch" flexDirection="row">
        <Typography
          type="M"
          fontSize={12}
          textColor={customPalettes.gray[300]}
          textDecorationLine={status === 'done' ? 'line-through' : 'none'}
        >
          7월 31일 금요일까지 · D-2
        </Typography>
      </View>
      <View display="flex" flexDirection="row" alignItems="center" gap={8} alignSelf="stretch">
        <Avatar circular size="$1.5" backgroundColor={customPalettes.blue[400]} />
        <Typography type="M" fontSize={12} textColor={customPalettes.gray[400]}>
          김하람
        </Typography>
      </View>
    </View>
  )
}
