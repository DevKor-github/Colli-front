import { View } from 'tamagui'

import { Tag } from '@/components/Tags'
import { customPalettes } from '@/theme/customPalettes'
import type { KanBanStatusSectionProps } from '@/types/kanBanBoard'

export const StatusSection = ({ status, handlePress }: KanBanStatusSectionProps) => {
  return (
    <View
      display="flex"
      flexDirection="row"
      paddingHorizontal={20}
      paddingVertical={12}
      alignItems="flex-start"
      gap={8}
      backgroundColor={customPalettes.snow[50]}
    >
      <Tag type="dot" status={status === 'todo'} handlePress={() => handlePress('todo')}>
        예정
      </Tag>
      <Tag type="dot" status={status === 'inProgress'} handlePress={() => handlePress('inProgress')}>
        진행중
      </Tag>
      <Tag type="dot" status={status === 'done'} handlePress={() => handlePress('done')}>
        완료
      </Tag>
    </View>
  )
}
