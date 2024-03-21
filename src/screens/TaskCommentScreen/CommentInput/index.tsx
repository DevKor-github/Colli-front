import { useState } from 'react'
import { Keyboard, KeyboardAvoidingView, Platform, TextInput } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import Animated, { Easing, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import { Circle, View } from 'tamagui'

import AddIcon from '@/assets/Svgs/AddIcon.svg'
import SendIcon from '@/assets/Svgs/SendIcon.svg'
import { customPalettes } from '@/theme/customPalettes'

const CommentInput = () => {
  const disabled = true
  const [comment, setComment] = useState('')
  const animatedValue = useSharedValue(200)

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: animatedValue.value }]
  }))

  const handleAnimation = () => {
    animatedValue.value = withTiming(animatedValue.value > 0 ? 0 : 200, {
      duration: 350,
      easing: Easing.inOut(Easing.quad)
    })
  }

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} keyboardVerticalOffset={-36}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View display="flex" w="100%" backgroundColor={customPalettes.snow[50]}>
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
            <TextInput
              value={comment}
              onChange={e => setComment(e.nativeEvent.text)}
              placeholder="댓글을 입력해주세요."
              placeholderTextColor={customPalettes.gray[500]}
              style={{
                height: '100%',
                flexGrow: 1,
                flexBasis: 0
              }}
              onFocus={handleAnimation}
              onBlur={handleAnimation}
            />
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
          </View>
          {disabled && <View display="flex" h={36} />}
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

export default CommentInput
