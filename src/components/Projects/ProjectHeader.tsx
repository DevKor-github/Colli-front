import type { GetProps } from 'tamagui'
import { View, XStack, styled } from 'tamagui'

import type { CustomProject } from '@/components/Projects/index'
import { customPalettes } from '@/theme/customPalettes'

import { Typography } from '../Typography'

export type ProjectWrapperProps = GetProps<typeof CustomProject>

export const CustomProjectHeader = styled(XStack, {
  gap: 8,
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'hidden',
  width: 147,
  height: 'auto'
  //textOverflow: 'ellipsis',
  //whiteSpace: 'nowrap'
})

const Circle = styled(View, {
  width: 6,
  height: 6,
  borderRadius: 10,
  backgroundColor: customPalettes.blue[500],
  gap: 8
})

export const ProjectHeader = ({ children }: { children: React.ReactNode }) => {
  const fontSize = 16
  const type = 'R'
  const textColor = customPalettes.gray[700]
  return (
    <CustomProjectHeader>
      <Circle />
      <Typography fontSize={fontSize} type={type} textColor={textColor}>
        {children}
      </Typography>
    </CustomProjectHeader>
  )
}
