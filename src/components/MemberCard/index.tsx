import React from 'react'
import { Image } from 'react-native'
import { Avatar, View } from 'tamagui'

import { Typography } from '@/components/Typography'
import { customPalettes } from '@/theme/customPalettes'
import type { MemberCardProps } from '@/types/memberCard'

export const MemberCard = ({ id, name, department, email, division, imgSrc }: MemberCardProps) => {
  return (
    <View
      display="flex"
      flexDirection="row"
      paddingHorizontal={20}
      paddingVertical={16}
      justifyContent="space-between"
      alignItems="center"
      backgroundColor={customPalettes.snow[50]}
    >
      <View display="flex" flexDirection="row" alignItems="center" gap={16}>
        <Avatar size={48} circular>
          <Avatar.Image source={imgSrc} />
        </Avatar>
        <View display="flex" flexDirection="column" gap={4} alignItems="flex-start">
          <Typography type="M" fontSize={17} textColor={customPalettes.gray[900]}>
            {name}
          </Typography>
          <Typography type="R" fontSize={12} textColor={customPalettes.gray[400]}>
            {department}
          </Typography>
          <Typography type="R" fontSize={12} textColor={customPalettes.gray[400]}>
            {email}
          </Typography>
        </View>
      </View>
      <View
        display="flex"
        paddingHorizontal={14}
        paddingVertical={10}
        justifyContent="center"
        alignItems="center"
        gap={10}
        borderRadius={8}
        backgroundColor={customPalettes.blue[50]}
      >
        <Typography type="B" fontSize={12} textColor={customPalettes.blue[500]}>
          {division}
        </Typography>
      </View>
    </View>
  )
}
