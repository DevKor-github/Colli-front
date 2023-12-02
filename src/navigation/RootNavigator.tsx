import { Main } from '@/screens/MainScreen'
import { SplashScreen } from '@/screens/SplashScreen'
import type { RootStackParamList } from '@/types/routerTypes'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator<RootStackParamList>()

export const RootNavigator = () => {
  const isAuth = false

  const screens = (() => {
    if (!isAuth) {
      return (
        <Stack.Group>
          <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
          <Stack.Screen name="LogIn" component={Main} options={{ headerShown: false }} />
        </Stack.Group>
      )
    } else {
      return <Stack.Screen name="Main" component={Main} options={{ headerShown: false }} />
    }
  })()

  return <Stack.Navigator>{screens}</Stack.Navigator>
}
