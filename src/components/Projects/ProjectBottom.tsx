import { Pressable } from 'react-native'
import type { GetProps } from 'tamagui'
import { XStack, styled } from 'tamagui'

import type { CustomProject } from '@/components/Projects/index'
import { customPalettes } from '@/theme/customPalettes'
import More from '@assets/Svgs/More.svg'
import { Typography } from '@components/Typography'

export type ProjectWrapperProps = GetProps<typeof CustomProject>

export const CustomProjectBottom = styled(XStack, {
  display: 'flex',
  justifyContent: 'space-between',
  alignSelf: 'stretch',
  alignItems: 'center',
  overflow: 'hidden',
  width: 'auto',
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
        <More />
      </Pressable>
    </CustomProjectBottom>
  )
}
