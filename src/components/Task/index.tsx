import { Pressable } from 'react-native'
import { Stack, View, styled } from 'tamagui'

import { Typography } from '@/components/Typography'
import { customPalettes } from '@/theme/customPalettes'

import Icon from 'react-native-vector-icons/Entypo'

const TaskConatiner = styled(Stack, {
  display: 'flex',
  width: '100%',
  height: 48,
  flexDirection: 'row',
  paddingHorizontal: 20,
  justifyContent: 'space-between',
  alignItems: 'center'
})

const TaskCheckBox = styled(View, {
  width: 12,
  height: 12,
  borderRadius: 12,
  variants: {
    status: {
      true: {
        backgroundColor: customPalettes.blue[500]
      },
      false: {
        borderWidth: 1,
        borderColor: customPalettes.blue[500]
      }
    }
  }
})
export const Task = ({
  checked,
  taskContent,
  handlePress
}: {
  checked: boolean
  taskContent: string
  handlePress: () => void
}) => {
  const taskTextColor = checked ? customPalettes.gray[300] : customPalettes.gray[700]
  const taskTextDecoration = checked ? 'line-through' : 'none'
  return (
    <TaskConatiner>
      <Pressable style={{ display: 'flex', flexDirection: 'row', gap: 20, alignItems: 'center' }} onPress={handlePress}>
        <TaskCheckBox status={checked} />
        <Typography type="M" fontSize={14} textColor={taskTextColor} textDecorationLine={taskTextDecoration}>
          {taskContent}
        </Typography>
      </Pressable>
      <Icon name="dots-three-horizontal" size={15} color={customPalettes.gray[700]} />
    </TaskConatiner>
  )
}

Task
