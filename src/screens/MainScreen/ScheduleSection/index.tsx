import { View, YStack } from 'tamagui'

import { SectionIndicator } from '@/components/SectionIndicator'
import { SCHEDULES } from '@/mocks/data/schedule'
import { BottomSafeArea } from '@/screens/MainScreen/BottomSafeArea'
import { Schedule } from '@/screens/MainScreen/ScheduleSection/Schedule'
import { SectionWrapper } from '@/screens/MainScreen/SectionWrapper'

const SECTION_INDICATION = '콜리가 한번에 정리해 드릴게요.'

export const ScheduleSection = () => {
  return (
    <YStack>
      <SectionWrapper>
        <View paddingHorizontal={20} paddingVertical={16}>
          <SectionIndicator text={SECTION_INDICATION} />
        </View>
        {SCHEDULES.map((schedule, index) => (
          <Schedule
            key={index}
            schedule={schedule}
            isStart={index === 0 ? true : false}
            isEnd={index === SCHEDULES.length - 1 ? true : false}
          />
        ))}
      </SectionWrapper>
      <BottomSafeArea actionText="일정 추가" handlePress={() => {}} />
    </YStack>
  )
}
