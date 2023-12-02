import type { RootStackParamList } from '@/types/routerTypes'
import type { LinkingOptions } from '@react-navigation/native'

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: ['/'],
  config: {
    screens: {
      Splash: 'splash',
      Main: 'main',
      LogIn: 'login'
    }
  }
}

export default linking
