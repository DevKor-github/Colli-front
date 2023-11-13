import { useState } from 'react'
import Animated, { useSharedValue, withDelay, withTiming } from 'react-native-reanimated'
import { Text, styled } from 'tamagui'

import Colli from '@/../assets/Svgs/Colli.svg'
import { Typography } from '@/components/Typography'
import { customPalettes } from '@/theme/customPalettes'

const SELECTED_COLOR = '#fff'
const SELECTED_TEXT_COLOR = customPalettes.blue[400]
const UNSELECTED_COLOR = customPalettes.blue[400]
const UNSELECTED_TEXT_COLOR = customPalettes.blue[200]

const NavigationTab = styled(Animated.View, {
  width: 56,
  height: 56,
  borderRadius: 28,
  justifyContent: 'center',
  alignItems: 'center',
  alignSelf: 'center',
  paddingHorizontal: 8,
  backgroundColor: customPalettes.blue[400]
})

const DEFAULT_WIDTH = 56
const DEFAULT_HEIGHT = 56
const DEFAULT_BORDER_RADIUS = 28

export const NavigationButton = () => {
  const width = useSharedValue(DEFAULT_WIDTH)
  const height = useSharedValue(DEFAULT_HEIGHT)
  const borderRadius = useSharedValue(DEFAULT_BORDER_RADIUS)
  const opacity = useSharedValue(0)
  const rotate = useSharedValue('0deg')
  const [isOpen, setIsOpen] = useState(false)

  const handlePress = () => {
    if (!isOpen) {
      width.value = withDelay(0, withTiming(348, { duration: 200 }))
      height.value = withDelay(0, withTiming(59, { duration: 200 }))
      borderRadius.value = withDelay(0, withTiming(50, { duration: 200 }))
      rotate.value = withDelay(0, withTiming('-180deg', { duration: 200 }))
      opacity.value = withDelay(100, withTiming(1, { duration: 200 }))
      setIsOpen(true)
    } else {
      width.value = withDelay(100, withTiming(DEFAULT_WIDTH, { duration: 200 }))
      height.value = withDelay(100, withTiming(DEFAULT_HEIGHT, { duration: 200 }))
      borderRadius.value = withDelay(100, withTiming(DEFAULT_BORDER_RADIUS, { duration: 200 }))
      rotate.value = withDelay(100, withTiming('0deg', { duration: 200 }))
      opacity.value = withDelay(100, withTiming(0, { duration: 200 }))
      setIsOpen(false)
    }
  }
  return (
    <NavigationTab style={{ width, height, borderRadius }} onPress={handlePress}>
      <Animated.View style={{ transform: [{ rotate }] }}>{!isOpen && <Colli />}</Animated.View>
      {isOpen && (
        <Animated.View style={{ display: 'flex', flexDirection: 'row', gap: 8 }}>
          <Animated.View
            style={{
              flex: 1,
              height: 47,
              backgroundColor: SELECTED_COLOR,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 50,
              opacity
            }}
          >
            <Typography fontSize={16} type="B" textColor={SELECTED_TEXT_COLOR}>
              태스크
            </Typography>
          </Animated.View>
          <Animated.View
            style={{
              flex: 1,
              backgroundColor: UNSELECTED_COLOR,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 50,
              opacity
            }}
          >
            <Text fontFamily="$B" color={UNSELECTED_TEXT_COLOR}>
              일정
            </Text>
          </Animated.View>

          <Animated.View
            style={{
              flex: 1,
              backgroundColor: UNSELECTED_COLOR,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 50,
              opacity
            }}
          >
            <Text fontFamily="$B" color={UNSELECTED_TEXT_COLOR}>
              프로젝트
            </Text>
          </Animated.View>
        </Animated.View>
      )}
    </NavigationTab>
  )
}
