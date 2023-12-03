import { View } from 'tamagui'

import { Button } from '@/components/Buttons'

export const BottomSafeArea = () => {
  return (
    <View
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      paddingVertical={10}
      paddingHorizontal={20}
    >
      <Button color="text" size="mid" handlePress={() => {}}>
        + 태스크 추가하기
      </Button>
    </View>
  )
}
