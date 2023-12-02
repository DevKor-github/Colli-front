import { useEffect } from 'react'
import Animated, {
  Easing,
  ReduceMotion,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSequence,
  withSpring,
  withTiming
} from 'react-native-reanimated'
import { Path, Svg } from 'react-native-svg'
import { View, styled } from 'tamagui'
import { XStack } from 'tamagui'

import { COLLI_PATHS } from '@/constants/svgPaths'
import { customPalettes } from '@/theme/customPalettes'
import C from '@assets/Svgs/c.svg'
import I from '@assets/Svgs/i.svg'
import L from '@assets/Svgs/l.svg'
import O from '@assets/Svgs/o.svg'
import { useNavigation } from '@react-navigation/native'

const SplashScreenContainer = styled(View, {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
  backgroundColor: customPalettes.blue[500]
})
const initialOffset = 0
const colliInitialOffset = 300
const V_WIDTH = 25
const V_HEIGHT = 24

const AnimatedSvg = Animated.createAnimatedComponent(Svg)
export const SplashScreen = () => {
  const navigation = useNavigation()
  const offset = useSharedValue(initialOffset)
  const colliOffset = useSharedValue(colliInitialOffset)
  const size = useSharedValue(26)
  const colliSize = useSharedValue(25)
  const borderRadius = useSharedValue(13)
  const backgroundOpacity = useSharedValue(1)
  const rotate = useSharedValue('0deg')
  const cOffset = useSharedValue(200)
  const oOffset = useSharedValue(200)
  const lOneOffset = useSharedValue(200)
  const lTwoOffset = useSharedValue(200)
  const iOffset = useSharedValue(200)
  const cOpacity = useSharedValue(0)
  const oOpacity = useSharedValue(0)
  const lOneOpacity = useSharedValue(0)
  const lTwoOpacity = useSharedValue(0)
  const iOpacity = useSharedValue(0)
  const colliAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: colliOffset.value }, { rotate: rotate.value }],
    opacity: 1 - backgroundOpacity.value,
    colliSize: colliSize.value
  }))

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateY: offset.value }]
  }))
  const animatedOpacity = useAnimatedStyle(() => ({
    opacity: backgroundOpacity.value
  }))
  useEffect(() => {
    offset.value = withSpring(300, {
      duration: 5000,
      dampingRatio: 0.5,
      stiffness: 200,
      overshootClamping: false,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 5,
      reduceMotion: ReduceMotion.System
    })
    backgroundOpacity.value = withDelay(
      600,
      withTiming(0, {
        duration: 600,
        easing: Easing.inOut(Easing.quad),
        reduceMotion: ReduceMotion.System
      })
    )

    size.value = withTiming(20, {
      duration: 600,
      easing: Easing.inOut(Easing.quad),
      reduceMotion: ReduceMotion.System
    })

    borderRadius.value = withTiming(10, {
      duration: 600,
      easing: Easing.inOut(Easing.quad),
      reduceMotion: ReduceMotion.System
    })
    colliOffset.value = withDelay(
      700,
      withSpring(0, {
        duration: 5000,
        dampingRatio: 0.5,
        stiffness: 200,
        overshootClamping: false,
        restDisplacementThreshold: 0.01,
        restSpeedThreshold: 5,
        reduceMotion: ReduceMotion.System
      })
    )
    colliSize.value = withDelay(2000, withTiming(76, { duration: 700, easing: Easing.inOut(Easing.quad) }))
    rotate.value = withSequence(
      withDelay(
        700,
        withTiming('-180deg', {
          duration: 700,
          easing: Easing.inOut(Easing.quad),
          reduceMotion: ReduceMotion.System
        })
      ),
      withDelay(
        700,
        withTiming('0deg', {
          duration: 700,
          easing: Easing.inOut(Easing.quad),
          reduceMotion: ReduceMotion.System
        })
      )
    )
    cOffset.value = withDelay(3000, withTiming(0, { duration: 100 }))
    oOffset.value = withDelay(3200, withTiming(0, { duration: 100 }))
    lOneOffset.value = withDelay(3400, withTiming(0, { duration: 100 }))
    lTwoOffset.value = withDelay(3600, withTiming(0, { duration: 100 }))
    iOffset.value = withDelay(3800, withTiming(0, { duration: 100 }))
    cOpacity.value = withDelay(3000, withTiming(1, { duration: 200 }))
    oOpacity.value = withDelay(3200, withTiming(1, { duration: 200 }))
    lOneOpacity.value = withDelay(3400, withTiming(1, { duration: 200 }))
    lTwoOpacity.value = withDelay(3600, withTiming(1, { duration: 200 }))
    iOpacity.value = withDelay(3800, withTiming(1, { duration: 200 }))

    setTimeout(() => navigation.navigate('Main'), 5000)
  }, [])
  return (
    <SplashScreenContainer>
      <Animated.View
        style={[
          { width: size, height: size, borderRadius, backgroundColor: customPalettes.snow[50] },
          animatedOpacity,
          animatedStyles
        ]}
      />
      <Animated.View style={colliAnimatedStyle}>
        <AnimatedSvg width={colliSize} height={colliSize} viewBox={[0, 0, V_WIDTH, V_HEIGHT].join(' ')}>
          {COLLI_PATHS.map((d, key) => (
            <Path key={key} d={d} fill="white" />
          ))}
        </AnimatedSvg>
      </Animated.View>
      <XStack mt={7} display="flex" justifyContent="center" alignItems="flex-end" gap={1}>
        <Animated.View style={{ opacity: cOpacity, transform: [{ translateY: cOffset }] }}>
          <C />
        </Animated.View>
        <Animated.View style={{ opacity: oOpacity, marginRight: 2, transform: [{ translateY: oOffset }] }}>
          <O />
        </Animated.View>
        <Animated.View style={{ opacity: lOneOpacity, marginRight: 2, transform: [{ translateY: lOneOffset }] }}>
          <L />
        </Animated.View>
        <Animated.View style={{ opacity: lTwoOpacity, marginRight: 2, transform: [{ translateY: lTwoOffset }] }}>
          <L />
        </Animated.View>
        <Animated.View style={{ opacity: iOpacity, transform: [{ translateY: iOffset }] }}>
          <I />
        </Animated.View>
      </XStack>
    </SplashScreenContainer>
  )
}
