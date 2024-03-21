import { Provider } from 'jotai'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { TamaguiProvider } from 'tamagui'

import { Router } from '@/router'
import config from '@/theme/tamagui.config'

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider>
        <TamaguiProvider config={config}>
          <Router />
        </TamaguiProvider>
      </Provider>
    </GestureHandlerRootView>
  )
}

export default App
