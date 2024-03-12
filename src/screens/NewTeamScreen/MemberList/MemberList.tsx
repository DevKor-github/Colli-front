import { Avatar, View } from 'tamagui'

import { Typography } from '@/components/Typography'
import { customPalettes } from '@/theme/customPalettes'
import type { MemberCardProps } from '@/types/memberCard'

const MemberList = ({ imgSrc }: MemberCardProps) => {
  return (
    <Avatar size={64} circular>
      <Avatar.Image source={imgSrc} />
    </Avatar>
  )
}

export default MemberList
