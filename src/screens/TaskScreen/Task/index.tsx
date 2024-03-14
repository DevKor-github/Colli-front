import { Typography } from '@/components/Typography'
import { Task } from '@/screens/TaskScreen/Task/Task'
import TaskAssignee from '@/screens/TaskScreen/Task/TaskAssignee'
import TaskCategory from '@/screens/TaskScreen/Task/TaskCategory'
import TaskDueCategory from '@/screens/TaskScreen/Task/TaskDueCategory'
import TaskExplain from '@/screens/TaskScreen/Task/TaskExpalin'
import TaskProgress from '@/screens/TaskScreen/Task/TaskProgress'
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
        <TaskProgress />
        <TaskAssignee />
        <TaskDueCategory />
        <TaskExplain />
      </Task.Wrapper>
    </Task>
  )
}

export default TaskSection
