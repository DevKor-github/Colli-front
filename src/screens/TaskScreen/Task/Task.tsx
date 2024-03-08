import { View, styled, withStaticProperties } from 'tamagui'

export const TaskTitle = styled(View, {
  display: 'flex',
  paddingVertical: 12,
  paddingHorizontal: 16,
  alignItems: 'flex-start',
  gap: 10,
  alignSelf: 'stretch'
})
export const TaskWrapper = styled(View, {
  display: 'flex',
  padding: 16,
  alignItems: 'flex-start',
  gap: 16,
  alignSelf: 'stretch'
})

export const TaskContext = styled(View, {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  alignSelf: 'stretch',
  height: 32,
  justifyContent: 'space-between',
  variants: {
    content: {
      true: {
        alignItems: 'flex-start',
        flexGrow: 1,
        flexBasis: 0,
        gap: 12
      }
    }
  } as const
})
export const Task = withStaticProperties(View, {
  Title: TaskTitle,
  Wrapper: TaskWrapper,
  Context: TaskContext
})
