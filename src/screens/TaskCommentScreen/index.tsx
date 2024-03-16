import React from 'react'
import { Image, Text, View } from 'tamagui'

import AppBarWithClose from '@/components/AppBar/AppBarWithClose'
import { SafeArea } from '@/components/SafeArea'
import { Typography } from '@/components/Typography'
import { Paragraph } from '@/components/Typography/Paragraph'
import { customPalettes } from '@/theme/customPalettes'
import { useGoBack } from '@/util/useGoBack'

//? Comment 이외에 값을 prop으로 할 것인지 아니면, api get을 한 번 더 할 것인지, 아니면 jotai를 사용할 것인지
const TaskCommentScreen = () => {
  const [, handleNavigation] = useGoBack()
  return (
    <SafeArea>
      <AppBarWithClose handleNavigation={handleNavigation} />
      <View display="flex" ai="flex-start" gap={15}>
        <View display="flex" px={16} py={20} ai="flex-start" gap={24} alignSelf="stretch">
          <Typography type="B" fontSize={17} textColor={customPalettes.gray[950]}>
            하위 태스크 이름이 들어가는 공간입니다. 보여지는 텍스트의 라인 수 제한은 없습니다.
          </Typography>
          <Paragraph type="R" fontSize={16} textColor={customPalettes.gray[950]}>
            {`여행은 새로운 경험과 추억을 선사하지만, 올바른 준비가 필수입니다. 이번 블로그 포스트에서는 여행자가 가져가야 할 10가지 필수 아이템을 상세히 소개합니다. 

첫째, 편안한 여행을 위한 양질의 여행 가방. 두 번째는 다양한 환경에 대비할 수 있는 다용도 의류. 세 번째 아이템은 여행 중 긴급 상황에 대비한 응급 키트입니다. 네 번째는 휴대용 충전기와 보조 배터리로.`}
          </Paragraph>
        </View>
        <View
          display="flex"
          flexDirection="row"
          flexWrap="wrap"
          px={16}
          rowGap={15}
          columnGap={10}
          ai="flex-start"
          alignSelf="stretch"
          jc="center"
        >
          {Array.from({ length: 4 }).map((_, index) => (
            <Image
              key={index}
              source={{ width: 169, height: 169, uri: require('@assets/Images/DummyImage.jpg') }}
              br={3.5}
              minWidth={169}
              flexGrow={1}
              flexShrink={0}
              flexBasis={0}
            />
          ))}
        </View>
      </View>
    </SafeArea>
  )
}

export default TaskCommentScreen
