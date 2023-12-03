import { Stack, styled } from 'tamagui'

import { ProjectAdd } from '@/components/Projects/ProjectAdd'
import { ProjectBottom } from '@/components/Projects/ProjectBottom'
import { ProjectHeader } from '@/components/Projects/ProjectHeader'
import { customPalettes } from '@/theme/customPalettes'
import { type ProjectProps } from '@/types/project'

export const CustomProject = styled(Stack, {
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
  borderRadius: 10,
  width: 171,
  height: 200,
  paddingVertical: 12,
  paddingHorizontal: 12,
  variants: {
    type: {
      default: {
        justifyContent: 'space-between',
        backgroundColor: customPalettes.blue[50]
      },
      add: {
        justifyContent: 'center',
        backgroundColor: customPalettes.gray[100]
      }
    }
  } as const
})

export const Project = ({ type }: ProjectProps) => {
  if (type == 'default') {
    return (
      <CustomProject type={type}>
        <ProjectHeader>최대열글자까지보...</ProjectHeader>
        <ProjectBottom>마지막 업데이트 · 2일 전</ProjectBottom>
      </CustomProject>
    )
  } else {
    return (
      <CustomProject type={type}>
        <ProjectAdd>팀 추가</ProjectAdd>
      </CustomProject>
    )
  }
}
