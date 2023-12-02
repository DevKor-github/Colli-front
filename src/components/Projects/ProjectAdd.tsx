import { Pressable } from 'react-native'
import type { GetProps } from 'tamagui'
import { Stack, View, YStack, styled } from 'tamagui'

import { ProjectAddCircle } from '@/components/Projects/ProjectAddCircle'
import type { CustomProject } from '@/components/Projects/index'
import { customPalettes } from '@/theme/customPalettes'

import { Typography } from '../Typography'
import { type ProjectAddProps } from '../constants/project'
import Icon from 'react-native-vector-icons/Foundation'

export type ProjectWrapperProps = GetProps<typeof CustomProject>

export const CustomProjectAdd = styled(YStack, {
  gap: 12,
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
})

export const ProjectAdd = ({ children }: { children: React.ReactNode }) => {
  const fontSize = 14
  const type = 'M'
  const textColor = customPalettes.gray[700]
  const ProjectWrapper = ({ children, handlePress }: ProjectAddProps) => {
    return (
      <CustomProjectAdd>
        <Typography fontSize={fontSize} type={type} textColor={textColor}>
          {children}
        </Typography>
        <Pressable>
          <ProjectAddCircle>
            <Icon name="plus" size={14} color={customPalettes.gray[300]} />
          </ProjectAddCircle>
        </Pressable>
      </CustomProjectAdd>
    )
  }
  return <ProjectWrapper handlePress={() => {}}>{children}</ProjectWrapper>
}
