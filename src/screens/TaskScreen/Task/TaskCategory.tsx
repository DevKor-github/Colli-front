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

const options = ['Sprint A', 'Sprint B', 'Sprint C']
const TaskCategory = () => {
  const [open, setOpen] = useToggle(false)
  const [category, setCategory] = useState<string>('Sprint A')
  return (
    <View w="100%">
      <Task.Context onPress={setOpen}>
        <View display="flex" flexDirection="row" gap={12} alignItems="center">
          <Typography type="R" fontSize={14} textColor={customPalettes.gray[700]}>
            카테고리
          </Typography>
          <Tag color="dark">{category}</Tag>
        </View>
        <ThreeDots />
      </Task.Context>
      <BottomSheet isOpen={open} bottomSheetTitle="카테고리" setOpen={setOpen}>
        {options.map(item => (
          <Option key={item}>
            <Option.Text type="R" fontSize={16} textColor={customPalettes.gray[900]}>
              {item}
            </Option.Text>
            <Pressable onPress={() => setCategory(item)}>
              <Option.Radio checked={category === item} />
            </Pressable>
          </Option>
        ))}
      </BottomSheet>
    </View>
  )
}

export default TaskCategory
