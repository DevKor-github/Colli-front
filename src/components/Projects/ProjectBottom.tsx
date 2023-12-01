import { Pressable } from 'react-native'
import type { GetProps } from 'tamagui'
import { View, XStack, styled } from 'tamagui'

import type { CustomProject } from '@/components/Projects/index'
import { customPalettes } from '@/theme/customPalettes'

import { Typography } from '../Typography'
import Icon from 'react-native-vector-icons/AntDesign'

export type ProjectWrapperProps = GetProps<typeof CustomProject>

export const CustomProjectBottom = styled(XStack, {
  gap: 8,
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'hidden',
  width: 147,
  height: 'auto',
  pressStyle: {
    opacity: 0.6
  }
})

export const ProjectBottom = ({ children }: { children: React.ReactNode }) => {
  const fontSize = 11
  const type = 'R'
  const textColor = customPalettes.gray[400]
  return (
    <CustomProjectBottom>
      <Typography fontSize={fontSize} type={type} textColor={textColor}>
        {children}
      </Typography>
      <Pressable>
        <Icon name="right" size={10} color={customPalettes.gray[300]} />
      </Pressable>
    </CustomProjectBottom>
  )
}
