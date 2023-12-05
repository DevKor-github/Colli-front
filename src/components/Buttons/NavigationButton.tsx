import { useState } from 'react'
import { Pressable } from 'react-native'
import Animated, { useSharedValue, withDelay, withTiming } from 'react-native-reanimated'
import { useRecoilState } from 'recoil'
import { styled } from 'tamagui'

import { currentNavigationState } from '@/recoil/atom'
import Colli from '@assets/Svgs/Colli.svg'
import { Typography } from '@components/Typography'
import { customPalettes } from '@theme/customPalettes'

const SELECTED_COLOR = '#fff'
const SELECTED_TEXT_COLOR = customPalettes.blue[400]
const UNSELECTED_TEXT_COLOR = customPalettes.blue[200]
// 4, 118, 233
const AnimatedPressable = Animated.createAnimatedComponent(Pressable)
const NavigationTab = styled(Animated.View, {
  position: 'absolute',
  bottom: 31,
  width: 56,
  height: 56,
  borderRadius: 28,
  justifyContent: 'center',
  alignItems: 'center',
  alignSelf: 'center',
  // paddingHorizontal: 8,
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
  const selectionOffset = useSharedValue(2)
  const [selected, setSelected] = useRecoilState(currentNavigationState)
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
  const handleSelectionPress = (selection: 'task' | 'schedule' | 'project') => {
    if (selection === 'task') {
      selectionOffset.value = withTiming(4, { duration: 500 })
    } else if (selection === 'schedule') {
      selectionOffset.value = withTiming(118, { duration: 500 })
    } else if (selection === 'project') {
      selectionOffset.value = withTiming(233, { duration: 500 })
    }
    setSelected(selection)
    setTimeout(() => handlePress(), 1000)
  }
  return (
    <NavigationTab style={{ width, height, borderRadius }} onPress={handlePress}>
      <Animated.View style={{ transform: [{ rotate }] }}>{!isOpen && <Colli />}</Animated.View>
      {isOpen && (
        <Animated.View style={{ display: 'flex', flexDirection: 'row', gap: 8 }}>
          <Animated.View
            style={{
              flex: 1,
              width: 104,
              height: 47,
              backgroundColor: SELECTED_COLOR,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 50,
              opacity,
              position: 'absolute',
              left: selectionOffset
            }}
          />
          <AnimatedPressable
            style={{
              flex: 1,
              height: 47,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 50,
              opacity
            }}
            onPress={() => handleSelectionPress('task')}
          >
            <Typography
              fontSize={16}
              type="B"
              textColor={selected === 'task' ? SELECTED_TEXT_COLOR : UNSELECTED_TEXT_COLOR}
            >
              태스크
            </Typography>
          </AnimatedPressable>
          <AnimatedPressable
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 50,
              opacity
            }}
            onPress={() => handleSelectionPress('schedule')}
          >
            <Typography
              fontSize={16}
              type="M"
              textColor={selected === 'schedule' ? SELECTED_TEXT_COLOR : UNSELECTED_TEXT_COLOR}
            >
              일정
            </Typography>
          </AnimatedPressable>
          <AnimatedPressable
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 50,
              opacity
            }}
            onPress={() => handleSelectionPress('project')}
          >
            <Typography
              fontSize={16}
              type="M"
              textColor={selected === 'project' ? SELECTED_TEXT_COLOR : UNSELECTED_TEXT_COLOR}
            >
              프로젝트
            </Typography>
          </AnimatedPressable>
        </Animated.View>
      )}
    </NavigationTab>
  )
}
