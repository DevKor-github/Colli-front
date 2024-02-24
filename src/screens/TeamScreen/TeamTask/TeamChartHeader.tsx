import { ScrollView } from 'react-native'
import { View } from 'tamagui'

import { ProgressBar } from '@/components/KanbanBoard/ProgressBar'
import { ProgressButton } from '@/components/KanbanBoard/ProgressButton'
import { StatusSection } from '@/components/KanbanBoard/StatusSection'
import { Typography } from '@/components/Typography'
import { customPalettes } from '@/theme/customPalettes'

export const TeamChartHeader = () => {
  return (
    <View display="flex" flexDirection="column" backgroundColor={customPalettes.snow[50]} mt={8}>
      <View display="flex" paddingHorizontal={20} paddingVertical={16}>
        <Typography type="B" fontSize={17} textColor={customPalettes.gray[700]}>
          Task
        </Typography>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          display: 'flex',
          paddingLeft: 20,
          paddingTop: 4,
          paddingBottom: 8,
          gap: 20,
          alignItems: 'center'
        }}
      >
        <ProgressButton isPressed content="전체" handlePress={() => {}} />
        <ProgressButton isPressed={false} content="기획" handlePress={() => {}} />
        <ProgressButton isPressed={false} content="디자인" handlePress={() => {}} />
        <ProgressButton isPressed={false} content="프론트" handlePress={() => {}} />
        <ProgressButton isPressed={false} content="백엔드" handlePress={() => {}} />
        <ProgressButton isPressed={false} content="발표" handlePress={() => {}} />
      </ScrollView>
      <ProgressBar />
      <StatusSection status="inProgress" />
    </View>
  )
}
