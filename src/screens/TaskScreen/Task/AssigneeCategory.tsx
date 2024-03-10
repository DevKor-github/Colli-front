import { useState } from 'react'
import { Pressable } from 'react-native'
import { Avatar, View } from 'tamagui'

import BottomSheet, { Option } from '@/components/BottomSheet'
import { Typography } from '@/components/Typography'
import { TEAM_MEMBER } from '@/mocks/data/teamMember'
import { Task } from '@/screens/TaskScreen/Task/Task'
import { customPalettes } from '@/theme/customPalettes'
import useToggle from '@/util/useToggle'
import ThreeDots from '@assets/Svgs/ThreeDots.svg'

const AssigneeCategory = () => {
  const [open, setOpen] = useToggle(false)
  const [assignee, setAssignee] = useState<string>('차승민')
  return (
    <View w="100%">
      <Task.Context onPress={setOpen}>
        <View display="flex" flexDirection="row" gap={12} alignItems="center">
          <View width={52}>
            <Typography type="R" fontSize={14} textColor={customPalettes.gray[700]}>
              담당자
            </Typography>
          </View>
          <View display="flex" flexDirection="row" alignItems="center" gap={4}>
            <Avatar size={32} circular>
              <Avatar.Image src="https://picsum.photos/200/300" />
            </Avatar>
            <Typography type="R" fontSize={14} textColor={customPalettes.gray[700]}>
              {assignee}
            </Typography>
          </View>
        </View>
        <ThreeDots />
      </Task.Context>
      <BottomSheet isOpen={open} bottomSheetTitle="담당자" setOpen={setOpen}>
        {TEAM_MEMBER.map(member => (
          <Option key={member.id}>
            <Option.Text type="R" fontSize={16} textColor={customPalettes.gray[900]}>
              {member.name}
            </Option.Text>
            <Pressable onPress={() => setAssignee(member.name)}>
              <Option.Radio checked={member.name === assignee} />
            </Pressable>
          </Option>
        ))}
      </BottomSheet>
    </View>
  )
}

export default AssigneeCategory
