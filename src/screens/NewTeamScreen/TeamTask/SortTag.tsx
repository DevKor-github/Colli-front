import { useEffect, useState } from 'react'
import { Pressable } from 'react-native'
import { View } from 'tamagui'

import BottomSheet, { Option } from '@/components/BottomSheet'
import FilterTag from '@/components/Tags/FilterTag'
import { customPalettes } from '@/theme/customPalettes'
import type { SortConfigProps } from '@/types/newKanBanBoard'
import { sortConfig } from '@/types/newKanBanBoard'

export const SortTag = () => {
  const [sortOpen, setSortOpen] = useState(false)
  const [currentSort, setCurrentSort] = useState<SortConfigProps>({ label: '정렬', state: 'sort' }) //sort태그 선택

  const [isSorted, setIsSorted] = useState(false)

  useEffect(() => {
    const sorted = sortOpen
    setIsSorted(sorted)
  }, [sortOpen, currentSort])
  return (
    <View>
      <FilterTag
        tagType="text"
        isPressed={isSorted}
        handlePress={() => {
          setIsSorted(true)
          setSortOpen(prev => !prev)
        }}
      >
        {currentSort.label}
      </FilterTag>
      <BottomSheet isOpen={sortOpen} bottomSheetTitle="정렬" setOpen={setSortOpen}>
        {sortConfig.slice(1).map(item => (
          <Option key={item.label}>
            <Option.Text type="R" fontSize={16} textColor={customPalettes.gray[900]}>
              {item.label}
            </Option.Text>
            <Pressable
              onPress={() => {
                if (item.state === currentSort.state) {
                  setCurrentSort({ label: '정렬', state: 'sort' })
                } else {
                  setCurrentSort(item)
                }
              }}
            >
              <Option.CheckBox checked={item.state !== currentSort.state} />
            </Pressable>
          </Option>
        ))}
      </BottomSheet>
    </View>
  )
}
