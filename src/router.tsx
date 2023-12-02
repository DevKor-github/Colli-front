import { SafeAreaProvider } from 'react-native-safe-area-context'

import linking from '@/navigation/LinkingConfig'
import { RootNavigator } from '@/navigation/RootNavigator'
import { NavigationContainer } from '@react-navigation/native'

export const Router = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer linking={linking}>
        <RootNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  )
}
