import { View } from 'tamagui'

import BottomSheet, { Option } from '@/components/BottomSheet'
import { Tag } from '@/components/Tags'
import { Typography } from '@/components/Typography'
import { Task } from '@/screens/TaskScreen/Task/Task'
import { customPalettes } from '@/theme/customPalettes'
import useToggle from '@/util/useToggle'
import ThreeDots from '@assets/Svgs/ThreeDots.svg'

const TaskCategory = () => {
  const [open, setOpen] = useToggle(false)
  return (
    <View w="100%">
      <Task.Context onPress={setOpen}>
        <View display="flex" flexDirection="row" gap={12} alignItems="center">
          <Typography type="R" fontSize={14} textColor={customPalettes.gray[700]}>
            카테고리
          </Typography>
          <Tag color="dark">Sprint A</Tag>
        </View>
        <ThreeDots />
      </Task.Context>
      <BottomSheet isOpen={open} bottomSheetTitle="카테고리" setOpen={setOpen}>
        {Array.from({ length: 3 }).map((_, index) => (
          <Option key={index}>
            <Option.Text type="R" fontSize={16} textColor={customPalettes.gray[900]}>
              스프린트 A
            </Option.Text>
            <Option.Radio checked />
          </Option>
        ))}
      </BottomSheet>
    </View>
  )
}

export default TaskCategory
