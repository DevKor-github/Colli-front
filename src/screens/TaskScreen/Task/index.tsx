import { Avatar, View } from 'tamagui'

import { Tag } from '@/components/Tags'
import { Typography } from '@/components/Typography'
import { Task } from '@/screens/TaskScreen/Task/Task'
import { customPalettes } from '@/theme/customPalettes'
import ThreeDots from '@assets/Svgs/ThreeDots.svg'

const TaskSection = () => {
  return (
    <Task>
      <Task.Title>
        <Typography type="M" fontSize={20} textColor={customPalettes.gray[950]}>
          태스트의 이름이 적히는 곳입니다.
        </Typography>
      </Task.Title>
      <Task.Wrapper>
        <Task.Context>
          <View display="flex" flexDirection="row" gap={12} alignItems="center">
            <Typography type="R" fontSize={14} textColor={customPalettes.gray[700]}>
              카테고리
            </Typography>
            <Tag color="dark">Sprint A</Tag>
          </View>
          <ThreeDots />
        </Task.Context>
        <Task.Context>
          <View display="flex" flexDirection="row" gap={12} alignItems="center">
            <Typography type="R" fontSize={14} textColor={customPalettes.gray[700]}>
              진행상태
            </Typography>
            <Tag color="light">in Progress</Tag>
          </View>
          <ThreeDots />
        </Task.Context>
        <Task.Context>
          <View display="flex" flexDirection="row" gap={12} alignItems="center">
            <View width={52}>
              <Typography type="R" fontSize={14} textColor={customPalettes.gray[700]}>
                담당자
              </Typography>
            </View>
            <View display="flex" flexDirection="row" alignItems="center" gap={4}>
              <Avatar size={32} circular>
                <Avatar.Image src="https://picsum.photos/200/300" />
              </Avatar>
              <Typography type="R" fontSize={14} textColor={customPalettes.gray[700]}>
                차승민
              </Typography>
            </View>
          </View>
          <ThreeDots />
        </Task.Context>
        <Task.Context>
          <View display="flex" flexDirection="row" gap={12} alignItems="center">
            <Typography type="R" fontSize={14} textColor={customPalettes.gray[700]}>
              마감기한
            </Typography>
            <Typography type="R" fontSize={14} textColor={customPalettes.gray[950]}>
              2023년 12월 24일
            </Typography>
          </View>
          <ThreeDots />
        </Task.Context>
        <Task.Context content>
          <View width={52}>
            <Typography type="R" fontSize={14} textColor={customPalettes.gray[700]}>
              설명
            </Typography>
          </View>
          <View display="flex" pr={58} alignItems="center" gap={4} flexGrow={1} flexBasis={0}>
            <Typography type="R" fontSize={14} textColor={customPalettes.gray[950]}>
              자기 계발의 시작:5가지 효과적인 습관 자기 계발의 시작:5가지 효과적인 습관.
            </Typography>
          </View>
        </Task.Context>
      </Task.Wrapper>
    </Task>
  )
}

export default TaskSection
