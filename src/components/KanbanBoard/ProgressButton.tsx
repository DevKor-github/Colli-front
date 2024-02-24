import { Pressable } from 'react-native'
import { View } from 'tamagui'

import { Typography } from '@/components/Typography'
import { customPalettes } from '@/theme/customPalettes'
import type { ProgressButtonProps } from '@/types/kanBanBoard'
import KanBanIcon from '@assets/Svgs/KanbanIcon.svg'

export const ProgressButton = ({ isPressed, handlePress, content }: ProgressButtonProps) => {
  return (
    <Pressable
      style={{ display: 'flex', flexDirection: 'row', gap: 4, alignItems: 'center', alignSelf: 'stretch' }}
      onPress={handlePress}
    >
      <KanBanIcon color={isPressed ? customPalettes.gray[800] : customPalettes.gray[300]} />
      <Typography
        type={isPressed ? 'B' : 'R'}
        fontSize={14}
        textColor={isPressed ? customPalettes.gray[800] : customPalettes.gray[300]}
      >
        {content}
      </Typography>
    </Pressable>
  )
}
