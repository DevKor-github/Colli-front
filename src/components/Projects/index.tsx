import { Pressable } from 'react-native'
import { Stack, View, styled } from 'tamagui'

import { ProjectBottom } from '@/components/Projects/ProjectBottom'
import { ProjectHeader } from '@/components/Projects/ProjectHeader'
import { Typography } from '@/components/Typography'
import { customPalettes } from '@/theme/customPalettes'
import { type ProjectProps } from '@/types/project'

import Icon from 'react-native-vector-icons/Foundation'

export const CustomProject = styled(Stack, {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderRadius: 10,
  width: '48%',
  height: 200,
  padding: 12,
  // borderWidth: 1,
  // flexGrow: 1,
  variants: {
    type: {
      default: {
        backgroundColor: customPalettes.blue[50]
      },
      add: {
        gap: 12,
        justifyContent: 'center',
        backgroundColor: customPalettes.gray[100]
      }
    }
  } as const
})

export const Project = ({ type, handlePress }: ProjectProps) => {
  if (type == 'default') {
    return (
      <CustomProject type={type} onPress={handlePress}>
        <ProjectHeader>뎁코 최고의 학회~~!!!</ProjectHeader>
        <ProjectBottom>마지막 업데이트 · 2일 전</ProjectBottom>
      </CustomProject>
    )
  } else {
    return (
      <CustomProject type={type}>
        <Typography fontSize={14} type="M" textColor={customPalettes.gray[400]}>
          팀 추가
        </Typography>
        <Pressable>
          <View
            width={40}
            height={40}
            borderWidth={1}
            borderRadius={20}
            paddingHorizontal={14}
            paddingVertical={9}
            justifyContent="center"
            alignItems="center"
            borderStyle="dashed"
            backgroundColor={customPalettes.gray[50]}
            borderColor={customPalettes.gray[200]}
            pressStyle={{ opacity: 0.6 }}
          >
            <Icon name="plus" size={14} color={customPalettes.gray[300]} />
          </View>
        </Pressable>
      </CustomProject>
    )
  }
}
