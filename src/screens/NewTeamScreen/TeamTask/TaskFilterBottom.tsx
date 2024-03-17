import { useEffect, useState } from 'react';
import { Pressable, TextInput } from 'react-native';
import { Sheet, View } from 'tamagui';



import { CheckedButton } from '@/components/Buttons/CheckedButton';
import { Typography } from '@/components/Typography';
import { TEAMTASKS_CATEGORY } from '@/mocks/data/newTeamTask';
import { TEAM_MEMBER } from '@/mocks/data/teamMember';
import { customPalettes } from '@/theme/customPalettes';
import { dark_purple_active_SliderTrackActive } from '@/theme/generated-new';
import type { TaskFilterBottomProps } from '@/types/newKanBanBoard';


const INITIAL_FILTER = '필터'
export const TaskFilterBottom = ({ open, handleClose, onFilterSelect }: TaskFilterBottomProps) => {
  const [position, setPosition] = useState(0)
  const [snapPoint, setSnapPoint] = useState(71)
  const [selectedCategory, setSelectedCategory] = useState<number[]>([])
  const [selectedMember, setSelectedMember] = useState<number[]>([])

  const handleCategory = (index: number) => {
    setSelectedCategory((prevState) => {
      if (prevState.includes(index)) {
        return prevState.filter(i => i !== index)
      }
      return [...prevState, index]
    })
  }

  const handleMember = (index: number) => {
    setSelectedMember((prevState) => {
      if (prevState.includes(index)) {
        return prevState.filter(i=> i!==index)
      }
      return [...prevState, index]
    })
  }

  useEffect(() => {
    onFilterSelect(selectedCategory, selectedMember)
  }, [selectedCategory, selectedMember])
  
  return (
    <Sheet
      modal
      forceRemoveScrollEnabled={open}
      //   dismissOnSnapToBottom
      animation="medium"
      open={open}
      onOpenChange={() => {}}
      snapPoints={[snapPoint]}
      moveOnKeyboardChange
      position={position}
      onPositionChange={setPosition}
    >
      <Sheet.Overlay animation="medium" enterStyle={{ opacity: 0 }} exitStyle={{ opacity: 0 }} />
      <Sheet.Frame flex={1} borderRadius={20}>
        <Sheet.ScrollView backgroundColor="#FFFFFF" showsVerticalScrollIndicator={false}>
          <View
            display="flex"
            paddingVertical={8}
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap={10}
            alignSelf="stretch"
            borderTopLeftRadius={16}
            borderTopRightRadius={16}
          >
            <View w={44} h={4} backgroundColor={customPalettes.gray[200]} />
          </View>
          <View
            display="flex"
            flexDirection="row"
            height={48}
            paddingVertical={8}
            paddingLeft={20}
            paddingRight={24}
            justifyContent="space-between"
            alignItems="center"
            alignSelf="stretch"
          >
            <Typography type="B" fontSize={16} textColor={customPalettes.gray[700]}>
              카테고리
            </Typography>
          </View>
          {['스프린트 A', '스프린트 B', '스프린트 C'].map((category, index) => (
            <View
              key={index}
              display="flex"
              height={48}
              flexDirection="row"
              paddingVertical={8}
              paddingLeft={20}
              paddingRight={24}
              justifyContent="space-between"
              alignItems="center"
              alignSelf="stretch"
            >
              <Typography type="R" fontSize={16} textColor={customPalettes.gray[700]}>
                {category}
              </Typography>
              <CheckedButton
                status={selectedCategory.includes(index)}
                handlePress={() => {
                  handleCategory(index)
                }}
              />
            </View>
          ))}
          <View
            display="flex"
            flexDirection="row"
            height={48}
            paddingVertical={8}
            paddingLeft={20}
            paddingRight={24}
            justifyContent="space-between"
            alignItems="center"
            alignSelf="stretch"
          >
            <Typography type="B" fontSize={16} textColor={customPalettes.gray[700]}>
              담당자
            </Typography>
          </View>
          {TEAM_MEMBER.map((member, index) => (
            <View
              key={index}
              display="flex"
              height={48}
              flexDirection="row"
              paddingVertical={8}
              paddingLeft={20}
              paddingRight={24}
              justifyContent="space-between"
              alignItems="center"
              alignSelf="stretch"
            >
              <Typography type="R" fontSize={16} textColor={customPalettes.gray[700]}>
                {member.name}
              </Typography>
              <CheckedButton
                status={selectedMember.includes(index)}
                handlePress={() => {
                  handleMember(index)
                }}
              />
            </View>
          ))}
          <View
            display="flex"
            height={44}
            justifyContent="center"
            alignItems="center"
            gap={10}
            alignSelf="stretch"
          ></View>
        </Sheet.ScrollView>
      </Sheet.Frame>
    </Sheet>
  )
}