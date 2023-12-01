import { View, styled } from 'tamagui'

import { customPalettes } from '@/theme/customPalettes'

import { Typography } from '../Typography'

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

export const ProjectAddCircle = ({ children }: { children: React.ReactNode }) => {
  const fontSize = 18
  const type = 'B'
  const textColor = customPalettes.gray[300]
  return (
    <Circle>
      <Typography fontSize={fontSize} type={type} textColor={textColor}>
        {children}
      </Typography>
    </Circle>
  )
}
