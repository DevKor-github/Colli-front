import { Pressable } from 'react-native'
import { View } from 'tamagui'

import { Typography } from '@/components/Typography'
import { customPalettes } from '@/theme/customPalettes'
import Add from '@assets/Svgs/add.svg'

interface BottomSafeAreaProps {
  actionText: string
  handlePress: () => void
}
export const BottomSafeArea = ({ actionText, handlePress }: BottomSafeAreaProps) => {
  return (
    <View
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      paddingVertical={10}
      paddingHorizontal={20}
    >
      <Pressable
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: 18,
          paddingVertical: 14,
          gap: 8
        }}
        onPress={handlePress}
      >
        <Add color={customPalettes.gray[400]} />
        <Typography type="M" fontSize={16} textColor={customPalettes.gray[400]}>
          {actionText}
        </Typography>
      </Pressable>
    </View>
  )
}
