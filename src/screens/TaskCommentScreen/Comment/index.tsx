import { View, styled, withStaticProperties } from 'tamagui'

export const CommentSection = styled(View, {
  display: 'flex',
  alignItems: 'flex-start',
  alignSelf: 'stretch'
})

const CommentWrapper = styled(View, {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  gap: 12,
  paddingVertical: 12,
  paddingHorizontal: 16
})

const CommentInfo = styled(View, {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-end',
  gap: 8
})

const Content = styled(View, {
  display: 'flex',
  width: 304,
  alignItems: 'flex-start',
  gap: 8
})

export const CustomComment = withStaticProperties(CommentSection, {
  CommentWrapper,
  Content,
  Info: CommentInfo
})
