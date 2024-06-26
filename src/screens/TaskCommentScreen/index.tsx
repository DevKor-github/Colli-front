import React from 'react'
import { Modal, Pressable, ScrollView } from 'react-native'
import { Image, Separator, View } from 'tamagui'

import AppBarWithClose from '@/components/AppBar/AppBarWithClose'
import ModalContainer from '@/components/ModalContainer'
import { SafeArea } from '@/components/SafeArea'
import { Typography } from '@/components/Typography'
import { Paragraph } from '@/components/Typography/Paragraph'
import { COMMENT } from '@/mocks/data/comment'
import { CommentSection } from '@/screens/TaskCommentScreen/Comment'
import Comment from '@/screens/TaskCommentScreen/Comment/CustomComment'
import CommentInput from '@/screens/TaskCommentScreen/CommentInput'
import { customPalettes } from '@/theme/customPalettes'
import type { CommentProps } from '@/types/comment'
import { useGoBack } from '@/util/useGoBack'

//? Comment 이외에 값을 prop으로 할 것인지 아니면, api get을 한 번 더 할 것인지, 아니면 jotai를 사용할 것인지
const TaskCommentScreen = () => {
  const [, handleNavigation] = useGoBack()
  const [comment, setComment] = React.useState<CommentProps[]>(COMMENT) // COMMENT
  const [currentComment, setCurrentComment] = React.useState(0)
  const [isModalVisible, setIsModalVisible] = React.useState(false)
  const deleteComment = (index: number) => {
    setComment(prev => prev.filter((_, idx) => idx !== index))
    setIsModalVisible(false)
  }
  const handleModalVisible = (id: number) => {
    setCurrentComment(id)
    setIsModalVisible(true)
  }
  const ImageArray = Array.from({ length: 3 })
  return (
    <SafeArea>
      <AppBarWithClose handleNavigation={handleNavigation} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ display: 'flex', alignItems: 'flex-start', gap: 15 }}
      >
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
          {ImageArray.map((_, index) => (
            <Image
              key={index}
              source={{ width: 169, height: 169, uri: require('@assets/Images/DummyImage.jpg') }}
              br={3.5}
              minWidth={165}
              flexGrow={1}
              flexShrink={0}
              flexBasis={0}
            />
          ))}
          {ImageArray.length % 2 && <View br={3.5} minWidth={165} flexGrow={1} flexShrink={0} flexBasis={0} />}
        </View>
        <View alignSelf="stretch">
          <Separator bw={2} borderColor={customPalettes.gray[50]} alignSelf="stretch" />
          <View display="flex" p={16}>
            <Typography type="R" fontSize={14} textColor={customPalettes.gray[400]}>
              {comment.length}개의 댓글
            </Typography>
          </View>
          <Separator bw={2} borderColor={customPalettes.gray[50]} alignSelf="stretch" />
        </View>
        <CommentSection>
          {comment.map((item, index) => (
            <Pressable key={index} delayLongPress={1500} onLongPress={() => handleModalVisible(index)}>
              <Comment
                avatar={item.avatar}
                name={item.name}
                date={item.date.toLocaleString('ko-KR', {
                  year: '2-digit', // 년도를 숫자로
                  month: 'long', // 월을 긴 형식으로 (예: February)
                  day: 'numeric' // 날짜를 숫자로
                })}
              >
                {item.text}
              </Comment>
            </Pressable>
          ))}
        </CommentSection>
        <Modal animationType="fade" transparent={true} visible={isModalVisible}>
          <View
            display="flex"
            flexDirection="column"
            flex={1}
            justifyContent="center"
            alignItems="center"
            backgroundColor={customPalettes.opacityD[400]}
          >
            <ModalContainer
              modalText="댓글을 삭제하시겠습니까?"
              handleAction={() => deleteComment(currentComment)}
              actionText="삭제"
              subActionText="취소"
              handleSubAction={() => setIsModalVisible(false)}
            />
          </View>
        </Modal>
      </ScrollView>
      <CommentInput />
    </SafeArea>
  )
}

export default TaskCommentScreen
