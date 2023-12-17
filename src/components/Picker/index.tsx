import { useEffect, useState } from 'react'
import { Pressable, ScrollView } from 'react-native'
import Animated, {
  type SharedValue,
  scrollTo,
  useAnimatedRef,
  useDerivedValue,
  useSharedValue
} from 'react-native-reanimated'
import { View } from 'tamagui'

import { Typography } from '@/components/Typography'
import { AMPM, HOURS, MINUTES, MONTHS, getCurrentMonthDate } from '@/constants/picker'
import { customPalettes } from '@/theme/customPalettes'
import type { PickerProps } from '@/types/picker'

const AnimatedScrollView = Animated.createAnimatedComponent(ScrollView)
const Picker = ({ month, date, ampm, hour, minute, handleChange }: PickerProps) => {
  const aref = useAnimatedRef()
  const dref = useAnimatedRef()
  const amref = useAnimatedRef()
  const href = useAnimatedRef()
  const mref = useAnimatedRef()
  const scroll = useSharedValue((month - 1) * 50.5)
  const dayScroll = useSharedValue((date - 1) * 50.5)
  const ampmScroll = useSharedValue((ampm - 1) * 50.5)
  const hourScroll = useSharedValue((hour - 1) * 50.5)
  const minuteScroll = useSharedValue(minute * 50.5)
  const [currentMonth, setCurrentMonth] = useState(month)
  const [days, setDays] = useState(getCurrentMonthDate(currentMonth))
  const handleGenericScrollChange = (target: SharedValue<number>, index: number) => {
    if (target === scroll) setCurrentMonth(index)
    const targetIndex = index - 1
    if (targetIndex < 0) return
    target.value = targetIndex * 50.5
  }
  useDerivedValue(() => {
    scrollTo(aref, 0, scroll.value, true)
    scrollTo(dref, 0, dayScroll.value, true)
    scrollTo(amref, 0, ampmScroll.value, true)
    scrollTo(href, 0, hourScroll.value, true)
    scrollTo(mref, 0, minuteScroll.value, true)
  })
  useEffect(() => {
    setDays(getCurrentMonthDate(currentMonth))
  }, [currentMonth])
  return (
    <View
      mt={24}
      display="flex"
      flexDirection="row"
      alignItems="flex-start"
      height={141}
      backgroundColor={customPalettes.gray[100]}
    >
      <View display="flex" flexDirection="row" paddingHorizontal={37}>
        <AnimatedScrollView
          ref={aref}
          showsVerticalScrollIndicator={false}
          onScrollBeginDrag={e => {
            scroll.value = Math.round(e.nativeEvent.contentOffset.y / 50.5) * 50.5
            handleGenericScrollChange(scroll, Math.round(e.nativeEvent.contentOffset.y / 50.5) + 1)
          }}
          onScrollEndDrag={e => {
            const calculatedValue = Math.round(e.nativeEvent.contentOffset.y / 50.5)
            scroll.value = calculatedValue * 50.5
            handleGenericScrollChange(scroll, calculatedValue + 1)
            handleChange('month', calculatedValue + 1)
          }}
        >
          {MONTHS.map((month, index) => (
            <Pressable
              key={index}
              onPress={() => {
                handleGenericScrollChange(scroll, index)
                handleChange('month', index)
              }}
              style={{ height: 50.5 }}
            >
              <Typography type="R" fontSize={18} textColor={customPalettes.gray[600]}>
                {month}
              </Typography>
            </Pressable>
          ))}
        </AnimatedScrollView>
        <AnimatedScrollView
          showsVerticalScrollIndicator={false}
          ref={dref}
          onScrollEndDrag={e => {
            const calculatedValue = Math.round(e.nativeEvent.contentOffset.y / 50.5)
            dayScroll.value = calculatedValue * 50.5
            handleChange('date', calculatedValue + 1)
          }}
        >
          {['', ...days, ''].map((day, index) => (
            <Pressable
              id="day"
              key={index}
              onPress={() => {
                handleGenericScrollChange(dayScroll, index)
                handleChange('date', index)
              }}
              style={{ height: 50.5 }}
            >
              <Typography type="R" fontSize={18} textColor={customPalettes.gray[600]}>
                {day}
              </Typography>
            </Pressable>
          ))}
        </AnimatedScrollView>
        <AnimatedScrollView
          showsVerticalScrollIndicator={false}
          ref={amref}
          onScrollEndDrag={e => {
            const calculatedValue = Math.round(e.nativeEvent.contentOffset.y / 50.5)
            ampmScroll.value = Math.round(e.nativeEvent.contentOffset.y / 50) * 50.5
            handleChange('ampm', calculatedValue + 1)
          }}
        >
          {AMPM.map((ampm, index) => (
            <Pressable
              key={index}
              onPress={() => {
                handleGenericScrollChange(ampmScroll, index)
                handleChange('ampm', index)
              }}
              style={{ height: 50.5 }}
            >
              <Typography type="R" fontSize={18} textColor={customPalettes.gray[600]}>
                {ampm}
              </Typography>
            </Pressable>
          ))}
        </AnimatedScrollView>
        <AnimatedScrollView
          showsVerticalScrollIndicator={false}
          ref={href}
          onScrollEndDrag={e => {
            const calculatedValue = Math.round(e.nativeEvent.contentOffset.y / 50.5)
            hourScroll.value = Math.round(e.nativeEvent.contentOffset.y / 50.5) * 50.5
            handleChange('hour', calculatedValue + 1)
          }}
        >
          {HOURS.map((hour, index) => (
            <Pressable
              key={index}
              onPress={() => {
                handleGenericScrollChange(hourScroll, index)
                handleChange('hour', index)
              }}
              style={{ height: 50.5 }}
            >
              <Typography type="R" fontSize={18} textColor={customPalettes.gray[600]}>
                {hour}
              </Typography>
            </Pressable>
          ))}
        </AnimatedScrollView>
        <AnimatedScrollView
          showsVerticalScrollIndicator={false}
          ref={mref}
          onScrollEndDrag={e => {
            const calculatedValue = Math.round(e.nativeEvent.contentOffset.y / 50.5)
            minuteScroll.value = Math.round(e.nativeEvent.contentOffset.y / 50.5) * 50.5
            handleChange('minute', calculatedValue + 1)
          }}
        >
          {MINUTES.map((minute, index) => (
            <Pressable
              key={index}
              onPress={() => {
                handleGenericScrollChange(minuteScroll, index)
                handleChange('minute', index - 1)
              }}
              style={{ height: 50.5 }}
            >
              <Typography type="R" fontSize={18} textColor={customPalettes.gray[600]}>
                {minute}
              </Typography>
            </Pressable>
          ))}
        </AnimatedScrollView>
      </View>
      <View
        pointerEvents="none"
        width="100%"
        height={141}
        position="absolute"
        display="flex"
        // backgroundColor={'rgba(244, 245, 247, 0.7)'}
      >
        <View width="100%" height={50.5} backgroundColor={'rgba(244, 245, 247, 0.7)'} />
        <View display="flex" flexDirection="row">
          <View flex={1} height={40} backgroundColor={customPalettes.gray[50]} opacity={0.7} />
          <View
            flex={22}
            height={40}
            backgroundColor={'rgba(237, 238, 241,0)'}
            borderRadius={8}
            // borderWidth={1}
          />
          <View flex={1} height={40} backgroundColor={customPalettes.gray[50]} opacity={0.7} />
        </View>
        <View width="100%" height={50.5} backgroundColor={customPalettes.gray[50]} opacity={0.7} />
      </View>
    </View>
  )
}

export default Picker
