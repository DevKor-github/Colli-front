import { useEffect, useState } from 'react'
import { Pressable, TextInput } from 'react-native'
import { Sheet, View } from 'tamagui'

import BottomSheet, { Option } from '@/components/BottomSheet'
import { CheckedButton } from '@/components/Buttons/CheckedButton'
import { Typography } from '@/components/Typography'
import { TEAM_MEMBER } from '@/mocks/data/teamMember'
import { customPalettes } from '@/theme/customPalettes'
import type { TaskFilterBottomProps } from '@/types/newKanBanBoard'
import type { SortConfigProps } from '@/types/newKanBanBoard'
import { sortConfig } from '@/types/newKanBanBoard'
import { CategoryConfigProps } from '@/types/newKanBanBoard'
import { categoryConfig } from '@/types/newKanBanBoard'
import Bar from '@assets/Svgs/Bar.svg'

export const TaskFilterBottom = ({ open, handleClose, onFilterSelect }: TaskFilterBottomProps) => {
  const [position, setPosition] = useState(0)
  const [snapPoint, setSnapPoint] = useState(60)
  const [currentSort, setCurrentSort] = useState<SortConfigProps>({ label: '정렬', state: 'sort' })
  const [selectedCategory, setSelectedCategory] = useState<number[]>([])
  const [selectedMember, setSelectedMember] = useState<number[]>([])

  const handleSort = (sort: SortConfigProps) => {
    if (sort.state === currentSort.state) {
      setCurrentSort({ label: '정렬', state: 'sort' })
    } else {
      setCurrentSort(sort)
    }
  }

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
    onFilterSelect(currentSort, selectedCategory, selectedMember)
  }, [currentSort, selectedCategory, selectedMember, open])

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
              {sortConfig[0].label}
            </Option.Text>
          </Option>
          {sortConfig.slice(1).map((item, index) => (
            <Option key={index}>
              <Option.Text type="R" fontSize={16} textColor={customPalettes.gray[900]}>
                {item.label}
              </Option.Text>
              <Pressable onPress={() => handleSort(item)}>
                <Option.Radio checked={item.state === currentSort.state} />
              </Pressable>
            </Option>
          ))}
          <Option>
            <Option.Text type="B" fontSize={16} textColor={customPalettes.gray[900]}>
              {categoryConfig[0].label}
            </Option.Text>
          </Option>
          {categoryConfig.slice(1).map((item, index) => (
            <Option key={index}>
              <Option.Text type="R" fontSize={16} textColor={customPalettes.gray[900]}>
                {item.label}
              </Option.Text>
              <Pressable onPress={() => handleCategory(index)}>
                <Option.CheckBox checked={item.state === currentSort.state} />
              </Pressable>
            </Option>
          ))}
          <Option>
            <Option.Text type="B" fontSize={16} textColor={customPalettes.gray[900]}>
              담당자
            </Option.Text>
          </Option>
          {TEAM_MEMBER.map((member, index) => (
            <Option key={index}>
              <Option.Text type="R" fontSize={16} textColor={customPalettes.gray[900]}>
                {member.name}
              </Option.Text>
              <Pressable onPress={() => handleMember(index)}>
                <Option.CheckBox checked={member.name === currentSort.state} />
              </Pressable>
            </Option>
          ))}
        </Sheet.ScrollView>
      </Sheet.Frame>
    </Sheet>
  )
}
