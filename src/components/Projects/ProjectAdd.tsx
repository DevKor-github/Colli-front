import type { GetProps } from 'tamagui'
import { Stack, View, YStack, styled } from 'tamagui'

import type { CustomProject } from '@/components/Projects/index'
import { customPalettes } from '@/theme/customPalettes'

import { Typography } from '../Typography'
import { type ProjectAddProps } from '../constants/project'
import Icon from 'react-native-vector-icons/AntDesign'

export type ProjectWrapperProps = GetProps<typeof CustomProject>

export const CustomProjectAdd = styled(YStack, {
  gap: 12,
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
})

const Circle = styled(View, {
  width: 40,
  height: 40,
  borderRadius: 20,
  paddingTop: 9,
  paddingHorizontal: 14,
  paddingBottom: 10,
  backgroundColor: customPalettes.gray[50],
  borderColor: customPalettes.gray[200],
  borderStyle: 'dashed',
  borderWidth: 1,
  pressStyle: {
    opacity: 0.6
  }
})

const AddCircle = ({ children }: { children: React.ReactNode }) => {
  const fontSize = 18
  const type = 'B'
  const textColor = customPalettes.gray[300]
  const CircleWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
      <Circle>
        <Typography fontSize={fontSize} type={type} textColor={textColor}>
          {children}
        </Typography>
      </Circle>
    )
  }
  return <CircleWrapper>{children}</CircleWrapper>
}

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
        <AddCircle onPress={handlePress}>+</AddCircle>
      </CustomProjectAdd>
    )
  }
  return <ProjectWrapper handlePress={() => {}}>{children}</ProjectWrapper>
}
