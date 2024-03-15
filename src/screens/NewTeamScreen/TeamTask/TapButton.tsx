import { Pressable } from 'react-native'
import { View } from 'tamagui'

import { Typography } from '@/components/Typography'
import type { TapButtonProps } from '@/types/newKanBanBoard'

export const TapButton = ({ isPressed, handlePress, content }: TapButtonProps) => {
  return (
    <Pressable
      style={{ width: 92, flexShrink: 0, justifyContent: 'center', alignItems: 'center' }}
      onPress={handlePress}
    >
      <Typography
        type={isPressed ? 'B' : 'R'}
        fontSize={17}
        lineHeight={20}
        textColor={isPressed ? 'rgba(0,0,0,0.6)' : 'rgba(0,0,0,0.3)'}
      >
        {content}
      </Typography>
    </Pressable>
  )
}
