import React from 'react'
import { Image } from 'react-native'
import { View } from 'tamagui'

import DotsLine from '@/assets/Svgs/DotsLine.svg'
import { Typography } from '@/components/Typography'
import { customPalettes } from '@/theme/customPalettes'
import type { TeamCardProps } from '@/types/teamCard'
import { useNavigation } from '@react-navigation/native'

export const TeamCard = ({ id, name, teamMember, imgSrc }: TeamCardProps) => {
  const navigation = useNavigation()
  return (
    <View
      display="flex"
      height={97}
      padding={12}
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      alignSelf="stretch"
      backgroundColor={customPalettes.snow[50]}
      borderRadius={16}
    >
      <View display="flex" flexDirection="row" alignItems="center" gap={12} alignSelf="stretch">
        <Image source={imgSrc} style={{ width: 73, height: 73, borderRadius: 8 }} />
        <View display="flex" flexDirection="column" gap={4} alignItems="flex-start" marginRight={12} maxWidth={191}>
          <Typography type="R" fontSize={17} textColor={customPalettes.gray[900]} numberOfLines={1} ellipse>
            {name}
          </Typography>
          <Typography type="R" fontSize={15} textColor={customPalettes.gray[400]}>
            {teamMember}명의 멤버
          </Typography>
        </View>
      </View>

      <DotsLine
        onPress={() => {
          navigation.navigate('NewTeam')
        }}
      />
    </View>
  )
}
