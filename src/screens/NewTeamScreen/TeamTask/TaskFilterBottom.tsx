import { useEffect, useState } from 'react'
import { Pressable, TextInput } from 'react-native'
import { Sheet, View } from 'tamagui'

import { useGetTaskFilterCategory } from '@/api/hooks/taskFilterCategory'
import { useGetTeamMember } from '@/api/hooks/teamMember'
import { taskFilterCategoryResponse } from '@/api/types/taskFilterCategory'
import { teamMemberResponse } from '@/api/types/teamMember'
import BottomSheet, { Option } from '@/components/BottomSheet'
import { customPalettes } from '@/theme/customPalettes'
import type { TaskFilterBottomProps } from '@/types/newKanBanBoard'
import Bar from '@assets/Svgs/Bar.svg'

export const TaskFilterBottom = ({ open, handleClose, onFilterSelect }: TaskFilterBottomProps) => {
  const resCategory = useGetTaskFilterCategory().data
  const resMember = useGetTeamMember().data
  const [position, setPosition] = useState(0)
  const [snapPoint, setSnapPoint] = useState(60)
  const [selectedCategory, setSelectedCategory] = useState<number[]>([])
  const [selectedMember, setSelectedMember] = useState<number[]>([])

  const handleCategory = (index: number) => {
    setSelectedCategory(prevState => {
      if (prevState.includes(index)) {
        return prevState.filter(i => i !== index)
      }
      return [...prevState, index]
    })
  }

  const handleMember = (index: number) => {
    setSelectedMember(prevState => {
      if (prevState.includes(index)) {
        return prevState.filter(i => i !== index)
      }
      return [...prevState, index]
    })
  }

  useEffect(() => {
    onFilterSelect(selectedCategory, selectedMember)
  }, [selectedCategory, selectedMember, open])

  return (
    <Sheet
      modal
      forceRemoveScrollEnabled={open}
      //   dismissOnSnapToBottom
      animation="medium"
      open={open}
      onOpenChange={handleClose}
      snapPoints={[snapPoint]}
      moveOnKeyboardChange
      position={position}
      onPositionChange={setPosition}
    >
      <Sheet.Overlay animation="medium" enterStyle={{ opacity: 0 }} exitStyle={{ opacity: 0 }} />
      <Sheet.Frame flex={1} borderRadius={20}>
        <Sheet.ScrollView backgroundColor="#FFFFFF" showsVerticalScrollIndicator={false}>
          <View display="flex" py={8} jc="center" ai="center" gap={10} alignSelf="stretch">
            <Bar />
          </View>
          <Option>
            <Option.Text type="B" fontSize={16} textColor={customPalettes.gray[900]}>
              {resCategory?.dataList[0].label}
            </Option.Text>
          </Option>
          {resCategory?.dataList.slice(1).map((item, index) => (
            <Option key={index}>
              <Option.Text type="R" fontSize={16} textColor={customPalettes.gray[900]}>
                {item.label}
              </Option.Text>
              <Pressable onPress={() => handleCategory(index + 1)}>
                <Option.CheckBox checked={selectedCategory.includes(index + 1)} />
              </Pressable>
            </Option>
          ))}
          <Option>
            <Option.Text type="B" fontSize={16} textColor={customPalettes.gray[900]}>
              담당자
            </Option.Text>
          </Option>
          {resMember?.dataList.map((member, index) => (
            <Option key={index}>
              <Option.Text type="R" fontSize={16} textColor={customPalettes.gray[900]}>
                {member.name}
              </Option.Text>
              <Pressable onPress={() => handleMember(index)}>
                <Option.CheckBox checked={selectedMember.includes(index)} />
              </Pressable>
            </Option>
          ))}
        </Sheet.ScrollView>
      </Sheet.Frame>
    </Sheet>
  )
}
