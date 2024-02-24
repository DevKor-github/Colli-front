import { useState } from 'react'
import { Pressable } from 'react-native'
import { Avatar, View } from 'tamagui'

import { TaskDetail } from '@/components/KanbanBoard/TaskDetail'
import { Typography } from '@/components/Typography'
import { customPalettes } from '@/theme/customPalettes'
import type { TaskCardProps } from '@/types/kanBanBoard'

export const TaskCard = (props: TaskCardProps) => {
  const dueDate = new Date(props.dueDate)
  const dueMonth = dueDate.getMonth() + 1
  const dueDay = dueDate.getDate()
  const [open, setOpen] = useState(false)
  const handleClose = async () => {
    setOpen(false)
    return true
  }
  return (
    <Pressable
      //   height={191}
      style={({ pressed }) => [
        { opacity: pressed ? 0.8 : 1 },
        {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: 16,
          gap: 20,
          flexGrow: 1,
          borderRadius: 8,
          backgroundColor: customPalettes.snow[50],
          maxWidth: 171
        }
      ]}
      onPress={() => setOpen(true)}
    >
      <View display="flex" flexDirection="row" justifyContent="space-between" alignItems="center" alignSelf="stretch">
        <View
          width={28}
          height={28}
          borderRadius={100}
          borderWidth={props.status === 'todo' ? 1.5 : 2.5}
          borderColor={customPalettes.blue[400]}
          opacity={props.status !== 'done' ? 0.7 : 1}
          borderStyle={props.status === 'todo' ? 'dashed' : 'solid'}
          backgroundColor={props.status === 'done' ? customPalettes.blue[400] : customPalettes.snow[50]}
        />
        <View
          display="flex"
          paddingHorizontal={8}
          paddingVertical={7}
          alignItems="center"
          justifyContent="center"
          gap={4}
          borderRadius={4}
          backgroundColor={customPalettes.blue[50]}
        >
          <Typography type="M" fontSize={12} textColor={customPalettes.blue[400]}>
            {props.category}
          </Typography>
        </View>
      </View>
      <View alignSelf="stretch">
        <Typography
          type="M"
          fontSize={16}
          textColor={props.status === 'done' ? customPalettes.gray[300] : customPalettes.gray[800]}
          textDecorationLine={props.status === 'done' ? 'line-through' : 'none'}
        >
          {props.title}
        </Typography>
      </View>
      <View display="flex" alignItems="center" gap={4} alignSelf="stretch" flexDirection="row">
        <Typography
          type="M"
          fontSize={12}
          textColor={customPalettes.gray[300]}
          textDecorationLine={props.status === 'done' ? 'line-through' : 'none'}
        >
          {`${dueMonth}월 ${dueDay}일까지 · D-${Math.floor((dueDate.getTime() - Date.now()) / 86400000) + 1}`}
        </Typography>
      </View>
      <View display="flex" flexDirection="row" alignItems="center" gap={8} alignSelf="stretch">
        <Avatar circular size="$1.5" backgroundColor={customPalettes.blue[400]}>
          <Avatar.Image source={{ uri: 'https://picsum.photos/id/237/3500/2095' }} />
        </Avatar>
        <Typography type="M" fontSize={12} textColor={customPalettes.gray[400]}>
          {props.assignee}
        </Typography>
      </View>
      <TaskDetail
        id={props.id}
        title={props.title}
        assignee={props.assignee}
        open={open}
        handleClose={handleClose}
        category={props.category}
        status={props.status}
        dueDate={props.dueDate}
        reminderDate={props.reminderDate}
        notes={props.notes}
      />
    </Pressable>
  )
}
