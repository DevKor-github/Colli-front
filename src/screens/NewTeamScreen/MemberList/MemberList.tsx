import { Avatar, View } from 'tamagui'

import type { teamMember } from '@/api/types/teamMember'

const MemberList = ({ imgSrc }: teamMember) => {
  return (
    <Avatar size={64} circular>
      <Avatar.Image source={imgSrc} />
    </Avatar>
  )
}

export default MemberList
