import React from 'react'
import { View } from 'tamagui'

import { customPalettes } from '@/theme/customPalettes'
import MainScreenLogo from '@assets/Svgs/COLLI/MainScreenLogo.svg'

import Dots from 'react-native-vector-icons/Entypo'
import Icon from 'react-native-vector-icons/Feather'

export const TopBar = () => {
  return (
    <View
      display="flex"
      flexDirection="row"
      height={44}
      paddingHorizontal={20}
      justifyContent="space-between"
      alignItems="center"
    >
      <Dots name="dots-three-horizontal" size={24} color={customPalettes.gray[700]} />
      <MainScreenLogo />
      <Icon name="bell" size={24} color={customPalettes.gray[700]} />
    </View>
  )
}

TopBar
