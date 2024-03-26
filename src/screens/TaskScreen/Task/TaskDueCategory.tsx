import { useState } from 'react'
import { View } from 'tamagui'

import BottomSheet from '@/components/BottomSheet'
import Button from '@/components/Button'
import Picker from '@/components/Picker'
import { Typography } from '@/components/Typography'
import { Task } from '@/screens/TaskScreen/Task/Task'
import { customPalettes } from '@/theme/customPalettes'
import useToggle from '@/util/useToggle'
import ThreeDots from '@assets/Svgs/ThreeDots.svg'

const TaskDueCategory = () => {
  const dueDate = new Date()
  const [open, setOpen] = useToggle(false)
  const dueMonth = dueDate.getMonth() + 1
  const dueDay = dueDate.getDate()
  const dueHour24 = dueDate.getHours()
  const dueAMPM = dueHour24 < 12 ? 1 : 2
  const dueHour = dueHour24 <= 12 ? dueHour24 : dueHour24 - 12
  const dueMinute = dueDate.getMinutes()
  const [pickedDate, setPickedDate] = useState({
    month: dueMonth,
    date: dueDay,
    ampm: dueAMPM,
    hour: dueHour,
    minute: dueMinute
  })
  const handleSetNewDueDate = (target: string, value: number) => {
    setPickedDate({ ...pickedDate, [target]: value })
  }
  return (
    <View w="100%">
      <Task.Context onPress={setOpen}>
        <View display="flex" flexDirection="row" gap={12} alignItems="center">
          <Typography type="R" fontSize={14} textColor={customPalettes.gray[700]}>
            마감기한
          </Typography>
          <Typography type="R" fontSize={14} textColor={customPalettes.gray[950]}>
            2023년 12월 24일
          </Typography>
        </View>
        <ThreeDots />
      </Task.Context>
      <BottomSheet isOpen={open} bottomSheetTitle="마감기한" setOpen={setOpen}>
        <Picker
          month={dueMonth}
          date={dueDay}
          ampm={dueAMPM}
          hour={dueHour}
          minute={dueMinute}
          handleChange={handleSetNewDueDate}
        />
        <View display="flex" flexDirection="row" px={20} py={12} gap={8} mt={44}>
          <Button type="gray" handlePress={setOpen}>
            취소
          </Button>
          <Button type="dark" handlePress={setOpen}>
            완료
          </Button>
        </View>
      </BottomSheet>
    </View>
  )
}

export default TaskDueCategory
