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

import { customPalettes } from '@/theme/customPalettes'
import C from '@assets/Svgs/c.svg'
import I from '@assets/Svgs/i.svg'
import L from '@assets/Svgs/l.svg'
import O from '@assets/Svgs/o.svg'

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
const paths = [
  'M24.3196 4.07929C24.83 4.58971 24.8301 5.41727 24.3197 5.92772L20.6229 9.62486C20.1124 10.1353 19.2848 10.1354 18.7744 9.62491L16.9257 7.77624C16.4152 7.2658 16.4152 6.4382 16.9256 5.92775L20.6226 2.23077C21.1331 1.72033 21.9607 1.72033 22.4711 2.23077L24.3196 4.07929Z',
  'M14.3775 -0.000244141C15.0994 -0.000244141 15.6846 0.584951 15.6846 1.30683V11.7634V14.3775V22.2199C15.6846 22.9418 15.0994 23.527 14.3775 23.527H11.7634C11.0415 23.527 10.4563 22.9418 10.4563 22.2199V15.6846H1.30682C0.584951 15.6846 -0.000244141 15.0994 -0.000244141 14.3775V11.7634C-0.000244141 11.0415 0.58495 10.4563 1.30682 10.4563H6.75928L10.4563 14.1533L11.4734 15.1704C11.9838 15.6808 12.8114 15.6808 13.3218 15.1704L15.1703 13.3219C15.6808 12.8115 15.6808 11.9839 15.1703 11.4734L14.1532 10.4563H10.4563H6.75928L2.23099 5.92801C1.72054 5.41757 1.72054 4.58998 2.23099 4.07954L4.07946 2.23106C4.5899 1.72062 5.41749 1.72062 5.92794 2.23106L10.4563 6.75944V1.30683C10.4563 0.584951 11.0415 -0.000244141 11.7634 -0.000244141H14.3775Z',
  'M13.3218 15.1704L15.1703 13.3219C15.6808 12.8115 15.6808 11.9839 15.1703 11.4734L14.1532 10.4563H10.4563V14.1533L11.4734 15.1704C11.9838 15.6808 12.8114 15.6808 13.3218 15.1704Z',
  'M6.75928 10.4563L10.4563 14.1533V10.4563H6.75928Z'
]
const AnimatedSvg = Animated.createAnimatedComponent(Svg)
export const SplashScreen = () => {
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
          {paths.map((d, key) => (
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
