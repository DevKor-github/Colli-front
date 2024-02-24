import { useEffect } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import Animated, { Easing, useAnimatedStyle, useSharedValue, withDelay, withTiming } from 'react-native-reanimated'
import { Separator, View, XStack, styled } from 'tamagui'

import { Button } from '@/components/Buttons'
import { Typography } from '@/components/Typography'
import { customPalettes } from '@/theme/customPalettes'
import LeftSide from '@assets/Svgs/leftSide.svg'
import RightSide from '@assets/Svgs/rightSide.svg'
import { useNavigation } from '@react-navigation/native'

const LogInScreenContainer = styled(View, {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
  backgroundColor: customPalettes.snow[50]
})

const LEFT_SIDE_OFFSET = 50
const RIGHT_SIDE_OFFSET = 137
const HEADER_OFFSET = -397
const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient)
const LogInScreen = () => {
  const navigation = useNavigation()
  const leftSideOffset = useSharedValue(LEFT_SIDE_OFFSET)
  const rightSideOffset = useSharedValue(RIGHT_SIDE_OFFSET)
  const headerOffset = useSharedValue(HEADER_OFFSET)
  const bottomOpacity = useSharedValue(0)
  const textOpacity = useSharedValue(0)
  const leftSideAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: leftSideOffset.value }]
  }))
  const rightSideAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: rightSideOffset.value }]
  }))
  const headerAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: headerOffset.value }]
  }))

  useEffect(() => {
    leftSideOffset.value = withTiming(LEFT_SIDE_OFFSET + 246, { duration: 1500 })
    rightSideOffset.value = withTiming(RIGHT_SIDE_OFFSET - 446, { duration: 1500 })
    headerOffset.value = withDelay(
      1000,
      withTiming(HEADER_OFFSET + 397, { duration: 2000, easing: Easing.inOut(Easing.quad) })
    )
    textOpacity.value = withDelay(3000, withTiming(1, { duration: 1000 }))
    bottomOpacity.value = withDelay(1500, withTiming(1, { duration: 1000 }))
  }, [])
  return (
    <LogInScreenContainer>
      <AnimatedLinearGradient
        style={[
          {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: 330,
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 10,
            gap: 5
          },
          headerAnimatedStyle
        ]}
        angle={180}
        colors={[
          'rgba(244, 245, 247, 1)',
          'rgba(244, 245, 247, 0.96)',
          'rgba(244, 245, 247, 0.74)',
          'rgba(244, 245, 247, 0.00)'
        ]}
      >
        <Typography type="B" textColor={customPalettes.gray[950]} fontSize={24}>
          나의 일정과 팀플을 한 곳으로.
        </Typography>
        <Animated.View style={{ opacity: textOpacity }}>
          <Typography type="B" textColor={customPalettes.gray[700]} fontSize={14}>
            콜리에서 효율적인 일정 관리를 해보세요.
          </Typography>
        </Animated.View>
      </AnimatedLinearGradient>
      <View display="flex" flexDirection="row" alignItems="center" justifyContent="center" gap={9}>
        <Animated.View style={leftSideAnimatedStyle}>
          <LeftSide />
        </Animated.View>
        <Animated.View style={rightSideAnimatedStyle}>
          <RightSide />
        </Animated.View>
      </View>
      <AnimatedLinearGradient
        style={{
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: 281,
          zIndex: 10,
          position: 'absolute',
          bottom: 0,
          left: 0,
          opacity: bottomOpacity,
          gap: 20
        }}
        angle={180}
        colors={['rgba(244, 245, 247, 0.00)', 'rgba(244, 245, 247, 0.83)', '#F4F5F7']}
      >
        <Button color="kakao" size="big" handlePress={() => navigation.navigate('Main')}>
          카카오톡으로 시작하기
        </Button>
        <XStack alignItems="center">
          <Typography type="M" textColor={customPalettes.gray[400]} fontSize={14}>
            다른 방법으로 로그인
          </Typography>
          <Separator alignSelf="stretch" vertical marginHorizontal={15} />
          <Typography type="M" textColor={customPalettes.gray[400]} fontSize={14}>
            계정 찾기
          </Typography>
        </XStack>
      </AnimatedLinearGradient>
    </LogInScreenContainer>
  )
}

export default LogInScreen
