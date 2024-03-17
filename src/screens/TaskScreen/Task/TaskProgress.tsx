import { useState } from 'react'
import { Pressable } from 'react-native'
import { View } from 'tamagui'

import BottomSheet, { Option } from '@/components/BottomSheet'
import { Tag } from '@/components/Tags'
import { Typography } from '@/components/Typography'
import { Task } from '@/screens/TaskScreen/Task/Task'
import { customPalettes } from '@/theme/customPalettes'
import useToggle from '@/util/useToggle'
import ThreeDots from '@assets/Svgs/ThreeDots.svg'

type ProgressState = 'todo' | 'inProgress' | 'done'
interface ProgressConfigProps {
  label: string
  state: ProgressState
}
const progressConfig: ProgressConfigProps[] = [
  { label: 'To Do', state: 'todo' },
  { label: 'In Progress', state: 'inProgress' },
  { label: 'Done', state: 'done' }
]
const TaskProgress = () => {
  const [open, setOpen] = useToggle(false)
  const [currentState, setCurrentState] = useState<ProgressConfigProps>({ label: 'To Do', state: 'todo' })
  return (
    <View w="100%">
      <Task.Context onPress={setOpen}>
        <View display="flex" flexDirection="row" gap={12} alignItems="center">
          <Typography type="R" fontSize={14} textColor={customPalettes.gray[700]}>
            진행상태
          </Typography>
          <Tag color="light">{currentState.label}</Tag>
        </View>
        <ThreeDots />
      </Task.Context>
      <BottomSheet isOpen={open} bottomSheetTitle="진행상태" setOpen={setOpen}>
        {progressConfig.map(item => (
          <Option key={item.label}>
            <Option.Text type="R" fontSize={16} textColor={customPalettes.gray[900]}>
              {item.label}
            </Option.Text>
            <Pressable onPress={() => setCurrentState(item)}>
              <Option.Radio checked={item.state === currentState.state} />
            </Pressable>
          </Option>
        ))}
      </BottomSheet>
    </View>
  )
}

export default TaskProgress
