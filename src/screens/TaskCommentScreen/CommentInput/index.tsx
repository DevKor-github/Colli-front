import { useEffect, useState } from 'react'
import {
  KeyboardAvoidingView,
  type NativeSyntheticEvent,
  Platform,
  Pressable,
  TextInput,
  type TextInputChangeEventData
} from 'react-native'
import { MentionInput } from 'react-native-controlled-mentions'
import Animated, { Easing, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import { Circle, View } from 'tamagui'

import AddIcon from '@/assets/Svgs/AddIcon.svg'
import SendIcon from '@/assets/Svgs/SendIcon.svg'
import { Typography } from '@/components/Typography'
import Mention, { type MentionItem } from '@/screens/TaskCommentScreen/CommentInput/Mention'
import { renderSuggestions } from '@/screens/TaskCommentScreen/CommentInput/Test'
import { customPalettes } from '@/theme/customPalettes'

const dataConfig: MentionItem[] = [
  { id: '차승민', name: '차승민' },
  { id: '유승은', name: '유승은' }
]

type commentType = 'plainText' | 'mention'
interface mentionParts {
  type: commentType
  value: string
}
const CommentInput = () => {
  const disabled = true
  const [comment, setComment] = useState('')
  const [showMention, setShowMention] = useState(false)
  const [parts, setParts] = useState<mentionParts[]>([])
  const [keyWord, setKeyWord] = useState('')
  const animatedValue = useSharedValue(200)

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: animatedValue.value }]
  }))

  const handleAnimation = () => {
    animatedValue.value = withTiming(animatedValue.value > 0 || comment !== '' ? 0 : 200, {
      duration: 350,
      easing: Easing.inOut(Easing.quad)
    })
  }

  const handleComment = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    const mentionRegex = /(^|\s)@[^@\s]*$/
    if (e.nativeEvent.text.match(mentionRegex)) {
      const words = e.nativeEvent.text.trim().split(/\s+/)
      const mention = words[words.length - 1]
      setKeyWord(mention.substring(1))
      setShowMention(true)
    } else {
      setShowMention(false)
    }
    setComment(e.nativeEvent.text)
  }
  const handleMention = (mention: string) => {
    setComment(prev => prev.replace(/(^|\s)@[^@\s]*$/, mention))

    setShowMention(false)
  }

  const generateComment = (comment: string) => {
    const words = comment.slice().split(' ')
    const updatedWordObjects: mentionParts[] = []
    let mentionIndex = 0
    let currentPlainText = ''

    words.forEach((word, index) => {
      if (word.startsWith('@')) {
        if (currentPlainText.trim() !== '') {
          // 일반 텍스트 객체 추가
          updatedWordObjects.push({
            type: 'plainText',
            value: currentPlainText.trim()
          })
          currentPlainText = ''
        }
        // 멘션인 경우
        updatedWordObjects.push({
          type: 'mention',
          value: word
        })
        mentionIndex++
      } else {
        // 일반 텍스트인 경우
        currentPlainText += word + ' '
      }
    })

    if (currentPlainText.trim() !== '') {
      // 일반 텍스트 객체 추가
      updatedWordObjects.push({
        type: 'plainText',
        value: currentPlainText.trim()
      })
      currentPlainText = ''
    }
    setParts(updatedWordObjects)
  }

  // useEffect(() => {
  //   generateComment(comment)
  // }, [comment])
  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} keyboardVerticalOffset={-36}>
      {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss}> */}
      <View display="flex" w="100%" backgroundColor={customPalettes.snow[50]} zIndex={10}>
        <View
          display="flex"
          flexDirection="row"
          px={12}
          py={16}
          gap={16}
          ai="center"
          borderTopLeftRadius={16}
          borderTopRightRadius={16}
          bw={1}
          borderColor={customPalettes.gray[100]}
          borderBottomColor={customPalettes.snow[50]}
        >
          <Circle size={36} bg={customPalettes.gray[200]}>
            <AddIcon />
          </Circle>
          {showMention && <Mention keyWord={keyWord} data={dataConfig} handleMention={handleMention} />}
          <TextInput
            value={''}
            onChange={handleComment}
            placeholder="댓글을 입력해주세요."
            placeholderTextColor={customPalettes.gray[500]}
            style={{
              height: '100%',
              flexGrow: 1,
              flexBasis: 0
            }}
            onFocus={handleAnimation}
            onBlur={handleAnimation}
            multiline
          >
            <Typography type="R" fontSize={16} textColor={customPalettes.gray[900]}>
              {comment}
            </Typography>
            {/* {parts.map((part, index) =>
              part.type === 'plainText' ? (
                <Typography type="R" fontSize={16} textColor={customPalettes.gray[900]}>
                  {part.value}
                </Typography>
              ) : (
                <Typography type="R" fontSize={16} textColor={customPalettes.wf[100]}>
                  {part.value}
                </Typography>
              )
            )} */}
          </TextInput>
          {/* <MentionInput
            value={comment}
            onChange={setComment}
            placeholder="댓글을 입력해주세요."
            partTypes={[
              {
                trigger: '@', // Should be a single character like '@' or '#'
                renderSuggestions,
                textStyle: { fontWeight: 'bold', color: 'blue' } // The mention style in the input
              }
            ]}
          /> */}
          <Pressable onPress={() => comment !== '' && console.log('send:', comment)}>
            <Animated.View
              style={[
                {
                  width: 36,
                  height: 36,
                  borderRadius: 18,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: comment === '' ? customPalettes.gray[200] : customPalettes.wf[100]
                },
                animatedStyle
              ]}
            >
              <SendIcon />
            </Animated.View>
          </Pressable>
        </View>
        {disabled && <View display="flex" h={36} />}
      </View>
      {/* </TouchableWithoutFeedback> */}
    </KeyboardAvoidingView>
  )
}

export default CommentInput
