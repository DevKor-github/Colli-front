import React from 'react'
import { View } from 'tamagui'

import { Typography } from '@/components/Typography'
import { customPalettes } from '@/theme/customPalettes'

interface BoardHeaderProps {
  headerContent: string
}
const BoardHeader = ({ headerContent }: BoardHeaderProps) => {
  return (
    <View alignSelf="stretch" opacity={0.7}>
      <Typography type="R" fontSize={12} textColor={customPalettes.wf[100]}>
        {headerContent}
      </Typography>
    </View>
  )
}

export default BoardHeader
