import React from 'react'
import { Stack, styled } from 'tamagui'

import { Typography } from '@/components/Typography'
import { customPalettes } from '@/theme/customPalettes'

const DayTagContainer = styled(Stack, {
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  maxHeight: 33,
  paddingVertical: 8,
  paddingHorizontal: 10,
  gap: 10,
  borderRadius: 100,
  backgroundColor: customPalettes.blue[500]
})

const DayTag = ({ children }: { children: React.ReactNode }) => {
  return (
    <DayTagContainer>
      <Typography type="B" fontSize={14} textColor={customPalettes.blue[50]}>
        {children}
      </Typography>
    </DayTagContainer>
  )
}

export default DayTag
