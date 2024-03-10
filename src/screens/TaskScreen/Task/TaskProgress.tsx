import { useState } from 'react'
import { Slider } from 'react-native-awesome-slider'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { useSharedValue } from 'react-native-reanimated'
import { View } from 'tamagui'

import { Typography } from '@/components/Typography'
import { Task } from '@/screens/TaskScreen/Task/Task'
import { customPalettes } from '@/theme/customPalettes'

const TaskProgress = () => {
  const currentValue = 30
  const progress = useSharedValue(currentValue)
  const [progressText, setProgressText] = useState(currentValue.toString())
  const min = useSharedValue(0)
  const max = useSharedValue(100)
  return (
    <View display="flex" paddingVertical={20} alignItems="flex-start" gap={12} alignSelf="stretch">
      <Task.Context paddingHorizontal={16}>
        <Typography type="B" fontSize={16} textColor={customPalettes.gray[800]}>
          이만큼 했어요!
        </Typography>
        <View
          display="flex"
          height={40}
          paddingVertical={10}
          paddingHorizontal={16}
          justifyContent="center"
          alignItems="center"
          gap={10}
          backgroundColor={'rgba(105, 115, 255, 0.1)'}
          borderRadius={8}
          pressStyle={{ opacity: 0.8 }}
          onPress={() => {}}
        >
          <Typography type="R" fontSize={16} textColor={customPalettes.wf[100]}>
            콕 찌르기
          </Typography>
        </View>
      </Task.Context>
      <GestureHandlerRootView
        style={{
          display: 'flex',
          flexDirection: 'row',
          paddingHorizontal: 20,
          paddingVertical: 16,
          gap: 13,
          alignItems: 'center',
          alignSelf: 'stretch'
        }}
      >
        <Typography type="B" fontSize={22} textColor={customPalettes.wf[100]}>
          {progressText}%
        </Typography>
        <Slider
          onValueChange={value => setProgressText(value.toFixed(0))}
          theme={{
            disableMinTrackTintColor: '#fff',
            maximumTrackTintColor: customPalettes.gray[100],
            minimumTrackTintColor: customPalettes.wf[120],
            cacheTrackTintColor: '#333',
            bubbleBackgroundColor: '#666'
          }}
          renderThumb={() => <View width={32} h={32} br={16} bg={customPalettes.wf[100]} />}
          renderBubble={() => null}
          containerStyle={{ width: '100%', height: 7, borderRadius: 100 }}
          progress={progress}
          minimumValue={min}
          maximumValue={max}
          thumbWidth={32}
        />
      </GestureHandlerRootView>
    </View>
  )
}

export default TaskProgress
