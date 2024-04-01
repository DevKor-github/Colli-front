import { useCallback } from 'react'

import { useNavigation } from '@react-navigation/native'

export const useGoBack = () => {
  const navigation = useNavigation()
  const handleNavigation = useCallback(() => navigation.goBack(), [navigation])
  return [navigation, handleNavigation] as const
}
