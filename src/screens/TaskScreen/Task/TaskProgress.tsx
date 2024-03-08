import { useState } from 'react'
import { Slider, View } from 'tamagui'

import { Typography } from '@/components/Typography'
import { Task } from '@/screens/TaskScreen/Task/Task'
import { customPalettes } from '@/theme/customPalettes'

const TaskProgress = () => {
  const [progress, setProgress] = useState([50])
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
        >
          <Typography type="R" fontSize={16} textColor={customPalettes.wf[100]}>
            콕 찌르기
          </Typography>
        </View>
      </Task.Context>
      <View
        display="flex"
        paddingHorizontal={20}
        paddingVertical={16}
        alignItems="center"
        gap={13}
        alignSelf="stretch"
      ></View>
    </View>
  )
}

export default TaskProgress
