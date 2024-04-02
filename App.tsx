import { Provider } from 'jotai'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { TamaguiProvider } from 'tamagui'

import { Router } from '@/router'
import config from '@/theme/tamagui.config'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Provider>
          <TamaguiProvider config={config}>
            <Router />
          </TamaguiProvider>
        </Provider>
      </GestureHandlerRootView>
    </QueryClientProvider>
  )
}

export default App
