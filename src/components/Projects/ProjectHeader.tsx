import type { GetProps } from 'tamagui'
import { View, styled } from 'tamagui'

import type { CustomProject } from '@/components/Projects/index'
import { customPalettes } from '@/theme/customPalettes'

import { Typography } from '../Typography'

export type ProjectWrapperProps = GetProps<typeof CustomProject>

export const CustomProjectHeader = styled(View, {
  gap: 8,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  alignSelf: 'stretch',
  maxWidth: 130
  // height: 19
  // width: '100%'
})

const Circle = styled(View, {
  width: 6,
  height: 6,
  borderRadius: 10,
  backgroundColor: customPalettes.blue[500]
})

export const ProjectHeader = ({ children }: { children: React.ReactNode }) => {
  const fontSize = 16
  const type = 'R'
  const textColor = customPalettes.gray[700]
  return (
    <CustomProjectHeader>
      <Circle />
      <Typography fontSize={fontSize} type={type} textColor={textColor} ellipse>
        {children}
      </Typography>
    </CustomProjectHeader>
  )
}
