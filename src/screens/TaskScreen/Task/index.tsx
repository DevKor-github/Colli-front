import { View } from 'tamagui'

import { Typography } from '@/components/Typography'
import AssigneeCategory from '@/screens/TaskScreen/Task/AssigneeCategory'
import ProgressCategory from '@/screens/TaskScreen/Task/ProgressCategory'
import { Task } from '@/screens/TaskScreen/Task/Task'
import TaskCategory from '@/screens/TaskScreen/Task/TaskCategory'
import TaskDueCategory from '@/screens/TaskScreen/Task/TaskDueCategory'
import { customPalettes } from '@/theme/customPalettes'

const TaskSection = () => {
  return (
    <Task>
      <Task.Title>
        <Typography type="M" fontSize={20} textColor={customPalettes.gray[950]}>
          태스트의 이름이 적히는 곳입니다.
        </Typography>
      </Task.Title>
      <Task.Wrapper>
        <TaskCategory />
        <ProgressCategory />
        <AssigneeCategory />
        <TaskDueCategory />
        <Task.Context content>
          <View width={52}>
            <Typography type="R" fontSize={14} textColor={customPalettes.gray[700]}>
              설명
            </Typography>
          </View>
          <View display="flex" pr={58} alignItems="center" gap={4} flexGrow={1} flexBasis={0}>
            <Typography type="R" fontSize={14} textColor={customPalettes.gray[950]}>
              자기 계발의 시작:5가지 효과적인 습관 자기 계발의 시작:5가지 효과적인 습관.
            </Typography>
          </View>
        </Task.Context>
      </Task.Wrapper>
    </Task>
  )
}

export default TaskSection
