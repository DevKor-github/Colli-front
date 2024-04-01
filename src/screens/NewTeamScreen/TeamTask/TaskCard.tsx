import { Pressable } from 'react-native'
import { Avatar, Stack, View, styled } from 'tamagui'

import { Tag } from '@/components/Tags'
import { Paragraph } from '@/components/Typography/Paragraph'
import { Typography } from '@/components/Typography/index'
import type { TaskCardProps } from '@/types/newKanBanBoard'

const TaskContainer = styled(Stack, {
  display: 'flex',
  paddingHorizontal: 12,
  paddingVertical: 16,
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: 28,
  height: 189,
  borderRadius: 8,
  flexGrow: 1,
  flexShrink: 0,
  flexBasis: 0,
  minWidth: 167.5,
  backgroundColor: '#f5f6fd',
  /*backgroundColor: customPalettes.blue[300],*/
  pressStyle: {
    opacity: 0.6
  }
})

export const TaskCard = ({ id, category, title, dueDate, status, assignee, imgSrc }: TaskCardProps) => {
  return (
    <TaskContainer>
      <View display="flex" height={97} flexDirection="column" alignItems="flex-start" gap={12} alignSelf="stretch">
        <Tag color="dark">{category}</Tag>
        <View flexGrow={1} flexShrink={0} flexBasis={0}>
          <Paragraph type="R" fontSize={16} textColor={'rgba(0, 0, 0, 0.6)'} numberOfLines={3} ellipse>
            {title}
          </Paragraph>
        </View>
      </View>
      <View display="flex" justifyContent="space-between" alignItems="center" alignSelf="stretch" flexDirection="row">
        <View display="flex" flexDirection="row" alignItems="center" gap={4} width={73} height={32}>
          <Avatar size={32} circular>
            <Avatar.Image source={imgSrc} />
          </Avatar>
          <Typography type="M" fontSize={12} textColor={'rgba(0, 0, 0, 0.6)'}>
            {assignee}
          </Typography>
        </View>
        <Typography type="R" fontSize={14} textColor={'rgba(0, 0, 0, 0.6)'}>
          {`D-${Math.floor((dueDate.getTime() - Date.now()) / 86400000) + 1}`}
        </Typography>
      </View>
    </TaskContainer>
  )
}
