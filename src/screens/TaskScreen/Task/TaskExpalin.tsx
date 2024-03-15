import { useState } from 'react'
import { TextInput } from 'react-native'
import { View } from 'tamagui'

import { Typography } from '@/components/Typography'
import { Task } from '@/screens/TaskScreen/Task/Task'
import { customPalettes } from '@/theme/customPalettes'

const TaskExplain = () => {
  const [text, setText] = useState<string>('자기 계발의 시작:5가지 효과적인 습관 자기 계발의 시작:5가지 효과적인 습관.')
  return (
    <Task.Context content>
      <View width={52}>
        <Typography type="R" fontSize={14} textColor={customPalettes.gray[700]}>
          설명
        </Typography>
      </View>
      <TextInput
        style={{
          width: '100%',
          height: 34,
          paddingRight: 58,
          alignItems: 'center',
          flexGrow: 1,
          flexBasis: 0,
          paddingTop: 0
        }}
        multiline
        value={text}
        onChangeText={setText}
      />
    </Task.Context>
  )
}

export default TaskExplain
