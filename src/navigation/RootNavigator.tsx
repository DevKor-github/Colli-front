import LandingScreen from '@/screens/LandingScreen';
import LogInScreen from '@/screens/LogInScreen';
import { Main } from '@/screens/MainScreen';
import NewTeamScreen from '@/screens/NewTeamScreen';
import { SplashScreen } from '@/screens/SplashScreen';
import { TeamMemberScreen } from '@/screens/TeamMemberScreen';
import { TeamScreen } from '@/screens/TeamScreen';
import type { RootStackParamList } from '@/types/routerTypes';
import { createNativeStackNavigator } from '@react-navigation/native-stack'


const Stack = createNativeStackNavigator<RootStackParamList>()

export const RootNavigator = () => {
  const isAuth = true

  const screens = (() => {
    if (!isAuth) {
      return (
        <Stack.Group>
          <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
          <Stack.Screen name="LogIn" component={LogInScreen} options={{ headerShown: false, animation: 'fade' }} />
          <Stack.Screen name="Main" component={Main} options={{ headerShown: false, animation: 'fade' }} />
          <Stack.Screen name="NewTeam" component={NewTeamScreen} options={{ headerShown: false, animation: 'fade' }} />
          {/* <Stack.Screen name="Landing" component={LandingScreen} options={{ headerShown: false, animation: 'fade' }} /> */}
          <Stack.Screen name="Team" component={TeamScreen} options={{ headerShown: false, animation: 'fade' }} />
          <Stack.Screen name="TeamMember" component={TeamMemberScreen} options={{ headerShown: false }} />
        </Stack.Group>
      )
    } else {
      return (
        <Stack.Group>
          <Stack.Screen name="Main" component={LandingScreen} options={{ headerShown: false }} />
          <Stack.Screen name="NewTeam" component={NewTeamScreen} options={{ headerShown: false, animation: 'fade' }} />
          <Stack.Screen name="Team" component={TeamScreen} options={{ headerShown: false }} />
          <Stack.Screen name="TeamMember" component={TeamMemberScreen} options={{ headerShown: false }} />
        </Stack.Group>
      )
    }
  })()

  return <Stack.Navigator>{screens}</Stack.Navigator>
}