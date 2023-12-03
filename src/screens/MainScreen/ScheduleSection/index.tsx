import { View } from 'tamagui'

import { SectionIndicator } from '@/components/SectionIndicator'
import { SectionWrapper } from '@/screens/MainScreen/SectionWrapper'

const SECTION_INDICATION = '콜리가 한번에 정리해 드릴게요.'

export const ScheduleSection = () => {
  return (
    <SectionWrapper>
      <View paddingHorizontal={20} paddingVertical={16}>
        <SectionIndicator text={SECTION_INDICATION} />
      </View>
    </SectionWrapper>
  )
}
