import { Stack, styled } from 'tamagui'

import { ProjectAdd } from '@/components/Projects/ProjectAdd'
import { ProjectMain } from '@/components/Projects/ProjectMain'
import { ProjectSub } from '@/components/Projects/ProjectSub'
import { customPalettes } from '@/theme/customPalettes'

import { Typography } from '../Typography'
import { type ProjectProps } from '../constants/project'

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
        pressStyle: {
          opacity: 0.6
        },
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

export const Project = ({ type, children }: ProjectProps) => {
  if (type == 'default') {
    return (
      <CustomProject type={type}>
        <ProjectMain>최대열글자까지보...</ProjectMain>
        <ProjectSub>마지막 업데이트 · 2일 전</ProjectSub>
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
