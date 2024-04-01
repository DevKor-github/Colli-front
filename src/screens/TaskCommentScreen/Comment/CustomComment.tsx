import type { ImageSourcePropType } from 'react-native'
import { Avatar } from 'tamagui'

import { Typography } from '@/components/Typography'
import { CustomComment } from '@/screens/TaskCommentScreen/Comment'
import { customPalettes } from '@/theme/customPalettes'

interface CommentProps {
  avatar: ImageSourcePropType
  name: string
  date: string
  children: React.ReactNode
}
const Comment = ({ avatar, name, date, children }: CommentProps) => {
  return (
    <CustomComment.CommentWrapper>
      <Avatar circular w={44} h={44}>
        <Avatar.Image source={avatar} />
      </Avatar>
      <CustomComment.Content>
        <CustomComment.Info>
          <Typography type="M" fontSize={16} textColor={customPalettes.gray[950]}>
            {name}
          </Typography>
          <Typography type="R" fontSize={14} textColor={customPalettes.gray[400]}>
            {date}
          </Typography>
        </CustomComment.Info>
        <Typography type="R" fontSize={16} textColor={customPalettes.gray[950]} alignSelf="stretch">
          {children}
        </Typography>
      </CustomComment.Content>
    </CustomComment.CommentWrapper>
  )
}

export default Comment
