import { useEffect, useState } from 'react';
import { Pressable, TextInput } from 'react-native';
import { Sheet, View } from 'tamagui';



import { CheckedButton } from '@/components/Buttons/CheckedButton';
import { Typography } from '@/components/Typography';
import { customPalettes } from '@/theme/customPalettes';
import type { TaskSortBottomProps } from '@/types/newKanBanBoard';

const INITIAL_SORT = '정렬'
export const TaskSortBottom = ({ open, handleClose, onSortSelect }: TaskSortBottomProps) => {
  const [position, setPosition] = useState(0)
  const [snapPoint, setSnapPoint] = useState(40)
  const [selectedCategory, setSelectedCategory] = useState('')

  const handleCategory = (category: string) => {
    if (selectedCategory === category) {
      setSelectedCategory('')
      onSortSelect(INITIAL_SORT)
    } else {
      setSelectedCategory(category)
      onSortSelect(category)
    }
  }

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
              정렬
            </Typography>
          </View>
          {['임박한순으로', '추가된순으로', '카테고리별로', '담당자별로'].map((category, index) => (
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
              {category === selectedCategory ? (
                <CheckedButton status={true} handlePress={() => handleCategory(category)} />
              ) : (
                <CheckedButton status={false} handlePress={() => handleCategory(category)} />
              )}
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